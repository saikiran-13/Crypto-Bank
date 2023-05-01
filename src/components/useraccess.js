import '../App.css'
import { Header } from "./subcomponents/header";
import Footer from './subcomponents/footer'
import Content2 from './subcomponents/content2';
function Useracccess(props){
    return(<div>
        <Header address={props.address}/>
        <Content2/>
        <Footer/>
    </div>
        
    )
}

export default Useracccess