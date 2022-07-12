//01_aktivitas-=====================================================================
Cypress.Commands.add('Menu_Jenis_Aktivitas_dan_Prestasi', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Tingkat_Prestasi', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Jenis_Prestasi', ()=>{
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Kelompok_Aktivitas', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Peringkat_Aktivitas', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Aktivitas_dan_Prestasi', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Validasi_Aktivitas', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

//02_pelanggaran-===================================================================
Cypress.Commands.add('Menu_Jenis_Pelanggaran', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Kelompok_Pelanggaran', ()=>{
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Sanksi_Pelanggaran', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Pelanggaran', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Validasi_Pelanggaran', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

//03_skpi-==========================================================================
Cypress.Commands.add('Menu_Setting_Informasi_Prodi', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_SKPI_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

//04_laporan-=======================================================================
Cypress.Commands.add('Menu_Rekap_Prestasi_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Laporan_SKPI', () => {
  cy.get('.container > .nav > :nth-child(4) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

