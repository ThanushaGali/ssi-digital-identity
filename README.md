## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/ThanushaGali/ssi-digital-identity.git
cd ssi-digital-identity
```

---

## 🖥 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## ⛓ Blockchain Setup (Ganache + MetaMask)

This project uses:

- Ganache (Local Ethereum Blockchain)
- MetaMask (Wallet Integration)
- Solidity Smart Contracts

### Step 1: Start Ganache
- Open Ganache
- Create a new workspace
- Note down:
  - RPC URL (usually http://127.0.0.1:7545)
  - Network ID
  - Test accounts

### Step 2: Connect MetaMask to Ganache
- Add a new custom network in MetaMask:
  - RPC URL: http://127.0.0.1:7545
  - Chain ID: 1337 (or shown in Ganache)
- Import a Ganache account using its private key

### Step 3: Deploy Smart Contract
- Compile and deploy contract using Remix IDE
- Connect Remix to:
  - Injected Provider - MetaMask
- Deploy to Ganache network
- Copy deployed contract address

### Step 4: Connect Frontend
- Add contract address & ABI inside frontend
- Interact using ethers.js or web3.js
