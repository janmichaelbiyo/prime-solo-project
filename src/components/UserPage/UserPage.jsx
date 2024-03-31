import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LogOutButton from '../LogOutButton/LogOutButton';
import AttractionsIcon from '@mui/icons-material/Attractions';
import { SvgIcon } from '@mui/material';
import { Icon } from '@mui/material';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useSelector((store) => store.location);

  const handleParksNPlayPage = (event) => {
    event.preventDefault();

    dispatch({
      type: 'FETCH_PARK_N_PLAY',
      payload: event.target.id,
    });
    dispatch({
      type: 'FETCH_REVIEW',
      payload: event.target.id,
    });
    dispatch({
      type: 'FETCH_INCLUSIVE',
      payload: event.target.id,
    });
    dispatch({
      type: 'SET_PARKS_N_PLAY_ID',
      payload: event.target.id,
    });

    history.push('/parksnplay');
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_LOCATIONS' });
  }, []);

  const attractionsIcon = L.divIcon({
    className: 'custom-icon',
    html: `<div style="display: flex; align-items: center; justify-content: center;"><span style="font-size: 24px; color: #ff0000;"><svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">${AttractionsIcon}</svg></span></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>

      <MapContainer
        center={[45.050194, -84.933417]}
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: '90vh', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location.map((location) => {
          return (
            <Marker key={location.id} position={[location.lat, location.long]}>
              <Popup>
                {location.title} <br />
                <button onClick={handleParksNPlayPage} id={location.id}>
                  {' '}
                  {location.type}{' '}
                </button>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
