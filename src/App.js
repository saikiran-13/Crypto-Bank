import './App.css';
import Homepage from './components/homepage';
import Useraccess from './components/useraccess';
import Owneraccess from './components/owneraccess';
import Totalbalance from './components/Balance';
import Complete from './components/complete';
import Ether from './components/ether';
import Token from './components/token';
import Transactionlog from './components/Transactionlog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, createContext } from 'react';
import { Balance } from '@mui/icons-material';
import { signerAddress } from './components/subcomponents/content';

export const balanceContext = createContext()
function App() {
  const [address, setAddress] = useState("")
  const [bal, setBal] = useState(0)
  const [crypto, setCrypto] = useState("")
  const [type, setType] = useState("")
  const [operation, setOperation] = useState("")
  const [amount, setAmount] = useState("")
  const Address = "0xg123fdgf".slice(0,6)+"....."

  return (
    <div className="App flex flex-col h-screen " >
      <balanceContext.Provider value={{ bal, crypto, type, operation, amount, setBal, setCrypto, setType, setOperation, setAmount }}>
        <Router>
          <Routes>
            <Route index element={<Homepage address={address} />} />
            <Route path='/owneraccess' element={<Owneraccess address={Address} />} />
            <Route path='/balance' element={<Totalbalance address={Address} />} />
            <Route path='/useraccess' element={<Useraccess address={Address} />} />
            <Route path='/ether' element={<Ether address={Address} token={false} name="ETHER" />} />
            <Route path='/token' element={<Token address={Address} token={true} name="TOKEN" />} />
            <Route path='/transactionlog' element={<Transactionlog address={Address} />} />
            <Route path='/complete' element={<Complete address='0x435245...' />} />
          </Routes>
        </Router>
      </balanceContext.Provider>
    </div>
  );
}

export default App;
