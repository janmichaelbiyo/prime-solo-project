import React from 'react';
import './AboutPage.css';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div>
      <p className="about">
        This page is all thanks to the best little boy I know. His kind heart
        and warm spirit embodies this page. We hope you enjoy it and visit all
        these great parks and playgrounds. I believe Mr Xavier hopes to expand
        to all the states since one of his goals is to visit all the national
        parks of the US. If ya ever see us around and about come say hi!!!!.{' '}
      </p>
    </div>
  );
}

export default AboutPage;
