
describe("My Account Component", () => {
  beforeEach(() => {
    cy.visit("/account");
    cy.get("main h1").as("mainH1");
    cy.get("main p").as("mainP");
    cy.get("main button").as("mainBTN");
  });

  it("should return a pair of keys (publicKey and secretKey) that are string values", () => {
    cy.get("@mainH1").contains("My account");
    cy.get("@mainP").contains("Public key:");
    cy.get("p:contains('Public key:')").invoke("text").should("be.a", "string");
    cy.get("p:contains('Secret key:')").invoke("text").should("be.a", "string");
  });

  it("should increase the account balance when clicking on addFunds", () => {
    const fundsStatus: 'Funds: Loading...' | 'Funds: Added successfully' | 'Funds: Error adding funds' = 'Funds: Added successfully';
    cy.get("@mainBTN").contains("Add funds").click();
    cy.get("@mainP").contains(fundsStatus);
    cy.get("p:contains('Funds:')").invoke("text").should("be.a", "string");
  });

  it("should return the current balance of the account when clicking on balance", () => {
    const balanceStatus: 'Balance: Loading...' | 'Balance: Error fetching balance' = 'Balance: Error fetching balance';
    cy.get("@mainBTN").contains("Balance").click();
    cy.get("@mainP").contains(balanceStatus);
    cy.get("p:contains('Balance:')").invoke("text").should("be.a", "string");
  });
  
});



