const knex = require('knex');

// eslint-disable-next-line no-undef
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];

module.exports = knex(config);