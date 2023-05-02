import React from 'react'
import owner from '../../Images/owner.png'
import ether from '../../Images/ether.png'
import token from '../../Images/token.png'

const Ownercontent = () => {
  return (
    <div className='flex gap-5 justify-around place-content-around h-96 my-20'>

      <div className='flex ml-5'>
        <img src={owner} alt="Img not found" width={250} height={50}></img>
      </div>
      <div className="flex flex-col place-content-center h-16 gap-10 w-max m-auto">
        <div>
          <h1 className='bg-gray rounded-md px-64 py-5 w-max outline-none shadow-md font-bold text-white text-2xl mb-10 '>CHOOSE YOUR OPERATION</h1>
        </div>

        <div className="flex justify-around place-content-center mr-20 gap-16">
                    <div className='flex flex-col place-content-center justify-center'>
                        <img className = "m-auto mb-10" src={ether} alt="ether not found" width={300} height={300}></img>
                        <button  className='bg-primary rounded-full p-5 px-16 w-max m-auto outline-none shadow-md font-bold shadow-white text-white text-center text-2xl'>ETHER BALANCE</button>
                    </div>

                    <div className="flex flex-col place-content-center justify-center">
                        <img className="m-auto mb-10" src={token} alt="token not found" width={180} height={200}></img>
                        <button className='bg-primary rounded-full p-5 px-16 w-max m-auto outline-none shadow-md font-bold text-white text-center shadow-white text-2xl'>TOKEN BALANCE</button>
                    </div>
                </div>
      </div>
    </div>
  )
}

export default Ownercontent