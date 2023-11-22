describe('Review Our Product', () => {
    it('ROP1_succes_submit', () => {
      cy.visit('https://forms.office.com/r/u5LQxYEFKn')
      cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('Denise Gratia Aruan')
      cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('081375332884')
      cy.get('.-a-75 > :nth-child(1) > div').click()
      cy.get('[aria-label="5 Star"]').click()
      cy.get('.ms-DatePicker-event--without-label').click()
      cy.wait(2000)
      cy.get('.ms-FocusZone')
        .contains('15')
        .click()
        cy.get('#DatePicker0-label').should('have.value', '11/15/2023');
      cy.wait(2000)
      cy.get('button[data-automation-id="submitButton"]').click();
      cy.wait(2000)
        cy.get('.-ai-365 > .text-format-content').should('be.visible').and('have.text', 'Your response was submitted.')
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false 
      })
    })


    it('ROP2_no_product_affordability_selected', () => {
      cy.visit('https://forms.office.com/r/u5LQxYEFKn')
      cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('Denise Gratia Aruan')
      cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('081375332884')
      cy.get('[aria-label="5 Star"]').click();
      cy.get('.ms-DatePicker-event--without-label').click()
      cy.wait(2000); 
      cy.get('.ms-FocusZone')
        .contains('15')
        .click();
        cy.get('#DatePicker0-label').should('have.value', '11/15/2023');
      cy.wait(2000)
      cy.get('button[data-automation-id="submitButton"]').click();
      cy.get('#ErrorMsgId_r8bc17b753f0048ecb03794ef45037bb7 > span').should('be.visible')
    })
  

    it('ROP3_no_service_rating_selected', () => {
      cy.visit('https://forms.office.com/r/u5LQxYEFKn')
      cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('Denise Gratia Aruan')
      cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('081375332884')
      cy.get('.-a-75 > :nth-child(1) > div').click()
      cy.get('.ms-DatePicker-event--without-label').click()
      cy.wait(2000); 
      cy.get('.ms-FocusZone')
        .contains('15')
        .click();
        cy.get('#DatePicker0-label').should('have.value', '11/15/2023')
      cy.wait(2000)
      cy.get('button[data-automation-id="submitButton"]').click();
      cy.get('#ErrorMsgId_r9f97f2550332479a8fdd2914bd99bc1d > span').should('be.visible')
      cy.get('[data-automation-id="submitError"]').should('be.visible')
    })
    

    it('ROP4_no_date_selected', () => {
      cy.visit('https://forms.office.com/r/u5LQxYEFKn')
      cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('Denise Gratia Aruan')
      cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('081375332884')
      cy.get('.-a-75 > :nth-child(1) > div').click()
      cy.get('.ms-DatePicker-event--without-label').click()
      cy.get('[aria-label="5 Star"]').click()
      cy.get('button[data-automation-id="submitButton"]').click();
      cy.get('#ErrorMsgId_r1abee94394494318b1e34a419838e56c > span').should('be.visible')
      cy.get('[data-automation-id="submitError"]').should('be.visible')
    })
})