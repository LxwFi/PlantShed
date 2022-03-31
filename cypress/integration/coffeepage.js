describe("renders coffee page NavBar", () => {
    it("renders navbar", () => {
        cy.visit("/coffee")
        cy.get("#NavBar").should("exist")
    })
})