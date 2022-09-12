/// <reference types="cypress"/>

var namaMenu="Penghasilan";
var namaMenuAlert="penghasilan";
describe("Super Administrator bisa melakukan management "+namaMenu+ " pada menu "+namaMenu, ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin()
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.modulakademik();
    cy.menupenghasilan()
    cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/03_biodata/penghasilan").as('data');
  });

  it("Super Admin Create "+ namaMenu+" Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_namapenghasilan').type(this.data.i_namaPenghasilan);
    cy.get(':nth-child(4) > .btn-success').click();
    cy.alert_mandatory();
    cy.get('#i_idpenghasilan').type(this.data.i_kode);
    cy.get('#i_namapenghasilan').clear();
    cy.get(':nth-child(4) > .btn-success').click();
    cy.alert_mandatory();
  });

  it("Super Admin Bisa Create "+ namaMenu +" Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idpenghasilan').type(this.data.i_kode);
      cy.get('#i_namapenghasilan').type(this.data.i_namaPenghasilan);
      cy.get('#i_kodeemispenghasilan').type(this.data.i_kodeEmis);
      cy.get(':nth-child(4) > .btn-success').click();
      cy.alert_notifikasi("C", namaMenuAlert);
  });

  it("Super Admin Ga Bisa Create "+namaMenu+" Yang Sama", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idpenghasilan').type(this.data.i_kode);
    cy.get('#i_namapenghasilan').type(this.data.i_namaPenghasilan);
    cy.get('#i_kodeemispenghasilan').type(this.data.i_kodeEmis);
    cy.get(':nth-child(4) > .btn-success').click();
    cy.alert_notifikasi("X", namaMenuAlert);
  });

  it("Super Admin Batalkan Proses Create/Edit", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#insert-row-ms > :nth-child(4) > .btn-warning > .fa').click();
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_kodeemispenghasilan').clear().type(this.data.i_kodeEmis)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu "+namaMenu, function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idpenghasilan').clear().type(this.data.u_kode);
    cy.get('#u_namapenghasilan').clear().type(this.data.u_namaPenghasilan);
    cy.get('#u_kodeemispenghasilan').clear().type(this.data.u_kodeEmis)
      .tab()
      .click();
    cy.alert_notifikasi("U", namaMenuAlert);
  });

  it("Super Admin Check Batal Delete", function () {
    cy.get('td').contains(this.data.u_kode)
    .next()
    .next()
    .next()
    .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.delete("Tidak");
  });

  it("Super Admin Bisa Delete Penghasilan Baru", function () {
    cy.get('td').contains(this.data.u_kode)
    .next()
    .next()
    .next()
    .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.delete("Ya");
    cy.alert_notifikasi("D", namaMenuAlert);
  });
});
