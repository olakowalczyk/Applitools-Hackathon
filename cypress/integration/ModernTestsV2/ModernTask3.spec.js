/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />
import '@applitools/eyes-cypress/commands'
import { Selectors } from '../../support/selectors'
import { browser } from '../../../applitools.config'
const app = Cypress.env('app')

describe("Product Details - Cross-Browser & Cross-Device", () => {

    beforeEach(function () {
        cy.visit(app)
        cy.eyesOpen({
            appName: "V2: Applitools Hackathon 2020",
            testName: "Task 3: Shopping Experience Test"
        })
    })

    afterEach(function () {
        cy.eyesClose()
    })

    it(`tests product details`, function () {
            if ( browser.width <= 768 ) {
                cy.get(Selectors.filterButton).click()
            }
            cy.get(Selectors.colorBlack).check()
            cy.get(Selectors.filterConfirm).click()
            cy.get(Selectors.productGrid).children().first().click()
        
        cy.eyesCheckWindow({
            tag: "Product Details",
            target: 'region',
            selector: Selectors.productItem
        })  
    })
})