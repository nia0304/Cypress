//01_periode_akademik-=====================================================================
Cypress.Commands.add('Menu_Periode_Akademik', () => {
  cy.get('.container > .nav > :nth-child(8) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > a').click()
});

//02_setting_prodi-========================================================================
Cypress.Commands.add('Menu_Setting_Prodi', () => {
  cy.get('.container > .nav > :nth-child(8) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > a').click()
});

//03_kuesioner_layanan-====================================================================
Cypress.Commands.add('Menu_Kategori_Kuesioner_Layanan', () => {
  cy.get('.container > .nav > :nth-child(8) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-toggle').click()
  cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Kuesioner_Layanan_Lama', () => {
  cy.get('.container > .nav > :nth-child(8) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-toggle').click()
  cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Jenis_Jawaban', () => {
  cy.get('.container > .nav > :nth-child(8) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-toggle').click()
  cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Kuesioner_Layanan', () => {
  cy.get('.container > .nav > :nth-child(8) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-toggle').click()
  cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-menu > :nth-child(4) > a').click()
});
//04_setting_aplikasi-=====================================================================
Cypress.Commands.add('Menu_Setting_Aplikasi', () => {
  cy.get('.container > .nav > :nth-child(8) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > a').click()
});