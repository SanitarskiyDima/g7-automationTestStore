const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
    video: true,
  // reporter: 'mochawesome',
  // reporterOptions: {
  //   reportDir: 'cypress/results',
  //   overwrite: false,
  //   html: false,
  //   json: true,
  // },
  e2e: {
    baseUrl: 'https://automationteststore.com',
    setupNodeEvents(on, config) {
          configureAllureAdapterPlugins(on, config);
          return config;
      },
  }
});
