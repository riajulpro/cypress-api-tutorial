const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: "http://localhost:3000",
    baseUrl: "https://staging-be-ecom.techserve4u.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
