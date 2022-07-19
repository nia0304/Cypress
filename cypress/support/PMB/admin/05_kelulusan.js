Cypress.Commands.add('Menu_Rekomendasi_Prodi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(6) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Registrasi_Ulang', () => {
    cy.get('#menu > div > div > ul > li:nth-child(6) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Generate_Mahasiswa', () => {
    cy.get('#menu > div > div > ul > li:nth-child(6) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Pembatalan_Nim', () => {
    cy.get('#menu > div > div > ul > li:nth-child(6) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(5) > a').click()
});