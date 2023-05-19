describe('GetOperations', () => {
    beforeEach(() => {
        cy.visit("/account");
        cy.get("main h1").as("mainTitle");
        cy.get("main p").as("mainParagraph");
        cy.get("main button").as("mainButton");
    });

    it('Should display "No transactions found" when there are no records', () => {
        cy.get("@mainButton").contains("See Operations").click();
        const recordsStatus: 'Loading...' | 'No transactions found' = 'No transactions found';
        cy.get("@mainTitle").contains("My operations");
        cy.wait(10000)
        cy.get('@mainParagraph').contains(recordsStatus);

    });

    it('Should display Create Account when there are funds in the account', () => {
        const fundsStatus: 'Status: Loading...' | 'Status: Added successfully' = 'Status: Added successfully';
        const transactionsTypes: 'create_account' | 'payment' = 'create_account'

        cy.get("@mainButton").contains("Add funds").click();
        cy.get("@mainParagraph").contains(fundsStatus);
        cy.get("p:contains('Status:')").invoke("text").should("be.a", "string");

        cy.get("@mainButton").contains("See Operations").click();
        cy.wait(10000)
        cy.get('ul li').contains(transactionsTypes);
    });

    it('Should display when there are payment records', () => {
        const amount = '100';
        const destination = 'GCFMOQTR6IC5CLTMN2XI7N7WY3G6EKYIXJ6HIUIZYE5EPL44VSCNP3E4';
        const transactionsTypes: 'create_account' | 'payment' = 'create_account'

        
        cy.get("@mainButton").contains("Add funds").click();
        cy.wait(10000)
        cy.get("@mainButton").contains("Send Funds").click();
        cy.get('input[type="text"]').eq(0).type(amount);
        cy.get('input[type="text"]').eq(1).type(destination);
        cy.get('button[type="submit"]').click();
    
        cy.get('p:contains("Amount:")').should('have.text', `Amount: ${amount}`);
        cy.get('p:contains("Destination:")').should('have.text', `Destination: ${destination}`);
        cy.get('p:contains("State:")').should('have.text', 'State: Success');
        cy.get("@mainButton").contains("Send Funds").click();

        cy.get("@mainButton").contains("See Operations").click();
        cy.get('ul li').contains(transactionsTypes);
        cy.get('@mainParagraph').contains(destination);
        cy.get('p:contains("Amount:")').should('have.text', `Amount: ${amount}`);
    });

});



