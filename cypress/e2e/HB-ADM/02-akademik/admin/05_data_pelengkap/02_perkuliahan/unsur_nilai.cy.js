/// <reference types="cypress"/>

describe('Automation Unsur Nilai', ()=>{
 
  beforeEach(() => {
    cy.login();
    cy.modulakademik();
    cy.visit('/siakad/ms_refnilai'); 
  });

  it('Admin bisa membuka halaman', () => {
    cy.get('.content-header > h1').should('contain','Unsur Nilai');
  });

  it('Admin bisa menambah data',()=>{
      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idreferensi').type('1');
      cy.get('#i_namareferensi').type('Komprehensif');
      cy.get('#i_referensisingkat').type('Kompres');
      cy.get(':nth-child(5) > .btn-success').click();
      cy.get('.alert').should('contain','Penambahan data unsur nilai berhasil');
      cy.get('.close').click();
  });

  it('Admin tidak bisa menambah data',()=>{
      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idreferensi').type('1');
      cy.get('#i_namareferensi').type('Komprehensif');
      cy.get('#i_referensisingkat').type('Kompres');
      cy.get(':nth-child(5) > .btn-success').click();
      cy.get('.alert').should('contain','Penambahan data unsur nilai gagal, ada duplikasi data');
      cy.get('.close').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idreferensi').clear();
      cy.get('#i_namareferensi').clear();
      cy.get('#i_referensisingkat').clear();
      cy.get('#i_kelompokunsur').select('');
      cy.get(':nth-child(5) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idreferensi').clear();
      cy.get('#i_namareferensi').clear();
      cy.get('#i_referensisingkat').clear();
      cy.get('#i_kelompokunsur').select('');
      cy.get('#i_idreferensi').type('28');
      cy.get(':nth-child(5) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idreferensi').clear();
      cy.get('#i_namareferensi').clear();
      cy.get('#i_referensisingkat').clear();
      cy.get('#i_kelompokunsur').select('');
      cy.get('#i_namareferensi').type('Presensi');
      cy.get(':nth-child(5) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idreferensi').clear();
      cy.get('#i_namareferensi').clear();
      cy.get('#i_referensisingkat').clear();
      cy.get('#i_kelompokunsur').select('');
      cy.get('#i_referensisingkat').type('Prsn');
      cy.get(':nth-child(5) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idreferensi').clear();
      cy.get('#i_namareferensi').clear();
      cy.get('#i_referensisingkat').clear();
      cy.get('#i_kelompokunsur').select('');
      cy.get('#i_kelompokunsur').type('Kepaniteraan');
      cy.get(':nth-child(5) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idreferensi').clear();
      cy.get('#i_namareferensi').clear();
      cy.get('#i_referensisingkat').clear();
      cy.get('#i_kelompokunsur').select('');
      cy.get('#i_idreferensi').type('27');
      cy.get('#i_namareferensi').type('Gelar Karya');
      cy.get('#i_referensisingkat').type('GelKar');
      cy.get('#i_kelompokunsur').select('Skripsi/Tesis');
      cy.get(':nth-child(5) > .btn-success').click();
      cy.get('.text-danger').should('be.visible').and('contain', 'Kelompok unsur Skripsi/Tesis hanya bisa dipilih satu kali');
      cy.get('#insert-row-ms > :nth-child(5) > .btn-warning').click();
  });

  it('Admin batal menambah data',()=>{
    cy.get('#wrap-button > .btn').click();
    cy.get('#insert-row-ms > :nth-child(5) > .btn-warning').click();
  });

  it('Admin bisa mengubah data',()=>{
      cy.get('td').contains('Kompres').next().parent().find('.button.btn.btn-success.btn-xs.btn-flat').click();
      cy.get('#u_namareferensi').clear().type('Komprehensif TA').parent().next().next().parent().find('.btn.btn-success.btn-xs.btn-flat').click();
      cy.get('.alert').should('contain','Pengubahan data unsur nilai berhasil');
  });

  it('Admin tidak bisa mengubah data',()=>{
    cy.get('td').contains('Kompres').next().parent().find('.btn.btn-warning.btn-xs.btn-flat').click();
    cy.get('#u_kelompokunsur').select('Skripsi/Tesis').parent().parent().find('.btn.btn-success.btn-xs.btn-flat').click();
    cy.get('.text-danger').should('be.visible').and('contain', 'Kelompok unsur Skripsi/Tesis hanya bisa dipilih satu kali');
    cy.get(':nth-child(2) > :nth-child(5) > .btn-warning').click();
});

  it('Admin batal mengubah data',()=>{
    cy.get('td').contains('Kompres').next().parent().find('.btn.btn-warning.btn-xs.btn-flat').click();
    cy.get(':nth-child(2) > :nth-child(5) > .btn-warning').click();
  });

  it.only('Admin bisa menghapus data',()=>{
    cy.get('td').contains('27').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?')
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('.alert').should('contain','Penghapusan data unsur nilai berhasil');
  });

  it('Admin tidak bisa menghapus data',()=>{
    cy.get('td').contains('11').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?')
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('.alert').should('contain','Penghapusan data unsur nilai gagal, data masih dijadikan referensi pada Proporsi Nilai Kelas');
    cy.get('.close').click();
  });

  it.only('Admin batal menghapus data',()=>{
    cy.get('td').contains('11').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?')
    cy.get('.modal-footer > .btn-default').click();
  });
});
