import { Ethercontract } from './ContractInstances';
import React from 'react'
import ether from '../../Images/ether.png'
import token from '../../Images/token.png'
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';

import DropdownMenu from './dropdown';



export let contract;
const Choosecrypto = () => {
    const navigate2 = useNavigate()
   

    function simpleBank() {
        localStorage.setItem('TokenAddress', '')
        navigate2('/ether')
    }

    return (
        <div className='flex justify-around mt-9 mb-28'>
            <div className='flex justify-center place-content-center mt-20'>
                <Sidebar color1='bg-gray' color2='bg-gray' />
            </div>

            <div className='flex justify-center place-content-center ml-20 mt-40'>
                <div className='w-2 h-96  bg-black'></div>
            </div>

            <div className='w-3/4'>
                <div className="choose w-max m-auto">
                    <h1 className='bg-white shadow-lg shadow-primary rounded-lg px-20 py-6  m-auto outline-none font-bold text-primary text-2xl '>CHOOSE YOUR CRYPTO</h1>
                </div>

                <div className="flex justify-around place-content-center mr-20 mt-24">

                    <div className='flex flex-col place-content-center justify-center mt-6'>
                        <div className="image-container">
                            <img className="images" src={ether} alt="ether not found" width={350} height={200}></img>
                        </div>

                        <button onClick={simpleBank} className='bg-primary rounded-full p-5 w-64 m-auto mt-10 outline-none shadow-md font-bold shadow-black text-white text-center text-2xl hover:bg-least'>ETHER</button>
                    </div>

                    <div className="flex flex-col place-content-center justify-center mt-6" style = {{width:350}}>
                        <div className='image-container m-auto'>
                            <img className="images" src={token} alt="token not found" width={220} height={150}></img>
                        </div>

                        <div className='px-12'>
                            <DropdownMenu balance={false} />
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Choosecrypto
