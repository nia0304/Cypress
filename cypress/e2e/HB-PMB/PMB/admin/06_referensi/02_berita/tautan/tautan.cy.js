/// <reference types="cypress"/>

const judulHalaman = "Tautan Terkait";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Tautan()

    cy.fixture('HB-PMB/06-referensi/02-berita/tautan').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('.content-header > h1 > small').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel tautan ada 4', () => {
    cy.get('.content-header > h1 > small').should('contain', 'Tautan Terkait')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Nama')
      .and('contain', 'URL')
      .and('contain', 'Urutan')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data tautan', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_namalink').type(this.data.namaTautan01)

    cy.get('#i_urllink').type(this.data.url01)

    cy.get('#i_urutan').type(this.data.urutan01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin mengubah data tautan', function () {
    cy.get('td').contains(this.data.namaTautan01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#u_namalink').clear().type(this.data.namaTautan02)

    cy.get('#u_urllink').clear().type(this.data.url02)

    cy.get('#u_urutan').clear().type(this.data.urutan02)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data tautan', function () {
    cy.get('td').contains(this.data.namaTautan01)
      .parent()
      .find('.btn-danger ').click()

      cy.get('.modal-content').should('contain', this.data.modalHapus)
      cy.get('.modal-footer > .btn-primary').click()
  
      // assert berhasil hapus 
      cy.get('.alert').should('contain', this.data.alertHapus)

  })

  // negatif case 
  it('Admin menambahkan data tautan tanpa melengkapi data', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_namalink').type(this.data.namaTautan01)

    // cy.get('#i_urllink').type(this.data.url01)

    cy.get('#i_urutan').type(this.data.urutan01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert 
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)

    // klik ok
    // cy.get('.modal-footer > .btn').click()

  })

});
