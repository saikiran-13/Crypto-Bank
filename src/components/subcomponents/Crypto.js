import React from 'react'
import { Header } from './Header'
import { useState } from 'react'
import Balance from '../../Images/checkBalance.png'
import deposit from '../../Images/deposit.png'
import withdraw from '../../Images/withdraw.svg'
import Sidebar from './Sidebar'
import Operations from './Operations'

const Crypto = (props) => {
  console.log("name",props.name)
  return (
    <div>
      <div className='flex justify-around'>
      <Sidebar color1='bg-violet-600' color2='bg-gray'/>
      <div className='flex justify-center place-content-center ml-20 mt-40'>
                <div className='w-2 h-96  bg-white'></div>
        </div>
      <Operations token={props.token} name={props.name}/>
    </div>
    </div>
  )
}

export default Crypto