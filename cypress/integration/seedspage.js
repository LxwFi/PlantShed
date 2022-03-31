describe("renders seeds page NavBar", () => {
    it("renders navbar", () => {
        cy.visit("/seeds")
        cy.get("#NavBar").should("exist")
    })
})