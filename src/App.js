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

export const balanceContext = createContext()
function App() {
  const [address, setAddress] = useState("")
  const [bal, setBal] = useState(0)
  const [crypto, setCrypto] = useState("")
  const [type, setType] = useState("")
  const [operation, setOperation] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <div className="App" >
      <balanceContext.Provider value={{ bal, crypto, type, operation, amount, setBal, setCrypto, setType, setOperation, setAmount }}>
        <Router>
          <Routes>
            <Route index element={<Homepage address={address} />} />
            <Route path='/owneraccess' element={<Owneraccess address='0x560926...' />} />
            <Route path='/balance' element={<Totalbalance address='0x560926...' />} />
            <Route path='/useraccess' element={<Useraccess address='0x435245...' />} />
            <Route path='/ether' element={<Ether address='0x435245...' token={false} name="ETHER" />} />
            <Route path='/token' element={<Token address='0x435245...' token={true} name="TOKEN" />} />
            <Route path='/transactionlog' element={<Transactionlog address='0x435245...' />} />
            <Route path='/complete' element={<Complete address='0x435245...' />} />
          </Routes>
        </Router>
      </balanceContext.Provider>
    </div>
  );
}

export default App;
