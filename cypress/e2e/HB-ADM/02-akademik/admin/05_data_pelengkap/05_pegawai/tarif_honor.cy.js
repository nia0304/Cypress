/// <reference types="cypress"/>

describe('Testing data pelengkap tarif honor', ()=>{
 
  beforeEach(() => {
      cy.loginsuperadmin()
      cy.modulakademik()
      cy.visit('siakad/list_honortarif');
  });

  it('Admin cek filter jenis honor', () => {
    cy.get('#kodehonor').invoke('text').then((text => cy.log(text)))
  });

});
