describe('Send Funds Component', () => {
    beforeEach(() => {
        cy.visit("/account");
        cy.get("main h1").as("mainTitle");
        cy.get("main p").as("mainParagraph");
        cy.get("main button").as("mainButton");

        const fundsStatus: 'Status: Loading...' | 'Status: Added successfully' = 'Status: Added successfully';
        cy.get("@mainButton").contains("Add funds").click();
        cy.get("@mainParagraph").contains(fundsStatus);
        cy.get("p:contains('Status:')").invoke("text").should("be.a", "string");
        cy.get("@mainButton").contains("Send Funds").click();
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
  
    it('should show error message when amount and destination are missing', () => {
      cy.get('button[type="submit"]').click();
      cy.get('p:contains("State:")').should('have.text', 'State: Error: Amount and destination are required.');
    });

    it('should show error message when destination are unknow', () => {
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


  
  