const cypress = require("cypress");

// `baseUrl` will be defined through the CLI
// Ex: npx cypress run --config baseUrl=http://localhost:3000
module.exports = {
  projectId: "YOUR_PROJECT_ID",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
