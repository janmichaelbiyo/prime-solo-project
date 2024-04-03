import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const history = useHistory();

  return (
    <div id="loginMain">
      <LoginForm />
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
      <div className="thanks">
        Photo by{' '}
        <a href="https://unsplash.com/@andrewtneel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Andrew Neel
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/photos/maps-lying-on-the-floor-1-29wyvvLJA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
