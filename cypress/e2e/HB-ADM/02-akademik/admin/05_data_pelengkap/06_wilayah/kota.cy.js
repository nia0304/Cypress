/// <reference types="cypress"/>

describe('Testing Data Pelengkap Negara', ()=>{
 
  beforeEach(() => {
      cy.loginsuperadmin()
      cy.modulakademik()
      cy.visit('siakad/ms_kota');
      cy.fixture('HB-ADM/02-akademik/06-wilayah/kota').as('data')
  });

  //positif test
  it('Admin pilih filter provinsi', function ()  {
    cy.get('#propinsi').select(this.data.provinsi)
    cy.get('#propinsi option:selected').invoke('text').then((provinsi => {
      cy.wrap(provinsi).should('contain', provinsi)
    }))
  });

  it('Admin menambahkan data kota menggunakan kode angka', function () {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('[id="wrap-button"]').find('button.btn.btn-success.btn-sm').click()
    cy.get('#i_idkota').type(this.data.kode01)
    cy.get('#i_namakota').type(this.data.kota01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.alert').should('contain', this.data.alertsimpan)
  });

  it('Admin mencari data kota', function () {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode01)
    cy.get('[data-original-title="Cari"]').click()
    cy.get('td').contains(this.data.kode01)
      .next()
      .should('contain',this.data.kota01);
  });

  it('Admin mengubah data kota', function () {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode01)
    cy.get('[data-original-title="Cari"]').click()
    cy.get('td').contains(this.data.kode01)
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click()
    cy.get('#u_idkota')
      .clear()
      .type(this.data.kode02)
    cy.get('#u_namakota')
      .clear()
      .type(this.data.kota02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.alert').should('contain', this.data.alertubah)
    cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.kode02)
    cy.get('[data-original-title="Cari"]').click()
  });

  it('Admin menghapus data kota', function ()  {
    cy.get('#propinsi').select(this.data.provinsi).wait(0)
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode02)
    cy.get('[data-original-title="Cari"]').click()
    cy.get('td').contains(this.data.kode02)
      .next()
      .next()
      .find('button.btn.btn-danger.btn-xs.btn-flat').click()
    cy.get('.modal-content').should('contain', this.data.modalhapus)
    cy.get('.modal-footer > .btn-primary').click()
  });

});
