/// <reference types="cypress" />
import {Selectors} from '../../support/selectors'
import {Viewports, sizes} from '../../support/viewports'

const app = Cypress.env('app')
const task = 1 // Cross-Device Elements Test
const report = 'Traditional-V2-TestResults.txt'
let domId = '' //asserted selector, created and used only to manage dom Id for reporting purposes 

sizes.forEach((size, i) => {
    describe(`Viewport: ${size[0]} x ${size[1]}, Device: ${Object.keys(Viewports)[i]}` , function () {
        
        beforeEach(function () {
            cy.viewport(size[0], size[1])
            cy.visit(app)
        })

        afterEach(function () {
            cy.writeToReport(report, task, domId)
        })
    
        it(`checks navbar visibility ${size}`, function () {
            domId = Selectors.navbar
            if ( size[0] >= Viewports.laptop[0] ) {
                cy.shouldBeVisible(domId)
            }
            else {
                cy.shouldNotBeVisible(domId)
            }
        })

        it(`checks search visibility ${size}`, function () {
            domId = Selectors.search
            if ( size[0] >= Viewports.tablet[0] ) {
                cy.shouldBeVisible(domId)
            }
            else {
                cy.shouldNotBeVisible(domId)
            }
        })

        it(`checks wishlist button visibility ${size}`, function () {
            domId = Selectors.wishlist
            if ( size[0] >= Viewports.laptop[0] ) {
                cy.shouldBeVisible(domId)
            }
            else {
                cy.shouldNotBeVisible(domId)
            }
        })

        it(`checks filter column visibility ${size}`, function () {
            domId = Selectors.filterColumn
            if ( size[0] >= Viewports.laptop[0] ) {
                cy.shouldBeVisible(domId)
            }
            else {
                cy.shouldNotBeVisible(domId)
            }
        })

        it(`checks filter button visibility ${size}`, function () {
            domId = Selectors.filterButton
            if ( size[0] <= Viewports.tablet[0] ) {
                cy.shouldBeVisible(domId)
            }
            else {
                cy.shouldNotBeVisible(domId)
            }
        })
        
        it(`checks list view button visibility ${size}`, function () {
            domId = Selectors.listView
            if ( size[0] >= Viewports.laptop[0]) {
                cy.shouldBeVisible(domId)
            }
            else {
                cy.shouldNotBeVisible(domId)
            }
        })

        it(`checks grid view button visibility ${size}`, function () {
            domId = Selectors.gridView
            if ( size[0] >= Viewports.laptop[0] ) {
                cy.shouldBeVisible(domId)
            }
            else {
                cy.shouldNotBeVisible(domId)
            }
        })

        it(`checks item button visibility - add to favorites ${size}`, function () {
            domId = Selectors.addToFavorites
            if ( size[0] <= Viewports.tablet[0] ) {
                cy.shouldBeVisible(domId)
            }
            else {
                cy.shouldNotBeVisible(domId)
            }
        })

        it(`checks item button visibility - add to compare ${size}`, function () {
            domId = Selectors.addToCompare
            if ( size[0] <= Viewports.tablet[0] ) {
                cy.shouldBeVisible(domId)
            }
            else {
                cy.shouldNotBeVisible(domId)
            }
        })

        it(`checks item button visibility - add to cart ${size}`, function () {
            domId = Selectors.addToCart
            if ( size[0] <= Viewports.tablet[0] ) {
                cy.shouldBeVisible(domId)
            }
            else {
                cy.shouldNotBeVisible(domId)
            }
        })
        
        it(`checks "Quick links" content visibility ${size}`, function () {
            domId = Selectors.quickLinks
            if ( size[0] >= Viewports.tablet[0] ) {
                cy.shouldBeVisible(domId)
            }
            else {
                cy.shouldNotBeVisible(domId)
            }
        })

        it(`checks "Contacts" content visibility ${size}`, function () {
            domId = Selectors.contacts
            if ( size[0] >= Viewports.tablet[0] ) {
                cy.shouldBeVisible(domId)
            }
            else {
                cy.shouldNotBeVisible(domId)
            }
        })

        it(`checks "Keep in touch" content visibility ${size}`, function () {
            domId = Selectors.keepInTouch
            if ( size[0] >= Viewports.tablet[0] ) {
                cy.shouldBeVisible(domId)
            }
            else {
                cy.shouldNotBeVisible(domId)
            }
        })
    })
})
