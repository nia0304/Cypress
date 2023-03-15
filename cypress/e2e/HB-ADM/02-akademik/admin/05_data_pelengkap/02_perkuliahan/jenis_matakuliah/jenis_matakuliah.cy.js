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

  /*data.tambah.forEach((test)=>{
    it('Tambah data', ()=>{
      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idjenismk').type(test.kode_jenismk);
      cy.get('#i_namajenismk').type(test.nama_jenismk);
      cy.get(':nth-child(3) > .btn-success > .fa').click();
    })
  })*/

  it('Admin bisa menambah data',()=>{
    //positif case
      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idjenismk').type('A1');
      cy.get('#i_namajenismk').type('Test1');
      cy.get(':nth-child(3) > .btn-success > .fa').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idjenismk').clear();
      cy.get('#i_namajenismk').clear();
      cy.get('#i_idjenismk').type('A/');
      cy.get('#i_namajenismk').type('Test-');
      cy.get(':nth-child(3) > .btn-success > .fa').click();

    //Negatif Case
    //Kolom kode dan nama kosong
      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idjenismk').clear();
      cy.get('#i_namajenismk').clear();
      cy.get(':nth-child(3) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();

    //Kolom nama kosong
      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idjenismk').clear();
      cy.get('#i_namajenismk').clear();
      cy.get('#i_idjenismk').type('A3');
      cy.get(':nth-child(3) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();

    //Kolom kode kosong
    cy.get('#wrap-button > .btn').click();
    cy.get('#i_idjenismk').clear();
    cy.get('#i_namajenismk').clear();
    cy.get('#i_namajenismk').type('Kampus Merdeka');
    cy.get(':nth-child(3) > .btn-success > .fa').click();
    cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
    cy.get('.modal-footer > .btn').click();

  });

  it('Admin bisa mengubah data',()=>{
      cy.get('td').contains('A1').next().parent().find('.btn.btn-warning.btn-xs.btn-flat').click();
      cy.get('#u_idjenismk').clear().type('A2').parent().next().next().find('.btn.btn-success.btn-xs.btn-flat').click();
      cy.get('.alert').should('contain','Pengubahan data jenis mata kuliah berhasil');
  })

  it('Admin bisa menghapus data',()=>{
    cy.get('td').contains('A/').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?');
    cy.get('.btn.btn-primary').click();
    cy.get('.alert').should('contain','Penghapusan data jenis mata kuliah berhasil');

    //Negatif case
    //Hapus jenis mata kuliah yang tereferensi dengan data lain
    cy.get('td').contains('A').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?');
    cy.get('.btn.btn-primary').click();
    cy.get('.alert').should('contain','Penghapusan data jenis mata kuliah gagal, data masih dijadikan referensi pada Mata Kuliah');
    cy.get('.close').click();
  })
  //row function private
  //function public
  /*it('Ubah data',  ()=>{
    cy.get('table.table.table-bordered.table-striped.dataTable > tbody > tr > td:nth-child(1)').each(($el)=>{
      //looping table tidak bisa pakai fixture array
      if ($el.text() === data.kode) {
        // cy.log($el.text())
        cy.get($el).parent().find('button.btn.btn-warning.btn-xs.btn-flat').click()
        return false //untuk stop looping khusus di get table
      }
      // cy.log($el.text())
    })
  })*/
});
