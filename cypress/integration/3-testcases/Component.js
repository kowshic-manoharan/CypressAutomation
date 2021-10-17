/// <reference types="Cypress" />

describe('Component Testing', function () {
    it('CheckBox', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption2').should('be.enabled').check().should('have.value','option2')
        cy.get('#checkBoxOption2').should('be.enabled').uncheck().should('have.value','option2')
        cy.get('input[type="checkbox"]').click({ multiple: true })
    })
})