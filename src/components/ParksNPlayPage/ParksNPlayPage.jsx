import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ParksNPlayPage() {
  const parksnplay = useSelector((store) => store.parksnplay);
  const review = useSelector((store) => store.review);
  const dispatch = useDispatch();
  let history = useHistory();

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
      <h1> {parksnplay.title} </h1>

      <h2>Address</h2>
      <p>{parksnplay.address}</p>

      <h3>Info</h3>
      <p> {parksnplay.info}</p>

      <h4>Inclusive Features</h4>
      <p>{parksnplay.string_agg}</p>

      <h5>Review</h5>
      <p>{review.review_analysis}</p>

      <button onClick={handleInclusiveFeaturePage}>Inclusive Features</button>
      <button onClick={handleMapPage}>Map</button>
      <button onClick={handleReviewsPage}>Reviews</button>
    </div>
  );
}

export default ParksNPlayPage;
