/// <reference types="cypress"/>

var namaMenu="Suku";
var namaMenuAlert="suku";
describe("Super Administrator bisa melakukan management "+namaMenu+ " pada menu "+namaMenu, ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin()
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.modulakademik();
    cy.menusuku()
    cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/03_biodata/suku").as('data');
  });

  it("Super Admin Create "+ namaMenu+" Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#insert-row-ms > :nth-child(2) > .btn-success > .fa').click();
    cy.alert_mandatory();
  });

  it("Super Admin Bisa Create "+ namaMenu +" Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_namasuku').type(this.data.i_namaSuku);
      cy.get('#insert-row-ms > :nth-child(2) > .btn-success > .fa').click();
      cy.alert_notifikasi("C", namaMenuAlert);
  });

  it("Super Admin Bisa Searching "+namaMenu+" Baru - Ditemukan", function () {
    //pencarian berdasarkan nama
    cy.get('#cfilter').select(this.data.pencarian_by);
    cy.pencarian(this.data.i_namaSuku);
 });
  
 it("Super Admin Bisa Searching "+namaMenu+" Baru - Tidak Ditemukan", function () {
    //pencarian berdasarkan nama
    cy.get('#cfilter').select(this.data.pencarian_by);
    cy.pencarian(this.data.u_namaSuku);
 });

 it("Super Admin Bisa Merefresh Halaman", function () {
  cy.refresh_page(namaMenu);
});

  /* Fungsi duplicate belum ada karena saat tambah tidak memasukkan kode unik, hanya nama
    it("Super Admin Ga Bisa Create Suku Yang Sama", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_namasuku').type(this.data.i_namaSuku);
      cy.get('#insert-row-ms > :nth-child(2) > .btn-success > .fa').click();
      cy.get(".alert").should("be.visible").contains(this.data.i_alertDuplicate);
    });
  */

  it("Super Admin Batalkan Proses Create/Edit", function () {
    cy.get('#cfilter').select(this.data.pencarian_by);
    cy.pencarian(this.data.i_namaSuku)
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_namasuku').clear().type(this.data.u_namaSuku)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu "+namaMenu, function () {
    cy.get('#cfilter').select(this.data.pencarian_by);
    cy.pencarian(this.data.i_namaSuku)
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_namasuku').clear().type(this.data.u_namaSuku)
      .tab()
      .click();
    cy.alert_notifikasi("U", namaMenuAlert);
  });

  it("Super Admin Check Batal Delete", function () {
    cy.get('#cfilter').select(this.data.pencarian_by);
    cy.pencarian(this.data.u_namaSuku)
    .next()
    .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.delete("Tidak");
  });

  it("Super Admin Bisa Delete Suku Baru", function () {
    cy.get('#cfilter').select(this.data.pencarian_by);
    cy.pencarian(this.data.u_namaSuku)
      .next()
     .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('.modal-footer > .btn-primary').click();
    cy.alert_notifikasi("D", namaMenuAlert);
  });
});
