import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <footer>
      &copy; Prime Digital Academy
      <br></br>
      <br />
      <Link className="footerLink" to="/about">
        About
      </Link>
    </footer>
  );
}

export default Footer;
