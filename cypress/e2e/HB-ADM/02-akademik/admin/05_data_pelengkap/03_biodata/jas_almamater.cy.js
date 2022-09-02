/// <reference types="cypress"/>

var namaMenu="Jas Almamater";
var namaMenuAlert="Almamater";
describe("Super Administrator bisa melakukan management "+namaMenu+ " pada menu "+namaMenu, ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin()
    cy.get(".main_title").should("contain","Daftar Modul");
    cy.modulakademik();
    cy.menu_jas_almamater();
    cy.get('.content-header > h1').should('contain',namaMenu);
    cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/03_biodata/jas_almamater").as('data');
  });

  it("Super Admin Create "+ namaMenu+" Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_almamater').type(this.data.i_namaAlmamater);
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.alert_mandatory();
    cy.get('#i_idalmamater').type(this.data.i_kode);
    cy.get('#i_almamater').clear();
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.alert_mandatory();
  });

  it("Super Admin Bisa Create "+ namaMenu +" Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idalmamater').type(this.data.i_kode);
      cy.get('#i_almamater').type(this.data.i_namaAlmamater);
      cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
      cy.alert_notifikasi("C", namaMenuAlert);
  });

  it("Super Admin Ga Bisa Create "+namaMenu+" Yang Sama", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idalmamater').type(this.data.i_kode);
    cy.get('#i_almamater').type(this.data.i_namaAlmamater);
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.alert_notifikasi("X", namaMenuAlert);
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

  it("Super Admin Bisa Edit Salah Satu "+namaMenu, function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idalmamater').clear().type(this.data.u_kode);
    cy.get('#u_almamater').clear().type(this.data.u_namaAlmamater)
      .tab()
      .click();
    cy.alert_notifikasi("U", namaMenuAlert);
  });

  it("Super Admin Check Batal Delete", function () {
    cy.get('td').contains(this.data.u_kode)
    .next()
    .next()
    .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.delete("Tidak");
  });

  it("Super Admin Bisa Delete "+namaMenu+" Baru", function () {
    cy.get('td').contains(this.data.u_kode)
    .next()
    .next()
    .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.delete("Ya");
    cy.alert_notifikasi("D", namaMenuAlert);
  });
});
