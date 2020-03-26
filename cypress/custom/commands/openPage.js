'use strict';

import { routes } from '../../config';

module.exports = page => cy.visit(routes[page]);