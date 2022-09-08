/// <reference types="cypress"/>

var namaMenu="Skala Nilai";
var namaMenuAlert="skala nilai";
describe("Super Administrator bisa melakukan management "+namaMenu+ " pada menu "+namaMenu, ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin()
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.modulakademik();
    cy.menuskalanilai();
    cy.fixture("HB-ADM/02-akademik/02_perkuliahan/01_data_kurikulum/skala_nilai").as('data');
  });

  it.only("Super Admin Create "+ namaMenu+" Required Fields Harus Di isi", function () {
    var today = new Date();
    var currentYear = today.getFullYear();
    cy.get('#kurikulum').select(String(currentYear));
    cy.wait(0);
    cy.get('#unit').select(this.data.unit)
    cy.wait(0);
    cy.get('#jenjang').select(this.data.jenjang);
    // cy.get('#wrap-button > button').click();
    // cy.get(':nth-child(6) > .btn-success > .fa').click();
    // cy.alert_mandatory();
    // cy.get('#i_nhuruf').type(this.data.i_nhuruf);
    // cy.get(':nth-child(6) > .btn-success > .fa').click();
    // cy.alert_mandatory();
    // cy.get('#i_nangka').type(this.data.i_nangka);
    // cy.get(':nth-child(6) > .btn-success > .fa').click();
    // cy.alert_mandatory();
    // cy.get('#i_batasbawah').type(this.data.i_batasbawah);
    // cy.get(':nth-child(6) > .btn-success > .fa').click();
    // cy.alert_mandatory();
    // cy.get('#i_nhuruf').clear();
    // cy.get('#i_nangka').clear();
    // cy.get('#i_batasbawah').clear();
    // cy.get('#i_batasatas').type(this.data.i_batasatas);
    // cy.get(':nth-child(6) > .btn-success > .fa').click();
    // cy.alert_mandatory();
  });

  it("Super Admin Bisa Create "+ namaMenu +" Baru", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idkurikulum').clear().type(this.data.i_tahun);
    cy.get('#i_namakurikulum').type(this.data.i_keterangan);
    cy.get('#i_idperiode').select(this.data.i_mulaiBerlaku);
    cy.get('#i_tglawal').type(this.data.i_tglAwal);
    cy.get('#i_tglakhir').type(this.data.i_tglAkhir);
    cy.get(':nth-child(6) > .btn-success > .fa').click();
    cy.alert_notifikasi("C", namaMenuAlert);
  });

  it("Super Admin Bisa Searching "+namaMenu+" Baru - Ditemukan", function () {
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    //pencarian berdasarkan tahun
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.pencarian(this.data.i_tahun);
    //pencarian berdasarkan keterangan
    cy.get('#cfilter').select(pencarian_by[1]);
    cy.pencarian(this.data.i_keterangan);
    //pencarian berdasarkan mulai berlaku
    cy.get('#cfilter').select(pencarian_by[2]);
    cy.pencarian(this.data.i_mulaiBerlaku);
    //pencarian berdasarkan tanggal awal
    cy.get('#cfilter').select(pencarian_by[3]);
    cy.pencarian(this.data.i_tglAwal);
    //pencarian berdasarkan tanggal akhir
    cy.get('#cfilter').select(pencarian_by[4]);
    cy.pencarian(this.data.i_tglAkhir);
  });
  
  it("Super Admin Bisa Searching "+namaMenu+" Baru - Tidak Ditemukan", function () {
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    //pencarian berdasarkan tahun
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.pencarian(this.data.u_tahun);
    //pencarian berdasarkan keterangan
    cy.get('#cfilter').select(pencarian_by[1]);
    cy.pencarian(this.data.u_keterangan);
    //pencarian berdasarkan mulai berlaku
    cy.get('#cfilter').select(pencarian_by[2]);
    cy.pencarian(this.data.u_mulaiBerlaku);
    //pencarian berdasarkan tanggal awal
    cy.get('#cfilter').select(pencarian_by[3]);
    cy.pencarian(this.data.u_tglAwal);
    //pencarian berdasarkan tanggal akhir
    cy.get('#cfilter').select(pencarian_by[4]);
    cy.pencarian(this.data.u_tglAkhir);
  });

  it("Super Admin Bisa Merefresh Halaman", function () {
    cy.refresh_page(namaMenu);
  });

  it("Super Admin Ga Bisa Create "+namaMenu+" Yang Sama", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idkurikulum').clear().type(this.data.i_tahun);
    cy.get('#i_namakurikulum').type(this.data.i_keterangan);
    cy.get('#i_idperiode').type(this.data.i_mulaiBerlaku);
    cy.get('#i_tglawal').type(this.data.i_tglAwal);
    cy.get('#i_tglakhir').type(this.data.i_tglAkhir);
    cy.get(':nth-child(6) > .btn-success > .fa').click();
    cy.alert_notifikasi("X", namaMenuAlert);
  });

  it("Super Admin Batalkan Proses Create/Edit", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#insert-row-ms > td:nth-child(6) > button.btn.btn-warning.btn-xs.btn-flat').click();
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.pencarian(this.data.i_tahun)
      .next()
      .next()
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_tglakhir').clear().type(this.data.u_tglAkhir)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu "+namaMenu, function () {
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.pencarian(this.data.i_tahun)
      .next()
      .next()
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idkurikulum').clear().type(this.data.u_tahun);
    cy.get('#u_namakurikulum').clear().type(this.data.u_keterangan)
    cy.get('#u_idperiode').select(this.data.u_mulaiBerlaku)
    cy.get('#u_tglawal').clear().type(this.data.u_tglAwal)
    cy.get('#u_tglakhir').clear().type(this.data.u_tglAkhir)
      .tab()
      .click();
    cy.alert_notifikasi("U", namaMenuAlert);
  });

  it("Super Admin Check Batal Delete", function () {
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.pencarian(this.data.u_tahun)
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
    cy.pencarian(this.data.u_tahun)
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
