describe("My Account Component", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("should return a homePage view", () => {
      cy.get("main h1").contains("Svelte Wallet App");
      cy.get("main p").contains("Welcome");
      cy.get("main a").contains("Create Account");
    });
})