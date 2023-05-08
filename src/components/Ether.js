

import Crypto from "./subcomponents/Crypto";

import '../App.css'
function Ether(props){
    return(
    <div>
  
        <Crypto token={props.token} name ={"ETHER"}/>
     
    </div>
    )
   
}
export default Ether