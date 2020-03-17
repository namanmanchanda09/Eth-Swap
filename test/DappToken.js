const DappToken = artifacts.require('./DappToken.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('DappToken',(accounts)=>{
    let dappToken;
    before(async()=>{
        dappToken = await DappToken.deployed();
    })

    describe('deployment',async()=>{

        //Checking the name of the Token
        it('initialises the contract with correct values',async()=>{
            const name = await dappToken.name();
            assert.equal(name,'DAppToken')
        })

        //Checking the symbol of the Token
        it('initialises the contract with correct values',async()=>{
            const symbol = await dappToken.symbol();
            assert.equal(symbol,'DAPP')
        })

        //Checking the standard of the Token ~ not a part of ERC20 Token
        it('initialises the contract with correct values',async()=>{
            const standard = await dappToken.standard();
            assert.equal(standard,'DApp Token v1.0')
        })

        //Checking the total Supply of Tokens
        it('allocates the total supply after deployment',async()=>{
            const totalSupply = await dappToken.totalSupply()
            assert.equal(totalSupply.toNumber(),1000000);
        })

        //Checking the initial Admin Balance
        it('admin balance is equal to 1000000',async()=>{
            const adminBalance = await dappToken.balanceOf(accounts[0]);
            assert.equal(adminBalance.toNumber(),1000000)
        })

        //Checking if the msg.sender contains more tokens than he is transferring
        it('transfers token ownership',async()=>{
            await dappToken.transfer.call(accounts[1],999999999999).should.be.rejected;
        })
    })
})

