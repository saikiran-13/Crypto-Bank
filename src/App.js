import './App.css';
import { Header } from './components/subcomponents/Header';
import Footer from './components/subcomponents/Footer';
import Homepage from './components/Homepage';
import Useraccess from './components/Useraccess';
import Owneraccess from './components/Owneraccess';
import Totalbalance from './components/Balance';
import Complete from './components/Complete';
import Ether from './components/Ether';
import Token from './components/Token';
import Transactionlog from './components/Transactionlog';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
import { Network } from './components/subcomponents/Homepagecontent';

import { signerAddress } from './components/subcomponents/Homepagecontent';

export const balanceContext = createContext();

function ConditionalHeader({ walletaddress,network }) {
  const location = useLocation();

  return location.pathname !== '/' ? <Header address={walletaddress} network={network} /> : null;
}



function App() {
  let networkName;
  const [bal, setBal] = useState(0);
  const [crypto, setCrypto] = useState("");
  const [type, setType] = useState("");
  const [operation, setOperation] = useState("");
  const [amount, setAmount] = useState("");
  const [signerDetails,setSignerDetails] = useState(null)
  const [network,setNetwork] = useState("")
  const [walletaddress, setWalletAddress] = useState("");
  const [tokenContract, setTokenContract] = useState(null)
  const [bankContract, setBankContract] = useState(null)
  const [TokenAddress, setTokenAddress] = useState("")
  const [events,setEvents] = useState([])

  useEffect(() => {
    let updatedAddress = localStorage.getItem('connectedAddress');
    networkName = localStorage.getItem('Network')
    console.log(networkName)
    setWalletAddress(updatedAddress);
    setNetwork(networkName)
  }, [signerAddress,Network]);



  return (
    <div className="App flex flex-col h-screen justify-between">
      <balanceContext.Provider value={{ bal, crypto, type, operation, amount, walletaddress,tokenContract,bankContract,setNetwork,TokenAddress,signerDetails,events, setBal, setCrypto, setType, setOperation, setAmount, setWalletAddress,setTokenContract,setBankContract,setTokenAddress,setSignerDetails,setEvents }}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage address="" />} />
          </Routes>
          <ConditionalHeader walletaddress={`${walletaddress}`.slice(0,10)+"...."} network = {network}/>
          <Routes>
            <Route path='/owneraccess' element={<Owneraccess />} />
            <Route path='/balance' element={<Totalbalance />} />
            <Route path='/useraccess' element={<Useraccess />} />
            <Route path='/ether' element={<Ether />} />
            <Route path='/token' element={<Token />} />
            <Route path='/transactionlog' element={<Transactionlog />} />
            <Route path='/complete' element={<Complete />} />
          </Routes>
        </Router>
      </balanceContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
