"use strict";

/**
 * city controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::city.city", ({ strapi }) => ({
  async deleteMany(ctx) {
    // console.log(
    //   "STRAPI:>>",
    //   strapi.db.query("api::city.city", { where: { id: 1031 } })
    // );
    await strapi.db.query("api::city.city").deleteMany();
  },
}));
