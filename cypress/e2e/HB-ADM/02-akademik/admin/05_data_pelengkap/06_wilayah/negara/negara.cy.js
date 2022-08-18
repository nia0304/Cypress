/// <reference types="cypress"/>

describe('Testing Data Pelengkap Negara', ()=>{
 
  beforeEach(() => {
      cy.loginsuperadmin()
      cy.modulakademik()
      cy.visit('siakad/ms_negara');
      cy.fixture("HB-ADM/02-akademik/06-wilayah/negara").as('data');
  });

  //positif test
  it('Admin tambah negara dengan kode huruf', function () {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idnegara').type(this.data.kode01)
    cy.get('#i_namanegara').type(this.data.negara01)
    cy.get('#i_kodeemisnegara').type(this.data.emis01)
    cy.get('[data-original-title="Simpan"]').click()
    cy.get('.alert').should('contain', this.data.alertsimpan)
  });

  it('Admin tambah negara dengan kode menggunakan karakter', function () {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idnegara').type(this.data.kode02)
    cy.get('#i_namanegara').type(this.data.negara02)
    cy.get('#i_kodeemisnegara').type(this.data.emis02)
    cy.get('[data-original-title="Simpan"]').click()
    cy.get('.alert').should('contain', this.data.alertsimpan)
  });

  it('Admin tambah negara dengan kode menggunakan angka', function () {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idnegara').type(this.data.kode03)
    cy.get('#i_namanegara').type(this.data.negara03)
    cy.get('#i_kodeemisnegara').type(this.data.emis03)
    cy.get('[data-original-title="Simpan"]').click()
    cy.get('.alert').should('contain', this.data.alertsimpan)
  });

  it('Admin tambah negara ketika kode emis kosong ', function () {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idnegara').type(this.data.kode04)
    cy.get('#i_namanegara').type(this.data.negara04)
    cy.get('[data-original-title="Simpan"]').click()
    cy.get('.alert').should('contain', this.data.alertsimpan)
  });

  it('Admin ubah data negara', function () {
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode01);
    cy.get('[data-original-title="Cari"]').click()
    cy.get('td').contains(this.data.kode01)
      .next()
      .next()
      .next()
    .find("button.btn.btn-primary.btn-xs.btn-flat")
    .click()
    cy.get('#u_idnegara').clear().type(this.data.kode06)
    cy.get('#u_namanegara').clear().type(this.data.negara06)
    cy.get('#u_kodeemisnegara').clear().type(this.data.emis06)
      .tab()
      .click()
    cy.get('.alert').should('contain', this.data.alertubah)
  });

  it('Admin hapus data negara', function () {
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.kode01);
    cy.get('[data-original-title="Cari"]').click()
    for(let n = 1; n <= 4; n++){
      cy.get(':nth-child(2) > :nth-child(4) > .btn-danger').click()
      cy.get('.modal-content').should('contain', this.data.modalhapus)
      cy.get('.modal-footer > .btn-primary').click()
      cy.get('.alert').should('contain', this.data.alerthapus)
      cy.wait(400)
    }    
  });

});
