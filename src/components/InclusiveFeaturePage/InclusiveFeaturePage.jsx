import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function InclusiveFeaturePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const inclusive = useSelector((store) => store.inclusive);
  const parksnplayid = useSelector((store) => store.parksnplayid);

  const handleParksNPlayPage = (event) => {
    event.preventDefault();
    history.push('/parksnplay');
  };

  const handleInsclusiveFeature = (event) => {
    event.preventDefault();
    console.log('i want to toggle if its available or not');
    dispatch({
      type: 'CHANGE_INCLUSIVE',
      payload: { targetId: event.target.id, locationId: parksnplayid },
    });
  };

  const handleDeleteInclusive = (event) => {
    event.preventDefault();
    dispatch({
      type: 'DELETE_INCLUSIVE',
      payload: { targetId: event.target.id, locationId: parksnplayid },
    });
  };

  return (
    <div>
      <h4>Inclusive Features</h4>
      {inclusive.map((inclusive) => {
        return (
          <div key={inclusive.id}>
            <p>{inclusive.feature}</p>
            <p>{inclusive.status ? 'Available' : 'Unavailable'}</p>
            <button onClick={handleInsclusiveFeature} id={inclusive.id}>
              Available or Not
            </button>
            <button onClick={handleDeleteInclusive} id={inclusive.id}>
              Delete
            </button>
          </div>
        );
      })}

      <button onClick={handleParksNPlayPage}>Parks & Playground</button>
    </div>
  );
}

export default InclusiveFeaturePage;
