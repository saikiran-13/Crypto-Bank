import React from 'react'
import { Header } from './header'
import { useState } from 'react'
import Balance from '../../Images/checkBalance.png'
import deposit from '../../Images/deposit.png'
import withdraw from '../../Images/withdraw.svg'
import Sidebar from './Sidebar'
import Operations from './operations'

const Content3 = (props) => {
  return (
    <div>
      <div className='flex justify-around mt-12 mb-12'>
      <Sidebar/>
      <Operations token={props.token} name={props.name}/>
    </div>
    </div>
  )
}

export default Content3