/// <reference types="cypress"/>

describe('Super Administrator bisa melakukan management jenis tinggal pada menu jenis tinggal', ()=>{
 
  beforeEach(() =>   {
      cy.loginsuperadmin();
      cy.get(".main_title").should("contain", "Daftar Modul");
      cy.get('.siakad > .inner').click();
      cy.get('#siakad > div > div:nth-child(2)').click();
      cy.Menu_Jenis_Tinggal();
      cy.get('.content-header > h1').should('contain',"Jenis Tinggal");
      cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/04_mahasiswa/jenis_tinggal").as('data');
  });

  it("Super Admin Create Jenis Tinggal Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idjenistinggal').clear().type(" ");
    cy.get('#i_namajenistinggal').type(this.data.i_namaJenisTinggal);
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
    cy.get('#i_idjenistinggal').type(this.data.i_kode);
    cy.get('#i_namajenistinggal').clear();
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
  });

  it("Super Admin Bisa Create Jenis Tinggal Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idjenistinggal').clear().type(this.data.i_kode);
      cy.get('#i_namajenistinggal').type(this.data.i_namaJenisTinggal);
      cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
      cy.get(".alert").should("be.visible").contains(this.data.i_alert);
  });

  it("Super Admin Ga Bisa Create Jenis Tinggal Yang Sama", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idjenistinggal').clear().type(this.data.i_kode);
    cy.get('#i_namajenistinggal').type(this.data.i_namaJenisTinggal);
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.get(".alert").should("be.visible").contains(this.data.i_alertDuplicate);
  });

  it("Super Admin Batalkan Proses Create/Edit", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-warning.btn-xs.btn-flat').click();
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_namajenistinggal').clear().type(this.data.u_namaJenisTinggal)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu Jenis Tinggal", function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idjenistinggal').clear().type(this.data.u_kode);
    cy.get('#u_namajenistinggal').clear().type(this.data.u_namaJenisTinggal)
      .tab()
      .click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.u_alert);
  });

  it("Super Admin Bisa Delete Jenis Tinggal Baru", function () {
    cy.get('td').contains(this.data.u_kode)
    .next()
    .next()
    .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('.modal-footer > .btn-primary').click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.d_alert);
  });
});
