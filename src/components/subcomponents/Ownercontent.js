import {  Ethercontract } from './ContractInstances'
import React from 'react'
import owner from '../../Images/owner.png'
import ether from '../../Images/ether.png'
import token from '../../Images/token.png'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { balanceContext } from '../../App'
import DropdownMenu from './dropdown'

const { ethers } = require('ethers')


const Ownercontent = () => {
  const { setBal, setCrypto, setType } = useContext(balanceContext)
  const navigate = useNavigate()






  async function Etherbalance() {
    const { EtherContract } = await Ethercontract()
    const balanceInWei = await EtherContract.checkEther()
    const balanceInEther = ethers.utils.formatEther(ethers.utils.parseUnits(balanceInWei.toString(), "wei"));
    console.log("Balance", balanceInEther);
    setBal(balanceInEther)
    setCrypto('Ether')
    setType('ETH')
    navigate('/balance')
  }



  return (

    <div className='flex justify-around place-content-around h-96 my-24 mb-52'>

      <div className='flex ml-20 mt-14'>
        <img src={owner} alt="Img not found" width={250} height={50}></img>
      </div>
      <div className="flex flex-col place-content-center h-16 gap-10 w-max m-auto">
        <div >
          <h1 className='bg-white shadow-lg shadow-primary rounded-lg px-64 py-6  m-auto mb-10 outline-none font-bold text-primary text-2xl '>CHOOSE YOUR OPERATION</h1>
        </div>

        <div className="flex justify-around place-content-center mr-20 gap-16">
          <div className='flex flex-col place-content-center justify-center'>
            <img className="m-auto mb-10" src={ether} alt="ether not found" width={300} height={300}></img>
            <button className='bg-primary rounded-full p-5 px-16 w-max m-auto outline-none shadow-md font-bold shadow-black text-white text-center text-2xl hover:bg-least' onClick={Etherbalance}>ETHER BALANCE</button>
          </div>

          <div className="flex flex-col place-content-center justify-center">
            <img className="m-auto mb-10" src={token} alt="token not found" width={180} height={200}></img>
            <div>
            <DropdownMenu access={true} balance={true} />
          </div>

          </div>
          
        </div>

      </div>
    </div>

  )
}

export default Ownercontent