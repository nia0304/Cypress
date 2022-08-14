/// <reference types="cypress"/>

describe("admin pt can open support page", () => {
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".helpdesk > .inner").click();
    cy.intercept({
      method: "GET",
      url: "http://localhost/siacloud/gate/ajax/access/**",
    }).as("adminAccess");
    cy.get("#helpdesk > div:nth-child(1) > div:nth-child(2)").click();
    cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
  });

  it("admin pt can open pelaporan page", () => {
    //dashboard
    cy.get(".content-header > h1").should(
      "contain.text",
      "Dashboard Selamat Datang di SIM Helpdesk"
    );

    //tiket
    cy.visit("helpdesk/list_tiket");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Helpdesk Daftar Tiket"
    );

    cy.visit("helpdesk/list_faq");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Helpdesk Daftar FAQ"
    );

    cy.visit("helpdesk/ms_jenismasalah");
    cy.get(".content-header > h1").should("contain.text", "Jenis Masalah");

    //Laporan
    cy.visit("helpdesk/repp_tiket");
    cy.get(".content-header > h1").should("contain.text", "Laporan Tiket");

    cy.visit("helpdesk/repp_datapegawai");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Jabatan Pegawai"
    );

    cy.visit("helpdesk/repp_rekaptiket");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Rekapitulasi Tiket"
    );
    //laporan laporan manual
    cy.visit("helpdesk/list_laporan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Daftar Laporan Manual"
    );

    cy.visit("helpdesk/repp_laporan");
    cy.get(".content-header > h1").should("contain.text", "Laporan Manual");
  });
});
