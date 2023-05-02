import React from 'react'
import { Header } from './subcomponents/header'
import Footer from './subcomponents/footer'
import Verify from './subcomponents/Verify'

const Complete = (props) => {
  return (
    <div>
        <Header address={props.address}/>
        <Verify/>
        <Footer/>
    </div>
  )
}

export default Complete