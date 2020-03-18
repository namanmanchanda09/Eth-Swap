pragma solidity >=0.4.21 <0.6.0;
import './Token.sol';

contract EthSwap {
    string public name = "EthSwap Instant Exchange";
    Token public token;

    constructor(Token _token) public {
        token = _token;
    }
}




