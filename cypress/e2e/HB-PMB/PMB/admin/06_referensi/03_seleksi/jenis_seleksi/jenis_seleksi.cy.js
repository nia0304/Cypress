/// <reference types="cypress"/>

const judulHalaman="Daftar Jenis Seleksi";

describe(judulHalaman, ()=>{
  beforeEach(() => {
    //login
      cy.loginUserSuperAdmin()
    //open PMB module
      cy.openModulPmb()
    // go to target page
      cy.Menu_jenis_seleksi()

      cy.fixture('HB-PMB/06-referensi/03-seleksi/jenis_seleksi').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('.content-header > h1 > small').should('contain',judulHalaman)
  // });

  //positif test
  it('Memastikan nama tabel jenis seleksi ada 4', () => {
    cy.get('.content-header > h1 > small').should('contain', 'Daftar Jenis Seleksi')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .and('contain', 'Nama')
      .and('contain', 'Kelulusan')
      .and('contain', 'Wajib Mengikuti')
      .and('contain', 'Menggunakan Ruangan')
      .and('contain', 'Bebas Tes')
      .and('contain', 'CBT')
      .and('contain', 'Upload Berkas Sesuai Jadwal')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data jenis seleksi menggunakan kode huruf', function () {
    cy.get('.col-md-12 > .btn-success').click()

    cy.get('#i_kodejenisseleksi').type(this.data.kode01)

    cy.get("#i_namajenisseleksi").type(this.data.jenisSeleksi01)

    cy.get("#i_jeniskelulusan").select(this.data.kelulusan01)
    .parent()
    .next()
    .click()

    // cy.get(":nth-child(8) > .labelinput > .icheckbox_minimal > .iCheck-helper").click()
    // .parent()
    // .next()
    // .click()

    // cy.get('#i_iswajibikut_1').click()
    // cy.get('#i_isruang_1').click()
    // cy.get('#i_isbebastes_1').click()
    // cy.get('#i_iscbt_1').click()
    // cy.get('#i_isupload_1').click()

    cy.get(':nth-child(9) > .btn-success').click()

    // cy.get('button.btn.btn-success.btn-xs.btn-flat').click()
    // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)
  })

  it('Admin mengubah data jenis seleksi', function () {
    cy.get('td').contains(this.data.jenisSeleksi01)
      .parent()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click()

      cy.get('#u_kodejenisseleksi').clear().type(this.data.kode02)

      cy.get("#u_namajenisseleksi").clear().type(this.data.jenisSeleksi02)

      cy.get("#u_jeniskelulusan").select(this.data.kelulusan02)
      .parent()
      .next()
      .click()

    cy.get(':nth-child(10) > :nth-child(9) > .btn-success').click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertUbah)
  })

  it('Admin menghapus data jenis seleksi', function () {
    cy.get('td').contains(this.data.jenisSeleksi01)
      .parent()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)
  })

  // negatif case
  
  it.only('Admin menghapus data yang masih masih menjadi referensi data lain', function () {
    cy.get('td').contains(this.data.dataSeleksi)
      .parent()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertGagalHapus)
  })

});
