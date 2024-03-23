const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route
 */
router.get('/:id', (req, res) => {
  console.log('this is the parks and playground i want', req.params.id);
  // GET route code here
  const parksnplayQuery = `SELECT "location".title, "location".address, "location".info FROM "location"
  WHERE "location".id =$1
  GROUP BY "location".title, "location".address, "location".info;`;

  pool
    .query(parksnplayQuery, [req.params.id])
    .then((results) => res.send(results.rows[0]))
    .catch((error) => {
      console.log('problems with the parks and playground info!!!!!', error);
      res.sendStatus(500);
    });
});

router.get('/inclusive/:id', (req, res) => {
  // GET route code here
  const inclusiveQuery = `SELECT "inclusive_features".feature FROM "location"
  JOIN "location_inclusive_features" ON "location_inclusive_features".location_id = "location".id
  JOIN "inclusive_features" ON "inclusive_features".id = "location_inclusive_features".inclusive_features_id 
  WHERE "location".id =$1
  GROUP BY "inclusive_features".feature;`;

  pool
    .query(inclusiveQuery, [req.params.id])
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('problems with the inclusive stuff info!!!!!', error);
      res.sendStatus(500);
    });
});

router.get('/review/:id', (req, res) => {
  // GET route code here
  const reviewQuery = `SELECT "review".review_analysis, "location".id FROM "location"
  JOIN "review" ON "review".location_id = "location".id
  WHERE "location".id = $1
  ORDER BY "review".id DESC 
  LIMIT 3`;

  pool
    .query(reviewQuery, [req.params.id])
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('problems with the review!!!!!', error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log(req.body);
  //this is the post call for my CRUD
  const insertReviewQuery = `
  INSERT INTO "review" ("location_id", "review_analysis")
VALUES ($1, $2) `;
  const insertReviewValues = [req.body.location_id, req.body.review_analysis];
  pool
    .query(insertReviewQuery, insertReviewValues)
    .then((results) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('this is an error in the post route', error);
      res.sendStatus(500);
    });
});

module.exports = router;
