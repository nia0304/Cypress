/// <reference types="cypress" />

describe("Program Studi", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });
  it.only("Penambahan program studi", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(4) > a")
      .should("be.visible")
      .click();
    //tambah prodi S1 - Sistem Informasi
    cy.get(".col-md-7 > .btn-success").click();
    cy.get("#idunit").select("S1 - Sistem Informasi");
    cy.get("#idjenispilihan").select("IPA");
    cy.get("#jmlditerima").type("150");
    cy.get("#nilaiminimal").type("75");
    cy.get("#prefixnim").type("202104");
    cy.get("#jmlurutannim").select("3");

    // get element check pilihan program studi baris Pertama = pilihan(1) dan pilihan(3)
    cy.get(
      "#sebaran-pilihan > div > div > div:nth-child(1) > div > label > .icheckbox_minimal > .iCheck-helper"
    )
      .first()
      .click();
    cy.get(
      "#sebaran-pilihan > div > div > div:nth-child(1) > div > label > .icheckbox_minimal > .iCheck-helper"
    )
      .last()
      .click();
    // get element check pilihan program studi baris Kedua = pilihan(2)
    // cy.get(
    //   "#sebaran-pilihan > div > div > div:nth-child(2) > div > label > .icheckbox_minimal > .iCheck-helper"
    // ).click();
    cy.get(".btn-success").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menyimpan data ini?"
    );
    cy.get(".modal-footer > .btn-default")
      .should("contain", "Cancel")
      .and("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Pilihan Jurusan berhasil"
    );
    cy.get(".btn-info").click();

    //tambah prodi S1 - Teknik Informatika
    cy.get(".col-md-7 > .btn-success").click();
    cy.get("#idunit").select("S1 - Teknik Informatika");
    cy.get("#idjenispilihan").select("IPA");
    cy.get("#jmlditerima").type("120");
    cy.get("#nilaiminimal").type("70");
    cy.get("#prefixnim").type("202105");
    cy.get("#jmlurutannim").select("3");
    cy.get(
      "#sebaran-pilihan > div > div > div:nth-child(1) > div > label > .icheckbox_minimal > .iCheck-helper"
    )
      .first()
      .click();
    cy.get(
      "#sebaran-pilihan > div > div > div:nth-child(1) > div > label > .icheckbox_minimal > .iCheck-helper"
    )
      .last()
      .click();
    cy.get(".btn-success").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menyimpan data ini?"
    );
    cy.get(".modal-footer > .btn-default")
      .should("contain", "Cancel")
      .and("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Pilihan Jurusan berhasil"
    );
    cy.get(".btn-info").click();

    //tambah prodi S1 - Manajemen
    cy.get(".col-md-7 > .btn-success").click();
    cy.get("#idunit").select("S1 - Manajemen");
    cy.get("#idjenispilihan").select("IPS");
    cy.get("#jmlditerima").type("200");
    cy.get("#nilaiminimal").type("50");
    cy.get("#prefixnim").type("202106");
    cy.get("#jmlurutannim").select("3");
    cy.get(
      "#sebaran-pilihan > div > div > div:nth-child(1) > div > label > .icheckbox_minimal > .iCheck-helper"
    )
      .first()
      .click();
    cy.get(
      "#sebaran-pilihan > div > div > div:nth-child(1) > div > label > .icheckbox_minimal > .iCheck-helper"
    )
      .last()
      .click();
    cy.get(".btn-success").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menyimpan data ini?"
    );
    cy.get(".modal-footer > .btn-default")
      .should("contain", "Cancel")
      .and("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Pilihan Jurusan berhasil"
    );
    cy.get(".btn-info").click();
    //tambah prodi S1 - Kehutanan
    cy.get(".col-md-7 > .btn-success").click();
    cy.get("#idunit").select("S1 - Kehutanan");
    cy.get("#idjenispilihan").select("IPS");
    cy.get("#jmlditerima").type("80");
    cy.get("#nilaiminimal").type("50");
    cy.get("#prefixnim").type("202107");
    cy.get("#jmlurutannim").select("3");
    cy.get(
      "#sebaran-pilihan > div > div > div:nth-child(1) > div > label > .icheckbox_minimal > .iCheck-helper"
    )
      .first()
      .click();
    cy.get(
      "#sebaran-pilihan > div > div > div:nth-child(1) > div > label > .icheckbox_minimal > .iCheck-helper"
    )
      .last()
      .click();
    cy.get(".btn-success").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menyimpan data ini?"
    );
    cy.get(".modal-footer > .btn-default")
      .should("contain", "Cancel")
      .and("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Pilihan Jurusan berhasil"
    );
    cy.get(".btn-info").click();
  });
  it("Edit Program Studi", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(4) > a")
      .should("be.visible")
      .click();
    cy.get(":nth-child(1) > :nth-child(7) > .btn-info").click();
    //ubah prodi S1 - Ilmu Hukum
    cy.get(".col-md-7 > .btn-warning").click();
    cy.get(".col-md-7 > .btn-warning").should("be.visible");
    cy.get("#idunit").select("S1 - Ilmu Hukum");
    cy.get("#idjenispilihan").select("IPS");
    cy.get("#jmlditerima").clear().type("65");
    cy.get("#nilaiminimal").clear().type("65");
    cy.get("#prefixnim").clear().type("202108");
    cy.get("#jmlurutannim").select("4");
    cy.get("#item-sebaran-jurusan > a").click();
    cy.get(
      "#sebaran-jurusan > div > div > div:nth-child(2) > div > label > .icheckbox_minimal > .iCheck-helper"
    )
      .last()
      .click();
    cy.get(
      "#sebaran-jurusan > div > div > div:nth-child(3) > div > label > .icheckbox_minimal > .iCheck-helper"
    )
      .last()
      .click();
    cy.get(
      "#sebaran-jurusan > div > div > div:nth-child(4) > div > label > .icheckbox_minimal > .iCheck-helper"
    )
      .last()
      .click();
    cy.get(".btn-success").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menyimpan data ini?"
    );
    cy.get(".modal-footer > .btn-default")
      .should("contain", "Cancel")
      .and("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Pilihan Jurusan berhasil"
    );
  });
  it("Duplikasi data program studi", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(4) > a")
      .should("be.visible")
      .click();
    //duplikasi prodi S1 - Sistem Informasi
    cy.get(".col-md-7 > .btn-success").click();
    cy.get("#idunit").select("S1 - Sistem Informasi");
    cy.get("#idjenispilihan").select("IPA");
    cy.get("#jmlditerima").type("150");
    cy.get("#nilaiminimal").type("75");
    cy.get("#prefixnim").type("202104");
    cy.get("#jmlurutannim").select("3");
    cy.get(".btn-success").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menyimpan data ini?"
    );
    cy.get(".modal-footer > .btn-default")
      .should("contain", "Cancel")
      .and("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Sebaran Prodi gagal, ada duplikasi data"
    );
  });
  it("Hapus program studi", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(4) > a")
      .should("be.visible")
      .click();
    cy.get(":nth-child(1) > :nth-child(7) > .btn-danger").click();
    cy.get(".alert").should(
      "contain",
      "Penghapusan data Sebaran Prodi berhasil"
    );
    cy.get(":nth-child(1) > :nth-child(7) > .btn-danger").click();
    cy.get(".alert").should(
      "contain",
      "Penghapusan data Sebaran Prodi berhasil"
    );
    cy.get(":nth-child(1) > :nth-child(7) > .btn-danger").click();
    cy.get(".alert").should(
      "contain",
      "Penghapusan data Sebaran Prodi berhasil"
    );
    cy.get(":nth-child(1) > :nth-child(7) > .btn-danger").click();
    cy.get(".alert").should(
      "contain",
      "Penghapusan data Sebaran Prodi berhasil"
    );
  });
  it("Salin data program studi", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(4) > a")
      .should("be.visible")
      .click();
    cy.get(".col-md-7 > .btn-warning").click();
    cy.get("#modal_copy > .modal-dialog > .modal-content").should(
      "contain",
      "Salin Data Pengaturan Daftar Program Studi"
    );
    cy.get(".modal-footer > .btn-primary").should("contain", " Batal");
    cy.get("#periodetujuan").select(
      "2020/2021 Genap - Gelombang 3 - Mandiri - Reguler A - Mandiri 20/21 Genap Gel 3"
    );
    cy.get(".modal-footer > .btn-success").should("contain", "Salin").click();
    cy.get(".bootbox > .modal-dialog > .modal-content")
      .should("contain", "Apakah anda yakin akan menyalin data ini ?")
      .and("be.visible");
    cy.get(".modal-footer > .btn-default")
      .should("contain", "Cancel")
      .and("be.visible");
    cy.get(
      ".bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    //notif berhasil tp data gak muncul
  });
});
