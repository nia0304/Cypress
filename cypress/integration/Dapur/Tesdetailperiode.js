/// <reference types="cypress" />

describe("Jenis Program Periode Pendaftaran", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
  });

  it("Menambahkan Jenis Program", () => {
    cy.visit("/spmb/list_periode");
    cy.get("li").filter(':contains("2021 Genap")').click;
  });
});

describe("tes get data tabel", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });
  it.skip("get tabel syarat pendaftaran", () => {
    cy.visit("/spmb/list_periode");
    cy.filterlistperiodependaftaran();
    cy.get("#sidebar-menu-list > :nth-child(7) > a")
      .should("be.visible")
      .click();
    //get table assertion
    cy.get("#form_list > div > table")
      .getTable()
      .should((tableData) => {
        cy.log(tableData);
        cy.fixture("syarat_pendaftaran.json").then((dataFixture) => {
          expect(tableData).to.deep.equal(dataFixture);
        });
      });
  });
});
