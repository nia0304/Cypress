/// <reference types="cypress"/>

const namaMenu="Jenis Aktivitas";
const namaMenuAlert="jenis aktivitas";

describe(namaMenu, ()=>{
 
  beforeEach(() => {
    //login
      cy.loginsuperadmin()
    //open Akademik module
      cy.modulmbkm()
    //go to target page
      cy.menujenisaktivitas()
      cy.fixture("HB-ADM/11-mbkm/03_data_pelengkap/jenis_aktivitas").as('data');
  });

  it('Super Admin Update Deskripsi Kegiatan', function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .next()
      .find('button.btn.btn-warning.btn-xs.btn-flat').click();
    cy.get('#u_deskripsi').clear().type(this.data.u_deskripsi)
      .tab()
      .click();
    cy.alert_notifikasi("U", namaMenuAlert);
  });

  it("Super Admin Batalkan Proses Edit", function () {
    cy.get('td').contains(this.data.i_kode)
      .next()
      .next()
      .next()
      .find('button.btn.btn-warning.btn-xs.btn-flat').click();
    cy.get('#u_deskripsi').clear()
      .tab()
      .tab()
      .click();
  });
});
