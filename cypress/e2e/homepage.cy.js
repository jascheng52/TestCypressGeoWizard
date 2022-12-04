describe("Test the homepage", () => {
  it("Check if the homepage loads properly", () => {
    // Make sure you set your baseUrl in cypress.config.ts
    // Or by overwriting it through the command line
    cy.visit("/");
  });
});
