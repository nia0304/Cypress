/// <reference types="cypress"/>

describe("Super Administrator bisa melakukan management pekerjaan pada menu pekerjaan", ()=>{
 
  beforeEach(() => {
    cy.loginsuperadmin()
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.modulakademik();
    cy.menu_pekerjaan();
    cy.get('.content-header > h1').should('contain',"Pekerjaan");
    cy.fixture("HB-ADM/02-akademik/05_data_pelengkap/03_biodata/pekerjaan").as('data');
  });

  it("Super Admin Create Pekerjaan Required Fields Harus Di isi", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_namapekerjaan').type(this.data.i_namaPekerjaan);
    cy.get(':nth-child(6) > .btn-success > .fa').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
    cy.get('#i_idpekerjaan').type(this.data.i_kode);
    cy.get('#i_namapekerjaan').clear();
    cy.get(':nth-child(6) > .btn-success > .fa').click();
    cy.get('.modal-content')
      .should("be.visible")
      .contains(this.data.popup_mandatory);
    cy.get('.modal-footer > .btn').click();
  });

  it("Super Admin Bisa Create Pekerjaan Baru", function () {
      cy.get('#wrap-button > button').click();
      cy.get('#i_idpekerjaan').clear().type(this.data.i_kode);
      cy.get('#i_namapekerjaan').type(this.data.i_namaPekerjaan);
      cy.get('#i_kodeemispekerjaan').type(this.data.i_kodeEmis);
      cy.get('#i_kodeemispekerjaanmhs').type(this.data.i_kodeEmisMhs);
      cy.get('#i_kodeemispekerjaanlulusan').type(this.data.i_kodeEmisLulusan);
      cy.get(':nth-child(6) > .btn-success > .fa').click();
      cy.get(".alert").should("be.visible").contains(this.data.i_alert);
  });

  it("Super Admin Bisa Searching Pekerjaan Baru - Ditemukan", function () {
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    //pencarian berdasarkan kode
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.i_kode);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').should("be.visible").contains(this.data.i_kode);
    //pencarian berdasarkan nama
    cy.get('#cfilter').select(pencarian_by[1]);
    cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.i_namaPekerjaan);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').should("be.visible").contains(this.data.i_namaPekerjaan);
    //pencarian berdasarkan kode emis
    cy.get('#cfilter').select(pencarian_by[2]);
    cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.i_kodeEmis);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').should("be.visible").contains(this.data.i_kodeEmis);
    //pencarian berdasarkan kode emis mhs
    cy.get('#cfilter').select(pencarian_by[3]);
    cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.i_kodeEmisMhs);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').should("be.visible").contains(this.data.i_kodeEmisMhs);
    //pencarian berdasarkan kode emis lulusan
    cy.get('#cfilter').select(pencarian_by[4]);
    cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.i_kodeEmisLulusan);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').should("be.visible").contains(this.data.i_kodeEmisLulusan);
  });
  
  it("Super Admin Bisa Searching Pekerjaan Baru - Tidak Ditemukan", function () {
      let text=this.data.pencarian_by;
      const pencarian_by = text.split(",");
      //pencarian berdasarkan kode
      cy.get('#cfilter').select(pencarian_by[0]);
      cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.u_kode);
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('td').should("be.visible").contains(this.data.empty_data);
      //pencarian berdasarkan nama
      cy.get('#cfilter').select(pencarian_by[1]);
      cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.u_namaPekerjaan);
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('td').should("be.visible").contains(this.data.empty_data);
      //pencarian berdasarkan kode emis
      cy.get('#cfilter').select(pencarian_by[1]);
      cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.u_kodeEmis);
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('td').should("be.visible").contains(this.data.empty_data);
      //pencarian berdasarkan kode emis mhs
      cy.get('#cfilter').select(pencarian_by[1]);
      cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.u_kodeEmisMhs);
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('td').should("be.visible").contains(this.data.empty_data);
      //pencarian berdasarkan kode emis lulusan
      cy.get('#cfilter').select(pencarian_by[1]);
      cy.get('.col-xs-8 > .input-group > .form-control').clear().type(this.data.u_kodeEmisLulusan);
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('td').should("be.visible").contains(this.data.empty_data);
  });


  it("Super Admin Bisa Merefresh Halaman", function () {
    cy.get('.input-group-btn > .btn-primary').click();
    cy.get('.content-header > h1').should('contain',"Pekerjaan");
  });

  it("Super Admin Ga Bisa Create Pekerjaan Yang Sama", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#i_idpekerjaan').clear().type(this.data.i_kode);
    cy.get('#i_namapekerjaan').type(this.data.i_namaPekerjaan);
    cy.get('#i_kodeemispekerjaan').type(this.data.i_kodeEmis);
    cy.get('#i_kodeemispekerjaanmhs').type(this.data.i_kodeEmisMhs);
    cy.get('#i_kodeemispekerjaanlulusan').type(this.data.i_kodeEmisLulusan);
    cy.get(':nth-child(6) > .btn-success > .fa').click();
    cy.get(".alert").should("be.visible").contains(this.data.i_alertDuplicate);
  });

  it("Super Admin Batalkan Proses Create/Edit", function () {
    cy.get('#wrap-button > button').click();
    cy.get('#insert-row-ms > td:nth-child(6) > button.btn.btn-warning.btn-xs.btn-flat').click();
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    //pencarian berdasarkan kode
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.i_kode);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_kodeemispekerjaanlulusan').clear().type(this.data.u_kodeEmisLulusan)
      .tab()
      .tab()
      .click();
  });

  it("Super Admin Bisa Edit Salah Satu Pekerjaan", function () {
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    //pencarian berdasarkan kode
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.i_kode);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .next()
      .next()
      .next()
      .find('button.btn.btn-primary.btn-xs.btn-flat').click();
    cy.get('#u_idpekerjaan').clear().type(this.data.u_kode);
    cy.get('#u_namapekerjaan').clear().type(this.data.u_namaPekerjaan)
    cy.get('#u_kodeemispekerjaan').clear().type(this.data.u_kodeEmis)
    cy.get('#u_kodeemispekerjaanmhs').clear().type(this.data.u_kodeEmisMhs)
    cy.get('#u_kodeemispekerjaanlulusan').clear().type(this.data.u_kodeEmisLulusan)
      .tab()
      .click();
    cy.get(".alert")
      .should("be.visible")
      .contains(this.data.u_alert);
  });

  it("Super Admin Bisa Delete Pekerjaan Baru", function () {
    let text=this.data.pencarian_by;
    const pencarian_by = text.split(",");
    //pencarian berdasarkan kode
    cy.get('#cfilter').select(pencarian_by[0]);
    cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.u_kode);
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('td').contains(this.data.u_kode)
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
