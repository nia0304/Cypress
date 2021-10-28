/// <reference types="cypress" />

describe("Tarif Formulir Periode Pendaftaran", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });

  it("Penambahan tarif formulir", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(3) > a")
      .should("be.visible")
      .click();
    //tarif IPA
    cy.get("#i_idjenispilihan").select("IPA");
    cy.get("#i_nominaltarif").type("200000");
    cy.get("#insert-row-ms > :nth-child(4) > .btn").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Tarif Formulir berhasil"
    );
    //tarif IPS
    cy.get("#i_idjenispilihan").select("IPS");
    cy.get("#i_nominaltarif").type("200000");
    cy.get("#insert-row-ms > :nth-child(4) > .btn").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Tarif Formulir berhasil"
    );
    //tarif IPC
    cy.get("#i_idjenispilihan").select("IPC");
    cy.get("#i_nominaltarif").type("300000");
    cy.get("#insert-row-ms > :nth-child(4) > .btn").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Tarif Formulir berhasil"
    );
  });

  it("Edit tarif formulir", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(3) > a")
      .should("be.visible")
      .click();
    cy.get(":nth-child(2) > :nth-child(4) > .btn-primary").click();
    cy.get("#u_nominaltarif").clear().type("250000");
    cy.get("#u_tgldeadline").clear().type("12-12-2021");
    cy.get(":nth-child(2) > :nth-child(4) > .btn-success").click();
    cy.get(".alert").should(
      "contain",
      "Pengubahan data Tarif Formulir berhasil"
    );
  });
  it.only("Duplikasi data tarif formulir", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(3) > a")
      .should("be.visible")
      .click();
    //tarif IPA
    cy.get("#i_idjenispilihan").select("IPA");
    cy.get("#i_nominaltarif").type("200000");
    cy.get("#insert-row-ms > :nth-child(4) > .btn").click();
    cy.get(".alert").should(
      "contain",
      "Data dengan Periode Masuk, Gelombang, Jalur Pendaftaran, Sistem Kuliah, Jenis Program, dan Jenis Akun yang sama tidak boleh duplikat"
    );
    cy.get(".text-danger")
      .should("contain", "Terdapat duplikasi data")
      .and("be.visible");
  });
  it("Hapus tarif formulir");
});
