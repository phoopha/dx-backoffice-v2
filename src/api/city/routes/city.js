"use strict";

/**
 * city router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;
const defaultRouter = createCoreRouter("api::city.city");

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: "DELETE",
    path: "/cities",
    handler: "api::city.city.deleteMany",
  },
  {
    method: "GET",
    path: "/cities/me",
    handler: "api::city.city.myCity",
  },
];

module.exports = customRouter(defaultRouter, myExtraRoutes);
