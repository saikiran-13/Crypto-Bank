import { useState } from "react";
import { Header } from "./subcomponents/header";
import Content from "./subcomponents/content";
import Footer from "./subcomponents/footer";
import '../App.css'
function Homepage(props){
    return(
    <div>
        <Header address = {props.address}/>
        <Content/>
        <Footer/>
    </div>
    )
   
}
export default Homepage