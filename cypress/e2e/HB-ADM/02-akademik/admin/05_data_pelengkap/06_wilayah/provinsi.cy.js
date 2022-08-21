/// <reference types="cypress"/>

describe('Testing Data Pelengkap Negara', ()=>{
 
  beforeEach(() => {
      cy.loginsuperadmin()
      cy.modulakademik()
      cy.visit('siakad/ms_propinsi');
      cy.fixture('HB-ADM/02-akademik/06-wilayah/provinsi').as('data')
  });

  //positif test
  it.only('Admin tambah data provinsi dengan kode angka', function () {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idkota').type(this.data.kode01)
    cy.get('#i_namakota').type(this.data.provinsi01)
    cy.get('[data-original-title="Simpan"]').click()
    cy.get('.alert').should('contain', this.data.alertsimpan)
  });

  it('Admin ubah data provinsi', function () {
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode01);
    cy.get('[data-original-title="Cari"]').click()
    cy.get('td').contains(this.data.kode01)
      .next()
      .next()
      .find("button.btn.btn-primary.btn-xs.btn-flat")
      .click()
    cy.get('#u_idkota').clear().type(this.data.kode02)
    cy.get('#u_namakota').clear().type(this.data.provinsi02)
      .tab()
      .click()
    cy.get('.alert').should('contain', this.data.alertubah)
  });

  it('Admin hapus data provinsi', function () {
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode02);
    cy.get('[data-original-title="Cari"]').click()
    cy.get('td').contains(this.data.kode02)
      .next()
      .next()
      .find("button.btn.btn-danger.btn-xs.btn-flat")
      .click()
    cy.get('.modal-content').should('contain', this.data.modalhapus)
    cy.get('.modal-footer > .btn-primary').click()  
    // cy.get('.alert').should('contain', this.data.alerthapus)
  });

  //negatif test
  it('Admin tambah data provinsi dengan kode huruf', function () {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idkota').type(this.data.kode03)
    cy.get('#i_namakota').type(this.data.provinsi03)
    cy.get('[data-original-title="Simpan"]').click()
    cy.get('.modal-content').should('contain', this.data.alertkosong)
  });
  it('Admin tambah data provinsi dengan kode karakter', function () {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idkota').type(this.data.kode04)
    cy.get('#i_namakota').type(this.data.provinsi04)
    cy.get('[data-original-title="Simpan"]').click()
    cy.get('.modal-content').should('contain', this.data.alertkosong)
  });

  it('Admin tambah data provinsi dengan kode lebih dari 5 digit', function () { 
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idkota').type(this.data.kode05)
    cy.get('#i_namakota').type(this.data.provinsi05)
    cy.get('[data-original-title="Simpan"]').click()
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.provinsi05);
    cy.get('[data-original-title="Cari"]').click()
    cy.get('td').contains(this.data.provinsi05)
      .prev().invoke('text').then((text => {
        cy.wrap(text).should('have.length', 5)
      }))    
    cy.get('td').contains(this.data.provinsi05)
      .next()
      .find("button.btn.btn-danger.btn-xs.btn-flat")
      .click()
    cy.get('.modal-footer > .btn-primary').click()  
  });

  it('Admin tambah data provinsi ketika kode kosong', function () {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_namakota').type(this.data.provinsi04)
    cy.get('[data-original-title="Simpan"]').click()
    cy.get('.modal-content').should('contain', this.data.alertkosong)
  });

  it('Admin tambah data provinsi ketika nama provinsi kosong', function () {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idkota').type(this.data.kode05)
    cy.get('[data-original-title="Simpan"]').click()
    cy.get('.modal-content').should('contain', this.data.alertkosong)
  });

});
