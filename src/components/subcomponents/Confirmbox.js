import { useContext, useState } from 'react';
import { Modal, Box, Typography, Button, TextField, IconButton } from '@mui/material';
import { Cancel, Check } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { balanceContext } from '../../App';
import { bankABI } from './ABI/simpleBank';
import { bank } from './ABI/TokenBank';
import {token} from './ABI/Tokencontract'
import Loader from 'react-loader-spinner';

// import { contract } from './Choosecrypto';
const {ethers} = require('ethers')
const theme = createTheme({
  palette: {
    primary: {
      main: '#86c232',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'Poppins', 'Roboto Condensed', 'sans-serif'].join(','),
  },
});

export const ConfirmBox = ({ value, handleClose, text, name, val }) => {
  let contract;
  const {setOperation,setType,setAmount,amount,setTokenAddress,TokenAddress} = useContext(balanceContext)
  const navigate = useNavigate()

  async function deposit(){


    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const contractAddress = '0xa70f02187FB17423d190500f16F75b3f0F0EAF5B'
    const BankAddress = '0x114C8CBf548A6C249A06C60412878770DCF887a7'

    if(name==='ETHER'){
      contract = new ethers.Contract(contractAddress,bankABI,signer)
        await contract.depositEther({value:ethers.utils.parseEther(amount)})
        console.log("deposited",amount)
          navigate('/complete');
    }
    else{
  
      contract = new ethers.Contract(BankAddress, bank, signer);
      const TokenAddress = localStorage.getItem('TokenAddress');
      const connectedAddress = localStorage.getItem('connectedAddress')
      const TokenContract = new ethers.Contract(TokenAddress, token, signer);
      const amountInWei = ethers.utils.parseEther(amount);
      
      // Check current allowance
      const currentAllowance = await TokenContract.allowance(connectedAddress, BankAddress);
      
      // If current allowance is less than the desired amount, update the allowance
      if (currentAllowance.lt(amountInWei)) {
        const tx = await TokenContract.approve(BankAddress, amountInWei);
        await tx.wait();
        console.log("Updated allowance");
      }
      
      // Deposit tokens
      const depositTx = await contract.depositTokens(amountInWei);
      await depositTx.wait();
      console.log("Deposited Tokens", amount);
      
      navigate('/complete');
    }
  }

  async function withdraw(){
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const contractAddress = '0xa70f02187FB17423d190500f16F75b3f0F0EAF5B'
    const BankAddress = '0x114C8CBf548A6C249A06C60412878770DCF887a7'

    if(name==='ETHER'){

      contract = new ethers.Contract(contractAddress,bankABI,signer)
      await contract.withdrawEther(ethers.utils.parseEther(amount))

        console.log("Withdraw",amount) 
          navigate('/complete');
  
    }
    else{

      contract = new ethers.Contract(BankAddress,bank,signer)
      await contract.withdrawTokens(ethers.utils.parseEther(amount))
      console.log("Withdrawn Tokens",amount)
      navigate('/complete')
    }

  }

  async function tokenBank(){
    const BankAddress = '0x114C8CBf548A6C249A06C60412878770DCF887a7'
    // console.log("SignerDetails",signerDetails)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    contract = new ethers.Contract(BankAddress,bank,signer)
    await contract.tokenDetails(TokenAddress)
    console.log(await contract.token())
    localStorage.setItem("TokenAddress",TokenAddress)
    navigate('/token')
  }



  return (
    <ThemeProvider theme={theme}>
      <div className="Confirmbg">
        <Modal
          open={value}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 24,
              padding: '40px',
              borderRadius: '4px',
              textAlign: 'center',
              maxWidth: '600px',
            }}
          >
            <IconButton onClick={handleClose} sx={{ color: '#6b6e70', float: 'right' }}>
              <Cancel sx={{ color: 'red' }} />
            </IconButton>
            <Typography variant="h6" component="h2" sx={{ color: '#86c232', marginBottom: '20px', fontWeight: 'bold' }}>
              {text} {name}
            </Typography>
            {name == "TOKEN" && text==='choose' && <TextField label="Token Address" variant="outlined" onChange={(event)=>{setTokenAddress(event.target.value)}}fullWidth margin="normal" />}
            {text != "CHECK" && text!=='choose' && <TextField label="Amount" onChange={(event)=>{setAmount(event.target.value)}} variant="outlined" fullWidth margin="normal" />}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: 550, height: 100, mt: 2 }}>
              <Button
                variant="outlined"
                onClick={handleClose}
                sx={{ mr: 2, height: 40, mt: 10, color: '#86c232', borderColor: '#86c232', fontWeight: 'bold' }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={(event) => {{
                  if (text === 'DEPOSIT') {
                    deposit();
                  } else if (text === 'WITHDRAW') {
                    withdraw();
                  }
                  else{
                    tokenBank()
                  }
                  setType(name);
                  setOperation(text);
                  
                }}}
                sx={{ mt: 10, mr: 4, bgcolor: '#86c232', height: 40, color: 'white', fontWeight: 'bold' }}
              >
                Confirm
                <Check sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
};