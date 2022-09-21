/// <reference types="cypress"/>

const judulHalaman="Setting Pengaturan SIM";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Setting_Aplikasi()

      cy.fixture('HB-PMB/06-referensi/07-pelengkap/setting_aplikasi').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container > div > aside > section.content-header.content-header-vertical > h1 > small').should('contain',judulHalaman)
  // });

  it('Memastikan nama tabel Setting Aplikasi ada 3', () => {
    cy.get('.content-header > h1 > small').should('contain', 'Setting Pengaturan SIM')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Name')
      .should('contain', 'Value')
      .and('contain', 'Aksi')
  })

  it.only('Admin mengubah data Setting Aplikasi', function () {
    cy.get('td').contains(this.data.setting01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#u_namasetting').clear().type(this.data.namaSetting)
    cy.get('#u_valuesetting').select(this.data.valueSetting)

    cy.get('button.btn.btn-success.btn-xs.btn-flat')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })



});
