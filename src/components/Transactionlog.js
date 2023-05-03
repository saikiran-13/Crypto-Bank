import React from 'react'
import { Header } from './subcomponents/header'
import Footer from './subcomponents/footer'
import Transactiondetails from './subcomponents/Transactiondetails'

const Transactionlog = (props) => {
  return (
    <div>
        <Header address={props.address}/>
        <Transactiondetails/>
        <Footer/>
    </div>
  )
}

export default Transactionlog