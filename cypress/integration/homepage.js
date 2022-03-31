describe("renders homepage", () => {
    it("renders", () =>{
        cy.visit("/")
        cy.get("#Home").should("exist")
        cy.get("#coffeeButton").should("exist")
        cy.get("#seedButton").should("exist")
        cy.get("#plantButton").should("exist")
    })

    it("coffee button works", () => {
        cy.visit("/")
        cy.get('#coffeeButton').click();
        cy.url().should('contain', '/coffee')
    })

    it("plant button works", () => {
        cy.visit("/")
        cy.get('#plantButton').click();
        cy.url().should('contain', '/plants')
    })

    it("seed button works", () => {
        cy.visit("/")
        cy.get('#seedButton').click();
        cy.url().should('contain', '/seeds')
    })
})