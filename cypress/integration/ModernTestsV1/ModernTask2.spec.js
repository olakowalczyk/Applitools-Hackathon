/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />
import '@applitools/eyes-cypress/commands'
import { Selectors } from '../../support/selectors'
import { browser } from '../../../applitools.config'
const app = Cypress.env('app')

describe("Shopping Experience - Cross-Browser & Cross-Device", () => {

    beforeEach(function () {
        cy.visit(app)
        cy.eyesOpen({
            appName: "V1: Applitools Hackathon 2020",
            testName: "Task 2: Shopping Experience Test"
        })
    })

    afterEach(function () {
        cy.eyesClose()
    })

    it(`tests filtering items`, function () {
        if ( browser.width <= 768 ) {
            cy.get(Selectors.filterButton).click()
        }
        cy.get(Selectors.colorBlack).check()
        cy.get(Selectors.filterConfirm).click()
        
        cy.eyesCheckWindow({
            tag: "Items Filtering",
            target: 'region',
            selector: Selectors.productGrid,
        })  
    })
})