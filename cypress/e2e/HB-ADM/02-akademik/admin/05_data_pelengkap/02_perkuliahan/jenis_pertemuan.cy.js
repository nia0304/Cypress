/// <reference types="cypress"/>
 
 
 
describe('Automation Jenis Pertemuan', ()=>{
 
  beforeEach(() => {
    cy.login();
    cy.modulakademik();
    cy.visit('/siakad/ms_jenispertemuan');
  });
 
  it('Admin bisa menambah data', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idjenispertemuan').type('Test')
    cy.get('#i_namajenispertemuan').type('Data Testing')
    cy.get('#i_namasingkatjenispertemuan').type('Testing')
      .parent()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain','Penambahan data jenis pertemuan berhasil')
  });
 
  it('Admin tidak mengisi kolom Kode', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_namajenispertemuan').type('Data Testing')
    cy.get('#i_namasingkatjenispertemuan').type('Testing')
      .parent()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah')
    cy.get('.modal-footer > .btn').click()
  });
  it('Admin tidak mengisi kolom Nama Jenis Pertemuan', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idjenispertemuan').type('Test')
    cy.get('#i_namasingkatjenispertemuan').type('Testing')
      .parent()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah')
    cy.get('.modal-footer > .btn').click()
  });
  it('Admin tidak mengisi kolom Nama Singkat Jenis Pertemuan', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idjenispertemuan').type('Test')
    cy.get('#i_namajenispertemuan').type('Data Testing')
      .parent()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah')
    cy.get('.modal-footer > .btn').click()
  });
  it('Admin mencentang Presensi', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idjenispertemuan').type('Test2')
    cy.get('#i_namajenispertemuan').type('Data Testing2')
    cy.get('#i_namasingkatjenispertemuan').type('Testing')
    cy.get(':nth-child(4) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
      .parent()
      .parent()
      .parent()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain','Penambahan data jenis pertemuan berhasil')
  });
  it('Admin mencentang Ujian', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idjenispertemuan').type('Test3')
    cy.get('#i_namajenispertemuan').type('Data Testing3')
    cy.get('#i_namasingkatjenispertemuan').type('Testing')
    cy.get(':nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
      .parent()
      .parent()
      .parent()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain','Penambahan data jenis pertemuan berhasil')
  });
  it('Admin mencentang Presensi & Ujian', () => {
  cy.get('#wrap-button > .btn').click()
  cy.get('#i_idjenispertemuan').type('Test4')
  cy.get('#i_namajenispertemuan').type('Data Testing4')
  cy.get('#i_namasingkatjenispertemuan').type('Testing')
  cy.get(':nth-child(4) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
  cy.get(':nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
    .parent()
    .parent()
    .parent()
    .parent()
    .find('button.btn.btn-success.btn-xs.btn-flat').click()
  cy.get('.alert').should('contain','Penambahan data jenis pertemuan berhasil')
  });
  it('Admin memilih jenis yang sudah digunakan', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idjenispertemuan').type('Test5')
    cy.get('#i_namajenispertemuan').type('Data Testing5')
    cy.get('#i_namasingkatjenispertemuan').type('Testing')
    cy.get('#i_jenis').select('Kuliah')
      .parent()
      .next()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.text-danger').should('contain', ' Jenis : kuliah sudah digunakan')
  });
  it('Admin bisa mengubah data', () => {
    cy.get('.table>tbody>tr>td:nth-child(2)').each(($el,index,$list)=>{
      if($el.text()==='Data Testing'){ 
        cy.get($el).parent().find('button.btn.btn-warning.btn-xs.btn-flat').click();
      }
    })
    cy.get('#u_namajenispertemuan').clear().type('Ubah Data Testing')
      .parent() 
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain','Pengubahan data jenis pertemuan berhasil')
  });
  it('Admin batal menghapus data', () => {
    cy.get('.table>tbody>tr>td:nth-child(2)').each(($el,index,$list)=>{
      if($el.text()==='Ubah Data Testing'){ 
        cy.get($el).parent().find('button.btn.btn-danger.btn-xs.btn-flat').click();
      }
    })
    cy.get('#modal-konfirmasi').should('contain', 'Apakah anda yakin akan menghapus data ini?')
    cy.get('.modal-footer > .btn-default').click()
 
    // cy.get('.alert').should('contain','Pengubahan data jenis pertemuan berhasil')
  });
  it('Admin bisa menghapus data', () => {
    cy.get('.table>tbody>tr>td:nth-child(2)').each(($el,index,$list)=>{
      if($el.text()==='Ubah Data Testing'){ 
        cy.get($el).parent().find('button.btn.btn-danger.btn-xs.btn-flat').click();
      }
    })
    cy.get('#modal-konfirmasi').should('contain', 'Apakah anda yakin akan menghapus data ini?')
    cy.get('.btn-primary').click()
 
    cy.get('.alert').should('contain','Penghapusan data jenis pertemuan berhasil')
  });
 
});
 
