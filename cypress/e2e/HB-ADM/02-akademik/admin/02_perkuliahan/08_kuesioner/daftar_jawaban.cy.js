/// <reference types="cypress"/>

import data from "../../../../../../fixtures/HB-ADM/02-akademik/02_perkuliahan/08_kuesioner/daftar_jawaban.json"
describe('Automation Daftar Jawaban EDOM', ()=>{
 
  beforeEach(() => {
      cy.loginsuperadmin()
      cy.modulakademik()
      cy.visit('siakad/ms_jawabanangket')
      cy.fixture('modal_konfirmasi').as('writting')
  });

  //positif test
  it('Admin memilih filter periode dan jenjang daftar jawaban', () => {
    cy.get('#periode').select(data.periode).wait(0)
    cy.get('#jenjang').select(data.jenjang)
  });

  data.positif.forEach((test) => {
  it('Admin menambahkan data daftar jawaban ketika ' +test.case, function () {
    cy.get('#periode').select(data.periode).wait(0)
    cy.get('#jenjang').select(data.jenjang).wait(0)
    cy.get('button').contains('Tambah').click()
    if(test.no)
      cy.get('#i_nomor').type(test.no)
    if(test.jawaban)
      cy.get('#i_jawaban').type(test.jawaban)
    if(test.nilai)
      cy.get('#i_nilai').type(test.nilai)
        .parent()
        .next()
        .find('button.btn.btn-success.btn-xs.btn-flat')
        .click()
    cy.get('.alert').should('contain', data.alert_simpan)
  })
  });

  it('Admin mengubah daftar jawaban', () => {
    cy.get('#periode').select(data.periode).wait(0)
    cy.get('#jenjang').select(data.jenjang).wait(0)
    cy.get('td').contains('10')
      .parent()
      .find('button.btn.btn-primary.btn-xs.btn-flat')
      .click()
    cy.get('#u_nomor').clear().type(data.u_no)
    cy.get('#u_jawaban').clear().type(data.u_jawaban)
    cy.get('#u_nilai').clear().type(data.u_nilai)
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat')
      .click()
    cy.get('.alert').should('contain', data.alert_ubah)  
    });

    it('Admin salin jawaban edom', () => {
      cy.get('#periode').select(data.periode).wait(0)
      cy.get('#jenjang').select(data.jenjang_salin).wait(0)
      cy.get('button').contains('Salin Data').click()
      cy.get('.modal-content').should('be.visible').and('contain', data.label_salin)
      cy.get('#periodeto').select(data.periode_salin)
      cy.get('#jenjangto').select(data.jenjang)
      cy.get('button.btn.btn-success').contains('Salin').click()
      cy.get('.alert').should('contain', data.alert_salin)  
    });

    it('Admin cek hasil salin jawaban edom', () => {
      cy.get('#periode').select(data.periode_salin).wait(0)
      cy.get('#jenjang').select(data.jenjang).wait(0)
      cy.get(':nth-child(1) > .table').getTable().should((dataTable)=>{
        //cy.log(dataTable);
        cy.fixture("HB-ADM/02-akademik/02_perkuliahan/08_kuesioner/daftar_jawaban").then((valueTable)=>{
            expect(dataTable).to.deep.equal(valueTable.data_salin)
        })
    })
    });

  //negatif test
  data.negatif.forEach((test) => {
  it('Admin menambahkan data daftar jawaban ketika ' +test.case, function () {
    cy.get('#periode').select(data.periode).wait(0)
    cy.get('#jenjang').select(data.jenjang).wait(0)
    cy.get('button').contains('Tambah').click()
    if(test.no)
      cy.get('#i_nomor').type(test.no)
    if(test.jawaban)
      cy.get('#i_jawaban').type(test.jawaban)
    if(test.nilai)
      cy.get('#i_nilai').type(test.nilai)
    cy.get(':nth-child(4) > .btn-success').click()
    cy.modal_konfirmasi(this.writting.wajib, "ok")
  })
});

it('Admin menambahkan daftar jawban duplikasi', () => {
  cy.get('#periode').select(data.periode).wait(0)
  cy.get('#jenjang').select(data.jenjang).wait(0)
  cy.get('button').contains('Tambah').click()
  cy.get('#i_nomor').type(data.u_no)
  cy.get('#i_jawaban').type(data.u_jawaban)
  cy.get('#i_nilai').type(data.u_no)
    .parent()
    .next()
    .find('button.btn.btn-success.btn-xs.btn-flat')
    .click()
  cy.get('.alert').should('contain', data.alert_duplikasi)
})

it('Admin menghapus daftar jawaban', function () {
  cy.get('#periode').select(data.periode).wait(0)
  cy.get('#jenjang').select(data.jenjang).wait(0)
  for(let n = 1; n <= 7; n++){
    cy.get(':nth-child(2) > :nth-child(4) > .btn-danger').click()
    cy.modal_konfirmasi(this.writting.hapus, "ya")
    cy.get('.alert').should('contain', data.alert_hapus)
  }
});
});
