const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  chromeWebSecurity: false,
  video: false,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on("before:run", () => {
        // cy.exec(
        //   "docker run --name qa-test -e POSTGRESS_PASSWORD=123 -e PGDATA=postgres -p 5433:5432 -d qa-postgres-db"
        // );
        // cy.wait(25000);
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
