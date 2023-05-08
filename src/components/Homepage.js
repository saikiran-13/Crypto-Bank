
import { Header } from "./subcomponents/Header";
import Content from "./subcomponents/Homepagecontent";

import '../App.css'
function Homepage(props){
    return(
    <div>
        <Header address={props.address}/>
        <Content/>
    </div>
    )
   
}
export default Homepage