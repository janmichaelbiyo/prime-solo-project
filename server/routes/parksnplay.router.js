const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route
 */
router.get('/:id', (req, res) => {
  console.log('this is the parks and playground i want', req.params.id);
  // GET route code here
  const parksnplayQuery = `SELECT "location".title, "location".address, "location".info, string_agg("inclusive_features".feature, ', ') AS "Inclusive Features" FROM "location"
JOIN "location_inclusive_features" ON "location_inclusive_features".location_id = "location".id
JOIN "inclusive_features" ON "inclusive_features".id = "location_inclusive_features".inclusive_features_id 
WHERE "location".id = $1
GROUP BY "location".title, "location".address, "location".info;`;

  pool
    .query(parksnplayQuery, [req.params.id])
    .then((results) => res.send(results.rows[0]))
    .catch((error) => {
      console.log('problems with the parks and playground info!!!!!', error);
      res.sendStatus(500);
    });
});

module.exports = router;
