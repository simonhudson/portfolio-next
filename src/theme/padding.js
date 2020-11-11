import spacing from './spacing';
import { rem } from 'polished';

let paddingObject = {};

for (let key in spacing) paddingObject[key] = rem(spacing[key]);

module.exports = paddingObject;
