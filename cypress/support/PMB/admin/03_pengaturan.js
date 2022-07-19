Cypress.Commands.add('Menu_Periode', () => {
    cy.get('#menu > div > div > ul > li:nth-child(4) > a').click()
    cy.get('#menu > div > div > ul > li:nth-child(4) > div > div > ul > li:nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Program_Studi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(4) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Seleksi_Pendaftaran', () => {
    cy.get('#menu > div > div > ul > li:nth-child(4) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Syarat_Seleksi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(4) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Jadwal_Seleksi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(4) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Ukt', () => {
    cy.get('#menu > div > div > ul > li:nth-child(4) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(9) > a').click()
});
