/// <reference types="cypress"/>

describe("Super Administrator bisa melakukan management kebutuhan khusus pada menu status kebutuhan khusus", ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.modulakademik();
    cy.menu_kebutuhan_khusus()
    cy.get('.content-header > h1').should('contain',"Kebutuhan Khusus");
    cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/04_mahasiswa/kebutuhan_khusus").as('data');
  });

  it("Super Admin Create Kebutuhan Khusus Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_namakk').type(this.data.i_namaKK);
    cy.get(':nth-child(3) > .btn-success').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
    cy.get('#i_idkk').type(this.data.i_kode);
    cy.get('#i_namakk').clear();
    cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
  });

  it("Super Admin Bisa Create Kebutuhan Khusus Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idkk').clear().type(this.data.i_kode);
      cy.get('#i_namakk').type(this.data.i_namaKK);
      cy.get('#insert-row-ms > td:nth-child(3) > button.btn.btn-success.btn-xs.btn-flat').click();
      cy.get(".alert").should("be.visible").contains(this.data.i_alert);
  });

  it("Super Admin Bisa Searching Kebutuhan Khusus Baru - Ditemukan", function () {
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    //pencarian berdasarkan kode
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.i_kode);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').should("be.visible").contains(this.data.i_kode);
    //pencarian berdasarkan nama
    cy.get('#cfilter').select(pencarian_by[1]);
    cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.i_namaKK);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').should("be.visible").contains(this.data.i_namaKK);
});
  
it("Super Admin Bisa Searching Kebutuhan Khusus Baru - Tidak Ditemukan", function () {
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    //pencarian berdasarkan kode
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.u_kode);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').should("be.visible").contains(this.data.empty_data);
    //pencarian berdasarkan nama
    cy.get('#cfilter').select(pencarian_by[1]);
    cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.u_namaKK);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').should("be.visible").contains(this.data.empty_data);
});

  it("Super Admin Ga Bisa Create Kebutuhan Khusus Yang Sama", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idkk').clear().type(this.data.i_kode);
    cy.get('#i_namakk').type(this.data.i_namaKK);
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
    cy.get('#u_namakk').clear().type(this.data.u_namaKK)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu Kebutuhan Khusus", function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idkk').clear().type(this.data.u_kode);
    cy.get('#u_namakk').clear().type(this.data.u_namaKK)
      .tab()
      .click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.u_alert);
  });

  it("Super Admin Bisa Delete Kebutuhan Khusus Baru", function () {
    cy.get('td').contains(this.data.u_kode)
    .next()
    .next()
    .find('button.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('.modal-footer > .btn-primary').click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.d_alert);
  });
  
  it("Super Admin Bisa Merefresh Halaman", function () {
    cy.get('.input-group-btn > .btn-primary').click();
    cy.get('.content-header > h1').should('contain',"Kebutuhan Khusus");
  });
});

