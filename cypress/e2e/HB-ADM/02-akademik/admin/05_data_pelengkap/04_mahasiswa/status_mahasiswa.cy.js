/// <reference types="cypress"/>

var namaMenu="Status Mahasiswa";
var namaMenuAlert="status mahasiswa";
describe("Super Administrator bisa melakukan management "+namaMenu+ " pada menu "+namaMenu, ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.modulakademik();
    cy.menu_status_mahasiswa();
    cy.get('.content-header > h1').should('contain',namaMenu);
    cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/04_mahasiswa/status_mahasiswa").as('data');
  });

  it("Super Admin Create "+ namaMenu+" Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_namastatusmhs').type(this.data.i_namaStatusMhs);
    cy.get(':nth-child(7) > .btn-success').click();
    cy.alert_mandatory();
    cy.get('#i_idstatusmhs').type(this.data.i_kode);
    cy.get('#i_namastatusmhs').clear();
    cy.get(':nth-child(7) > .btn-success').click();
    cy.alert_mandatory();
  });

  it("Super Admin Bisa Create "+ namaMenu +" Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idstatusmhs').type(this.data.i_kode);
      cy.get('#i_namastatusmhs').type(this.data.i_namaStatusMhs);
      cy.get('#insert-row-ms > :nth-child(3)').find(".icheckbox_minimal").click();
      cy.get('#insert-row-ms > :nth-child(4)').find(".icheckbox_minimal").click();
      cy.get('#insert-row-ms > :nth-child(5)').find(".icheckbox_minimal").click();
      cy.get('#i_kodeemisstatusmhs').type(this.data.i_kodeEmis);
      cy.get(':nth-child(7) > .btn-success > .fa').click();
      cy.alert_notifikasi("C", namaMenuAlert);
  });

  it("Super Admin Ga Bisa Create "+namaMenu+" Yang Sama", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idstatusmhs').type(this.data.i_kode);
      cy.get('#i_namastatusmhs').type(this.data.i_namaStatusMhs);
      cy.get('#insert-row-ms > :nth-child(3)').find(".icheckbox_minimal").click();
      cy.get('#insert-row-ms > :nth-child(4)').find(".icheckbox_minimal").click();
      cy.get('#insert-row-ms > :nth-child(5)').find(".icheckbox_minimal").click();
      cy.get('#i_kodeemisstatusmhs').type(this.data.i_kodeEmis);
      cy.get(':nth-child(7) > .btn-success > .fa').click();
      cy.alert_notifikasi("X", namaMenuAlert);
  });

  it("Super Admin Batalkan Proses Create/Edit", function () {
    cy.get('#wrap-button > button').click();
    cy.get('td').find('button.btn.btn-warning.btn-xs.btn-flat').click();
    cy.get('td').contains('A')
      .next()
      .next()
      .next()
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
      cy.get('#u_kodeemisstatusmhs').clear().type(this.data.u_kodeEmis)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu "+namaMenu, function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .next()
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idstatusmhs').clear().type(this.data.u_kode);
    cy.get('#u_namastatusmhs').clear().type(this.data.u_namaStatusMhs)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').find(".icheckbox_minimal").click();
    cy.get('tbody > :nth-child(2) > :nth-child(4)').find(".icheckbox_minimal").click();
    cy.get('tbody > :nth-child(2) > :nth-child(5)').find(".icheckbox_minimal").click();
    cy.get('#u_kodeemisstatusmhs').clear().type(this.data.u_kodeEmis)
      .tab()
      .click();
    cy.alert_notifikasi("U", namaMenuAlert);
  });

  it("Super Admin Check Batal Delete", function () {
    cy.get('td').contains(this.data.u_kode)
      .next()
      .next()
      .next()
      .next()
      .next()
      .next()
    .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.delete("Tidak");
  });

  it("Super Admin Bisa Delete "+namaMenu+" Baru", function () {
    cy.get('td').contains(this.data.u_kode)
    .next()
      .next()
      .next()
      .next()
      .next()
      .next()
    .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.delete("Ya");
    cy.alert_notifikasi("D", namaMenuAlert);
  });
});
