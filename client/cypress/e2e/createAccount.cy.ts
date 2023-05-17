
describe("My Account Component", () => {
  beforeEach(() => {
    cy.visit("/createAccount");
  });

  it("should return a pair of keys (publicKey and secretKey) that are string values", () => {
    cy.get("main h1").contains("My account");
    cy.get("main p").contains("Public key:");
    cy.get("p:contains('Public key:')").invoke("text").should("be.a", "string");
    cy.get("p:contains('Secret key:')").invoke("text").should("be.a", "string");
  });

  it("should increase the account balance when clicking on addFunds", () => {
    const addFundsResponse: 'Loading...' | 'Funds added successfully' | 'Error adding funds' = 'Funds added successfully';
    cy.get("main button").contains("Add funds").click();
    cy.get("main p").contains(addFundsResponse);
  });

  it("should return the current balance of the account when clicking on balance", () => {
    const getBalanceResposne: 'Loading...' | 'Balance:' |'Error fetching balance' = 'Error fetching balance';
    cy.get("main button").contains("Balance").click();
    cy.get("main p").contains(getBalanceResposne);
    cy.get("p:contains('Balance:')").invoke("text").should("be.a", "string");
  });
  
});



