import React from 'react';
import { useHistory } from 'react-router-dom';

function ParksNPlayPage() {
  const history = useHistory();

  const handleMapPage = (event) => {
    event.preventDefault();
    history.push('/user');
  };

  const handleReviewsPage = (event) => {
    event.preventDefault();
    history.push('/review');
  };

  const handleInclusiveFeaturePage = (event) => {
    event.preventDefault();
    history.push('/inclusive');
  };

  return (
    <div>
      <p> stand in for my parks and playground page</p>
      <button onClick={handleInclusiveFeaturePage}>Inclusive Features</button>
      <button onClick={handleMapPage}>Map</button>
      <button onClick={handleReviewsPage}>Reviews</button>
    </div>
  );
}

export default ParksNPlayPage;
