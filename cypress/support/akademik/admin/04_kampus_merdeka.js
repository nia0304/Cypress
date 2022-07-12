//01_mahasiswa-=====================================================================
Cypress.Commands.add('Menu_Mahasiswa_Merdeka', () => {
  cy.get('.container > .nav > :nth-child(5) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > a').click()
});

//02_kelas_kuliah-==================================================================
Cypress.Commands.add('Menu_Kelas_Kuliah', ()=>{
  cy.get('.container > .nav > :nth-child(5) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > a').click()
});
//03_laporan-=======================================================================
Cypress.Commands.add('Menu_Nilai_per_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(5) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-toggle').click()
  cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Nilai_per_Kelas', () => {
  cy.get('.container > .nav > :nth-child(5) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > .dropdown-submenu > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});
