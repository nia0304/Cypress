Cypress.Commands.add('Menu_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(2) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Pegawai', ()=>{
  cy.get('.container > .nav > :nth-child(2) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Pengumuman', () => {
  cy.get('.container > .nav > :nth-child(2) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Kelas_EdLink', () => {
  cy.get('.container > .nav > :nth-child(2) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Forum_Kelas', () => {
  cy.get('.container > .nav > :nth-child(2) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Konsultasi', () => {
  cy.get('.container > .nav > :nth-child(2) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Kegiatan_Akademik', () => {
  cy.get('.container > .nav > :nth-child(2) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > a').click()
  cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Kalender_Akademik', () => {
  cy.get('.container > .nav > :nth-child(2) > :nth-child(1)').click()
      cy.get('.open > :nth-child(2) > :nth-child(7) > a').click()
      cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Monitoring_Kegiatan_Akademik', () => {
  cy.get('.container > .nav > :nth-child(2) > :nth-child(1)').click()
      cy.get('.open > :nth-child(2) > :nth-child(7) > a').click()
      cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Broadcast', () => {
  cy.get('.container > .nav > :nth-child(2) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(8) > a').click()
});

