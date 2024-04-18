import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './InclusiveFeaturePage.css';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import inclusiveImg from '../../../public/images/inclusive.png';

function InclusiveFeaturePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const inclusive = useSelector((store) => store.inclusive);
  const parksnplayid = useSelector((store) => store.parksnplayid);
  const parksnplay = useSelector((store) => store.parksnplay);

  const handleParksNPlayPage = (event) => {
    event.preventDefault();
    history.push('/parksnplay');
  };

  const handleInsclusiveFeature = (event) => {
    event.preventDefault();
    console.log('i want to toggle if its available or not');
    dispatch({
      type: 'CHANGE_INCLUSIVE',
      payload: { targetId: event.target.id, locationId: parksnplayid },
    });
  };

  const handleDeleteInclusive = (event) => {
    event.preventDefault();
    dispatch({
      type: 'DELETE_INCLUSIVE',
      payload: { targetId: event.target.id, locationId: parksnplayid },
    });
  };

  return (
    <>
      <Box className="inclusiveMainpage">
        <Grid container spacing={2} alignItems={'center'}>
          <Grid xs={12} item>
            <h1 className="inclusiveH1">{parksnplay.title}</h1>
          </Grid>
          <Grid xs={4} item textAlign={'center'}>
            <Box>
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
                  <div key={inclusive.id} className="inclusiveList">
                    <p className="inclusivefeatureSize">{inclusive.feature}</p>
                    <p className="inclusviestatusSize">
                      {inclusive.status ? 'Available' : 'Unavailable'}
                    </p>

                    <Button
                      onClick={handleInsclusiveFeature}
                      id={inclusive.id}
                      variant="contained"
                      size="large"
                      sx={{ backgroundColor: 'purple' }}
                      endIcon={<AccessibleForwardIcon />}
                    >
                      Availability
                    </Button>
                    {'            '}

                    <Button
                      onClick={handleDeleteInclusive}
                      id={inclusive.id}
                      variant="contained"
                      size="large"
                      sx={{ backgroundColor: 'purple' }}
                      endIcon={<DeleteOutlinedIcon />}
                    >
                      Delete
                    </Button>
                  </div>
                );
              })}
            </Box>
          </Grid>
          <Grid xs={6} item textAlign={'center'}>
            <Box>
              <img
                src={inclusiveImg}
                alt="new inclusive sign"
                className="pictureinclusive"
              />
            </Box>
          </Grid>
          <Grid xs={12} item textAlign={'center'}>
            <Button
              onClick={handleParksNPlayPage}
              variant="contained"
              size="large"
              sx={{ backgroundColor: 'purple' }}
              startIcon={<AttractionsOutlinedIcon />}
            >
              Parks or Playground
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default InclusiveFeaturePage;
