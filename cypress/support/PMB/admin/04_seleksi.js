Cypress.Commands.add('Menu_Nilai_Seleksi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(5) > a').click()
    cy.get('#menu > div > div > ul > li:nth-child(5) > div > div > ul > li:nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Syarat_Seleksi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(5) > a').click()
    cy.get('#menu > div > div > ul > li:nth-child(5) > div > div > ul > li:nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Pengisian_Nilai', () => {
    cy.get('#menu > div > div > ul > li:nth-child(5) > a').click()
    cy.get('#menu > div > div > ul > li:nth-child(5) > div > div > ul > li:nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Kelengkapan_Syarat', () => {
    cy.get('#menu > div > div > ul > li:nth-child(5) > a').click()
    cy.get('#menu > div > div > ul > li:nth-child(5) > div > div > ul > li:nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Ukt_Pendaftar', () => {
    cy.get('#menu > div > div > ul > li:nth-child(5) > a').click()
    cy.get('#menu > div > div > ul > li:nth-child(5) > div > div > ul > li:nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Kip_Kuliah', () => {
    cy.get('#menu > div > div > ul > li:nth-child(5) > a').click()
    cy.get('#menu > div > div > ul > li:nth-child(5) > div > div > ul > li:nth-child(4) > a').click()
});