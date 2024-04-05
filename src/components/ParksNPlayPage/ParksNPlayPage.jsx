import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import './ParksNPlayPage.css';
import { Box, Container, Stack } from '@mui/material';
import { styled } from '@mui/system';

function ParksNPlayPage() {
  const parksnplay = useSelector((store) => store.parksnplay);
  const inclusive = useSelector((store) => store.inclusive);
  const review = useSelector((store) => store.review);
  const dispatch = useDispatch();
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
    history.push('/inclusive');
  };

  const Item = styled('div')(({ theme }) => ({
    backgroundColor: 'gray',
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
  }));

  return (
    <div class="pnpmain">
      <Box sx={{ width: '50%' }}>
        <Stack
          direction={'column'}
          justifyContent="space-between"
          textAlign={'center'}
          spacing={2}
        >
          <Item
            sx={{
              right: 500,
              position: 'absolute',
            }}
          >
            <h1 class="pnptitle">{parksnplay.title}</h1>
          </Item>
          <Item
            sx={{
              right: 500,
              bottom: 200,
              position: 'absolute',
            }}
          >
            <h3> Address </h3>
            <p>{parksnplay.address}</p>
          </Item>

          <Item>
            <h3> Info </h3>
            <p> {parksnplay.info}</p>
          </Item>
        </Stack>
      </Box>
      <h3>Inclusive Features</h3>
      {inclusive.map((inclusive) => {
        return (
          <div>
            <p>
              {inclusive.feature} <bk></bk>
              {inclusive.status ? 'Available' : 'Unavailable'}
            </p>
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
      Photo by{' '}
      <a href="https://unsplash.com/@7ndy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        David Knudsen
      </a>{' '}
      on{' '}
      <a href="https://unsplash.com/photos/man-and-woman-kissing-on-beach-during-daytime-4s-D0CAI6UQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
    </div>
  );
}

export default ParksNPlayPage;
