// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract tenda {
    string public name;
    address public owner;

    event Initialized(string name, address owner);

    constructor() {
        owner = msg.sender;
    }

    function initialize() public {
        require(bytes(name).length == 0, "Contract is already initialized");
        name = "Tenda Contract";
        owner = msg.sender;
        emit Initialized(name, owner);
    }
}
