const { verifyMessage } = require("ethers");
const fs = require("fs");

// ===== LOAD CREDENTIAL BUNDLE =====
const bundle = JSON.parse(
  fs.readFileSync("credential-bundle.json", "utf-8")
);

const { credential, signature } = bundle;

// ===== WALLET LOGIC =====
function verifyIssuerSignature(credential, signature) {
  const recoveredAddress = verifyMessage(
    JSON.stringify(credential),
    signature
  );
  return recoveredAddress;
}

// Demo run
const issuerAddress = verifyIssuerSignature(credential, signature);

console.log("Recovered issuer address:", issuerAddress);
console.log("Credential issuer DID:", credential.issuer);
