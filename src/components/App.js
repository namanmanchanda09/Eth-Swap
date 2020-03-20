import React, { Component } from 'react';
import Web3 from 'web3';

import './App.css';

class App extends Component {

  async componentWillMount(){
    await this.loadWeb3();
    console.log(window.web3);
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

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://twitter.com/NamanManchanda2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eth-Swap
          </a>
        </nav>
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

