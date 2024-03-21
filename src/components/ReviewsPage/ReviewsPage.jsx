import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewsPage() {
  const history = useHistory();
  const review = useSelector((store) => store.review);

  const handleParksNPlayPage = (event) => {
    event.preventDefault();
    history.push('/parksnplay');
  };

  return (
    <div>
      <p> stand in for my reviews page</p>
      <p>{review.review_analysis}</p>
      <button onClick={handleParksNPlayPage}>Parks & Playground</button>
    </div>
  );
}

export default ReviewsPage;
