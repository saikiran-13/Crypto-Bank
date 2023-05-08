import React from 'react'

import Totalbalance from './subcomponents/Totalbalance'
import { useContext } from 'react'
import { balanceContext } from '../App'





const Balancecheck = (props) => {
  const {bal,crypto,type} = useContext(balanceContext)
  return (
    <div>
        <Totalbalance name={crypto} value={type} bal={bal}/>
    </div>
  )
}

export default Balancecheck