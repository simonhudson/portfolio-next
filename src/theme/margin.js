import spacing from './spacing';
import { rem } from 'polished';

let marginObject = {};

for (let key in spacing) marginObject[key] = rem(spacing[key]);

module.exports = marginObject;
