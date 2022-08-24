/// <reference types="cypress"/>

describe('Testing data pekengkap predikat dosen', ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin()
    cy.modulakademik()
    cy.visit('siakad/ms_predikatdosen');
    cy.fixture('HB-ADM/02-akademik/05-pegawai/predikat').as('data')
  });

  //positif test
  it('Admin filter periode predikat', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#idperiode Option:selected').invoke('text').then ((periode => {
      cy.wrap(periode).should('contain', this.data.periode)
    }))
  });

  it('Admin menambahkan data predikat dengan kode angka', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode01)
    cy.get('#i_namapredikatdosen').type(this.data.predikat01)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten01)
    cy.get('#i_nilaibawah').type(this.data.nilaimin01)
    cy.get('#i_nilaiatas').type(this.data.nilaimax01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain', this.data.alertsimpan)
  });
  it('Admin menambahkan data predikat dengan kode huruf', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode02)
    cy.get('#i_namapredikatdosen').type(this.data.predikat02)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten02)
    cy.get('#i_nilaibawah').type(this.data.nilaimin02)
    cy.get('#i_nilaiatas').type(this.data.nilaimax02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain', this.data.alertsimpan)
  });
  it('Admin menambahkan data predikat dengan kode karakter', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode03)
    cy.get('#i_namapredikatdosen').type(this.data.predikat03)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten03)
    cy.get('#i_nilaibawah').type(this.data.nilaimin03)
    cy.get('#i_nilaiatas').type(this.data.nilaimax03)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain', this.data.alertsimpan)
  });
  it('Admin menambahkan data predikat dengan kode campuran', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode04)
    cy.get('#i_namapredikatdosen').type(this.data.predikat04)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten04)
    cy.get('#i_nilaibawah').type(this.data.nilaimin04)
    cy.get('#i_nilaiatas').type(this.data.nilaimax04)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain', this.data.alertsimpan)
  });

  //negatif test
  it('Admin menambahkan data predikat dengan kode kosong', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    // cy.get('#i_idpredikatdosen').type(this.data.kode05)
    cy.get('#i_namapredikatdosen').type(this.data.predikat05)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten05)
    cy.get('#i_nilaibawah').type(this.data.nilaimin05)
    cy.get('#i_nilaiatas').type(this.data.nilaimax05)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', this.data.alertkosong)
  });
  it('Admin menambahkan data predikat dengan nama predikat kosong', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode05)
    // cy.get('#i_namapredikatdosen').type(this.data.predikat05)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten05)
    cy.get('#i_nilaibawah').type(this.data.nilaimin05)
    cy.get('#i_nilaiatas').type(this.data.nilaimax05)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', this.data.alertkosong)
  });
  it('Admin menambahkan data predikat dengan nama predikat EN kosong', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode05)
    cy.get('#i_namapredikatdosen').type(this.data.predikat05)
    // cy.get('#i_namapredikatdosenen').type(this.data.predikaten05)
    cy.get('#i_nilaibawah').type(this.data.nilaimin05)
    cy.get('#i_nilaiatas').type(this.data.nilaimax05)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', this.data.alertkosong)
  });
  it('Admin menambahkan data predikat dengan nilai min kosong', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode05)
    cy.get('#i_namapredikatdosen').type(this.data.predikat05)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten05)
    // cy.get('#i_nilaibawah').type(this.data.nilaimin05)
    cy.get('#i_nilaiatas').type(this.data.nilaimax05)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', this.data.alertkosong)
  });
  it.only('Admin menambahkan data predikat dengan nilai max kosong', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode05)
    cy.get('#i_namapredikatdosen').type(this.data.predikat05)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten05)
    cy.get('#i_nilaibawah').type(this.data.nilaimin05)
    // cy.get('#i_nilaiatas').type(this.data.nilaimax05)
      .parent()
      .next()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', this.data.alertkosong)
  });
  it('Admin menambahkan data predikat dengan kode lebih dari 5 digit', () => {});
  it('Admin menambahkan data predikat dengan data yang sama', () => {});
  it('Admin menambahkan data predikat dengan nilai min lebih besar dari nilai max', () => {});
  it('Admin menambahkan data predikat dengan nilai min huruf', () => {});
  it('Admin menambahkan data predikat dengan nilai min karakter', () => {});
  it('Admin menambahkan data predikat dengan nilai max huruf', () => {});
  it('Admin menambahkan data predikat dengan nilai max karakter', () => {});
  it('Admin menambahkan data predikat dengan nilai min minus', () => {});
  it('Admin menambahkan data predikat dengan nilai max minus', () => {});
  it('Admin menambahkan data predikat dengan nilai min minus lebih dari 10 digit', () => {});
  it('Admin menambahkan data predikat dengan nilai max minus lebih dari 10 digit', () => {});
  it('Admin menambahkan data predikat dengan nilai min dan max diantara data yang sudah ada', () => {});

});
