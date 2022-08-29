/// <reference types="cypress"/>

describe("Super Administrator bisa melakukan management penghasilan pada menu penghasilan", ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin()
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.modulakademik();
    cy.menu_penghasilan()
    cy.get('.content-header > h1').should('contain',"Penghasilan");
    cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/03_biodata/penghasilan").as('data');
  });

  it("Super Admin Create Penghasilan Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_namapenghasilan').type(this.data.i_namaPenghasilan);
    cy.get(':nth-child(4) > .btn-success').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
    cy.get('#i_idpenghasilan').type(this.data.i_kode);
    cy.get('#i_namapenghasilan').clear();
    cy.get(':nth-child(4) > .btn-success').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
  });

  it("Super Admin Bisa Create Penghasilan Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idpenghasilan').type(this.data.i_kode);
      cy.get('#i_namapenghasilan').type(this.data.i_namaPenghasilan);
      cy.get('#i_kodeemispenghasilan').type(this.data.i_kodeEmis);
      cy.get(':nth-child(4) > .btn-success').click();
      cy.get(".alert").should("be.visible").contains(this.data.i_alert);
  });

  it("Super Admin Ga Bisa Create Penghasilan Yang Sama", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idpenghasilan').type(this.data.i_kode);
    cy.get('#i_namapenghasilan').type(this.data.i_namaPenghasilan);
    cy.get('#i_kodeemispenghasilan').type(this.data.i_kodeEmis);
    cy.get(':nth-child(4) > .btn-success').click();
    cy.get(".alert").should("be.visible").contains(this.data.i_alertDuplicate);
  });

  it("Super Admin Batalkan Proses Create/Edit", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#insert-row-ms > :nth-child(4) > .btn-warning > .fa').click();
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_kodeemispenghasilan').clear().type(this.data.i_kodeEmis)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu Penghasilan", function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idpenghasilan').clear().type(this.data.u_kode);
    cy.get('#u_namapenghasilan').clear().type(this.data.u_namaPenghasilan);
    cy.get('#u_kodeemispenghasilan').clear().type(this.data.u_kodeEmis)
      .tab()
      .click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.u_alert);
  });

  it("Super Admin Bisa Delete Penghasilan Baru", function () {
    cy.get('td').contains(this.data.u_kode)
    .next()
    .next()
    .next()
    .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('.modal-footer > .btn-primary').click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.d_alert);
  });
});
