import React from 'react';
import './AboutPage.css';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import kidImg from '../../../public/images/theBird.png';
import tecImg from '../../../public/images/TechUsed.png';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="about">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={6}
      >
        <Box
          component="img"
          height="10%"
          width="30%"
          display="flex"
          alt="xavier in a swing"
          src={kidImg}
        ></Box>

        <Box
          height={300}
          width={300}
          display="flex"
          my={7}
          alignItems="center"
          p={6}
          paddingTop={20}
          sx={{ fontSize: 24, fontWeight: '700' }}
        >
          This page is all thanks to the best little boy I know. His kind heart
          and warm spirit embodies this page. We hope you enjoy it and visit all
          these great parks and playgrounds. I believe Mr Xavier hopes to expand
          to all the states since one of his goals is to visit all the national
          parks of the US. If ya ever see us around and about come say hi!!!!.{' '}
        </Box>
        <Box
          height={700}
          width={700}
          sx={{ alignContent: 'center', paddingTop: 20 }}
        >
          <img src={tecImg} alt="Tech Used" />
        </Box>
      </Stack>
    </div>
  );
}

export default AboutPage;
