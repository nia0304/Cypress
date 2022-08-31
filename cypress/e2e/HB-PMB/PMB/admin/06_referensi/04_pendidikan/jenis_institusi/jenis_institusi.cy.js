/// <reference types="cypress"/>

const judulHalaman="Daftar Jenis Institusi";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_Jenis_Institusi()

      cy.fixture('HB-PMB/06-referensi/04-pendidikan/jenis_institusi').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container.custom-width > div > aside > section.content-header.content-header-vertical > h1 > small').should('contain',judulHalaman)
  // });

  //positif test
  it('Admin pilih filter jenjang pendidikan', function ()  {
    cy.get('#jenjang').select(this.data.jenjangPendidikan01)
    cy.get('#jenjang option:selected').invoke('text').then((jenjangPendidikan01 => {
      cy.wrap(jenjangPendidikan01).should('contain', jenjangPendidikan01)
    }))
  });

  it('Memastikan nama tabel jenis institusi ada 2', () => {
    cy.get('.content-header > h1 > small').should('contain', 'Daftar Jenis Institusi')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Nama')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data jenis institusi', function () {
    cy.get('#jenjang').select(this.data.jenjangPendidikan01).wait(0)
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_namajenisinstitusi').type(this.data.nama01)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin mengubah data jenis institusi', function () {
    cy.get('#jenjang').select(this.data.jenjangPendidikan01).wait(0)
    cy.get('td').contains(this.data.nama01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#u_namajenisinstitusi').clear().type(this.data.nama02)
      .parent()
      .next()
      .find('.btn-success')
      .click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data jenis institusi', function () {
    cy.get('#jenjang').select(this.data.jenjangPendidikan01).wait(0)
    cy.get('td').contains(this.data.nama01)
      .parent()
      .find('.btn-danger ').click()

      cy.get('.modal-content').should('contain', this.data.modalHapus)
      cy.get('.modal-footer > .btn-primary').click()
  
      // assert berhasil hapus 
      cy.get('.alert').should('contain', this.data.alertHapus)

  })

  // negatif case
  it('Admin menghapus data yang masih masih menjadi referensi data lain', function () {
    cy.get('#jenjang').select(this.data.jenjangPendidikan01).wait(0)
    cy.get('td').contains(this.data.namaInstitusi)
      .parent()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertGagalHapus)
  })

});
