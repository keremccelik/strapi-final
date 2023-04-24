'use strict';

/**
 * realtor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::realtor.realtor');
