import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import LogOutButton from '../LogOutButton/LogOutButton';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useSelector((store) => store.location);

  const handleParksNPlayPage = (event) => {
    event.preventDefault();
    console.log('this is the map click', event.target);
    history.push('/parksnplay');
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_LOCATIONS' });
  }, []);

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
              <Popup key={location.id}>
                {location.title} <br />
                <button onClick={handleParksNPlayPage}>
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
