import baseUrl from "../../cypress.json";

describe("navbar works", () => {
    //using coffee page as a base for our render tests
    it("renders NavBar", () => {
        cy.visit("/coffee")
        cy.get("#NavBar").should("exist")
    })

    it("renders each button", () => {
        cy.visit("/coffee")
        cy.get("#NavHome").should("exist")
        cy.get("#NavPlants").should("exist")
        cy.get("#NavCoffee").should("exist")
        cy.get("#NavSeeds").should("exist")
    })

    it("home button works", () => {
        cy.visit("/coffee")
        cy.get("#NavHome").click()
        cy.url().should('contain', "http://localhost:3000")
    })

    it("plants button works", () => {
        cy.visit("/coffee")
        cy.get("#NavPlants").click()
        cy.url().should('contain', "/plants")
    })

    it("seeds button works", () => {
        cy.visit("/coffee")
        cy.get("#NavSeeds").click()
        cy.url().should('contain', "/seeds")
    })

    //using plant instead of coffee page to verify if coffee button works
    it("coffee button works", () => {
        cy.visit("/plants")
        cy.get("#NavCoffee").click()
        cy.url().should('contain', '/coffee')
    })
})