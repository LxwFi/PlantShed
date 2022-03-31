describe("renders plants page NavBar", () => {
    it("renders navbar", () =>{
        cy.visit("/plants")
        cy.get("#NavBar").should("exist");
    })
})