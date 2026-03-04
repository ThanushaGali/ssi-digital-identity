🔐 SSI Digital Identity – Blockchain Based Self-Sovereign Identity System

SSI Digital Identity is a decentralized identity management platform built on blockchain technology.
It enables users to own, manage, and share verifiable credentials securely without relying on centralized authorities.

The system ensures privacy, tamper-proof verification, and selective disclosure across identity verification workflows.

Project Report
https://drive.google.com/file/d/1MIty6VtpJQiiHKRHdxRiluDM0po7PMNc/view?usp=drivesdk

Project Demo(Video)
https://drive.google.com/file/d/14ty0T4aFj59l5GBcfcnC_0ttHOa3qR2y/view?usp=drivesdk

🔄 How It Works

1. User creates a DID (Decentralized Identifier)
2. Issuer verifies identity and signs a credential
3. Credential is stored in user wallet (off-chain)
4. Credential hash is stored on blockchain
5. Verifier validates:
   - Digital signature
   - Public key from DID registry
   - Revocation status

🚀 Key Features

- Decentralized Identifier (DID) implementation

- Verifiable Credential issuance

- Blockchain-based credential hash storage

- Revocation registry on-chain

- Digital signature verification

- Selective disclosure (Prove attribute without revealing full data)

- MetaMask wallet integration

- Transparent and tamper-proof verification

🛠️ Tech Stack

- Blockchain: Ethereum (Ganache – Local Blockchain)

- Smart Contracts: Solidity

- Deployment Tool: Remix IDE

- Wallet Integration: MetaMask

- Frontend: React + Vite + TypeScript

- Cryptography: Public-Private Key Signatures

Storage Model:
- On-chain → DID registry, credential hash, revocation status

- Off-chain → Verifiable credentials (wallet storage)

🔄 System Architecture Overview

-Identity Holder – Controls wallet and credentials

-Issuer – Issues digitally signed credentials

- Verifier – Validates credential authenticity

- Blockchain Layer – Stores public keys, credential hashes, revocation registry




