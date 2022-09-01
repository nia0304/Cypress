Cypress.Commands.add('konfirmasi_simpan', () => {
    cy.get('#modal-konfirmasi').should('contain', 'Apakah anda yakin akan menyimpan data ini?')
      .and('be.visible')
    cy.get('[data-bb-handler="cancel"]').should('be.visible').and('contain', 'Batalkan');
    cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
});

Cypress.Commands.add('konfirmasi_batal_simpan', () => {
    cy.get('#modal-konfirmasi').should('contain', 'Apakah anda yakin akan menyimpan data ini?')
      .and('be.visible')
    cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin')
    cy.get('[data-bb-handler="cancel"]').should('be.visible').and('contain', 'Batalkan').click()
});

Cypress.Commands.add('konfirmasi_setuju_hapus', () => {
  cy.get('#modal-konfirmasi').should('contain', 'Apakah anda yakin akan menghapus data ini?')
  cy.get('[data-bb-handler="cancel"]').should('be.visible').and('contain', 'Batalkan')
  cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
});

Cypress.Commands.add('konfirmasi_batal_hapus', () => {
  cy.get('#modal-konfirmasi').should('contain', 'Apakah anda yakin akan menghapus data ini?')
  cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin')
  cy.get('[data-bb-handler="cancel"]').should('be.visible').and('contain', 'Batalkan').click()
});

Cypress.Commands.add('konfirmasi_isian_kosong', () => {
  cy.get('#modal-konfirmasi').should('contain', 'Mohon mengisi isian yang bergaris merah')
    .and('be.visible')
  cy.get('[data-bb-handler="ok"]').should('be.visible')
});