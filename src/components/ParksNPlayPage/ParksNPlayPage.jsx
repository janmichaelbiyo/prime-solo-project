import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import './ParksNPlayPage.css';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import MapIcon from '@mui/icons-material/Map';
import RateReviewIcon from '@mui/icons-material/RateReview';
import pnpPic from '../../../public/images/newpark.png';

function ParksNPlayPage() {
  const parksnplay = useSelector((store) => store.parksnplay);
  const inclusive = useSelector((store) => store.inclusive);
  const review = useSelector((store) => store.review);
  const pictures = useSelector((store) => store.pictures);
  const user = useSelector((store) => store.user);
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

  return (
    <>
      <Box class="pnpmain">
        <Grid className="infoMain" container spacing={2} alignItems={'center'}>
          <Grid xs={12} item>
            <h1 class="pnptitle">{parksnplay.title}</h1>
          </Grid>
          <Grid className="infoAddress" xs={4} item>
            <h2> Address </h2>
            <p className="addressSize">
              <a href={parksnplay.site}>{parksnplay.address}</a>
            </p>
          </Grid>
          <Grid xs={8} item>
            <Box>
              <img src={pnpPic} alt="park or playground" className="picture" />
            </Box>
            <Box textAlign={'right'}>
              Photo by{' '}
              <a href="https://unsplash.com/@juliablumberg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Julia Blumberg
              </a>{' '}
              on{' '}
              <a href="https://unsplash.com/photos/a-broken-metal-object-on-a-concrete-surface-fxrgKbROwwk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="inclusivepnpMain">
              <Box className="inclusiveHeaderbackground">
                <Paper
                  elevation={24}
                  sx={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <p className="inclusiveSize">Inclusive Features</p>
                </Paper>
              </Box>
              {inclusive.map((inclusive) => {
                return (
                  <div>
                    <p>
                      <Paper
                        elevation={0}
                        sx={{
                          backgroundColor: 'transparent',
                          fontSize: 20,
                          fontWeight: 'bold',
                        }}
                      >
                        {inclusive.feature}
                      </Paper>
                      <br />
                      <Paper
                        elevation={2}
                        sx={{ backgroundColor: 'transparent', fontSize: 24 }}
                      >
                        {inclusive.status ? 'Available' : 'Unavailable'}
                      </Paper>
                    </p>
                  </div>
                );
              })}
            </Box>
          </Grid>
          <Grid className="infoText" xs={8} item>
            <h3 className="infoTextH"> Info </h3>
            <p className="infoSize"> {parksnplay.info}</p>
          </Grid>

          <Grid xs={12} item>
            <Box className="reviewpnpMain">
              <h3 className="infoTextH">Reviews</h3>
              {review.map((review) => {
                return (
                  <ul className="parksnplayreviewStyle">
                    <li className="parksnplayreviewSize">
                      {review.review_analysis}
                    </li>
                    <p className="parksnplayreviewerSize">
                      by {review.username}
                    </p>
                  </ul>
                );
              })}
            </Box>
          </Grid>

          <Grid xs={4} item>
            <Box textAlign={'center'}>
              <Button
                onClick={handleInclusiveFeaturePage}
                variant="contained"
                size="large"
                sx={{ backgroundColor: 'purple' }}
                startIcon={<AccessibleForwardIcon />}
              >
                Inclusive Features
              </Button>
            </Box>
          </Grid>

          <Grid xs={4} item>
            <Box textAlign={'center'}>
              <Button
                onClick={handleMapPage}
                variant="contained"
                size="large"
                sx={{ backgroundColor: 'purple' }}
                startIcon={<MapIcon />}
              >
                Map
              </Button>
            </Box>
          </Grid>

          <Grid xs={4} item>
            <Box textAlign={'center'}>
              <Button
                onClick={handleReviewsPage}
                variant="contained"
                size="large"
                sx={{ backgroundColor: 'purple' }}
                startIcon={<RateReviewIcon />}
              >
                Reviews
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ParksNPlayPage;
