/// <reference types="cypress"/>

const judulHalaman="Syarat";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_syarat_seleksi()

      cy.fixture('HB-PMB/06-referensi/03-seleksi/syarat_seleksi').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel syarat seleksi  ada 3', () => {
    cy.get('.content-header > h1').should('contain', 'Syarat')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Nama Syarat')
      .and('contain', 'Poin')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data syarat seleksi', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_namasyarat').type(this.data.namaSyarat01)

    cy.get("#i_poinsyarat").type(this.data.poin01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    
    // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)
  })

  it('Admin mengubah data syarat seleksi', function () {
    cy.get('td').contains(this.data.namaSyarat01)
      .parent()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click()

    cy.get('#u_namasyarat').clear().type(this.data.namaSyarat02)

    cy.get("#u_poinsyarat").clear().type(this.data.poin02)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    
    // assert 
    cy.get('.alert').should('contain', this.data.alertUbah)
  })

  it('Admin menghapus data syarat seleksi', function () {
    cy.get('td').contains(this.data.namaSyarat02)
      .parent()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)
  })

  // negatif case
  
  it.only('Admin menghapus data yang masih masih menjadi referensi data lain', function () {
    cy.get('td').contains(this.data.dataSyarat)
      .parent()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertGagalHapus)
  })


});
