/// <reference types="cypress" />

describe("Referensi Gelombang", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });

  it("Tambah reff gelombang", () => {
    cy.visit("/spmb/ms_gelombang");
    cy.get(".content-header > h1").should("contain", "Gelombang");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Gelombang"
    );
    cy.get(".col-md-12 > .btn").click();
    cy.get("#i_idgelombang").type("7");
    cy.get("#i_namagelombang").type("Automation");
    cy.get(":nth-child(3) > .btn-success").click();
    cy.get(".alert").should("contain", "Penambahan data gelombang berhasil");
    cy.get(".krs-float-buttons-center").click();
    cy.get(".alert").should(
      "contain",
      "Penyimpanan data cek Proses Alur SPMB berhasil"
    );
    cy.get(".krs-float-buttons-center")
      .should("contain", "Batal")
      .and("be.visible");
  });
  it("Edit reff gelombang", () => {
    cy.visit("/spmb/ms_gelombang");
    cy.get(".content-header > h1").should("contain", "Gelombang");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Gelombang"
    );
    cy.get(":nth-child(8) > :nth-child(3) > .btn-primary").click();
    cy.get("#u_idgelombang").clear().type("77");
    cy.get("#u_namagelombang").clear().type("Auto7");
    cy.get(":nth-child(8) > :nth-child(3) > .btn-success").click();
    cy.get(".alert").should("contain", "Pengubahan data gelombang berhasil");
    //assertion untuk datatabel
    let values = [];
    cy.get("#form_list > div")
      .find("tr:nth-child(8) td")
      .each(($el, $index) => {
        cy.wrap($el)
          .invoke("text")
          .then((text) => {
            cy.log(text);
            values.push(text.trim());
          });
      })
      .then(() => expect(values).to.deep.eq(["77", "Auto7", ""]));
  });
  it("Hapus reff gelombang", () => {
    cy.visit("/spmb/ms_gelombang");
    cy.get(".content-header > h1").should("contain", "Gelombang");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Gelombang"
    );
    cy.get(":nth-child(8) > :nth-child(3) > .btn-danger").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menghapus data ini?"
    );
    cy.get(".modal-footer > .btn-default").should("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should("contain", "Penghapusan data gelombang berhasil");
  });
});
