/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Page loading', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://wastenot-wantnot.netlify.app/')
  })

  it('display login button', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.btn-primary').should('have.text', 'Login / Signup')

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })
  
  it('display banner and logo on the centre of the page', () => {

    cy.get('.Home_headingT__LUled').should('have.text', 'WasteNot:-WantNot!')
    cy.get('img').filter('[src]').filter(':visible')
  })

  it('Homepage video playing', () => {
    cy.get('.Home_video__wXJek').should('have.prop', 'paused', false).and('have.prop', 'ended', false)
  })

  it('display logo on top right corner of the page', () => {
    cy.get('img').filter('[src]').filter(':visible')
  })

  it('Burger bar being able open and close with a click', () => {
  cy.get('.navbar-toggler').should('be.visible').wait(1000).click()
  cy.get("#offcanvasNavbarLabel").should('have.text', 'WasteNot: WantNot').should('be.visible')
   
  cy.get('.btn-close').click() 
 
  
  
})

it('Burger bar has about link', () =>{
  cy.get('.navbar-toggler').should('be.visible').wait(1000).click()
cy.get('a[href="/about"]').click()
cy.location('pathname').should('eq', '/about')
cy.go('back')
})

it('Burger bar has food waste link', () =>{
cy.get('.navbar-toggler').should('be.visible').wait(1000).click()
cy.get('a[href="https://lordslibrary.parliament.uk/food-waste-in-the-uk/"]')
  .should('have.prop', 'href')
  .and('equal', 'https://lordslibrary.parliament.uk/food-waste-in-the-uk/')
})

it('Burger bar has trusell trust link', () =>{
  cy.get('.navbar-toggler').should('be.visible').wait(1000).click()
  cy.get('a[href="https://www.trusselltrust.org/"]')
    .should('have.prop', 'href')
    .and('equal', 'https://www.trusselltrust.org/')
  })
  
  it('Burger bar has Food bank search link', () =>{
    cy.get('.navbar-toggler').should('be.visible').wait(1000).click()
    cy.get('a[href="https://www.givefood.org.uk/needs/"]')
      .should('have.prop', 'href')
      .and('equal', 'https://www.givefood.org.uk/needs/')
    })
    
    it('Burger bar has Register link', () =>{
      cy.get('.navbar-toggler').should('be.visible').wait(1000).click()
    cy.get('a[href="/"]').click()
    cy.location('pathname').should('eq', '/')
    })
    

})

