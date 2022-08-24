/// <reference types="cypress"/>

const judulHalaman = "Jenis Program";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Jenis_Program()

    cy.fixture('HB-PMB/06-referensi/01-pendaftaran/jenis_program').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel jenis program ada 4', () => {
    cy.get('.content-header > h1').should('contain', 'Jenis Program')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .and('contain', 'Nama Jenis Program')
      .and('contain', 'IPC')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data jenis program menggunakan kode huruf', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idjenispilihan').type(this.data.kode01)

    cy.get("#i_namajenispilihan").type(this.data.jenisProgram01)

    cy.get('.iCheck-helper').click()

    cy.get('button.btn.btn-success.btn-xs.btn-flat').click()
    // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)
  })

  it('Admin Mengubah data jenis program', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click()

    cy.get('#u_idjenispilihan').clear().type(this.data.kode02)

    cy.get("#u_namajenispilihan").clear().type(this.data.jenisProgram02)

    cy.get('button.btn.btn-success.btn-xs.btn-flat').click()
    // assert 
    cy.get('.alert').should('contain', this.data.alertUbah)
  })

  it('Admin Menghapus data jenis program', function () {
    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

      cy.get('.modal-content').should('contain', this.data.modalHapus)
      cy.get('.modal-footer > .btn-primary').click()

      // assert berhasil hapus 
      cy.get('.alert').should('contain', this.data.alertHapus)
  })

  it('Admin menambahkan data jenis program menggunakan kode angka', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idjenispilihan').type(this.data.kodeAngka)

    cy.get("#i_namajenispilihan").type(this.data.jenisProgram01)

    cy.get('.iCheck-helper').click()

    cy.get('button.btn.btn-success.btn-xs.btn-flat').click()
    
    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  // negatif case
  it('Admin menambahkan data jenis program menggunakan kode yang sama', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_idjenispilihan').type(this.data.kode01)

    cy.get("#i_namajenispilihan").type(this.data.jenisProgram01)

    cy.get('.iCheck-helper').click()

    cy.get('button.btn.btn-success.btn-xs.btn-flat').click()
    
    // assert modal duplikasi
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  }) 

});
