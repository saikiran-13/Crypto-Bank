import React from 'react'
import '../../App.css'
import { Button } from '@mui/material'
import { ConfirmBox } from './Confirmbox'
import { useState } from 'react'

const Buttoncrypto = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='flex justify-around place-content-center mb-14 mt-10 pt-14 gap-10'>
      <div className='flex flex-col place-content-center justify-center'>
        <img className='m-auto mb-5' src={props.image} alt="image not found" width={150} height={100} />
        <Button onClick={handleOpen} sx={{
          bgcolor: '#86c232',
          borderRadius: '50px',
          px: '30px',
          py: '13px',
          width: 'max-content',
          outline: 'none',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          fontWeight: 'bold',
          color: 'white',
          fontSize: '1.4rem',
          textShadow: '0px 2px 2px rgba(255, 255, 255, 0.75)',
          '&:hover': {
            backgroundColor: '#61892f',
          },
        }}>{props.text}  {props.name}</Button></div>

      <ConfirmBox value={open} handleClose={handleClose} text={props.text} name={props.name}/>


    </div>
  )
}

export default Buttoncrypto