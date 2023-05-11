import React, { useContext, useState,useEffect } from 'react'
import verify from '../../Images/verify.png'
import '../../App.css'
import { balanceContext } from '../../App'

const Verify = () => {
    const { type, operation,setOperation, amount, setType } = useContext(balanceContext)
    const [name,setName] = useState("BALANCE")
    const [crypto,setCrypto] = useState("Ethers")
    
    useEffect(()=>{
        if(operation==='CHECK'){setOperation("Fetched")}
        else if(operation==='WITHDRAW'){setOperation('Withdrawn')}
        else{setOperation('Deposited')}
    },[])

    useEffect(()=>{
        (operation==='CHECK')?setName("BALANCE"):setName("AMOUNT")
    },[])

    useEffect(() => {
        type === 'ETHER' ? setType('ETH') : setType('TKN')
    }, [])

    useEffect(()=>{
        (operation==='CHECK'?setCrypto('Balance'):(type === 'ETHER'? setCrypto('Crypto'):setCrypto('Tokens')))
    },[])
    
    return (
        <div className='flex justify-center place-content-around m-28 mb-48'>
            <div className='bg-slate-200 flex justify-between place-content-around p-20 w-3/5 h-96 rounded-lg font-bold shadow-lg shadow-primary ' >
                <div className='my-auto'><img src={verify} alt="Img not found" width={150} height={200}></img></div>
                <div className='flex flex-col bold content'>
                    <h1 className='text-black m-auto text-3xl'>Dear <span className='text-violet-600'>User</span></h1>
                    <h1 className='text-black text-3xl m-4'>Your {crypto} Have Been {operation} Successfully</h1>
                    <h1 className='text-primary mb-10 m-auto text-4xl'>{name}: {amount} {type}</h1>
                    <h1 className='text-black m-auto text-3xl'>Thank You For Banking With Us!!!</h1>
                </div>
            </div>
        </div>
    )
}

export default Verify