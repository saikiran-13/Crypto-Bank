
import Crypto from "./subcomponents/Crypto";


import '../App.css'
function Token(props){ 
    return(
    <div>     
        <Crypto token={props.token} name = "TOKEN"/>
    </div>
    )
   
}
export default Token