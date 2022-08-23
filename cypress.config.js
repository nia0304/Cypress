const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  chromeWebSecurity: false,
  video: false,
  numTestsKeptInMemory:0,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
   
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on("before:run", () => {
        // cy.exec(
        //   "docker run --name qa-postgres-db -e POSTGRESS_PASSWORD=ppa -e PGDATA=postgres -p 5433:5432 -d qa-postgres-db"
        // );
      });
      on("after:run", () => {
        // cy.exec("docker stop qa-postgres-db");
        // cy.exec("docker rm qa-postgres-db");
      });
      return require("./cypress/plugins/index.js")(on, config);
    },

    baseUrl: "http://localhost/siacloud/",
  },
});
