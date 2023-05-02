import React from 'react'
import Balance from '../../Images/checkBalance.png'
import deposit from '../../Images/deposit.png'
import withdraw from '../../Images/withdraw.svg'
import Buttoncrypto from './buttoncrypto'
import '../../App'
import { useContext,useState } from 'react'
const Operations = (props) => {
  return (
    <div className='float-right m-auto'>
        <div className='flex justify-around w-3/4 flex-col mb-5'>
      
        <div className="choose w-max m-auto mt-10">
          <h1 className='bg-primary rounded-full px-14 py-5  outline-none shadow-md font-bold text-white text-2xl '>CHOOSE YOUR OPERATION</h1>
        </div>

        <div className='flex justify-around place-content-center mb-14 mt-4  m-auto'>
         <Buttoncrypto image={deposit} text = "DEPOSIT" name={props.name} />
         <Buttoncrypto image={Balance} text = "CHECK" name="BALANCE" />
         <Buttoncrypto image={withdraw} text = "WITHDRAW" name={props.name} />
        </div>

        <div className='flex justify-center'>
        <h1 className='bg-primary rounded-full px-20 py-5 mt-12 outline-none shadow-md font-bold text-white text-2xl shadow-white '>TRANSACTION LOG</h1>
        </div>



      </div>
    </div>
  )
}

export default Operations