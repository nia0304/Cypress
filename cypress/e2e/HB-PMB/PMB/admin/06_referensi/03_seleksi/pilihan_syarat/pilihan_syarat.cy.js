/// <reference types="cypress"/>

const judulHalaman="Pilihan Syarat";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_pilihan_syarat()

      cy.fixture('HB-PMB/06-referensi/03-seleksi/pilihan_syarat').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel pilihan syarat ada 3', () => {
    cy.get('.content-header > h1').should('contain', 'Pilihan Syarat')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Nama Pilihan')
      .and('contain', 'Poin')
      .and('contain', 'Aksi')
  })

  it('Admin pilih filter syarat', function ()  {
    cy.get('#syarat').select(this.data.syarat)
    cy.get('#syarat option:selected').invoke('text').then((syarat => {
      cy.wrap(syarat).should('contain', syarat)
    }))
  });

  it('Admin menambahkan data pilihan syarat', function () {
    cy.get('#syarat').select(this.data.syarat).wait(0)
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_namapilihansyarat').type(this.data.namaPilihan01)

    cy.get("#i_poinpilihan").type(this.data.poin01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)
  })

  it('Admin mengubah data pilihan syarat', function () {
    cy.get('#syarat').select(this.data.syarat).wait(0)
    cy.get('td').contains(this.data.namaPilihan01)
      .parent()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click()

    cy.get('#u_namapilihansyarat').clear().type(this.data.namaPilihan02)

    cy.get("#u_poinpilihan").clear().type(this.data.poin02)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    
    // assert 
    cy.get('.alert').should('contain', this.data.alertUbah)
  })

  it('Admin menghapus data pilihan syarat', function () {
    cy.get('#syarat').select(this.data.syarat).wait(0)
    cy.get('td').contains(this.data.namaPilihan02)
      .parent()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)
  })

  // negative case 
  it('Admin menambahkan data pilihan syarat menggunakan pon huruf', function () {
    cy.get('#syarat').select(this.data.syarat).wait(0)
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_namapilihansyarat').type(this.data.namaPilihan01)

    cy.get("#i_poinpilihan").type(this.data.poinHuruf)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert 
    cy.get('.alert').should('contain', this.data.modalPeringatan)
  })

});
