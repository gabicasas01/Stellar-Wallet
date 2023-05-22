describe('Send Funds Component', () => {
  beforeEach(() => {
    cy.visit("/account");
    cy.get("main h1").as("mainTitle");
    cy.get("main p").as("mainParagraph");
    cy.get("main button#add-funds-button").click();
    cy.wait(10000)
    cy.get("main button#send-funds-button").click();
  });

  it('should send funds successfully', () => {
    const amount = '100';
    const destination = 'GCFMOQTR6IC5CLTMN2XI7N7WY3G6EKYIXJ6HIUIZYE5EPL44VSCNP3E4';

    cy.get('input[type="text"]').eq(0).type(amount);
    cy.get('input[type="text"]').eq(1).type(destination);
    cy.get('button[type="submit"]').click();

    cy.get('p:contains("Amount:")').should('have.text', `Amount: ${amount}`);
    cy.get('p:contains("Destination:")').should('have.text', `Destination: ${destination}`);
    cy.get('p:contains("State:")').should('have.text', 'State: Success');
  });

  it('should show an error message when destination is unknow', () => {
    cy.get('button[type="submit"]').click();
    cy.get('p:contains("State:")').should('have.text', 'State: Error: Amount and destination are required.');
  });

  it('should show an error message when destination is unknow', () => {
    const amount = '100';
    const destination = '123456';

    cy.get('input[type="text"]').eq(0).type(amount);
    cy.get('input[type="text"]').eq(1).type(destination);
    cy.get('button[type="submit"]').click();

    cy.get('p:contains("Amount:")').should('have.text', `Amount: ${amount}`);
    cy.get('p:contains("Destination:")').should('have.text', `Destination: ${destination}`);
    cy.get('p:contains("State:")').contains('Error');
  });

});