/// <reference types="cypress"/>

import data from "../../../../../../../fixtures/HB-ADM/02-akademik/02_perkuliahan/08_kuesioner/kategori_edom.json"

describe('Automation Kategori Edom', ()=>{
 
  beforeEach(() => {
      cy.loginsuperadmin()
      cy.modulakademik()
      cy.visit('siakad/ms_katedom');
      cy.fixture('modal_konfirmasi').as('writting')
  });

  //positif case
  data.tambah.forEach((test) => {
    it('Tambah kategori edom ketika isian ' +test.case, () => {
      cy.get('#wrap-button > .btn').click()
      cy.get('#i_namakat').type(test.nama_kategori)
        .parent()
        .next()
        .find('button.btn.btn-success.btn-xs.btn-flat')
        .click()
        cy.get('.alert').should('contain', data.alert_simpan)
    });
  })

  it('Tambah syarat yudisium ketika isian kosong', function () {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_namakat')
        .parent()
        .next()
        .find('button.btn.btn-success.btn-xs.btn-flat')
        .click()
    cy.modal_konfirmasi(this.writting.wajib, "ok")
  });

  it.only('Admin mengubah data kategori edom', () => {
    cy.get('td').contains('12')
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat')
      .click()
    cy.get('#u_namakat').clear().type('12345')
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.alert').should('contain', data.alert_ubah)
  });

  it('Admin menghapus data kategori edom', function () {
    for(let n = 1; n <= 4; n++){
      cy.get('td').contains('4')
        .parent()
        .find('button.btn.btn-danger.btn-xs.btn-flat')
        .click()
      cy.modal_konfirmasi(this.writting.hapus, "ya")
    }
  });
});
