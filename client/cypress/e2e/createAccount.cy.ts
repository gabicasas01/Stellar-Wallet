
describe("My Account Component", () => {
  beforeEach(() => {
    cy.visit("/account");
  });

  it("should return a pair of keys (publicKey and secretKey) that are string values", () => {
    cy.get("main h1").contains("My account");
    cy.get("main p").contains("Public key:");
    cy.get("p:contains('Public key:')").invoke("text").should("be.a", "string");
    cy.get("p:contains('Secret key:')").invoke("text").should("be.a", "string");
  });

  it("should increase the account balance when clicking on addFunds", () => {
    const fundsStatus: 'Funds: Loading...' | 'Funds: Added successfully' | 'Funds: Error adding funds' = 'Funds: Added successfully';
    cy.get("main button").contains("Add funds").click();
    cy.get("main p").contains(fundsStatus);
    cy.get("p:contains('Funds:')").invoke("text").should("be.a", "string");
  });

  it("should return the current balance of the account when clicking on balance", () => {
    const balanceStatus: 'Balance: Loading...' | 'Balance: Error fetching balance' = 'Balance: Error fetching balance';
    cy.get("main button").contains("Balance").click();
    cy.get("main p").contains(balanceStatus);
    cy.get("p:contains('Balance:')").invoke("text").should("be.a", "string");
  });
  
});



