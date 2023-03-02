/// <reference types="cypress"/>

import data from "../../../../../../../fixtures/HB-ADM/02-akademik/05_data_pelengkap/02_perkuliahan/jenis_matakuliah.json"

describe('Automation Jenis Mata Kuliah', ()=>{
 
  beforeEach(() => {
    cy.login();
    cy.modulakademik();
    cy.visit('/siakad/ms_jenismk');
  });

  it('Admin bisa membuka halaman', () => {
    cy.get('.content-header > h1').should('contain','Jenis Mata Kuliah');
  });

  data.tambah.forEach((test)=>{
    it('Tambah data', ()=>{
      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idjenismk').type(test.kode_jenismk);
      cy.get('#i_namajenismk').type(test.nama_jenismk);
      cy.get(':nth-child(3) > .btn-success > .fa').click();
    })
  })

  //row function private
  //function public
  it.only('Ubah data',  ()=>{
    cy.get('table.table.table-bordered.table-striped.dataTable > tbody > tr > td:nth-child(1)').each(($el)=>{
      //looping table tidak bisa pakai fixture array
      if ($el.text() === data.kode) {
        // cy.log($el.text())
        cy.get($el).parent().find('button.btn.btn-warning.btn-xs.btn-flat').click()
        return false //untuk stop looping khusus di get table
      }
      // cy.log($el.text())
    })
  })
});
