import React from 'react';
import { useHistory } from 'react-router-dom';

function ReviewsPage() {
  const history = useHistory();

  const handleParksNPlayPage = (event) => {
    event.preventDefault();
    history.push('/parksnplay');
  };

  return (
    <div>
      <p> stand in for my reviews page</p>
      <button onClick={handleParksNPlayPage}>Parks & Playground</button>
    </div>
  );
}

export default ReviewsPage;
