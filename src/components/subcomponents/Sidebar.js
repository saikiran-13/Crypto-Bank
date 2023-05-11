import React from 'react'

const Sidebar = (props) => {
    return (
<div className='flex justify-around place-content-center w-1/4'>
            <div className='header flex flex-col place-content-center ml-24 mt-24 '>
                <div className='bg-blue rounded-md text-center px-10 py-5 w-80 outline-none shadow-md font-bold text-white text-lg '>CHOOSE YOUR CRYPTO</div>
                <div className='w-1 h-12 ml-40 bg-black'></div>
                <div className={`${props.color1} rounded-md text-center px-10 py-5 w-80 outline-none shadow-md font-bold text-white text-lg `}>CHOOSE YOUR OPERATION</div>
                <div className='w-1 h-12 ml-40 bg-black'></div>
                <div className={`${props.color2} rounded-md text-center px-10 py-5 w-80 outline-none shadow-md font-bold text-white text-lg `}>CONFIRM OPERATION</div>
            </div>

            
        </div>
    )
}

export default Sidebar