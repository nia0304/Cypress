//01_aktivitas-=====================================================================
Cypress.Commands.add('menujenisaktivitasdanprestasi', () => {
  cy.visit("siakad/ms_jenisaktivitasmhs");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Jenis Aktivitas"
  );
});

Cypress.Commands.add('menutingkatprestasi', () => {
  cy.visit("siakad/ms_tingkatprestasimhs");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Tingkat Prestasi"
  );
});

Cypress.Commands.add('menujenisprestasi', ()=>{
  cy.visit("siakad/ms_jenisprestasimhs");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Jenis Prestasi"
  );
});

Cypress.Commands.add('menukelompokaktivitas', () => {
  cy.visit("siakad/list_kelompokaktivitasmhs");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Kelompok Aktivitas"
  );
});

Cypress.Commands.add('menuperingkataktivitas', () => {
  cy.visit("siakad/ms_peringkatmhs");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Peringkat"
  );
});

Cypress.Commands.add('menuaktivitasdanprestasi', () => {
  cy.visit("siakad/list_aktivitasmhs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Aktivitas dan Prestasi Daftar Aktivitas dan Prestasi"
  );
});

Cypress.Commands.add('menuvalidasiaktivitas', () => {
  cy.visit("siakad/set_validasiaktivitas");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Validasi Aktivitas Mahasiswa"
  );
});

//02_pelanggaran-===================================================================
Cypress.Commands.add('menujenispelanggaran', () => {
  cy.visit("siakad/ms_jenispelanggaran");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Jenis Pelanggaran"
  );

});

Cypress.Commands.add('menukelompokpelanggaran', ()=>{
  cy.visit("siakad/ms_kelompokpelanggaran");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kelompok Pelanggaran"
  );
});

Cypress.Commands.add('menusanksipelanggaran', () => {
  cy.visit("siakad/ms_sanksipelanggaran");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Sanksi Pelanggaran"
  );
});

Cypress.Commands.add('menudaftarpelanggaran', () => {
  cy.visit("siakad/list_pelanggaranmhs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Pelanggaran Mahasiswa"
  );
});

Cypress.Commands.add('menuvalidasipelanggaran', () => {
  cy.visit("siakad/set_validasipelanggaran");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Validasi Pelanggaran Mahasiswa"
  );
});

//03_skpi-==========================================================================
Cypress.Commands.add('menusettinginformasiprodi', () => {
  cy.visit("siakad/list_settingskpiprodi");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Setting SKPI"
  );
});

Cypress.Commands.add('menuskpimahasiswa', () => {
  cy.visit("siakad/repp_skpi");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "SKPI Mahasiswa"
  );
});

//04_laporan-=======================================================================
Cypress.Commands.add('menurekapprestasimahasiswa', () => {
  cy.visit("siakad/repp_prestasimhs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Rekap Prestasi Mahasiswa"
  );
});

Cypress.Commands.add('menulaporanskpi', () => {
  cy.visit("siakad/repp_skpi_mahasiswa");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan SKPI Mahasiswa"
  );
});

Cypress.Commands.add('menulaporanskkm', () => {
  cy.visit("siakad/repp_skkm");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan SKKM Mahasiswa"
  );
});

