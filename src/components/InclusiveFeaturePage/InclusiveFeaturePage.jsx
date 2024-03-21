import React from 'react';
import { useHistory } from 'react-router-dom';

function InclusiveFeaturePage() {
  const history = useHistory();
  const handleParksNPlayPage = (event) => {
    event.preventDefault();
    history.push('/parksnplay');
  };

  return (
    <div>
      <p> stand in the inclusive features </p>
      <button onClick={handleParksNPlayPage}>Parks & Playground</button>
    </div>
  );
}

export default InclusiveFeaturePage;
