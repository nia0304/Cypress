Cypress.Commands.add('modal_konfirmasi', (writting, button_konfirmasi) => {
    cy.get('#modal-konfirmasi').should('be.visible')
      .and('contain', writting)
      if(button_konfirmasi=="ya"){
        cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
      }else if(button_konfirmasi=="tidak"){
        cy.get('[data-bb-handler="cancel"]').should('be.visible').and('contain', 'Batalkan').click()
      }else if(button_konfirmasi=="ok"){
        cy.get('[data-bb-handler="ok"]').should('be.visible').and('contain', 'Ok').click()
      }
});
