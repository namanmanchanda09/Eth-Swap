pragma solidity >=0.4.21 <0.7.0;


contract DappToken{
    string public name = 'DAppToken'; //Token Name
    string public symbol = 'DAPP'; //Token Symbol
    string public standard = 'DApp Token v1.0'; //Token Symbol ~ Not a ERC20 Standard
    uint256 public totalSupply; //Total Supply of Tokens
    mapping(address=>uint256) public balanceOf; //Mapping of Tokens and Token holders addresses

    //Constructor to initialise the Initial Supply of Tokens
    constructor(uint256 _initialSupply) public{
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    function transfer(address _to, uint256 _value) public view returns(bool success){
        require(balanceOf[msg.sender] >= _value,'Total Supply must always be greater');
        return true;


    }
}






