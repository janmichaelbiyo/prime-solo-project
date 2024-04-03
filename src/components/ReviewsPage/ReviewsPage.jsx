import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './ReviewsPage.css';

function ReviewsPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const review = useSelector((store) => store.review);
  const parksnplay = useSelector((store) => store.parksnplay);
  const parksnplayid = useSelector((store) => store.parksnplayid);
  const [newReview, setNewReview] = useState({
    review_analysis: '',
    location_id: '',
  });

  const handleParksNPlayPage = (event) => {
    event.preventDefault();
    history.push('/parksnplay');
  };

  const handleAddReview = (event) => {
    event.preventDefault();
    dispatch({
      type: 'POST_REVIEW',
      payload: {
        newReview,
        locationId: parksnplayid,
      },
    });
    setNewReview({ review_analysis: '' });
  };

  return (
    <div className="reviewMain">
      <h1>{parksnplay.title}</h1>
      {review.map((review) => {
        return <p>{review.review_analysis}</p>;
      })}
      <form>
        <label> Review: </label> <br></br>
        <textarea
          rows="30"
          cols="150"
          value={newReview.review_analysis}
          onChange={(event) =>
            setNewReview({
              ...newReview,
              review_analysis: event.target.value,
              location_id: parksnplayid,
            })
          }
        ></textarea>
      </form>
      <button onClick={handleAddReview}>Submit</button>
      <button onClick={handleParksNPlayPage}>Parks & Playground</button>
      Photo by{' '}
      <a href="https://unsplash.com/@towfiqu999999?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Towfiqu barbhuiya
      </a>{' '}
      on{' '}
      <a href="https://unsplash.com/photos/a-row-of-yellow-stars-sitting-on-top-of-a-blue-and-pink-surface-0ZUoBtLw3y4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
    </div>
  );
}
export default ReviewsPage;
