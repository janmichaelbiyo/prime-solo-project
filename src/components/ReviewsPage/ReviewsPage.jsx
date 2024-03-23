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

  const handleAddReview = (event) => {
    event.preventDefault();
    console.log('post route will be added later');
  };

  return (
    <div>
      {review.map((review) => {
        return (
          <div>
            <p>{review.review_analysis}</p>
          </div>
        );
      })}

      <form onSubmit={handleAddReview}>
        <label> Review: </label> <br></br>
        <textarea rows="30" cols="150"></textarea>
        <br></br>
        <button>Add Review</button>
      </form>

      <button onClick={handleParksNPlayPage}>Parks & Playground</button>
    </div>
  );
}

export default ReviewsPage;
