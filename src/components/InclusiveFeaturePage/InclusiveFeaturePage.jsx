import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function InclusiveFeaturePage() {
  const history = useHistory();
  const inclusive = useSelector((store) => store.inclusive);

  const handleParksNPlayPage = (event) => {
    event.preventDefault();
    history.push('/parksnplay');
  };

  return (
    <div>
      <h4>Inclusive Features</h4>
      {inclusive.map((inclusive) => {
        return (
          <div>
            <p>{inclusive.feature}</p> <bk></bk>
            <button id="myToggleButton">Toggle Status</button>
            <button>Delete</button>
          </div>
        );
      })}

      <button onClick={handleParksNPlayPage}>Parks & Playground</button>
    </div>
  );
}

export default InclusiveFeaturePage;
