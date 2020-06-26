/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />
import '@applitools/eyes-cypress/commands'
const app = Cypress.env('app')

describe("Elements visibility - Cross-Browser & Cross-Device", () => {

    beforeEach(function () {
        cy.visit(app)
        cy.eyesOpen({
            appName: "V2: Applitools Hackathon 2020",
            testName: "Task 1: Cross-Device Elements Test"
        })
    })

    afterEach(function () {
        cy.eyesClose()
    })

    it(`tests elements' visibility`, function () {
        cy.eyesCheckWindow({
            tag: "Elements Visibility",
            target: 'window',
            fully: true
        }) 
    })
})