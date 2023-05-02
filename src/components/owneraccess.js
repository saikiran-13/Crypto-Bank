import React from 'react'
import { Header } from './subcomponents/header'
import Footer from './subcomponents/footer'
import Ownercontent from './subcomponents/ownercontent'

const Owneraccess = (props) => {
  return (
    <div>
        <Header address={props.address}/>
        <Ownercontent/>
        <Footer/>
    </div>
  )
}

export default Owneraccess