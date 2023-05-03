import { useContext, useState } from 'react';
import { Modal, Box, Typography, Button, TextField, IconButton } from '@mui/material';
import { Cancel, Check } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { balanceContext } from '../../App';

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
  const {setOperation,setType,setAmount} = useContext(balanceContext)
  const navigate = useNavigate()
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
            {name == "TOKEN" && <TextField label="Token Address" variant="outlined" fullWidth margin="normal" />}
            {text != "CHECK" && <TextField label="Amount" onChange={(event)=>{setAmount(event.target.value)}} variant="outlined" fullWidth margin="normal" />}
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
                onClick={(event) => { 
                  setType(name)
                  setOperation(text)
                  navigate('/complete') 
                }}
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