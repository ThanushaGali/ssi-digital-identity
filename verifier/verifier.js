const { verifyMessage, JsonRpcProvider, Contract } = require("ethers");
const fs = require("fs");

// ===== LOAD CREDENTIAL BUNDLE =====
const bundle = JSON.parse(
  fs.readFileSync("credential-bundle.json", "utf-8")
);

const { credential, signature, credentialHash } = bundle;

// ===== BLOCKCHAIN SETUP =====
const provider = new JsonRpcProvider("http://127.0.0.1:7545");

const REVOCATION_CONTRACT_ADDRESS = "0x8a450939FC016c26F61218F27d380B7A87Cb5074";

const revocationABI = [
  "function isRevoked(bytes32 credentialHash) view returns (bool)"
];

const revocationContract = new Contract(
  REVOCATION_CONTRACT_ADDRESS,
  revocationABI,
  provider
);

// ===== VERIFIER LOGIC =====
async function verifyCredential() {
  console.log("🔍 Verifying credential...");

  // 1️⃣ Verify issuer signature
  const recoveredIssuer = verifyMessage(
    JSON.stringify(credential),
    signature
  );

  const issuerFromCredential =
    credential.issuer.replace("did:ethr:", "").toLowerCase();

  if (recoveredIssuer.toLowerCase() !== issuerFromCredential) {
    console.log("❌ Invalid issuer signature");
    return;
  }

  console.log("✅ Issuer signature valid");

  // 2️⃣ Check revocation registry (ON-CHAIN)
  const revoked = await revocationContract.isRevoked(credentialHash);

  if (revoked) {
    console.log("❌ Credential has been revoked");
    return;
  }

  console.log("✅ Credential is NOT revoked");
  console.log("🎉 VERIFICATION SUCCESSFUL");
}

// Run verifier
verifyCredential();
