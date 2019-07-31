'use strict';

const compose = require('next-compose');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

module.exports = compose([withImages, withSass]);

// module.exports = compose([
// 	[withSass],
// 	{
// 		webpack(config) {
// 			config.module.rules.push({
// 				test: /\.svg$/,
// 				use: ['@svgr/webpack'],
// 			});
// 			return config;
// 		}
// 	}
// ]);
