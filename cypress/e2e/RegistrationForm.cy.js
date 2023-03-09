describe('Register users', () => {
    it('Register valid users', () => {

        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get("a[href= '/register']").click();
        cy.get("#first-name").type("Pera");
        cy.get("#last-name").type("Pericic");
        cy.get("#email").type("sampleusertestingg@gmail.com");
        cy.get("#password").type("test1234");
        cy.get("#password-confirmation").type("test1234");
        cy.get('[type="checkbox"]').check()
        cy.get("button").click();        





        
    });
});