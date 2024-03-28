import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

function ParksNPlayPage() {
  const parksnplay = useSelector((store) => store.parksnplay);
  const inclusive = useSelector((store) => store.inclusive);
  const review = useSelector((store) => store.review);
  const dispatch = useDispatch();
  let location = useLocation();
  let history = useHistory();

  const locationId = location.state;

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
    history.push({ pathname: '/inclusive', state: locationId });
  };

  return (
    <>
      <h1>{parksnplay.title}</h1>

      <h3> Address </h3>
      <p>{parksnplay.address}</p>

      <h3> Info </h3>

      <p> {parksnplay.info}</p>

      <h3>Inclusive Features</h3>
      {inclusive.map((inclusive) => {
        return (
          <div>
            <p>{inclusive.feature}</p>
          </div>
        );
      })}

      <h3>Reviews</h3>
      {review.map((review) => {
        return (
          <div>
            <p>{review.review_analysis}</p>
          </div>
        );
      })}

      <button onClick={handleInclusiveFeaturePage}>Inclusive Features</button>
      <button onClick={handleMapPage}>Map</button>
      <button onClick={handleReviewsPage}>Reviews</button>
    </>
  );
}

export default ParksNPlayPage;
