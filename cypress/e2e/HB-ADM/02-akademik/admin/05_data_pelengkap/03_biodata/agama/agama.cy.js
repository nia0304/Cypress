/// <reference types="cypress"/>

describe("Super Administrator bisa melakukan management agama pada menu agama", ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin()
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.modulakademik();
    cy.menu_agama();
    cy.get('.content-header > h1').should('contain',"Agama");
    cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/03_biodata/agama").as('data');
  });

  it("Super Admin Create Agama Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
   cy.get('#i_namaagama').type(this.data.i_namaAgama);
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
    cy.get('#i_idagama').type(this.data.i_kode);
    cy.get('#i_namaagama').clear();
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
  });

  it("Super Admin Bisa Create Agama Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idagama').type(this.data.i_kode);
      cy.get('#i_namaagama').type(this.data.i_namaAgama);
      cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
      cy.get(".alert").should("be.visible").contains(this.data.i_alert);
  });

  it("Super Admin Ga Bisa Create Agama Yang Sama", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idagama').type(this.data.i_kode);
    cy.get('#i_namaagama').type(this.data.i_namaAgama);
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.get(".alert").should("be.visible").contains(this.data.i_alertDuplicate);
  });

  it("Super Admin Batalkan Proses Create/Edit", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-warning.btn-xs.btn-flat').click();
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_namaagama').clear().type(this.data.i_namaAgama)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu Agama", function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idagama').clear().type(this.data.u_kode);
    cy.get('#u_namaagama').clear().type(this.data.u_namaAgama)
      .tab()
      .click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.u_alert);
  });

  it("Super Admin Bisa Delete Agama Baru", function () {
    cy.get('td').contains(this.data.u_kode)
    .next()
    .next()
    .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('.modal-footer > .btn-primary').click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.d_alert);
  });
});
