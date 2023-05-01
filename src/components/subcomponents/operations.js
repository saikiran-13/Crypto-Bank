import React from 'react'
import Balance from '../../Images/checkBalance.png'
import deposit from '../../Images/deposit.png'
import withdraw from '../../Images/withdraw.svg'
import '../../App'
import { useContext,useState } from 'react'
const Operations = (props) => {
  return (
    <div>
        <div className='flex justify-around w-3/4 flex-col mb-5'>
            {props.token &&  <div className="choose w-max m-auto ">
          <input type="text" placeholder='Enter your token address'  className='bg-gray rounded-md pr-64 pl-12 py-5  outline-none shadow-md font-bold text-white text-2xl '></input>
        </div>}
     
        <div className="choose w-max m-auto mt-10">
          <h1 className='bg-primary rounded-full px-14 py-5  outline-none shadow-md font-bold text-white text-2xl '>CHOOSE YOUR OPERATION</h1>
        </div>

        <div className='flex justify-around place-content-center mb-14 mt-10 pt-14 gap-28'>
          <div className='flex flex-col place-content-center justify-center'>
            <img className='m-auto mb-5' src={deposit} alt="image not found" width={150} height={100} />
            <h1 className='bg-primary rounded-full px-10 py-3 w-max outline-none shadow-md font-bold text-white text-2xl shadow-white'>DEPOSIT {props.name}</h1></div>
          <div className='flex flex-col place-content-center justify-center '>
            <img className='m-auto mb-5' src={Balance} alt="image not found" width={150} height={100} />
            <h1 className='bg-primary rounded-full px-10 py-3 w-max outline-none shadow-md font-bold text-white text-2xl shadow-white'>CHECK BALANCE</h1></div>
          <div className='flex flex-col place-content-center justify-center'>
            <img className='m-auto mb-5' src={withdraw} alt="image not found" width={150} height={100} />
            <h1 className='bg-primary rounded-full px-10 py-3 w-max outline-none shadow-md font-bold text-white text-2xl shadow-white'>WITHDRAW {props.name}</h1></div>
        </div>

        <div className='flex justify-center'>
        <h1 className='bg-primary rounded-full px-20 py-5 mt-12 outline-none shadow-md font-bold text-white text-2xl shadow-white '>TRANSACTION LOG</h1>
        </div>



      </div>
    </div>
  )
}

export default Operations