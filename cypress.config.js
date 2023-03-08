const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8kgixv", // Add the projectId to your Cypress config file:

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
  },
    

});
