// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RevocationRegistry {

    mapping(bytes32 => bool) private revoked;

    event CredentialRevoked(bytes32 credentialHash);

    function revokeCredential(bytes32 credentialHash) public {
        revoked[credentialHash] = true;
        emit CredentialRevoked(credentialHash);
    }

    function isRevoked(bytes32 credentialHash) public view returns (bool) {
        return revoked[credentialHash];
    }
}
