'use strict';

/**
 * aiweb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::aiweb.aiweb');
