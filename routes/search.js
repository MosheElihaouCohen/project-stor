const express = require('express');
const router = express.Router();
const searchController = require('../controllers/Search');
                                              // צריך להחליף את הS של ה search לאות גדולה

router.get('/Search',searchController.ExtractQuery);

module.exports = router;