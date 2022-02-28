const express = require('express');
const router = require('express').Router();
const Recipe = require('./recipes-model');

router.get('/', (req, res) => {
    Recipe.find()
        .then(found => {
            res.json(found)
        })
        .catch(err => {
            res.status(500).json({
                message: 'The recipes information could not be retrieved!',
                err: err.message,
                stack: err.stack
            })
        })
});


module.exports = router;