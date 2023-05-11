
import { contract } from './Choosecrypto'
import '../../App.css'
import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { balanceContext } from '../../App'
import { TailSpin } from 'react-loader-spinner'
const Transaction = (props) => {
 
    return (
        <div >
            <div className=' content flex justify-between place-content-around p-5 w-max h-fit m-5 rounded-lg bg-white font-bold shadow-lg shadow-transparent '>
                <div style = {{width:1338.67}}className='flex text-2xl text-blue justify-between w-max'>
                   <h1 className='mr-10'><span className='text-black'>From: </span> {props.From} </h1>   
                   <h1 className='mr-10'><span className='text-black'>To: </span> {props.To} </h1>  
                   <h1 className='mr-10'><span className='text-black'>Amount: </span> {props.Amount} </h1>   
                   <h1 className='mr-10'><span className='text-black'>Time: </span> {props.Time}</h1>
                   </div>
            </div>
        </div>

    )
}

function parseTimestamp(timestamp) {
    const [date, time] = timestamp.split(' ');
    const [day, month, year] = date.split('-');
    const [hours, minutes, seconds] = time.split(':');
  
    return new Date(year, month - 1, day, hours, minutes, seconds);
  }

function compareTransactions(a, b) {
    const timestampA = parseTimestamp(a.Timestamp);
    const timestampB = parseTimestamp(b.Timestamp);
    
    return timestampB-timestampA;
  }

const Transactiondetails = () => {
   
    const {events} = useContext(balanceContext)
    console.log(events)
    events.sort(compareTransactions)
    return (
        <div><center>
            {events.length===0  && <div className='mb-96 p-14 w-fit '><h1 className='text-3xl p-5 rounded-lg text-blue content font-bold bg-slate-100'>No Transactions Found</h1></div>}
            {events.length>0  && <div className='flex flex-col  justify-center place-content-around m-10 p-10 rounded-lg w-max bg-slate-100' > 
                {events.map((Trans,key) => {
                return <Transaction key={key} From={Trans.From} To={Trans.To} Amount={Trans.Amount} Time={Trans.Timestamp} />
            })}</div>}</center>

        </div>
    )
}

export default Transactiondetails