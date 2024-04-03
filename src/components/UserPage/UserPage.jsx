import React, { useEffect } from 'react';
import './UserPage.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Icon } from 'leaflet';
import Button from '@mui/material/Button';
import AttractionsIcon from '@mui/icons-material/Attractions';

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

  const housingIcon = new Icon({
    iconUrl:
      'https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/64/external-park-public-service-photo3ideastudio-solid-photo3ideastudio.png',
    iconSize: [28, 28],
    iconAnchor: [5, 5],
    popupAnchor: [1, -2],
  });

  {
    /* <a  href="https://icons8.com/icon/MwBX4tOTpRYk/park">Park</a> icon by <a href="https://icons8.com">Icons8</a> */
  }

  return (
    <div className="container1">
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
            <Marker
              key={location.id}
              position={[location.lat, location.long]}
              icon={housingIcon}
            >
              <Popup>
                <div1 class="maptitle">
                  {location.title} <br />
                </div1>
                <div1 class="popup">
                  <Button
                    onClick={handleParksNPlayPage}
                    variant="outlined"
                    id={location.id}
                    size="small"
                    startIcon={<AttractionsIcon />}
                  >
                    {location.type}{' '}
                  </Button>
                </div1>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
