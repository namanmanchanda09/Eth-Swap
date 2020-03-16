pragma solidity >=0.4.21 <0.7.0;


contract DappToken{
    uint256 public totalSupply; //Total Supply of Tokens
    mapping(address=>uint256) public balanceOf; //Mapping of Tokens and Token holders addresses

    //Constructor to initialise the Initial Supply of Tokens
    constructor(uint256 _initialSupply) public{
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }
}





