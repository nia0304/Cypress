/// <reference types="cypress"/>

describe("Super Administrator bisa melakukan management status mahasiswa pada menu status mahasiswa", ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get('.siakad > .inner').click();
    cy.get('#siakad > div > div:nth-child(2)').click();
    cy.menu_status_mahasiswa();
    cy.get('.content-header > h1').should('contain',"Status Mahasiswa");
    cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/04_mahasiswa/status_mahasiswa").as('data');
  });

  it("Super Admin Create Status Mahasiswa Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_namastatusmhs').type(this.data.i_namaStatusMhs);
    cy.get(':nth-child(7) > .btn-success').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
    cy.get('#i_idstatusmhs').type(this.data.i_kode);
    cy.get('#i_namastatusmhs').clear();
    cy.get(':nth-child(7) > .btn-success').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
  });

  it("Super Admin Bisa Create Status Mahasiswa Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idstatusmhs').type(this.data.i_kode);
      cy.get('#i_namastatusmhs').type(this.data.i_namaStatusMhs);
      cy.get('#insert-row-ms > :nth-child(3)').find(".icheckbox_minimal").click();
      cy.get('#insert-row-ms > :nth-child(4)').find(".icheckbox_minimal").click();
      cy.get('#insert-row-ms > :nth-child(5)').find(".icheckbox_minimal").click();
      cy.get('#i_kodeemisstatusmhs').type(this.data.i_kodeEmis);
      cy.get(':nth-child(7) > .btn-success > .fa').click();
      cy.get(".alert").should("be.visible").contains(this.data.i_alert);
  });

  it("Super Admin Ga Bisa Create Status Mahasiswa Yang Sama", function () {
    cy.get('#wrap-button > button').click();
      cy.get('#i_idstatusmhs').type(this.data.i_kode);
      cy.get('#i_namastatusmhs').type(this.data.i_namaStatusMhs);
      cy.get('#insert-row-ms > :nth-child(3)').find(".icheckbox_minimal").click();
      cy.get('#insert-row-ms > :nth-child(4)').find(".icheckbox_minimal").click();
      cy.get('#insert-row-ms > :nth-child(5)').find(".icheckbox_minimal").click();
      cy.get('#i_kodeemisstatusmhs').type(this.data.i_kodeEmis);
      cy.get(':nth-child(7) > .btn-success > .fa').click();
    cy.get(".alert").should("be.visible").contains(this.data.i_alertDuplicate);
  });

  it("Super Admin Batalkan Proses Create/Edit", function () {
    cy.get('#wrap-button > button').click();
    cy.get('td').find('button.btn.btn-warning.btn-xs.btn-flat').click();
    cy.get('td').contains('A')
      .next()
      .next()
      .next()
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
      cy.get('#u_kodeemisstatusmhs').clear().type(this.data.u_kodeEmis)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu Status Mahasiswa", function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .next()
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idstatusmhs').clear().type(this.data.u_kode);
    cy.get('#u_namastatusmhs').clear().type(this.data.u_namaStatusMhs)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').find(".icheckbox_minimal").click();
    cy.get('tbody > :nth-child(2) > :nth-child(4)').find(".icheckbox_minimal").click();
    cy.get('tbody > :nth-child(2) > :nth-child(5)').find(".icheckbox_minimal").click();
    cy.get('#u_kodeemisstatusmhs').clear().type(this.data.u_kodeEmis)
      .tab()
      .click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.u_alert);
  });

  it("Super Admin Bisa Delete Status Mahasiswa Baru", function () {
    cy.get('td').contains(this.data.u_kode)
    .next()
      .next()
      .next()
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
