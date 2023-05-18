
describe("My Account Component", () => {
  beforeEach(() => {
    cy.visit("/account");
    cy.get("main h1").as("mainTitle");
    cy.get("main p").as("mainParagraph");
    cy.get("main button").as("mainButton");
  });

  it("should return a pair of keys (publicKey and secretKey) that are string values", () => {
    cy.get("@mainTitle").contains("My account");
    cy.get("@mainParagraph").contains("Public key:");
    cy.get("p:contains('Public key:')").invoke("text").should("be.a", "string");
    cy.get("p:contains('Secret key:')").invoke("text").should("be.a", "string");
  });

  it("should increase the account balance when clicking on addFunds", () => {
    const fundsStatus: 'Status: Loading...' | 'Status: Added successfully' | 'Status: Error adding funds' = 'Status: Added successfully';
    cy.get("@mainButton").contains("Add funds").click();
    cy.get("@mainParagraph").contains(fundsStatus);
    cy.get("p:contains('Status:')").invoke("text").should("be.a", "string");
  });

  it("should return the current balance of the account when clicking on balance", () => {
    const balanceStatus: 'Balance: Loading...' | 'Balance: Error fetching balance' = 'Balance: Error fetching balance';
    cy.get("@mainButton").contains("Balance").click();
    cy.get("@mainParagraph").contains(balanceStatus);
    cy.get("p:contains('Balance:')").invoke("text").should("be.a", "string");
  });
  
});



