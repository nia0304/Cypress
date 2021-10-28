/// <reference types="cypress" />

describe("Jenis Program", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });
  it("Penambahan jenis program pada periode berbayar", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(2) > a")
      .should("be.visible")
      .click();
    cy.get("h1 > small").should("contain", "Jenis Program");
    //tambah jenis program IPA
    cy.get("#i_idjenispilihan").select("IPA");
    cy.get("#i_jmlpilihan").select("2");
    cy.get("#i_jmlpilihanwajib").select("2");
    cy.get("#i_keterangan").type("Automatioan pilihan jenis Program IPA");
    cy.get("#insert-row-ms > :nth-child(5) > .btn").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Jenis Pilihan Prodi berhasil"
    );
    //tambah jenis program IPS
    cy.get("#i_idjenispilihan").select("IPS");
    cy.get("#i_jmlpilihan").select("2");
    cy.get("#i_jmlpilihanwajib").select("2");
    cy.get("#i_keterangan").type("Automatioan pilihan jenis Program IPS");
    cy.get("#insert-row-ms > :nth-child(5) > .btn").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Jenis Pilihan Prodi berhasil"
    );
    //tambah jenis program IPC
    cy.get("#i_idjenispilihan").select("IPC");
    cy.get("#i_jmlpilihan").select("2");
    cy.get("#i_jmlpilihanwajib").select("2");
    cy.get("#i_keterangan").type("Automatioan pilihan jenis Program IPC");
    cy.get("#insert-row-ms > :nth-child(5) > .btn").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Jenis Pilihan Prodi berhasil"
    );
  });

  it("Edit jenis program", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(2) > a")
      .should("be.visible")
      .click();
    cy.get(":nth-child(2) > :nth-child(5) > .btn-primary").click();
    cy.get("#u_jmlpilihan").select("2");
    cy.get("#u_jmlpilihanwajib").select("2");
    cy.get("#u_keterangan")
      .clear()
      .type("Ubah keterangan jenis program bahasa");
    cy.get(":nth-child(2) > :nth-child(5) > .btn-success").click();
    cy.get(".alert").should(
      "contain",
      "Pengubahan data Jenis Pilihan Prodi berhasil"
    );
  });
  it("Hapus jenis program", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(2) > a")
      .should("be.visible")
      .click();
    cy.get(":nth-child(2) > :nth-child(5) > .btn-danger").click();
    cy.get(".bootbox > .modal-dialog > .modal-content")
      .should("contain", "Apakah anda yakin akan menghapus data ini?")
      .and("be.visible");
    cy.get(".modal-footer > .btn-default").should("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penghapusan data Jenis Pilihan Prodi berhasil"
    );
  });
  it("Duplikasi input data jenis program", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(2) > a")
      .should("be.visible")
      .click();
    //tambah duplikasi data jenis program IPA
    cy.get("#i_idjenispilihan").select("IPA");
    cy.get("#i_jmlpilihan").select("2");
    cy.get("#i_jmlpilihanwajib").select("2");
    cy.get("#i_keterangan").type("Automatioan pilihan jenis Program IPA");
    cy.get("#insert-row-ms > :nth-child(5) > .btn").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Jenis Pilihan Prodi gagal, ada duplikasi data"
    );
  });
});
