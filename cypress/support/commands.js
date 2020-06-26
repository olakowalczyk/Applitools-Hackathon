// ***********************************************
// Custom commands
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("shouldBeVisible", (domId) => {
    cy.get(domId).should('be.visible')
})

Cypress.Commands.add("shouldNotBeVisible", (domId) => {
    cy.get(domId).should('not.be.visible')
})

Cypress.Commands.add("shouldHaveLength", (domId, length) => {
    cy.get(domId).children().should('have.length', length)
})

Cypress.Commands.add("shouldContain", (domId, text) => {
    cy.get(domId).should('contain', text)
})

Cypress.Commands.add("shouldMatchRegex", (domId, regex) => {
    cy.get(domId).invoke('text').should((text) => {
    expect(text).to.match(regex)
    })
})

Cypress.Commands.add("writeToReport", (report, task, domId) => {
    cy.writeFile(`${report}`, `Task: ${task}, Test Name: ${Cypress.mocha.getRunner().suite.ctx.currentTest.title}, DOM Id: ${(domId)}, Browser: ${Cypress.browser.name}, ${Cypress.mocha.getRunner().suite.title}, Status: ${Cypress.mocha.getRunner().suite.ctx.currentTest.state.substr(0, 4)},\n`, { flag: 'a+' })
})


