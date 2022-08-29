/// <reference types="cypress"/>

describe("Super Administrator bisa melakukan management jas almamater pada menu jas almamater", ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin()
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.modulakademik();
    cy.menu_jas_almamater();
    cy.get('.content-header > h1').should('contain',"Jas Almamater");
    cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/03_biodata/jas_almamater").as('data');
  });

  it("Super Admin Create Jas Almamater Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
   cy.get('#i_almamater').type(this.data.i_namaAlmamater);
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
    cy.get('#i_idalmamater').type(this.data.i_kode);
    cy.get('#i_almamater').clear();
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
  });

  it("Super Admin Bisa Create Jas Almamater Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idalmamater').type(this.data.i_kode);
      cy.get('#i_almamater').type(this.data.i_namaAlmamater);
      cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
      cy.get(".alert").should("be.visible").contains(this.data.i_alert);
  });

  it("Super Admin Ga Bisa Create Jas Almamater Yang Sama", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idalmamater').type(this.data.i_kode);
    cy.get('#i_almamater').type(this.data.i_namaAlmamater);
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
    cy.get('#u_almamater').clear().type(this.data.i_namaAlmamater)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu Jas Almamater", function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idalmamater').clear().type(this.data.u_kode);
    cy.get('#u_almamater').clear().type(this.data.u_namaAlmamater)
      .tab()
      .click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.u_alert);
  });

  it("Super Admin Bisa Delete Jas Almamater Baru", function () {
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
