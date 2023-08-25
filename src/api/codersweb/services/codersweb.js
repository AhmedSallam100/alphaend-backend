'use strict';

/**
 * codersweb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::codersweb.codersweb');
