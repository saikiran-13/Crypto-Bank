import { PropaneSharp } from '@mui/icons-material'
import { contract } from './choose'
import '../../App.css'
import React from 'react'

const Transaction = (props) => {
 
    return (
        <div >
            <div className=' content flex justify-between place-content-around p-5 w-max h-fit m-5 rounded-lg font-bold shadow-lg shadow-transparent '>
                <div className='flex text-2xl text-primary justify-between'>
                   <h1 className='mr-10'><span className='text-black'>From: </span> {props.From} </h1>   
                   <h1 className='mr-10'><span className='text-black'>To: </span> {props.To} </h1>  
                   <h1 className='mr-10'><span className='text-black'>Amount: </span> {props.Amount} </h1>   
                   <h1 className='mr-10'><span className='text-black'>Time: </span> {props.Time}</h1>
                   </div>
            </div>
        </div>

    )
}

const Transactiondetails = () => {


    const heros = [
        { From: '0xfae123b...', To: '0xabc1234...', Amount: "100", Time: Date.now() },
        { From: '0xabc1234...', To: '0xfae123b...', Amount: "50", Time: Date.now() },
        { From: '0xfae123b...', To: '0xabc1234...', Amount: "200", Time: Date.now() },
        { From: '0xabc1234...', To: '0xfae123b...', Amount: "150", Time: Date.now() },
        { From: '0xfae123b...', To: '0xabc1234...', Amount: "100", Time: Date.now() },
        { From: '0xabc1234...', To: '0xfae123b...', Amount: "50", Time: Date.now() },
        { From: '0xfae123b...', To: '0xabc1234...', Amount: "200", Time: Date.now() },
        { From: '0xabc1234...', To: '0xfae123b...', Amount: "150", Time: Date.now() }
    ]
    return (
        <div><center>
            <div className='flex flex-col justify-center place-content-around m-10 p-10 rounded-lg w-fit bg-slate-100' >
                {heros.length==0 && <h1 className='text-3xl content font-bold'>No Transactions Found</h1>}
                {heros.length>0 && heros.map((Trans) => {
                return <Transaction From={Trans.From} To={Trans.To} Amount={Trans.Amount} Time={Trans.Time} />
            })}</div></center>

        </div>
    )
}

export default Transactiondetails