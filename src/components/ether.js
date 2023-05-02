
import { useState } from "react";
import { Header } from "./subcomponents/header";
import Content3 from "./subcomponents/crypto";
import Footer from "./subcomponents/footer";
import '../App.css'
function Ether(props){
    return(
    <div>
        <Header address = {props.address}/>
        <Content3 token={props.token} name ={props.name}/>
        <Footer/>
    </div>
    )
   
}
export default Ether