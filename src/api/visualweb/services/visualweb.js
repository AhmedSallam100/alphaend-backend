'use strict';

/**
 * visualweb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::visualweb.visualweb');
