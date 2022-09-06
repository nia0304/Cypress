/// <reference types="cypress"/>

const judulHalaman = "Prodi Perguruan Tinggi";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Prodi_Perguruan_Tinggi()

    cy.fixture('HB-PMB/06-referensi/04-pendidikan/prodi_perguruan_tinggi').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('body > div.container > div > aside > section.content-header.content-header-vertical > h1').should('contain',judulHalaman)
  // });

  //positif test
  it('Admin mengisi filter UNIV', function () {

    cy.get('#universitas_label').type(this.data.filterUniv)
    cy.get('.tt-suggestions div').each(($el, index, $list) => {
      if ($el.text() === this.data.namaUniv) {
        cy.wrap($el).click().wait(0)
      }
    })

    // filter by nama
    // cy.get('#wrap-filter > div.col-xs-8.pad-xs-l7 > div > input').type(this.data.filterUniv)

    // // klik cari 
    // cy.get('#wrap-filter > div.col-xs-8.pad-xs-l7 > div > div > button.btn.btn-sm.btn-success').click()

    // // klik reset 
    // // cy.get('#wrap-filter > div.col-xs-8.pad-xs-l7 > div > div > button.btn.btn-sm.btn-primary').click()

    // cy.get('td').contains(this.data.filterUniv)

  });

  it('Memastikan nama tabel prodi perguruan tinggi ada 6', () => {
    cy.get('.content-header > h1').should('contain', 'Prodi Perguruan Tinggi')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Kode')
      .should('contain', 'Nama Prodi')
      .should('contain', 'Jenjang')
      .should('contain', 'Alamat')
      .should('contain', 'No Telp.')
      .and('contain', 'Aksi')
  })

  it('Admin menambahkan data prodi perguruan tinggi', function () {
    // mengisi univ dulu
    cy.get('#universitas_label').type(this.data.filterUniv)
    cy.get('.tt-suggestions div').each(($el, index, $list) => {
      if ($el.text() === this.data.namaUniv) {
        cy.wrap($el).click().wait(0)
      }
    })

    cy.get('#wrap-button > .btn').click()

    cy.get('#i_iduniversitasprodi').type(this.data.kode01, { force: true })
    cy.get('#i_namaprodi').type(this.data.namaProdi01, { force: true })
    cy.get('#i_idjenjang').select(this.data.jenjang01, { force: true })
    cy.get('#i_alamat').type(this.data.alamat01, { force: true })
    cy.get('#i_telepon').type(this.data.telepon01, { force: true })
    cy.get('button.btn.btn-success.btn-xs.btn-flat').click({ force: true })

    // assert
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it('Admin merubah data prodi perguruan tinggi', function () {
    // mengisi univ dulu
    cy.get('#universitas_label').type(this.data.filterUniv)
    cy.get('.tt-suggestions div').each(($el, index, $list) => {
      if ($el.text() === this.data.namaUniv) {
        cy.wrap($el).dblclick()
        // ketika event click() tidak melakukan reload data, maka perlu mengganti menjadi dblclick()
      }
    })

    cy.get('td').contains(this.data.kode01)
      .parent()
      .find('.btn-primary').click()

    cy.get('#u_iduniversitasprodi').clear().type(this.data.kode02, { force: true })
    cy.get('#u_namaprodi').clear().type(this.data.namaProdi02, { force: true })
    cy.get('#u_idjenjang').select(this.data.jenjang02, { force: true })
    cy.get('#u_alamat').clear().type(this.data.alamat02, { force: true })
    cy.get('#u_telepon').clear().type(this.data.telepon02, { force: true })
    cy.get('button.btn.btn-success.btn-xs.btn-flat').last().click()

    // assert
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it('Admin menghapus data prodi perguruan tinggi', function () {
    // mengisi univ dulu
    cy.get('#universitas_label').type(this.data.filterUniv)
    cy.get('.tt-suggestions div').each(($el, index, $list) => {
      if ($el.text() === this.data.namaUniv) {
        cy.wrap($el).dblclick()
        // ketika event click() tidak melakukan reload data, maka perlu mengganti menjadi dblclick()
      }
    })

    cy.get('td').contains(this.data.kode02)
      .parent()
      .find('.btn-danger ').click()

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)

  })


  //negative case 
  it('Admin menambahkan data prodi perguruan tinggi tanpa memilih univ terlebih dulu', function () {
    cy.get('#wrap-button > .btn').click()

    cy.get('#i_iduniversitasprodi').type(this.data.kode01)
    cy.get('#i_namaprodi').type(this.data.namaProdi01)
    cy.get('#i_idjenjang').select(this.data.jenjang01)
    cy.get('#i_alamat').type(this.data.alamat01)
    cy.get('#i_telepon').type(this.data.telepon01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    // cy.get('button.btn.btn-success.btn-xs.btn-flat')

    // assert
    cy.get('.alert').should('contain', this.data.alertGagalSimpan)

  })

  it('Admin menambahkan data prodi perguruan tinggi tanpa melengkapi data', function () {
    cy.get('#wrap-button > .btn').click()

    // cy.get('#i_iduniversitasprodi').type(this.data.kode01)
    // cy.get('#i_namaprodi').type(this.data.namaProdi01)
    cy.get('#i_idjenjang').select(this.data.jenjang01)
    cy.get('#i_alamat').type(this.data.alamat01)
    cy.get('#i_telepon').type(this.data.telepon01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    // cy.get('button.btn.btn-success.btn-xs.btn-flat')

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  })

  it('Admin menambahkan data prodi perguruan tinggi dengan kode sama', function () {
    // mengisi univ dulu
    cy.get('#universitas_label').type(this.data.filterUniv)
    cy.get('.tt-suggestions div').each(($el, index, $list) => {
      if ($el.text() === this.data.namaUniv) {
        cy.wrap($el).click().wait(0)
      }
    })

    cy.get('#wrap-button > .btn').click()

    cy.get('#i_iduniversitasprodi').type(this.data.kode01, { force: true })
    cy.get('#i_namaprodi').type(this.data.namaProdi01, { force: true })
    cy.get('#i_idjenjang').select(this.data.jenjang01, { force: true })
    cy.get('#i_alamat').type(this.data.alamat01, { force: true })
    cy.get('#i_telepon').type(this.data.telepon01, { force: true })
    cy.get('button.btn.btn-success.btn-xs.btn-flat').click({ force: true })

    // assert 
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  })




});
