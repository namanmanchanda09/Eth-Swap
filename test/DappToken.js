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
        it('sets the total supply after deployment',async()=>{
            const totalSupply = await dappToken.totalSupply()
            assert.equal(totalSupply.toNumber(),1000000);
        })
        it('admin balance is equal to 1000000',async()=>{
            const adminBalance = await dappToken.balanceOf(accounts[0]);
            assert.equal(adminBalance.toNumber(),1000000)
        })
        
    })
})


