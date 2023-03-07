//  <refrence types="Cypress" />

describe("login tests", () => {
        it("login with unregisterd user", () => {
            cy.visit("/");
            cy.get("a[href= '/login']").click();
            cy.get("#email").type("random@mail.com");
            cy.get("#password").type("test4321");
            cy.get("button").click();
            cy.url().should("contain", "/login")
        })

        it("register without email adress provided", () =>{
            cy.visit("/");
            cy.get("a[href= '/login']").click();
            cy.get("#password").type("test4321");
            cy.get("button").click()
            cy.url().should("contain", "/login");
        })

        it("register without password provided", () =>{
            cy.visit("/");
            cy.get("a[href= '/login']").click();
            cy.get("#email").type("random@mail.com");
            cy.get("button").click();
            cy.url().should("contain", "/login")
        })

    it("login with valid credantials", () => {
        cy.visit("/")
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("test7331@123.com");
        cy.get("#password").type("test1234");
        cy.get("button").click();
    });

    it("logout", () => {
        cy.visit("/")
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("test7331@123.com");
        cy.get("#password").type("test1234");
        cy.get("button").click();
        cy.url().should("not.contain", "/login");
        // cy.wait(1500);
        cy.get(".nav-link").eq(3).click();

    })
});


