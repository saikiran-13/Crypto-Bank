import './App.css';
import Homepage from './components/homepage';
import Choosecrypto from './components/Choosecrypto';
import Ether from './components/ether';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [address,setAddress] = useState("")
  return (
    <div className="App" >
    <Router>
      <Routes>
        <Route index element={<Homepage address = {address}/>}/>
        <Route path='/choosecrypto' element={<Choosecrypto address = '0x435245...'/>}/>
        <Route path='/ether' element={<Ether address = '0x435245...'/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
