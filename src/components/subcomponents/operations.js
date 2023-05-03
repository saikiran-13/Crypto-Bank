import React from 'react'
import Balance from '../../Images/checkBalance.png'
import deposit from '../../Images/deposit.png'
import withdraw from '../../Images/withdraw.svg'
import Buttoncrypto from './buttoncrypto'
import { useNavigate } from 'react-router-dom'
import { balanceContext } from '../../App'
import '../../App'
import { useContext, useState } from 'react'
const Operations = (props) => {
  const { setOperation, setType } = useContext(balanceContext)
  const navigate = useNavigate()
  return (
    <div className='float-right m-auto'>
      <div className='flex justify-around w-3/4 flex-col'>

        <div className="choose w-max m-auto mt-10">
          <h1 className='bg-lime-600 rounded-lg px-14 py-5  outline-none shadow-md font-bold text-white text-2xl '>CHOOSE YOUR OPERATION</h1>
        </div>

        <div className='flex justify-around place-content-center mb-14 gap-10 m-auto '>
          <Buttoncrypto image={deposit} text="DEPOSIT" name={props.name} />

          {props.name == 'TOKEN' && <Buttoncrypto image={Balance} text="CHECK" name={props.name} />}
          {props.name == 'ETHER' && <div className='flex flex-col justify-center place-content-center mb-14 mt-10 pt-14 mr-10'>
            <img className='m-auto mt-10' src={Balance} alt="image not found" width={150} height={100} />
            <button className='bg-primary rounded-full mt-0 h-16 px-8 w-max outline-none shadow-md font-bold text-white text-2xl shadow-white hover:bg-least' onClick={() => {
              setType('ETHER')
              setOperation('CHECK')
              navigate('/complete')
            }}>CHECK BALANCE</button></div>}
          <Buttoncrypto image={withdraw} text="WITHDRAW" name={props.name} />
          
        </div>

        <div className='flex justify-center'>
          <h1 className='bg-primary rounded-full px-20 py-5 outline-none shadow-md font-bold text-white text-2xl shadow-white hover:bg-least' onClick={() => navigate('/transactionlog')}>TRANSACTION LOG</h1>
        </div>
      </div>
    </div>
  )
}

export default Operations