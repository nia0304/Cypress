/// <reference types="cypress"/>

var namaMenu="Transportasi";
var namaMenuAlert="transport";
describe("Super Administrator bisa melakukan management "+namaMenu+ " pada menu "+namaMenu, ()=>{
 
  beforeEach(() =>   {
      cy.loginsuperadmin();
      cy.get(".main_title").should("contain", "Daftar Modul");
      cy.modulakademik();
      cy.menu_transportasi();
      cy.get('.content-header > h1').should('contain',namaMenu);
      cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/04_mahasiswa/transportasi").as('data');
  });

  it("Super Admin Create "+ namaMenu+" Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_namatransport').type(this.data.i_namaTransportasi);
    cy.get(':nth-child(3) > .btn-success').click();
    cy.alert_mandatory();
    cy.get('#i_idtransport').type(this.data.i_kode);
    cy.get('#i_namatransport').clear();
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.alert_mandatory();
  });

  it("Super Admin Bisa Create "+ namaMenu +" Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idtransport').clear().type(this.data.i_kode);
      cy.get('#i_namatransport').type(this.data.i_namaTransportasi);
      cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
      cy.alert_notifikasi("C", namaMenuAlert);
  });

  it("Super Admin Ga Bisa Create "+namaMenu+" Yang Sama", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idtransport').clear().type(this.data.i_kode);
    cy.get('#i_namatransport').type(this.data.i_namaTransportasi);
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
    cy.get('#u_namatransport').clear().type(this.data.u_namaTransportasi)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu "+namaMenu, function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idtransport').clear().type(this.data.u_kode);
    cy.get('#u_namatransport').clear().type(this.data.u_namaTransportasi)
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
