const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route
 */
router.get('/', (req, res) => {
  // GET route code here
  pool
    .query(
      `SELECT "location".id, "location".title, "location".type, "location".lat, "location".long FROM "location" 
      GROUP BY "location".id, "location".title, "location".type, "location".lat, "location".long;`
    )
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('problems with the map info!!!!!', error);
      res.sendStatus(500);
    });
});

module.exports = router;
