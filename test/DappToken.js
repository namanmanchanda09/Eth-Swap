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

        //Checking the state variables
        it('initialises the contract with correct values',async()=>{
            const name = await dappToken.name();
            assert.equal(name,'DAppToken')
            const symbol = await dappToken.symbol();
            assert.equal(symbol,'DAPP')
            const standard = await dappToken.standard();
            assert.equal(standard,'DApp Token v1.0')
            const totalSupply = await dappToken.totalSupply()
            assert.equal(totalSupply.toNumber(),1000000);
            const adminBalance = await dappToken.balanceOf(accounts[0]);
            assert.equal(adminBalance.toNumber(),1000000)
        })

        //Checking if the msg.sender contains more tokens than he is transferring
        it('transfers token ownership',async()=>{
            await dappToken.transfer.call(accounts[1],999999999999).should.be.rejected;

        })


    })
})

