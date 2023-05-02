import React from 'react'
import verify from '../../Images/verify.png'
import '../../App.css'

const Verify = () => {
    return (
        <div className='flex justify-center place-content-around m-16  '>
            <div className='bg-light flex justify-between place-content-around p-20 w-1/2 h-96 m-10 rounded-lg font-bold shadow-lg shadow-primary ' >
                <div className='my-auto'><img src={verify} alt="Img not found" width={150} height={200}></img></div>
                <div className='flex flex-col bold content'>
                    <h1 className='text-black m-auto text-3xl'>Dear <span className='text-violet-600'>User</span></h1>
                    <h1 className='text-black text-3xl m-4'>Your Balance Has Fetched Successfully</h1>
                    <h1 className='text-primary mb-10 m-auto text-4xl'>BALANCE: 100 ETH</h1>
                    <h1 className='text-black m-auto text-3xl'>Thanks For Visiting!!!</h1>
                </div>
            </div>
        </div>
    )
}

export default Verify