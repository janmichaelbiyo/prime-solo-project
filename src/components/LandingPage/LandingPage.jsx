import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Hi ya Hi!');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>
      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            This is Xavier's Treasure Map, it is a super duper secret map with a
            list of places that the great explorer Xavier del pajaro has visited
            or heard about in his travels through-out the 'mitten'.
          </p>
          <p>
            He would love to share this great wealth of information with you
            dear 'User'. Please give your honest reviews and updates about these
            great treasured locations. So go forth and explore all these super
            duper locations he has found and please report back anytime because
            things are always changing.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
      <div className="grid-col_12">
        Photo by{' '}
        <a
          href="https://unsplash.com/@anniespratt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          color="aquamarine"
        >
          Annie Spratt
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/photos/child-looking-at-map-kZO9xqmO_TA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
