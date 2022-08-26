/// <reference types="cypress"/>

describe('Testing data pekengkap jenis honor', ()=>{
 
  beforeEach(() => {
      cy.loginsuperadmin()
      cy.modulakademik()
      cy.visit('siakad/ms_honor');
      // cy.fixture('HB-ADM/02-akademik/05-pegawai/jenis_honor').as('data')
  });

  //positif test
  it.only('Admin menambahkan data jenis honor dengan kode angka', function () {
    cy.get('div > button').find('button.btn.btn-success.btn-sm').should('be.visible')
  });
  it('Admin menambahkan data jenis honor dengan kode huruf', function () {
  
  });
  it('Admin menambahkan data jenis honor dengan kode karakter', function () {
  
  });
  it('Admin mengubah data jenis honor', function () {
  
  });
  it('Admin menghapus data jenis honor', function () {
  
  });

  //negatif test
  it('Admin menambahkan data yang sama (duplikat)', function () {
    
  });
  it('Admin menambahkan data dengan kode lebih dari 10 digit', function () {
    
  });

});
