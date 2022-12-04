const cypress = require("cypress");

module.exports = {
  projectId: "YOUR_PROJECT_ID",
  e2e: {
    baseUrl: "http://google.com", // <-- Your staging root URL goes here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
