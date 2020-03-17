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

        //Tests for the Transfer function ~ transfer of tokens one address to another
        it('transfers token ownership',async()=>{
            let returnValue = await dappToken.transfer.call(accounts[1],999999999999).should.be.rejected;
            let result = await dappToken.transfer(accounts[1],250000,{from:accounts[0]});
            let balanceOfReceiver = await dappToken.balanceOf(accounts[1]);
            //Event
            const event = result.logs[0].args;
            assert.equal(balanceOfReceiver.toNumber(),250000);
            assert.equal(event._from,accounts[0]);
            assert.equal(event._to,accounts[1]);
            assert.equal(event._value,250000);
            assert(returnValue,true);
            
        })


    })
})


