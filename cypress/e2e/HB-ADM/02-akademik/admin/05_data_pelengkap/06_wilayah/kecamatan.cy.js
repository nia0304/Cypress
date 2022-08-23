/// <reference types="cypress"/>

describe('Automation Data Pelengkap Kecamatan', () =>{
 
  beforeEach(() => {
      cy.loginsuperadmin()
      cy.modulakademik()
      cy.visit('siakad/ms_kecamatan');
      cy.fixture('HB-ADM/02-akademik/06-wilayah/kecamatan').as('data')
  });

  //positif test
  it('Admin pilih filter provinsi kecamatan', function ()  {
    cy.get('#propinsi').select(this.data.provinsi)
    cy.get('#propinsi option:selected').invoke('text').then((provinsi => {
      cy.wrap(provinsi).should('contain', this.data.provinsi)
    }))
  });

  it('Admin pilih filter kota kecamatan', function ()  {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('#propinsi option:selected').invoke('text').then((provinsi => {
      cy.wrap(provinsi).should('contain', this.data.provinsi)
    }))
    cy.get('#kota').select(this.data.kota).wait(0)
    cy.get('#kota option:selected').invoke('text').then((kota => {
      cy.wrap(kota).should('contain', this.data.kota)
    }))
  });

  it('Admin menambahkan data kecamatan dengan kode angka', function () {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idkota').type(this.data.kode01)
    cy.get('#i_namakota').type(this.data.kecamatan01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
      cy.get('.alert').should('contain', this.data.alertsimpan)
  });

  it('Admin menambahkan data kecamatan dengan kode 7 digit angka', function () {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idkota').type(this.data.kode02)
    cy.get('#i_namakota').type(this.data.kecamatan02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
      cy.get('.alert').should('contain', this.data.alertsimpan)
  });

  it('Admin mengubah data kecamatan', function () {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('table.table.table-bordered.table-striped.dataTable > tbody > tr > td:nth-child(1)').each(($el) => {
      if ($el.text() === this.data.kode01) {
        cy.get($el).parent().find('button.btn.btn-primary.btn-xs.btn-flat').click()
        return false
      }
      // cy.log($el.text())
    })
    cy.get('#u_idkota').clear().type(this.data.kode03)
    cy.get('#u_namakota').clear().type(this.data.kecamatan03)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
      cy.get('.alert').should('contain', this.data.alertubah)
  });

  it('Admin hapus data kecamatan', function () {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    for(let n = 1; n <= 2; n++){
      cy.get(':nth-child(2) > :nth-child(3) > .btn-danger').click()
      cy.get('.modal-footer > .btn-primary').click()
      cy.wait(400)
    }
    cy.get('.alert').should('contain', this.data.alerthapus)
  });

  //negatif test
  it('Admin menambahkan data kecamatan yang sama (duplikasi)', function () {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idkota').type(this.data.kode04)
    cy.get('#i_namakota').type(this.data.kecamatan04)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.alert').should('contain', this.data.alertduplikasi)
  });

  it('admin menambahkan data kecamatan dengan kode huruf', function () {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idkota').type(this.data.kode05)
    cy.get('#i_namakota').type(this.data.kecamatan05)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.modal-content').should('contain', this.data.alertkosong)
  });
  it('admin menambahkan data kecamatan dengan kode karakter', function () {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idkota').type(this.data.kode06)
    cy.get('#i_namakota').type(this.data.kecamatan06)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.modal-content').should('contain', this.data.alertkosong)
  });
  
  it('Admin menambahkan data kecamatan dengan kode kosong', function () {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_namakota').type(this.data.kecamatan07)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.modal-content').should('contain', this.data.alertkosong)
  });
  it('Admin menambahkan data kecamatan dengan nama kecamatan kosong', function () {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idkota').type(this.data.kode07)
      .parent()
      .next()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.modal-content').should('contain', this.data.alertkosong)
  });

  it('Admin menambahkan data kecamatan dengan kode lebih dari 7 digit angka', function () {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idkota').type(this.data.kode08)
    cy.get('#i_namakota').type(this.data.kecamatan08)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode02)
    cy.get('[data-original-title="Cari"]').click()
    cy.get('td').contains(this.data.kecamatan08)
      .prev().invoke('text').then((text => {
        cy.wrap(text).should('have.length', 7)
      })) 
    cy.get('td').contains(this.data.kecamatan08)
      .next()
      .find("button.btn.btn-danger.btn-xs.btn-flat")
      .click()
    cy.get('.modal-footer > .btn-primary').click()
  });

});
