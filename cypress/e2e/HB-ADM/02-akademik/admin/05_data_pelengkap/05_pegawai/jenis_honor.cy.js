/// <reference types="cypress"/>

describe('Testing data pekengkap jenis honor', ()=>{
 
  beforeEach(() => {
      cy.loginsuperadmin()
      cy.modulakademik()
      cy.visit('siakad/ms_honor');
      cy.fixture('HB-ADM/02-akademik/05_data_pelengkap/05-pegawai/jenis_honor').as('data')
  });

  //positif test
  it('Admin menambahkan data jenis honor dengan kode angka', function () {
    cy.get('div > button').contains('Tambah').should('be.visible').click()
    cy.get('#i_kodehonor').type(this.data.kode01)
    cy.get('#i_namahonor').type(this.data.honor01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.alert').should('contain', this.data.alertsimpan)
  });
  it('Admin menambahkan data jenis honor dengan kode huruf', function () {
    cy.get('div > button').contains('Tambah').should('be.visible').click()
    cy.get('#i_kodehonor').type(this.data.kode02)
    cy.get('#i_namahonor').type(this.data.honor02)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
      cy.get('.alert').should('contain', this.data.alertsimpan)
  });
  it('Admin menambahkan data jenis honor dengan kode karakter', function () {
    cy.get('div > button').contains('Tambah').should('be.visible').click()
    cy.get('#i_kodehonor').type(this.data.kode03)
    cy.get('#i_namahonor').type(this.data.honor03)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
      cy.get('.alert').should('contain', this.data.alertsimpan)
  });
  it('Admin mengubah data jenis honor', function () {
    cy.get('td').contains(this.data.kode03).parent().find('button.btn.btn-primary.btn-xs.btn-flat').click()
    cy.get('#u_kodehonor').clear().type(this.data.kode04)
    cy.get('#u_namahonor').clear().type(this.data.honor04)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.alert').should('contain', this.data.alertubah)
  });
  
  //negatif test
  it('Admin menambahkan data yang sama (duplikat)', function () {
    cy.get('div > button').contains('Tambah').should('be.visible').click()
    cy.get('#i_kodehonor').type(this.data.kode01)
    cy.get('#i_namahonor').type(this.data.honor01)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.alert').should('contain', this.data.alertduplikat)
  });
  it('Admin menambahkan data dengan kode lebih dari 10 digit', function () {
    cy.get('div > button').contains('Tambah').should('be.visible').click()
    cy.get('#i_kodehonor').type(this.data.kode05)
    cy.get('#i_namahonor').type(this.data.honor05)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('td').contains(this.data.honor05)
      .prev().invoke('text').then((text => {
    cy.wrap(text).should('have.length', 10)
    })) 
  });

  it('Admin menghapus data jenis honor', function () {
    for(let n = 1; n <= 4; n++){
      cy.get(':nth-child(2) > :nth-child(3) > .btn-danger').click()
      cy.get('[data-bb-handler="confirm"]').click()
      cy.wait(400)
      cy.get('.alert').should('contain', this.data.alerthapus)
    }
  });

});
