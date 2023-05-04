import React from 'react'
import Balance from '../../Images/checkBalance.png'
import deposit from '../../Images/deposit.png'
import withdraw from '../../Images/withdraw.svg'
import Buttoncrypto from './buttoncrypto'
import { useNavigate } from 'react-router-dom'
import { balanceContext } from '../../App'
import { contract } from './choose'
import {signer, signerAddress } from './content'
import '../../App'
import { useContext, useState } from 'react'
const { ethers } = require('ethers')
const Operations = (props) => {
  const { setOperation, setType, setAmount } = useContext(balanceContext)
  const navigate = useNavigate()

  async function checkBalance() {
    console.log("signerAddress", signerAddress, contract)
    const balanceInWei = await contract.balances(signerAddress);
    const balanceInEther = ethers.utils.formatEther(ethers.utils.parseUnits(balanceInWei.toString(), "wei"));
    console.log("Balance", balanceInEther);

    setAmount(balanceInEther)
    setType(props.name)
    setOperation('CHECK')
    navigate('/complete')
  }

  async function listenEvents(){
    // await contract.connect(signer)
    console.log(await contract)

    let events = await contract.queryFilter('AmountDeposited')
    await events.wait()
    console.log("eventss",events)
    console.log("events",await contract.queryFilter(events,-20))
    console.log("hi")
//     events = events.filter((event)=>{return event.args[1]== 3000000000000000?true:false})
// // console.log(events)

// const filteredevents = events.map((event)=>{return `From: ${wallet.address} To:${event.args[0]} Value:${event.args[1]}`})
// console.log(filteredevents)

    await contract.on('AmountDeposited',(depositer,contractaddress,money,timestamp,event)=>{
      let data = {
        From:depositer,
        To:contractaddress,
        Amount:money,
        Time:timestamp,
        Data:event
      };
      console.log(JSON.stringify(data,null,4))
    })

    // await contract.on('AmountWithdrawn',(depositer,contractaddress,money,timestamp)=>{
    //   let data = {
    //     From:contractaddress,
    //     To:depositer,
    //     Amount:money,
    //     Time:timestamp
    //   };
    //   console.log(JSON.stringify(data,null,4))
    // })
    // navigate('/transactionlog')

  }

  return (
    <div className='float-right m-auto'>
      <div className='flex justify-around w-3/4 flex-col'>

        <div className="choose w-max m-auto mt-10">
          <h1 className='bg-lime-600 rounded-lg px-14 py-5  outline-none shadow-md font-bold text-white text-2xl '>CHOOSE YOUR OPERATION</h1>
        </div>

        <div className='flex justify-around place-content-center mb-14 gap-10 m-auto '>
          <Buttoncrypto image={deposit} text="DEPOSIT" name={props.name} />

          {/* {props.name == 'TOKEN' && <Buttoncrypto image={Balance} text="CHECK" name={props.name} />} */}
          {<div className='flex flex-col justify-center place-content-center mb-14 mt-10 pt-14 mr-10'>
            <img className='m-auto mt-10' src={Balance} alt="image not found" width={150} height={100} />
            <button className='bg-primary rounded-full mt-0 h-16 px-8 w-max outline-none shadow-md font-bold text-white text-2xl shadow-white hover:bg-least' onClick={checkBalance}>CHECK BALANCE</button></div>}
          <Buttoncrypto image={withdraw} text="WITHDRAW" name={props.name} />

        </div>

        <div className='flex justify-center'>
          <h1 className='bg-primary rounded-full px-20 py-5 outline-none shadow-md font-bold text-white text-2xl shadow-white hover:bg-least' onClick={listenEvents}>TRANSACTION LOG</h1>
        </div>
      </div>
    </div>
  )
}

export default Operations