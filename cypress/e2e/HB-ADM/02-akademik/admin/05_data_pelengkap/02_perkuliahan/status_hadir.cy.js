/// <reference types="cypress"/>
 
describe('Automation Status Hadir', ()=>{
 
  beforeEach(() => {
    cy.login();
    cy.modulakademik();
    cy.visit('/siakad/ms_statushadir');
  });
 
  it('Admin bisa menambah data', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idstatushadir').type('T')
    cy.get('#i_namastatushadir').type('Testing')
      .parent() 
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain','Penambahan data status hadir berhasil')
  });
  it('Admin tidak mengisi kolom Kode', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_namastatushadir').type('Testing')
      .parent() 
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah')
    cy.get('.modal-footer > .btn').click()
  });
  it('Admin tidak mengisi kolom Nama Status Hadir', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idstatushadir').type('T')
      .parent() 
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah')
    cy.get('.modal-footer > .btn').click()
  });
  it('Admin mencentang Hadir', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idstatushadir').type('U')
    cy.get('#i_namastatushadir').type('Testing 1')
    cy.get(':nth-child(3) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
      .parent() 
      .parent()
      .parent()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain','Penambahan data status hadir berhasil')
  });
  it('Admin mencentang Dosen', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idstatushadir').type('V')
    cy.get('#i_namastatushadir').type('Testing 2')
    cy.get(':nth-child(4) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
      .parent() 
      .parent()
      .parent()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain','Penambahan data status hadir berhasil')
  });
  it('Admin mencentang Mahasiswa', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idstatushadir').type('W')
    cy.get('#i_namastatushadir').type('Testing 3')
    cy.get(':nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
      .parent() 
      .parent()
      .parent()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain','Penambahan data status hadir berhasil')
  });
  it('Admin mencentang Hadir, Dosen & Mahasiswa', () => {
    cy.get('#wrap-button > .btn').click()
    cy.get('#i_idstatushadir').type('X')
    cy.get('#i_namastatushadir').type('Testing 4')
    cy.get(':nth-child(3) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
    cy.get(':nth-child(4) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
    cy.get(':nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
      .parent() 
      .parent()
      .parent()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain','Penambahan data status hadir berhasil')
  });
  it('Admin bisa mengubah data', () => {
    cy.get('.table>tbody>tr>td:nth-child(2)').each(($el,index,$list)=>{
      if($el.text()==='Testing 1'){ 
        cy.get($el).parent().find('button.btn.btn-warning.btn-xs.btn-flat').click();
      }
    })
    cy.get('#u_namastatushadir').clear().type('Ubah Data testing')
    .parent() 
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain','Pengubahan data status hadir berhasil')
  });
 
 
});
 