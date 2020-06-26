/// <reference types="cypress" />
import { Selectors } from '../../support/selectors'
import { Viewports, sizes } from '../../support/viewports'

const app = Cypress.env('app')
const report = 'Traditional-V1-TestResults.txt'
const task = 3 // Product Details Test
let domId = '' // asserted selector, created and used only to manage dom Id for reporting purposes 

sizes.forEach((size, i) => {
    describe(`Viewport: ${size[0]} x ${size[1]}, Device: ${Object.keys(Viewports)[i]}` , function () {
        
        beforeEach(function () {
            cy.viewport(size[0], size[1])
            cy.visit(app)
            if ( size[0] <= Viewports.tablet[0] ) {
                cy.get(Selectors.filterButton).click()
            }
            cy.get(Selectors.colorBlack).check()
            cy.get(Selectors.filterConfirm).click()
            cy.get(Selectors.productGrid).children().first().click()
        })

        afterEach(function () {
            cy.writeToReport(report, task, domId)
        })

        it(`checks product name ${size}`, function() {
            domId = Selectors.shoeName
            cy.shouldContain(domId, 'Appli Air x Night')  
        })

        it(`checks size name ${size}`, function() {
            domId = Selectors.size
            cy.shouldContain(domId, 'Small (S)')  
        })

        it(`checks code id readable ${size}`, function() {
            domId = Selectors.code
            cy.get(domId).should('not.have.css', 'color', 'rgb(255, 255, 255)')  
        })

        it(`checks new price format ${size}`, function() {
            domId = Selectors.newPrice
            cy.shouldMatchRegex(domId, /^\$\d\d\.\d\d$/)
        }) 
// behaves different on Firefox
//       it(`checks old price format ${size}`, function() {
//           domId = Selectors.oldPrice
//           cy.get(domId).should('have.css', 'text-decoration', 'line-through solid rgb(153, 153, 153)')
//       })
    })
})




