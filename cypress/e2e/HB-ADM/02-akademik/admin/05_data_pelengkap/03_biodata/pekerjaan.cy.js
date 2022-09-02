/// <reference types="cypress"/>

var namaMenu="Pekerjaan";
var namaMenuAlert="pekerjaan";
describe("Super Administrator bisa melakukan management "+namaMenu+ " pada menu "+namaMenu, ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin()
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.modulakademik();
    cy.menu_pekerjaan();
    cy.get('.content-header > h1').should('contain',namaMenu);
    cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/03_biodata/pekerjaan").as('data');
  });

  it("Super Admin Create "+ namaMenu+" Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_namapekerjaan').type(this.data.i_namaPekerjaan);
    cy.get(':nth-child(6) > .btn-success > .fa').click();
    cy.alert_mandatory();
    cy.get('#i_idpekerjaan').type(this.data.i_kode);
    cy.get('#i_namapekerjaan').clear();
    cy.get(':nth-child(6) > .btn-success > .fa').click();
    cy.alert_mandatory();
  });

  it("Super Admin Bisa Create "+ namaMenu +" Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idpekerjaan').clear().type(this.data.i_kode);
      cy.get('#i_namapekerjaan').type(this.data.i_namaPekerjaan);
      cy.get('#i_kodeemispekerjaan').type(this.data.i_kodeEmis);
      cy.get('#i_kodeemispekerjaanmhs').type(this.data.i_kodeEmisMhs);
      cy.get('#i_kodeemispekerjaanlulusan').type(this.data.i_kodeEmisLulusan);
      cy.get(':nth-child(6) > .btn-success > .fa').click();
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
    cy.pencarian(this.data.i_namaPekerjaan);
    //pencarian berdasarkan kode emis
    cy.get('#cfilter').select(pencarian_by[2]);
    cy.pencarian(this.data.i_kodeEmis);
    //pencarian berdasarkan kode emis mhs
    cy.get('#cfilter').select(pencarian_by[3]);
    cy.pencarian(this.data.i_kodeEmisMhs);
    //pencarian berdasarkan kode emis lulusan
    cy.get('#cfilter').select(pencarian_by[4]);
    cy.pencarian(this.data.i_kodeEmisLulusan);
 });
  
 it("Super Admin Bisa Searching "+namaMenu+" Baru - Tidak Ditemukan", function () {
      let text=this.data.pencarian_by;
      const pencarian_by = text.split(",");
      //pencarian berdasarkan kode
      cy.get('#cfilter').select(pencarian_by[0]);
      cy.pencarian(this.data.u_kode);
      //pencarian berdasarkan nama
      cy.get('#cfilter').select(pencarian_by[1]);
      cy.pencarian(this.data.u_namaPekerjaan);
      //pencarian berdasarkan kode emis
      cy.get('#cfilter').select(pencarian_by[2]);
      cy.pencarian(this.data.u_kodeEmis);
      //pencarian berdasarkan kode emis mhs
      cy.get('#cfilter').select(pencarian_by[3]);
      cy.pencarian(this.data.u_kodeEmisMhs);
      //pencarian berdasarkan kode emis lulusan
      cy.get('#cfilter').select(pencarian_by[4]);
      cy.pencarian(this.data.u_kodeEmisLulusan);
  });


  it("Super Admin Bisa Merefresh Halaman", function () {
    cy.refresh_page(namaMenu);
  });

  it("Super Admin Ga Bisa Create "+namaMenu+" Yang Sama", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idpekerjaan').clear().type(this.data.i_kode);
    cy.get('#i_namapekerjaan').type(this.data.i_namaPekerjaan);
    cy.get('#i_kodeemispekerjaan').type(this.data.i_kodeEmis);
    cy.get('#i_kodeemispekerjaanmhs').type(this.data.i_kodeEmisMhs);
    cy.get('#i_kodeemispekerjaanlulusan').type(this.data.i_kodeEmisLulusan);
    cy.get(':nth-child(6) > .btn-success > .fa').click();
    cy.alert_notifikasi("X", namaMenuAlert);
  });

  it("Super Admin Batalkan Proses Create/Edit", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#insert-row-ms > td:nth-child(6) > button.btn.btn-warning.btn-xs.btn-flat').click();
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.pencarian(this.data.i_kode)
      .next()
      .next()
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_kodeemispekerjaanlulusan').clear().type(this.data.u_kodeEmisLulusan)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu "+namaMenu, function () {
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.pencarian(this.data.i_kode)
      .next()
      .next()
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idpekerjaan').clear().type(this.data.u_kode);
    cy.get('#u_namapekerjaan').clear().type(this.data.u_namaPekerjaan)
    cy.get('#u_kodeemispekerjaan').clear().type(this.data.u_kodeEmis)
    cy.get('#u_kodeemispekerjaanmhs').clear().type(this.data.u_kodeEmisMhs)
    cy.get('#u_kodeemispekerjaanlulusan').clear().type(this.data.u_kodeEmisLulusan)
      .tab()
      .click();
    cy.alert_notifikasi("U", namaMenuAlert);
  });

  it("Super Admin Check Batal Delete", function () {
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.pencarian(this.data.u_kode)
    .next()
    .next()
    .next()
    .next()
    .next()
    .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.delete("Tidak");
  });

  it("Super Admin Bisa Delete "+namaMenu+" Baru", function () {
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.pencarian(this.data.u_kode)
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
