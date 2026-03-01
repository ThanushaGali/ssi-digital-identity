const { Wallet, keccak256, toUtf8Bytes } = require("ethers");

// ⚠️ For learning only (later we secure this)
const ISSUER_PRIVATE_KEY =
  "0x59c6995e998f97a5a0044976f2e1c5d3c7c7b9f6b3c9c9c9c9c9c9c9c9c9c9c9";

const issuerWallet = new Wallet(ISSUER_PRIVATE_KEY);

// Step 1: Create credential
function issueCredential(subjectDID) {
  const credential = {
    issuer: `did:ethr:${issuerWallet.address}`,
    subject: subjectDID,
    claim: {
      age: 21
    },
    issuedAt: Date.now()
  };

  return credential;
}

// Step 2: Sign credential
async function signCredential(credential) {
  const credentialString = JSON.stringify(credential);
  const signature = await issuerWallet.signMessage(credentialString);
  return signature;
}

// Step 3: Hash credential (for revocation)
function hashCredential(credential) {
  const credentialString = JSON.stringify(credential);
  return keccak256(toUtf8Bytes(credentialString));
}

// Demo run
const fs = require("fs");

(async () => {
  const userDID = "did:ethr:0xabc123";

  const credential = issueCredential(userDID);
  const signature = await signCredential(credential);
  const credentialHash = hashCredential(credential);

  const bundle = {
    credential,
    signature,
    credentialHash
  };

  fs.writeFileSync(
    "credential-bundle.json",
    JSON.stringify(bundle, null, 2)
  );

  console.log("✅ Credential bundle saved to credential-bundle.json");
})();
