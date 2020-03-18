const Token = artifacts.require('Token')
const EthSwap = artifacts.require('EthSwap');

require('chai')
    .use(require('chai-as-promised'))
    .should();

function tokens(n){
    return web3.utils.toWei(n,'ether');
}

contract('EthSwap',([deployer,investor])=>{
    let token, ethSwap;
    before(async()=>{
        token = await Token.new();
        ethSwap = await EthSwap.new(token.address);
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
    //Testing buying Tokens
    describe('buyTokens()',async()=>{
        let result;
        before(async()=>{
            //Purchase tokens before each example
            result = await ethSwap.buyTokens({from:investor,value:web3.utils.toWei('1','ether')});
        })

        it('Allows users to instantly purchase tokens from ethSwap',async()=>{
            //Check investor token balance after purchase
            let investorBalance = await token.balanceOf(investor);
            assert.equal(investorBalance.toString(),tokens('100'));
            //Check ethSwap Balance after purchase
            let ethSwapBalance = await token.balanceOf(ethSwap.address);
            assert.equal(ethSwapBalance.toString(),tokens('999900'));
            //Check ethSwap ether balance after transaction
            ethSwapBalance = await web3.eth.getBalance(ethSwap.address);
            assert.equal(ethSwapBalance.toString(),web3.utils.toWei('1','ether'));
        })
    })
})












