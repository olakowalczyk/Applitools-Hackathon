/// <reference types="cypress" />
import {Selectors} from '../../support/selectors'
import {Viewports, sizes} from '../../support/viewports'

const app = Cypress.env('app')
const task = 2 // Shopping Experience Test
const report = 'Traditional-V2-TestResults.txt'
let domId = '' //asserted selector, created and used only to manage dom Id for reporting purposes

sizes.forEach((size, i) => {
    describe(`Viewport: ${size[0]} x ${size[1]}, Device: ${Object.keys(Viewports)[i]}` , function () {
            
        beforeEach(function () {
                cy.viewport(size[0], size[1])
                cy.visit(app)
        })
        
        afterEach(function () {
            if (size[0] <= Viewports.tablet[0] ) {
                cy.get(Selectors.filterButton).click()
            }
            cy.get(Selectors.filterReset).click()
            cy.writeToReport(report, task, domId)
        })

        it(`checks black items are filtered out ${size}`, () => {
            domId = Selectors.productGrid
            if ( size[0] <= Viewports.tablet[0] ) {
                cy.get(Selectors.filterButton).click()
            }
            cy.get(Selectors.colorBlack).check()
            cy.get(Selectors.filterConfirm).click()
            cy.shouldHaveLength(domId, 2)  
        })
    })
})