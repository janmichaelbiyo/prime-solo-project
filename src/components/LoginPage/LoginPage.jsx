import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function LoginPage() {
  const history = useHistory();

  return (
    <div id="loginMain">
      <LoginForm />
      <center>
        <button
          type="button"
          className="btnL btn_asLinkL"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
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

export default LoginPage;
