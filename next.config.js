const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withImages()], {
  env: {
    ALGOLIA_ID: process.env.ALGOLIA_ID,
    ALGOLIA_KEY: process.env.ALGOLIA_KEY,
  },
});
