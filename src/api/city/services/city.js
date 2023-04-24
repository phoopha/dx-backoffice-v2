"use strict";

/**
 * city service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::city.city", ({ strapi }) => ({
  deleteMany(opts, uid) {
    const params = { ...opts };

    return strapi.entityService.deleteMany(uid, params);
  },
}));
