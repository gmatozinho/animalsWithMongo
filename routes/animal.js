var express = require('express');
var router = express.Router();

/* GET animal listing. */
router.get('/', function (req, res, next) {
    res.send('get animal');
});

/* POST animal. */
router.post('/', function (req, res, next) {
    res.send('add animal');
});

/* PUT animal by id. */
router.put('/:id', function (req, res, next) {
    res.send('update animal');
});

module.exports = router;
