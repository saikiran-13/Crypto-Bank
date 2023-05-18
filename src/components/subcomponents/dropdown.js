import '../../App.css'
import React, { useEffect, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Bankcontract } from './ContractInstances';

import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { ethers } from 'ethers'
import { balanceContext } from '../../App';
import { TailSpin } from 'react-loader-spinner';

// import { Bankcontract } from './ContractInstances';

const DropdownMenu = ({ balance, access }) => {
  const { setOperation, setType, setAmount, setBal, setCrypto } = useContext(balanceContext)
  const [loading, setLoading] = useState(false)
  const [padding, setPadding] = useState('50px')
  const navigate = useNavigate()
  let arr;
  const arr1 = ["0x41Cb39177A332c6dAEcEE40A5343a77411ca6712", "0x779877A7B0D9E8603169DdbD7836e478b4624789", "0xE08339cf84f40c13bB03633E30B0E77A3ba64F53"]
  const arr2 = ["0x975C2bc54EA2e560E86845F2559d651E78F9ee41", "0x326C977E6efc84E512bB9C30f76E30c160eD06FB", "0xE6CaA60d4421F01647E894F843682047ecDeBB08"]
  const getchainId = async () => {
    const { chainId } = await Bankcontract()
    console.log(chainId)
    if (chainId == '11155111') { arr = arr1 }
    else if (chainId == '80001') { arr = arr2 }
  }
  getchainId()


  const [anchorEl, setAnchorEl] = useState(null);
  const [btname, setBtnName] = useState("")
  useEffect(() => {
    if (balance && access) {
      setBtnName("TOKEN BALANCE")
      setPadding('50px')
    }
    else if (balance) {
      setBtnName("CHECK BALANCE")
      setPadding('50px')
    }
    else {
      setBtnName("TOKEN")
      setPadding('20px')
    }
  })


  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = async (TokenAddress) => {
    // Handle selected option
    console.log('Token Address:', TokenAddress);
    const { BankContract, signer, chainId } = await Bankcontract()

    let amount;
    if (!balance) {
      localStorage.setItem("TokenAddress", TokenAddress)
      setLoading(true)
      try {
        let tokendetails = await BankContract.tokenDetails(TokenAddress)
        await tokendetails.wait()
        setLoading(false)
        navigate('/token');
      }
      catch (error) {
        setLoading(false)
      }

      handleMenuClose();
    }
    else {
      if (access) {
        const arr = [JSON.parse(localStorage.getItem(`${chainId}`))][0]
        let balance = 0;
        for (let key in arr) {
          if (key == TokenAddress) {
            balance = Number(arr[key])
          }
        }

        setBal(balance)
        setCrypto('Token')
        setType('TKN')
        navigate('/balance')
      }
      else {
        const signerAddress = await signer.getAddress()
        amount = await BankContract.userTokenBalance(signerAddress, TokenAddress)
        const userBalance = ethers.utils.formatEther(ethers.utils.parseUnits(amount.toString(), "wei"));
        setAmount(userBalance)
        setType('TOKEN')
        setOperation('CHECK')
        navigate('/complete')
      }

    }

  };
  // px: '30px',
  // py: '13px',
  // width: 'max-content',
  return (
    <div className='m-auto'>
      <Button
        onClick={handleButtonClick}
        sx={{
          bgcolor: '#4072d9',
          borderRadius: '50px',
          px: { padding },
          py: '15px',
          width: '100%',
          outline: 'none',
          boxShadow: '0px 4px 10px rgba(0, sf, 0, 0.25)',
          fontWeight: 'bold',
          color: 'white',
          fontSize: '1.4rem',

          boxShadow: '0 3px 6px black',
          '&:hover': {
            backgroundColor: '#2e58ad',
          },
        }}
      >
        {btname}
      </Button>
      {loading && (<div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity as needed
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      > <div style={{ color: 'blue' }}>
          <TailSpin color='#4072d9' size='50' />
        </div> </div>)}
      {!loading && <Menu sx={{ marginLeft: '40px', borderRadius: '20px' }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >

        <MenuItem onClick={() => handleOptionSelect(arr[0])} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#4072d9', fontWeight: 'bold', textShadow: '0px 4px 10px rgba(0,sf,0,0.25)', '&:hover': {
            backgroundColor: '#4072d9',
            color: 'white'
          }
        }}>

          SAI KIRAN TOKEN
        </MenuItem>

        <MenuItem onClick={() => handleOptionSelect(arr[1])} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', color: '#4072d9', width: '100%', fontWeight: 'bold', textShadow: '0px 4px 10px rgba(0,sf,0,0.25)', '&:hover': {
            backgroundColor: '#4072d9',
            color: 'white'
          }
        }}>
          LINK TOKEN
        </MenuItem>


        <MenuItem onClick={() => handleOptionSelect(arr[2])} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#4072d9', width: '100%', fontWeight: 'bold', textShadow: '0px 4px 10px rgba(0,sf,0,0.25)', '&:hover': {
            backgroundColor: '#4072d9',
            color: 'white'
          }
        }}>
          MAGIC TOKEN
        </MenuItem>

      </Menu>}
    </div>
  );
};

export default DropdownMenu;
