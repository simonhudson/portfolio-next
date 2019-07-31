'use strict';

const compose = require('next-compose');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

module.exports = compose([withImages, withSass]);
