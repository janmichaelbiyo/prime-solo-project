import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

import './RegisterPage.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className="registerMain">
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btnR btn_asLinkR"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
      <Box
        sx={{
          width: 250,
          right: 0,
          bottom: 0,
          position: 'absolute',
          backgroundColor: 'gainsboro',
        }}
      >
        <Paper>
          Photo by{' '}
          <a href="https://unsplash.com/@andrewtneel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Andrew Neel
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/photos/maps-lying-on-the-floor-1-29wyvvLJA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </Paper>
      </Box>
    </div>
  );
}

export default RegisterPage;
