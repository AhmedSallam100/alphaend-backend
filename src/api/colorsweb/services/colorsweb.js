'use strict';

/**
 * colorsweb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::colorsweb.colorsweb');
