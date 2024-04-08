import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './InclusiveFeaturePage.css';
import Switch from '@mui/material/Switch';

function InclusiveFeaturePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const inclusive = useSelector((store) => store.inclusive);
  const parksnplayid = useSelector((store) => store.parksnplayid);
  const parksnplay = useSelector((store) => store.parksnplay);

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
    <div className="inclusiveMain">
      <h1>{parksnplay.title}</h1>
      <h3>Inclusive Features</h3>
      {inclusive.map((inclusive) => {
        return (
          <div key={inclusive.id} className="inclusiveList">
            <p>{inclusive.feature}</p>
            <p>{inclusive.status ? 'Available' : 'Unavailable'}</p>
            {/* <button onClick={handleInsclusiveFeature} id={inclusive.id}>
              Available or Not
            </button> */}
            <Switch
              onChange={handleInsclusiveFeature}
              id={inclusive.id}
              label="here"
              size="large"
            />
            <button onClick={handleDeleteInclusive} id={inclusive.id}>
              Delete
            </button>
          </div>
        );
      })}
      <button onClick={handleParksNPlayPage}>Parks & Playground</button>
      Photo by{' '}
      <a href="https://unsplash.com/@sharonmccutcheon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Alexander Grey
      </a>{' '}
      on{' '}
      <a href="https://unsplash.com/photos/orange-green-and-blue-abstract-painting-Ur_NzyKfCo4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
    </div>
  );
}

export default InclusiveFeaturePage;
