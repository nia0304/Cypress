/// <reference types="cypress" />

describe("Jenis Program Periode Pendaftaran", () => {
    beforeEach("Login Siakad", () => {
      cy.login();
      cy.modulpmb();
    });
  
    it.only("Filter halaman list periode pendaftaran", () => {
        cy.visit('/spmb/list_periode')
        cy.contains("a", /^2020\/2021 Genap$/).click();
        cy.get("#accordion > div:nth-child(2) > div.box-header > h4").click();
        cy.contains("a", /^Mandiri$/).click();
        cy.get("#accordion > div:nth-child(3) > div.box-header > h4").click();
        cy.contains("a", /^Gelombang 4$/).click();
        cy.get("#accordion > div:nth-child(4) > div.box-header > h4").click();
        cy.contains("a", /^Reguler A$/).click();
        let values = [];
        cy.get("#form_list > div > table")
          .scrollIntoView()
          .find("tbody > tr")
          .each(($el, $index) => {
              cy.wrap($el)
                .invoke("text")
                .then((text) => {
                    cy.log(text);
                    values.push(text.trim());
                });
         })
          .then(() => 
               expect(values).to.deep.eq([
                    "PMB REGULER FREE",
                    "2020/2021 Genap",
                    "Gelombang 4",
                    "Mandiri",
                    "Reguler A",
                ])
            );
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