pragma solidity >=0.4.21 <0.7.0;

contract DappToken{

    uint256 public totalSupply;
    mapping(address=>uint256) public balanceOf;

    constructor(uint256 _initialSupply) public{
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }
}




