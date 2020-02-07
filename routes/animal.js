var express = require('express');
var router = express.Router();

const animal = require('../models/animal');

/* GET animal listing. */
router.get('/', function (req, res, next) {
    animal.find()
        .then(result => {
            res.json(result);
        })
        .catch(error => res.status(500).json(error));
});

/* POST animal. */
router.post('/', function (req, res, next) {
    const newAnimal = new animal({
        name: req.body.name,
        type: req.body.type,
        weight: req.body.weight,
        age: req.body.age
    });

    newAnimal
        .save()
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

/* PUT animal by id. */
router.put('/:id', function (req, res, next) {
    const newData = {
        name: req.body.name,
        type: req.body.type,
        weight: req.body.weight,
        age: req.body.age,
    };

    animal.findOneAndUpdate({ _id: req.params.id }, newData, { new: true })
        .then(result => {
            res.json(result);
        })
        .catch(error => res.status(500).json(error));
});

module.exports = router;
