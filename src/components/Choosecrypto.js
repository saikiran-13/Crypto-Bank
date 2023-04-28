import '../App.css'
import { Header } from "./subcomponents/header";
import Footer from './subcomponents/footer'
import Content2 from './subcomponents/content2';
function Choosecrypto(props){
    return(<div>
        <Header address={props.address}/>
        <Content2/>
        <Footer/>
    </div>
        
    )
}

export default Choosecrypto