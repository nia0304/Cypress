/// <reference types="cypress"/>

var namaMenu="Kebutuhan Khusus";
var namaMenuAlert="kebutuhankhusus";
describe("Super Administrator bisa melakukan management "+namaMenu+ " pada menu "+namaMenu, ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.modulakademik();
    cy.menukebutuhankhusus();
    cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/04_mahasiswa/kebutuhan_khusus").as('data');
  });

  it("Super Admin Create "+ namaMenu+" Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_namakk').type(this.data.i_namaKK);
    cy.get(':nth-child(3) > .btn-success').click();
    cy.alert_mandatory();
    cy.get('#i_idkk').type(this.data.i_kode);
    cy.get('#i_namakk').clear();
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.alert_mandatory();
  });

  it("Super Admin Bisa Create "+ namaMenu +" Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idkk').clear().type(this.data.i_kode);
      cy.get('#i_namakk').type(this.data.i_namaKK);
      cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
      cy.alert_notifikasi("C", namaMenuAlert);
  });

  it("Super Admin Bisa Searching "+namaMenu+" Baru - Ditemukan", function () {
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    //pencarian berdasarkan kode
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.pencarian(this.data.i_kode);
    //pencarian berdasarkan nama
    cy.get('#cfilter').select(pencarian_by[1]);
    cy.pencarian(this.data.i_namaKK);
  });
  
  it("Super Admin Bisa Searching "+namaMenu+" Baru - Tidak Ditemukan", function () {
      let text=this.data.pencarian_by;
      const pencarian_by = text.split(",");
      //pencarian berdasarkan kode
      cy.get('#cfilter').select(pencarian_by[0]);
      cy.pencarian(this.data.u_kode);
      //pencarian berdasarkan nama
      cy.get('#cfilter').select(pencarian_by[1]);
      cy.pencarian(this.data.u_namaKK);
  });

  it("Super Admin Bisa Merefresh Halaman", function () {
    cy.refresh_page(namaMenu);
  });

  it("Super Admin Ga Bisa Create "+namaMenu+" Yang Sama", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idkk').clear().type(this.data.i_kode);
    cy.get('#i_namakk').type(this.data.i_namaKK);
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
    cy.get('#u_namakk').clear().type(this.data.u_namaKK)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu "+namaMenu, function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idkk').clear().type(this.data.u_kode);
    cy.get('#u_namakk').clear().type(this.data.u_namaKK)
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

