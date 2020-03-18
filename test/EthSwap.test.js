const Token = artifacts.require('Token')
const EthSwap = artifacts.require('EthSwap');

require('chai')
    .use(require('chai-as-promised'))
    .should();

function tokens(n){
    return web3.utils.toWei(n,'ether');
}

contract('EthSwap',(accounts)=>{
    let token, ethSwap;
    before(async()=>{
        token = await Token.new();
        ethSwap = await EthSwap.new();
        await token.transfer(ethSwap.address,tokens('1000000'));
    })
    //Testing Token Deployment
    describe('Token deployment',async()=>{
        it('contract has a name',async()=>{
            const name = await token.name();
            assert.equal(name,'DApp Token');
        })

    })
    //Checking EthSwap Deployment
    describe('EthSwap deployment',async()=>{
        it('contract has a name',async()=>{
            const name = await ethSwap.name();
            assert.equal(name,'EthSwap Instant Exchange');
        })
        it('contract has tokens',async()=>{
            let balance = await token.balanceOf(ethSwap.address);
            assert.equal(balance.toString(),tokens('1000000'));
        })
    })
})





