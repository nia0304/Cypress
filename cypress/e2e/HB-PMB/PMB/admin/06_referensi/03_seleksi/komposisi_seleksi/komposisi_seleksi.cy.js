/// <reference types="cypress"/>

const judulHalaman="Komposisi Seleksi";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_komposisi_seleksi()

      cy.fixture('HB-PMB/06-referensi/03-seleksi/komposisi_seleksi').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel komposisi seleksi ada 4', () => {
    cy.get('.content-header > h1').should('contain', 'Komposisi Seleksi')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .and('contain', 'Nama')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data komposisi seleksi', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idkomposisi').type(this.data.kode01)

    cy.get("#i_namakomposisi").type(this.data.komposisiSeleksi01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // cy.get('button.btn.btn-success.btn-xs.btn-flat').click()
    // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)
  })

  it('Admin mengubah data komposisi seleksi', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click()

    cy.get('#u_idkomposisi').clear().type(this.data.kode02)

    cy.get("#u_namakomposisi").clear().type(this.data.komposisiSeleksi02)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // cy.get('button.btn.btn-success.btn-xs.btn-flat').click()
    // assert 
    cy.get('.alert').should('contain', this.data.alertUbah)
  })

  it('Admin menghapus data komposisi seleksi', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)
  })

  // negatif case 
  it('Admin menambahkan data komposisi seleksi menggunakan kode yang sama', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idkomposisi').type(this.data.kode01)

    cy.get("#i_namakomposisi").type(this.data.komposisiSeleksi01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert modal duplikasi
    cy.get('.alert').should('contain', this.data.alertDuplikasi)
  })

});
