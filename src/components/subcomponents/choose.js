
import React from 'react'
import ether from '../../Images/ether.png'
import token from '../../Images/token.png'
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
import { ConfirmBox } from './confirmbox'
import { createContext, useState } from 'react';
import { signer } from './content';
import {bankABI} from './ABI/simpleBank'
const { ethers } = require('ethers')
export let contract;
const Content2 = () => {
   
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate2 = useNavigate()

    function simpleBank(){
        const contractAddress = '0xa70f02187FB17423d190500f16F75b3f0F0EAF5B'
        contract = new ethers.Contract(contractAddress,bankABI,signer)
        console.log("contract",contract.bankOwner())
        navigate2('/ether')
    }

    function tokenBank(){
        // const contractAddress = '0x37fd054b394Bd0F60E65C389a4640cCA9650a451'
        // const contract = new ethers.Contract(contractAddress,bankABI,signer)
        // console.log("contract",contract.bankOwner())
        navigate2('/token')

    }
    return (
        <div className='flex justify-around mt-9 mb-44'>
            <Sidebar color1='bg-gray' color2='bg-gray' />
            <div className='flex justify-center place-content-center ml-20 mt-24'>
                <div className='w-2 h-96  bg-white'></div>
            </div>

            <div className='w-3/4'>
                <div className="choose w-max m-auto">
                    <h1 className='bg-lime-600 rounded-md px-16 py-5 w-max outline-none font-bold  text-white text-2xl '>CHOOSE YOUR CRYPTO</h1>
                </div>

                <div className="flex justify-around place-content-center mr-20 mt-20">
                    <div className='flex flex-col place-content-center justify-center'>
                        <img src={ether} alt="ether not found" width={350} height={300}></img>
                        <button onClick={ simpleBank } className='bg-primary rounded-full p-5 w-64 m-auto outline-none shadow-md font-bold shadow-white text-white text-center text-2xl hover:bg-least'>Ether</button>
                    </div>

                    <div className="flex flex-col place-content-center">
                        <img src={token} alt="token not found" width={250} height={200}></img>
                        <button onClick={() => {
                            handleOpen()
                        }} className='bg-primary rounded-full p-5 w-64 m-auto outline-none shadow-md font-bold text-white text-center shadow-white text-2xl hover:bg-least'>Token</button>
                         <ConfirmBox value={open} handleClose={handleClose} name="TOKEN" text='choose'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Content2