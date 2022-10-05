/// <reference types="cypress"/>

describe('Cek Bentrok', ()=>{
 
  beforeEach(() => {
    //login
      cy.loginsuperadmin()
      cy.moduladminaplikasi()
  });

  it('Apply Marketplace', () => {
      cy.visit('http://localhost/siacloud/admin/set_loginas');
      cy.get('#userid_label').type('1974201006');
      cy.get('.tt-suggestion').each(($el, index, $list) => {
        if($el.text() === '1974201006 - DIMAS LUTHFI SUGONDO'){
            cy.wrap($el).click()
        }
      })
      cy.get('[data-cy=btn-login]').click();
      cy.url().should('contains', 'http://localhost/siacloud/gate/menu');
      cy.get('#link-mbkm').click();
      cy.get('#mbkm .rolename').click();
      cy.url().should('contains', 'http://localhost/siacloud/mbkm/home');
      cy.visit('http://localhost/siacloud/mbkm/detail_lowongan/8');
      cy.get('#btn-daftar').click();
  });
});