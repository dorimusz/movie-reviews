import React from 'react'
import { message } from '../common/StatusMessages';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Message = ({status, setStatus}) => {

  return (
    <Box sx={{ width: '100%' }}>
        <Alert 
          severity="error" 
          onClick={() => {
            setStatus(false)
          }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message(status)}
        </Alert>
    </Box>
  );
}

export default Message