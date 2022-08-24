/// <reference types="cypress"/>

describe('Super Administrator bisa melakukan management transportasi pada menu transportasi', ()=>{
 
  beforeEach(() =>   {
      cy.loginsuperadmin();
      cy.get(".main_title").should("contain", "Daftar Modul");
      cy.get('.siakad > .inner').click();
      cy.get('#siakad > div > div:nth-child(2)').click();
      cy.menu_transportasi();
      cy.get('.content-header > h1').should('contain',"Transportasi");
      cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/04_mahasiswa/transportasi").as('data');
  });

  it("Super Admin Create Transportasi Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_namatransport').type(this.data.i_namaTransportasi);
    cy.get(':nth-child(3) > .btn-success').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
    cy.get('#i_idtransport').type(this.data.i_kode);
    cy.get('#i_namatransport').clear();
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
  });

  it("Super Admin Bisa Create Transportasi Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idtransport').clear().type(this.data.i_kode);
      cy.get('#i_namatransport').type(this.data.i_namaTransportasi);
      cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
      cy.get(".alert").should("be.visible").contains(this.data.i_alert);
  });

  it("Super Admin Ga Bisa Create Transportasi Yang Sama", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idtransport').clear().type(this.data.i_kode);
    cy.get('#i_namatransport').type(this.data.i_namaTransportasi);
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
    cy.get('#u_namatransport').clear().type(this.data.u_namaTransportasi)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu Transportasi", function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idtransport').clear().type(this.data.u_kode);
    cy.get('#u_namatransport').clear().type(this.data.u_namaTransportasi)
      .tab()
      .click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.u_alert);
  });

  it("Super Admin Bisa Delete Transportasi Baru", function () {
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
