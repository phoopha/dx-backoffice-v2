"use strict";

/**
 * city controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::city.city", ({ strapi }) => ({
  async deleteMany(ctx) {
    await strapi.db.query("api::city.city").deleteMany();
  },

  async myCity(ctx) {
    console.log("ctx params :> ", ctx);
    await strapi.db
      .query("api::city.city")
      .myCity
      //   {
      //   where: {
      //     title: {
      //       $startsWith: "v3",
      //     },
      //   },
      // }
      ();
  },
}));
