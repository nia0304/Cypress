/// <reference types="cypress" />

describe("Jenis Program Periode Pendaftaran", () => {
    beforeEach("Login Siakad", () => {
      cy.login();
      cy.modulpmb();
    });
    
    it.only("Filter halaman list periode pendaftaran", () => {
        cy.visit('/spmb/list_periode')
        cy.contains("a", /^2020\/2021 Genap$/).click();
        cy.wait(5000);
        cy.get("#accordion > div:nth-child(2) > div.box-header > h4").click();
        cy.contains("a", /^Mandiri$/).click();
        cy.get("#accordion > div:nth-child(3) > div.box-header > h4").click();
        cy.contains("a", /^Gelombang 4$/).click();
        cy.wait(5000);
        cy.get("#accordion > div:nth-child(4) > div.box-header > h4").click();
        cy.contains("a", /^Reguler A$/).click();
        cy.get("#form_list > div > table").getTable().should(tableData => { 
          cy.log(tableData)
          cy.fixture('list_periode.json').then((dataFixture) => {
            cy.get("#form_list > div > table").getTable().should(tableData => {
              expect(tableData).to.deep.equal(dataFixture)
            })
          })
        });
    });

    it("Search periode pendaftaran", () => {
        cy.visit('/spmb/list_periode')
        cy.get(".col-xs-8 > .input-group > .form-control")
          .type("PMB REGULER FREE");
        cy.get(".input-group-btn > .btn-success > .fa").click();
    });

    it("Berhasil Hapus Periode Pendaftaran", () => {
        cy.visit('/spmb/list_periode');

    })
  });