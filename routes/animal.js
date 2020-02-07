var express = require('express');
var router = express.Router();

/* GET animal listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* POST animal. */
router.post('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* PUT animal by id. */
router.put('/:id', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
