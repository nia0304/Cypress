//01_periode_akademik-=====================================================================
Cypress.Commands.add('menuperiodeakademik', () => {
  cy.visit("siakad/list_periode");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Periode Akademik Daftar Periode Akademik"
  );
});

//02_setting_prodi-========================================================================
Cypress.Commands.add('menusettingprodi', () => {
  cy.visit("siakad/list_settingprodi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Setting Setting Program Studi"
  );
});

//03_kuesioner_layanan-====================================================================
Cypress.Commands.add('menukategorikuesionerlayanan', () => {
  cy.visit("siakad/ms_katkuesionerlayanan");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kategori Kuesioner Layanan"
  );
});

Cypress.Commands.add('menudaftarkuesionerlayananlama', () => {
  cy.visit("siakad/list_angketlayanan");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Angket Layanan"
  );
});

Cypress.Commands.add('menujenisjawaban', () => {
  cy.visit("siakad/list_jenisjawabanangket");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Jenis Jawaban Daftar Jenis Jawaban"
  );
});

Cypress.Commands.add('menudaftarkuesionerlayanan', () => {
  cy.visit("siakad/list_kuesionerlayanan");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kuesioner Layanan Daftar Kuesioner Layanan"
  );
});
//04_setting_aplikasi-=====================================================================
Cypress.Commands.add('menusettingaplikasi', () => {
  cy.visit("siakad/ms_settingapk/detail");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Setting Setting Pengaturan SIM"
  );
});