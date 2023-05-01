
import { useState } from "react";
import { Header } from "./subcomponents/header";
import Content3 from "./subcomponents/content3";
import Footer from "./subcomponents/footer";

import '../App.css'
function Token(props){ 
    return(
    <div>
        <Header address = {props.address}/>

        <Content3 token={props.token} name = {props.name}/>

        <Footer/>
    </div>
    )
   
}
export default Token