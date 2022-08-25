/// <reference types="cypress"/>

describe("superadmin can login and open all page in akademik aplikasi module", () => {
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".siakad > .inner").click();
    cy.intercept({
      method: "GET",
      url: "http://localhost/siacloud/gate/ajax/access/**",
    }).as("adminAccess");
    cy.get("#siakad")
      .contains("Super Administrator")
      .should("be.visible")
      .click();
    cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
  });

  it("superadmin can open menu data pelengkap di modul akademik aplikasi", () => {
    //data pelengkap
    cy.visit("siakad/data_universitas/detail");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Data Universitas Sevima"
    );
  });
});
