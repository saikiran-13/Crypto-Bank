import React from 'react'

import Transactiondetails from './subcomponents/Transactiondetails'

const Transactionlog = (props) => {
  return (
    <div>
        <h1 className=" bg-white w-max p-5 px-10 text-2xl text-black shadow-blue shadow-lg font-bold header m-auto rounded-lg">TRANSACTION<span className='ml-3'> </span>HISTORY</h1>
        <Transactiondetails/>
    </div>
  )
}

export default Transactionlog