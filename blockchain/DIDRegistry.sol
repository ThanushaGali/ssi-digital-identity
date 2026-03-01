// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DIDRegistry {

    struct DIDDocument {
        address owner;
        string publicKey;
    }

    mapping(string => DIDDocument) private dids;

    event DIDRegistered(string did, address owner);
    event DIDUpdated(string did, string newPublicKey);

    function registerDID(string memory did, string memory publicKey) public {
        require(dids[did].owner == address(0), "DID already exists");

        dids[did] = DIDDocument({
            owner: msg.sender,
            publicKey: publicKey
        });

        emit DIDRegistered(did, msg.sender);
    }

    function getPublicKey(string memory did) public view returns (string memory) {
        require(dids[did].owner != address(0), "DID not found");
        return dids[did].publicKey;
    }

    function updatePublicKey(string memory did, string memory newPublicKey) public {
        require(dids[did].owner == msg.sender, "Not DID owner");
        dids[did].publicKey = newPublicKey;

        emit DIDUpdated(did, newPublicKey);
    }
}
