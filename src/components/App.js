import React, { Component } from 'react';
import Web3 from 'web3';
import Token from '../abis/Token.json'
import EthSwap from '../abis/EthSwap.json'
import Navbar from './Navbar'
import './App.css';


class App extends Component {

  async componentWillMount(){
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadBlockchainData(){
    const web3 = window.web3;
    //Getting the account connected to Metamask
    const accounts = await web3.eth.getAccounts();
    //Storing the connected account to MetaMask
    this.setState({account:accounts[0]});
    console.log(this.state.account);
    //Getting the balance of the connected account
    const ethBalance = await web3.eth.getBalance(this.state.account);
    //Storing the balance as a state
    this.setState({ethBalance})
    console.log(this.state.ethBalance)
    const networkId = await web3.eth.net.getId();
    const tokenData=Token.networks[networkId];
    
    if(tokenData){
      const token = new web3.eth.Contract(Token.abi,tokenData.address);
      console.log(token);
    } else {
      window.alert('Token Contract not deployed to blockchain');
    }
    
    

  }
  async loadWeb3() {
    //Connecting app with the blockchain
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  constructor(props){
    super(props);
    this.state = {
      account : '',
      ethBalance:'0'
    }
  }

  render() {
    return (
      <div>
        <Navbar account = {this.state.account}/>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1>Hello World!</h1>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

