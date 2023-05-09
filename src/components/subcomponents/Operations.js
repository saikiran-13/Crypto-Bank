import React from 'react'
import Balance from '../../Images/checkBalance.png'
import deposit from '../../Images/deposit.png'
import withdraw from '../../Images/withdraw.svg'
import Buttoncrypto from './Buttoncrypto'
import { useNavigate } from 'react-router-dom'
import { balanceContext } from '../../App'
// import { contract } from './Choosecrypto'
import { bankABI } from './ABI/simpleBank'
import { bank } from './ABI/TokenBank'
import { signer, signerAddress } from './Homepagecontent'
import '../../App'
import { useContext, useState, useEffect } from 'react'
const { ethers } = require('ethers')

const Operations = (props) => {
  const Flatted = require('flatted')
  const { setOperation, setType, setAmount, walletAddress, setWalletAddress, bankContract,setEvents,tokenAddress } = useContext(balanceContext)
  const navigate = useNavigate()
  let contract;


  async function checkBalance() {
    console.log("Bank contract",await bankContract)
    const contractAddress = '0xa70f02187FB17423d190500f16F75b3f0F0EAF5B'
    const BankAddress = '0x114C8CBf548A6C249A06C60412878770DCF887a7'

    const tokenAddress = localStorage.getItem("TokenAddress")
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()

    if(tokenAddress){
        contract = new ethers.Contract(BankAddress,bank,signer)
        const connectedAddress = localStorage.getItem('connectedAddress')
        const tokens = await contract.customerBalance(connectedAddress)
        const balance = ethers.utils.formatEther(ethers.utils.parseUnits(tokens.toString(), "wei"));
        setAmount(balance)
        console.log("Token Balance",balance)
        
    }
    else{
      contract = new ethers.Contract(contractAddress, bankABI, signer)
      let connectedAddress = localStorage.getItem("connectedAddress")
      console.log(connectedAddress, bankContract)
      const balanceInWei = await contract.balances(connectedAddress);
      const balanceInEther = ethers.utils.formatEther(ethers.utils.parseUnits(balanceInWei.toString(), "wei"));
      setAmount(balanceInEther)
    }
 
    setType(props.name)
    setOperation('CHECK')
    navigate('/complete')
  }

  
  function dateConversion(timestampInSeconds) {
    const date = new Date(timestampInSeconds * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime
  }


  async function listenEvents() {
    let eventsArray = []
    // await contract.connect(signer)
    const contractAddress = '0xa70f02187FB17423d190500f16F75b3f0F0EAF5B'
    const BankAddress = '0x114C8CBf548A6C249A06C60412878770DCF887a7'
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const TokenAddress = localStorage.getItem('TokenAddress')
    if(TokenAddress){
      contract = new ethers.Contract(BankAddress,bank,signer)
      console.log("TOken contract",contract)
    }
    else{
      contract = new ethers.Contract(contractAddress, bankABI, signer)
      console.log("hi")
    }
  
    const signerAddress = await signer.getAddress()

    let depositedevents = await contract.queryFilter('AmountDeposited')
    depositedevents = depositedevents.filter((event) => {
      return event.args.depositer == signerAddress?true:false
    })
    depositedevents.map((event) => {
      const Deposit = {
        From: event.args.depositer.slice(0,20)+'....',
        To: event.args.contractaddress.slice(0,20)+'....',
        Amount: ethers.utils.formatEther(event.args.money),
        Timestamp: event.args.timestamp
      }
      const TimeinSec = Deposit.Timestamp.toNumber()
      const Time = dateConversion(TimeinSec)
      eventsArray.push({From:Deposit.From,To:Deposit.To,Amount:Deposit.Amount,Timestamp:Time})
    })

  
    let withdrawnevents = await contract.queryFilter('AmountWithdrawn')
    withdrawnevents = withdrawnevents.filter((event) => {
      return event.args.depositer == signerAddress?true:false
    })

    withdrawnevents.map((event) => {
      const Withdraw = {
        From: event.args.contractaddress.slice(0,20)+"....",
        To: event.args.depositer.slice(0,20)+'....',
        Amount: ethers.utils.formatEther(event.args.money),
        Timestamp: event.args.timestamp
      }
      const TimeinSec = Withdraw.Timestamp.toNumber()
      const Time = dateConversion(TimeinSec)
      eventsArray.push({From:Withdraw.From,To:Withdraw.To,Amount:Withdraw.Amount,Timestamp:Time})

    })

    console.log(eventsArray)
    setEvents(eventsArray)
    navigate('/transactionlog')

  }

  return (
    <div className='float-right m-auto'>
      <div className='flex justify-around w-3/4 flex-col'>
        {/* <h1>{console.log(walletAddress)}</h1> */}
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