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
        
    })
})


