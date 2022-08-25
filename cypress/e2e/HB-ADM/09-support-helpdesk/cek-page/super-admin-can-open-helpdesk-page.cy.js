/// <reference types="cypress"/>

describe("superadmin can open support page", () => {
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".helpdesk > .inner").click();
    cy.intercept({
      method: "GET",
      url: "http://localhost/siacloud/gate/ajax/access/**",
    }).as("adminAccess");
    cy.get("#helpdesk")
      .contains("Super Administrator")
      .should("be.visible")
      .click();
    cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
  });

  it("superadmin can open pelaporan page", () => {
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

    //faq
    cy.visit("helpdesk/list_faq");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Helpdesk Daftar FAQ"
    );

    //User Guide
    cy.visit("helpdesk/list_ug");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Helpdesk Daftar User Guide"
    );

    //Referensi
    cy.visit("helpdesk/ms_jenismasalah");
    cy.get(".content-header > h1").should("contain.text", "Jenis Masalah");

    cy.visit("helpdesk/ms_jabatan");
    cy.get(".content-header > h1").should("contain.text", "Jabatan Pegawai");

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

    //pegawai
    cy.visit("helpdesk/list_pegawai");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Helpdesk Daftar Pegawai"
    );
  });
});
