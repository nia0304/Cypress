/// <reference types="cypress" />

describe("Seleksi Pendaftar", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });

  it("Penambahan seleksi pendaftaran", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(5) > a")
      .should("be.visible")
      .click();
    //tambah seleksi kelengkapan
    cy.get("#i_idjenisseleksi").select("16 - KELENGKAPAN");
    cy.get("#i_urutanseleksi").select("1");
    cy.get("#i_prosentasenilai").type("50%");
    cy.get("#i_tglmulai").type("11-11-2021").tab();
    cy.get("#i_tglselesai").type("30-11-2021").tab();
    cy.get("#insert-row-ms > :nth-child(7) > .btn").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Seleksi Pendaftaran berhasil"
    );
    //tambah seleksi tes cbt
    cy.get("#i_idjenisseleksi").select("12 - TES CBT");
    cy.get("#i_urutanseleksi").select("2");
    cy.get("#i_prosentasenilai").type("50%");
    cy.get("#i_tglmulai").type("11-11-2021").tab();
    cy.get("#i_tglselesai").type("30-11-2021").tab();
    cy.get("#insert-row-ms > :nth-child(7) > .btn").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Seleksi Pendaftaran berhasil"
    );
  });
  it.only("Penambahan seleksi berdasarkan prodi", () => {});
  it("Ubah seleksi pendaftaran", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(5) > a")
      .should("be.visible")
      .click();
    cy.get(":nth-child(2) > :nth-child(7) > .btn-primary").click();
    cy.get("#u_idjenisseleksi").select("17 - WAWANCARA");
    cy.get(":nth-child(2) > :nth-child(7) > .btn-success").click();
    cy.get(".alert").should(
      "contain",
      "Pengubahan data Seleksi Pendaftaran berhasil"
    );
  });
  it("Hapus seleksi pendaftar");
  it("Salin data seleksi pendaftar");
});
