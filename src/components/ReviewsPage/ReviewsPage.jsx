import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './ReviewsPage.css';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import AttractionsIcon from '@mui/icons-material/Attractions';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

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
    <Box className="reviewMain">
      <Grid container spacing={2} alignItems={'center'}>
        <Grid xs={12} item>
          <h1 className="textCenter">{parksnplay.title}</h1>
        </Grid>
        <Grid xs={12} item>
          <Box className="listR">
            {review.map((review) => {
              return (
                <ul>
                  <li>{review.review_analysis}</li>
                </ul>
              );
            })}
          </Box>
        </Grid>
        <Grid xs={12} item>
          <Box className="form">
            <form>
              <label> Review: </label> <br></br>
              <textarea
                rows="30"
                cols="115"
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
            <Button
              onClick={handleAddReview}
              variant="contained"
              size="large"
              sx={{ backgroundColor: 'purple' }}
              startIcon={<DoneOutlineIcon />}
            >
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid xs={12} item>
          <Box textAlign={'center'} sx={{ paddingTop: 5 }}>
            <Button
              onClick={handleParksNPlayPage}
              variant="contained"
              size="large"
              sx={{ backgroundColor: 'purple' }}
              startIcon={<AttractionsIcon />}
            >
              Parks & Playground
            </Button>
          </Box>
        </Grid>

        <Grid xs={12} item>
          <Box textAlign={'right'}>
            Photo by{' '}
            <a href="https://unsplash.com/@towfiqu999999?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Towfiqu barbhuiya
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/photos/a-row-of-yellow-stars-sitting-on-top-of-a-blue-and-pink-surface-0ZUoBtLw3y4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default ReviewsPage;
