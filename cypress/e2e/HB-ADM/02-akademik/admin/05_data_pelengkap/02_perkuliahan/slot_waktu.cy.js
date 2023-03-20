/// <reference types="cypress"/>

describe('Automation Slot Waktu', ()=>{
 
  beforeEach(() => {
    cy.login();
    cy.modulakademik();
    cy.visit('/siakad/ms_slotwaktu'); 
  });

  it('Admin bisa membuka halaman', () => {
    cy.get('.content-header > h1').should('contain','Slot Waktu');
  });

  it('Admin bisa menambah data',()=>{
    cy.get('#i_waktu').type('07:15');
    cy.get('.input-group-btn>.btn.btn-success').click();
    cy.get('.row >.col-md-4:first >.table-responsive').contains('07:15');
    cy.get('.alert').should('contain','Penambahan data Slot Waktu berhasil');

    cy.get('#i_waktu').type('12:25');
    cy.get('.input-group-btn>.btn.btn-success').click();
    cy.get(':nth-child(2) > .table-responsive').contains('12:25');
    cy.get('.alert').should('contain','Penambahan data Slot Waktu berhasil');


    cy.get('#i_waktu').type('18:50');
    cy.get('.input-group-btn>.btn.btn-success').click();
    cy.get('.row >.col-md-4:last >.table-responsive').contains('18:50');
    cy.get('.alert').should('contain','Penambahan data Slot Waktu berhasil');
  });
  
  it('Admin tidak bisa menambah data',()=>{
    cy.get('.input-group-btn>.btn.btn-success').click();
    cy.get('.text-danger').should('contain','Harus diisi');

    cy.get('#i_waktu').type('07:15');
    cy.get('.input-group-btn>.btn.btn-success').click();
    cy.get('.alert').should('contain','Gagal menambah Slot Waktu karena ada duplikat waktu');
    cy.get('.close').click();
  });

  it('Admin bisa mengubah data',()=>{
    var obj1=1;
    cy.get('.row >.col-md-4:first >.table-responsive').each(($el,index,$list)=>{
      if($el.text==='07:30'){ 
        cy.log($el);
        obj1=index;
      }
    })
    cy.get('.btn.btn-primary.btn-xs.btn-flat').eq(obj1).click();
    cy.get('#u_waktu').clear().type('0745').parent().next().find('button.btn.btn-success.btn-xs.btn-flat').click();
    cy.get('.alert').should('contain','Pengubahan data Slot Waktu berhasil');
  });

  it('Admin tidak bisa mengubah data',()=>{
    var obj1=1;
    cy.get('.table-responsive:first tbody tr').each(($el,index,$list)=>{
      if($el.text==='07:45'){ 
        obj1=index;
      }
    })
    cy.get('.btn.btn-primary.btn-xs.btn-flat').eq(obj1).click();
    cy.get('#u_waktu').clear().type('0715').parent().next().find('button.btn.btn-success.btn-xs.btn-flat').click();
    cy.get('.alert').should('contain','Gagal mengubah Slot Waktu karena ada duplikat waktu');
  });

  it('Admin bisa menghapus data',()=>{
    var obj1=3;
    cy.get('.row >.col-md-4:first >.table-responsive>').each(($el,index,$list)=>{
      if($el.text==='08:15'){ 
        cy.log($el);
        obj1=index;
      }
    })
    cy.get('.btn.btn-danger.btn-xs.btn-flat').eq(obj1).click();
    cy.get('#modal-konfirmasi').should('contain','Apakah anda yakin akan menghapus data ini?');
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('.alert').should('contain','Penghapusan data Slot Waktu berhasil');
  });

  //catatan: meskipun data sudah tereferensi tetap bisa dihapus
});