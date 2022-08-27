/// <reference types="cypress"/>

describe("Super Administrator bisa melakukan management suku pada menu suku", ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin()
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.modulakademik();
    cy.menu_suku()
    cy.get('.content-header > h1').should('contain',"Suku");
    cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/03_biodata/suku").as('data');
  });

  it("Super Admin Create Suku Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#insert-row-ms > :nth-child(2) > .btn-success > .fa').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
  });

  it("Super Admin Bisa Create Suku Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_namasuku').type(this.data.i_namaSuku);
      cy.get('#insert-row-ms > :nth-child(2) > .btn-success > .fa').click();
      cy.get(".alert").should("be.visible").contains(this.data.i_alert);
  });

  it("Super Admin Bisa Searching Suku Baru - Ditemukan", function () {
    //pencarian berdasarkan nama
    cy.get('#cfilter').select(this.data.pencarian_by);
    cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.i_namaSuku);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').should("be.visible").contains(this.data.i_namaSuku);
});
  
  /* Fungsi duplicate belum ada karena saat tambah tidak memasukkan kode unik, hanya nama
    it("Super Admin Ga Bisa Create Suku Yang Sama", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_namasuku').type(this.data.i_namaSuku);
      cy.get('#insert-row-ms > :nth-child(2) > .btn-success > .fa').click();
      cy.get(".alert").should("be.visible").contains(this.data.i_alertDuplicate);
    });
  */

  it("Super Admin Batalkan Proses Create/Edit", function () {
    cy.get('#cfilter').select(this.data.pencarian_by);
    cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.i_namaSuku);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('#wrap-button > button').click();
    cy.get('#insert-row-ms > td:nth-child(2) > button.btn.btn-warning.btn-xs.btn-flat').click();
    cy.get('td').contains(this.data.i_namaSuku)
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_namasuku').clear().type(this.data.u_namaSuku)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu Suku", function () {
    cy.get('#cfilter').select(this.data.pencarian_by);
    cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.i_namaSuku);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').contains(this.data.i_namaSuku)
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_namasuku').clear().type(this.data.u_namaSuku)
      .tab()
      .click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.u_alert);
  });

  it("Super Admin Bisa Delete Suku Baru", function () {
    cy.get('#cfilter').select(this.data.pencarian_by);
    cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.u_namaSuku);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').contains(this.data.u_namaSuku)
      .next()
     .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('.modal-footer > .btn-primary').click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.d_alert);
  });
  
  it("Super Admin Bisa Searching Suku Baru - Tidak Ditemukan", function () {
    //pencarian berdasarkan nama
    cy.get('#cfilter').select(this.data.pencarian_by);
    cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.u_namaSuku);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').should("be.visible").contains(this.data.empty_data);
  });

  it("Super Admin Bisa Merefresh Halaman", function () {
    cy.get('.input-group-btn > .btn-primary').click();
    cy.get('.content-header > h1').should('contain',"Suku");
  });
});
