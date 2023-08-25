'use strict';

/**
 * designweb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::designweb.designweb');
