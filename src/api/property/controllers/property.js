"use strict";

/**
 * property controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::property.property");

const fetch = require("node-fetch");
