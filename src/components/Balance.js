import React from 'react'
import { Header } from './subcomponents/header'
import Footer from './subcomponents/footer'
import Balancecheck from './subcomponents/Balancecheck'
import { useContext } from 'react'
import { balanceContext } from '../App'





const Totalbalance = (props) => {
  const {bal,crypto,type} = useContext(balanceContext)
  return (
    <div>
        <Header address={props.address}/>
        <Balancecheck name={crypto} value={type} bal={bal}/>
        <Footer/>
    </div>
  )
}

export default Totalbalance