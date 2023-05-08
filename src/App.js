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

import { signerAddress } from './components/subcomponents/Homepagecontent';

export const balanceContext = createContext();

function ConditionalHeader({ walletaddress }) {
  const location = useLocation();

  return location.pathname !== '/' ? <Header address={walletaddress} /> : null;
}



function App() {
  const [bal, setBal] = useState(0);
  const [crypto, setCrypto] = useState("");
  const [type, setType] = useState("");
  const [operation, setOperation] = useState("");
  const [amount, setAmount] = useState("");
  const [signerDetails,setSignerDetails] = useState(null)
  const [walletaddress, setWalletAddress] = useState("");
  const [tokenContract, setTokenContract] = useState(null)
  const [bankContract, setBankContract] = useState(null)
  const [TokenAddress, setTokenAddress] = useState("")
  const [events,setEvents] = useState([])

  useEffect(() => {
    let updatedAddress = localStorage.getItem('connectedAddress');
    setWalletAddress(updatedAddress);
  }, [signerAddress]);



  return (
    <div className="App flex flex-col h-screen">
      <balanceContext.Provider value={{ bal, crypto, type, operation, amount, walletaddress,tokenContract,bankContract,TokenAddress,signerDetails,events, setBal, setCrypto, setType, setOperation, setAmount, setWalletAddress,setTokenContract,setBankContract,setTokenAddress,setSignerDetails,setEvents }}>
        <Router>
          <Routes>
            <Route index element={<Homepage address="" />} />
          </Routes>
          <ConditionalHeader walletaddress={`${walletaddress}`.slice(0,10)+"...."} />
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
