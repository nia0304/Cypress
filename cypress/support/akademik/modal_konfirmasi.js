const simpan = 'Apakah anda yakin akan menyimpan data ini?'
const hapus = 'Apakah anda yakin akan menghapus data ini?'
const wajib = 'Mohon mengisi isian yang bergaris merah'

Cypress.Commands.add('konfirmasi_simpan', (save) => {
    cy.get('#modal-konfirmasi').should('be.visible')
      .and('contain', simpan)
      if(save=="ya"){
        cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
      }else if(save=="tidak"){
        cy.get('[data-bb-handler="cancel"]').should('be.visible').and('contain', 'Batalkan').click()
      }else if(save=="ok"){
        cy.get('[data-bb-handler="ok"]').should('be.visible').and('contain', 'Ok').click()
      }
});

Cypress.Commands.add('konfirmasi_batal_simpan', () => {
    cy.get('#modal-konfirmasi').should('be.visible')
      .and('contain', 'Apakah anda yakin akan menyimpan data ini?')
    cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin')
    cy.get('[data-bb-handler="cancel"]').should('be.visible').and('contain', 'Batalkan').click()
});

Cypress.Commands.add('konfirmasi_setuju_hapus', () => {
  cy.get('#modal-konfirmasi').should('contain', hapus)
  cy.get('[data-bb-handler="cancel"]').should('be.visible').and('contain', 'Batalkan')
  cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
});

Cypress.Commands.add('konfirmasi_batal_hapus', () => {
  cy.get('#modal-konfirmasi').should('contain', 'Apakah anda yakin akan menghapus data ini?')
  cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin')
  cy.get('[data-bb-handler="cancel"]').should('be.visible').and('contain', 'Batalkan').click()
});

Cypress.Commands.add('konfirmasi_isian_kosong', () => {
  cy.get('#modal-konfirmasi').should('contain', wajib)
    .and('be.visible')
  cy.get('[data-bb-handler="ok"]').should('be.visible')
});