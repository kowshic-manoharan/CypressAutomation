/// <reference types="Cypress" />

describe('My First Testcase', function () {
    it('open Browser', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        //parent chaining relationship
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        //add the cashew to the cart            
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const name = $el.find('h4.product-name').text()
            if (name.includes("Cashews")) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.get('.cart-preview > .action-block > button').click()

        cy.url().should('eq', 'https://rahulshettyacademy.com/seleniumPractise/#/cart')
        cy.get(':nth-child(14)').click()
    })
})