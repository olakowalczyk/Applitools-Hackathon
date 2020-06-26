export const Viewports = {
	laptop: [1200, 700],
    tablet: [768, 700],
    mobile: [500, 700]
}


export const sizes = (Cypress.isBrowser('chrome')) ? [Viewports.laptop, Viewports.tablet, Viewports.mobile] : [Viewports.laptop, Viewports.tablet]
