import React from 'react'
import ether from '../../Images/ether.png'
import token from '../../Images/token.png'
import { useNavigate } from "react-router-dom";
const Content2 = () => {
    const navigate2 = useNavigate()
    return (
        <div className='flex justify-around mt-12'>
            <div className='flex justify-around  w-1/4 '>
                <div className='flex flex-col place-content-center ml-24'>
                    <div className='bg-violet-600 rounded-md p-5 w-80 outline-none shadow-md font-bold text-white text-lg '>CHOOSE YOUR CRYPTO</div>
                    <div className='w-1 h-12 ml-40 bg-white'></div>
                    <div className='bg-gray rounded-md p-5 w-80 outline-none shadow-md font-bold text-white text-lg '>CHOOSE YOUR OPERATION</div>
                    <div className='w-1 h-12 ml-40 bg-white'></div>
                    <div className='bg-gray rounded-md p-5 w-80 outline-none shadow-md font-bold text-white text-lg '>CONFIRM OPERATION</div>
                </div>

                <div className='flex justify-center place-content-center'>
                <div className='w-2 h-96 ml-20 mt-24 bg-white'></div>
                </div>

            </div>
            <div className='w-3/4'>
                <div className="choose w-max m-auto mt-10">
                    <h1 className='bg-primary rounded-full px-10 py-5 w-96 outline-none shadow-md font-bold text-white text-2xl '>CHOOSE YOUR CRYPTO</h1>
                </div>

                <div className="flex justify-around place-content-center mr-20 mt-20">
                    <div className='flex flex-col place-content-center justify-center'>
                        <img src={ether} alt="ether not found" width={350} height={300}></img>
                        <button onClick={()=>{navigate2('/ether')}} className='bg-primary rounded-full p-5 w-64 m-auto outline-none shadow-md font-bold shadow-white text-white text-center text-2xl'>Ether</button>
                    </div>

                    <div className="flex flex-col place-content-center">
                        <img src={token} alt="token not found" width={250} height={200}></img>
                        <button className='bg-primary rounded-full p-5 w-64 m-auto outline-none shadow-md font-bold text-white text-center shadow-white text-2xl'>Token</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Content2