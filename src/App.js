import './App.css';
import Homepage from './components/homepage';
import Useraccess from './components/useraccess';
import Owneraccess from './components/owneraccess';
import Ether from './components/ether';
import Token from './components/token';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [address,setAddress] = useState("")
  return (
    <div className="App" >
    <Router>
      <Routes>
        <Route index element={<Homepage address = {address}/>}/>
        <Route path='/owneraccess' element={<Owneraccess address = '0x560926...'/>}/>
        <Route path='/useraccess' element={<Useraccess address = '0x435245...'/>}/>
        <Route path='/ether' element={<Ether address = '0x435245...' token={false}  name="ETHER"/>}/>
        <Route path='/token' element={<Token address = '0x435245...' token={true} name="TOKEN"/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
