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
  it('Admin menambahkan data predikat dengan nilai max kosong', function () {
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
  it('Admin menambahkan data predikat dengan kode lebih dari 5 digit', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode06)
    cy.get('#i_namapredikatdosen').type(this.data.predikat06)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten06)
    cy.get('#i_nilaibawah').type(this.data.nilaimin06)
    cy.get('#i_nilaiatas').type(this.data.nilaimax06)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('td').contains(this.data.predikat06).prev().invoke('text').then((kode => {
      cy.wrap(kode).should('have.length', 5)
    }))
  });
  it('Admin menambahkan data predikat dengan data yang sama', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode06)
    cy.get('#i_namapredikatdosen').type(this.data.predikat06)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten06)
    cy.get('#i_nilaibawah').type(this.data.nilaimin06)
    cy.get('#i_nilaiatas').type(this.data.nilaimax06)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain', this.data.alertduplikat)
  });
  it('Admin menambahkan data predikat dengan nilai min lebih besar dari nilai max', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode07)
    cy.get('#i_namapredikatdosen').type(this.data.predikat07)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten07)
    cy.get('#i_nilaibawah').type(this.data.nilaimin07)
    cy.get('#i_nilaiatas').type(this.data.nilaimax07)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click() 
  });
  it('Admin menambahkan data predikat dengan nilai min huruf', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode08)
    cy.get('#i_namapredikatdosen').type(this.data.predikat08)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten08)
    cy.get('#i_nilaibawah').type(this.data.nilaimin08)
    cy.get('#i_nilaiatas').type(this.data.nilaimax08)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', this.data.alertkosong)
  });
  it('Admin menambahkan data predikat dengan nilai min karakter', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode09)
    cy.get('#i_namapredikatdosen').type(this.data.predikat09)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten09)
    cy.get('#i_nilaibawah').type(this.data.nilaimin09)
    cy.get('#i_nilaiatas').type(this.data.nilaimax09)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', this.data.alertkosong)
  });
  it('Admin menambahkan data predikat dengan nilai max huruf', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode10)
    cy.get('#i_namapredikatdosen').type(this.data.predikat10)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten10)
    cy.get('#i_nilaibawah').type(this.data.nilaimin10)
    cy.get('#i_nilaiatas').type(this.data.nilaimax10)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', this.data.alertkosong)
  });
  it('Admin menambahkan data predikat dengan nilai max karakter', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode11)
    cy.get('#i_namapredikatdosen').type(this.data.predikat11)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten11)
    cy.get('#i_nilaibawah').type(this.data.nilaimin11)
    cy.get('#i_nilaiatas').type(this.data.nilaimax11)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', this.data.alertkosong)
  });
  it('Admin menambahkan data predikat dengan nilai min minus', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode12)
    cy.get('#i_namapredikatdosen').type(this.data.predikat12)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten12)
    cy.get('#i_nilaibawah').type(this.data.nilaimin12)
    cy.get('#i_nilaiatas').type(this.data.nilaimax12)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
  });
  it('Admin menambahkan data predikat dengan nilai max minus', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode13)
    cy.get('#i_namapredikatdosen').type(this.data.predikat13)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten13)
    cy.get('#i_nilaibawah').type(this.data.nilaimin13)
    cy.get('#i_nilaiatas').type(this.data.nilaimax13)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
  });
  it('Admin menambahkan data predikat dengan nilai min lebih dari 10 digit', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode14)
    cy.get('#i_namapredikatdosen').type(this.data.predikat14)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten14)
    cy.get('#i_nilaibawah').type(this.data.nilaimin14)
    cy.get('#i_nilaiatas').type(this.data.nilaimax14)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('table.table.table-bordered.table-striped.dataTable > tbody > tr > td:nth-child(1)').each(($el) => {
      if ($el.text() === this.data.kode14) {
        cy.get($el).parent().contains(this.data.predikaten14).next().invoke('text').then((nilaimin => {
          cy.wrap(nilaimin).should('have.length', 12)
        }))
          return false
        }
      // cy.log($el.text())
    })
  });
  it('Admin menambahkan data predikat dengan nilai max lebih dari 10 digit', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode15)
    cy.get('#i_namapredikatdosen').type(this.data.predikat15)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten15)
    cy.get('#i_nilaibawah').type(this.data.nilaimin15)
    cy.get('#i_nilaiatas').type(this.data.nilaimax15)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('table.table.table-bordered.table-striped.dataTable > tbody > tr > td:nth-child(1)').each(($el) => {
      if ($el.text() === this.data.kode15) {
        cy.get($el).parent().contains(this.data.predikaten15).next().next().invoke('text').then((nilaimin => {
          cy.wrap(nilaimin).should('have.length', 12)
        }))
          return false
        }
      // cy.log($el.text())
    })
  });
  it('Admin menambahkan data predikat dengan nilai min dan max diantara data yang sudah ada', function () {
    cy.get('#idperiode').select(this.data.periode).wait(0)
    cy.get('#wrap-button > .btn-success').click()
    cy.get('#i_idpredikatdosen').type(this.data.kode16)
    cy.get('#i_namapredikatdosen').type(this.data.predikat16)
    cy.get('#i_namapredikatdosenen').type(this.data.predikaten16)
    cy.get('#i_nilaibawah').type(this.data.nilaimin16)
    cy.get('#i_nilaiatas').type(this.data.nilaimax16)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
  });

  it('hapus data negatif test', () => {
    for(let n = 1; n <= 7; n++){
      cy.get(':nth-child(2) > :nth-child(6) > .btn-danger').click()
      cy.get('[data-bb-handler="confirm"]').click()
      cy.wait(400)
    }
  });

});
