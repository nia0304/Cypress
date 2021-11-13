/// <reference types="cypress" />

describe("Syarat Pendaftaran", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });

  it("Penambahan syarat pendaftaran", () => {
    cy.visit("/spmb/list_periode");
    cy.filterlistperiodependaftaran();
    cy.get("#sidebar-menu-list > :nth-child(7) > a")
      .should("be.visible")
      .click();

    //filter jenis syarat
    cy.get("#jenissyarat").select("Administrasi").wait(0);

    //tambah syarat SKHUN
    cy.get("#i_idsyarat").select("Fotokopi Legalisir SKHUN");
    cy.get(
      ":nth-child(3) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      ":nth-child(4) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get("#insert-row-ms > :nth-child(6) > .btn").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Syarat Pendaftaran berhasil"
    );

    //tambah syarat KTP dgn jumlah dok
    cy.get("#i_idsyarat").select("Fotokopi KTP");
    cy.get(
      ":nth-child(3) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get("#i_jumlah").type("3");
    cy.get("#insert-row-ms > :nth-child(6) > .btn").click();
  });

  it.only("Ubah syarat pendaftaran", () => {
    cy.visit("/spmb/list_periode");
    cy.filterlistperiodependaftaran();
    cy.get("#sidebar-menu-list > :nth-child(7) > a")
      .should("be.visible")
      .click();
    cy.get(":nth-child(3) > :nth-child(6) > .btn-primary").click();
    cy.get(
      ":nth-child(3) > :nth-child(4) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(":nth-child(3) > :nth-child(6) > .btn-success").click();
    cy.get(".alert").should(
      "contain",
      "Pengubahan data Syarat Pendaftaran berhasil"
    );
  });
});
