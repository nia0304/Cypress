/// <reference types="cypress" />

describe("Happy Flow Periode Pendaftaran", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });
  it("Penambahan periode pendaftaran gratis", () => {
    cy.visit("/spmb/list_periode");
    cy.get(".content-header > h1").should(
      "contain",
      "Daftar Periode Pendaftaran"
    );
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Periode Pendaftaran"
    );
    cy.get("#wrap-button > .btn-success").click();
    cy.get("#namaperiodedaftar").type("Jalur Prestasi Gelombang 4 20/21 Genap");
    cy.get("#idperiode").select("2020/2021 Genap");
    cy.get("#idgelombang").select("Gelombang 4");
    cy.get("#idjalurpendaftaran").select("Prestasi");
    cy.get("#idsistemkuliah").select("Reguler A");
    //tab pelengkap
    cy.get("#tglawalbuka").type("01-10-2021").tab();
    cy.get("#tglakhirbuka").type("30-11-2021").tab();
    cy.get("#tglakhirfinalisasi").type("30-11-2021").tab();
    cy.get("#tglawaldaftarulang").type("01-12-2021").tab();
    cy.get("#tglakhirdaftarulang").type("02-12-2021").tab();
    cy.get("#jmlnikunik").clear().type("2");
    cy.get("#prefixkodependaftar").type("2021104");
    cy.get("#jmlurutankodependaftar").select("4");
    cy.get("#prefixnoujian").type("2021104");
    cy.get("#jmlurutannoujian").select("4");
    cy.get("#urutan").clear().type("7");
    //tab pengaturan
    cy.get("#item-pengaturan > a").click();
    cy.get("#thnlulusakhir").type("2018");
    cy.get("#tglumumkannilai").type("12-12-2021").tab();
    cy.get("#waktuumumkannilai").type("0900");
    cy.get("#tglumumkankelulusan").type("12-12-2021").tab();
    cy.get("#waktuumumkankelulusan").type("0900");
    cy.get(
      "#block-ispilihprodisama > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      "#block-ispilihfakultassama > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(".btn-success").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menyimpan data ini?"
    );
    cy.get(
      ".bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-default"
    )
      .should("contain", "Cancel")
      .and("be.visible");
    cy.get(
      ".bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Periode Pendaftaran berhasil"
    );
  });
  it("penambahan periode pendaftaran berbayar", () => {
    cy.visit("/spmb/list_periode");
    cy.get("#wrap-button > .btn-success").click();
    cy.get("#namaperiodedaftar").type("Jalur Mandiri Gelombang 4 20/21 Genap");
    cy.get("#idperiode").select("2020/2021 Genap");
    cy.get("#idgelombang").select("Gelombang 4");
    cy.get("#idjalurpendaftaran").select("Mandiri");
    cy.get("#idsistemkuliah").select("Reguler A");
    //tab pelengkap
    cy.get("#tglawalbuka").type("01-10-2021").tab();
    cy.get("#tglakhirbuka").type("30-11-2021").tab();
    cy.get("#tglakhirfinalisasi").type("30-11-2021").tab();
    cy.get("#tglawaldaftarulang").type("01-12-2021").tab();
    cy.get("#tglakhirdaftarulang").type("02-12-2021").tab();
    cy.get(
      "#block-isbayar > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    //simpan data
    cy.get(".btn-success").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menyimpan data ini?"
    );
    cy.get(
      ".bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-default"
    )
      .should("contain", "Cancel")
      .and("be.visible");
    cy.get(
      ".bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Periode Pendaftaran berhasil"
    );
    //validasi menu tarif
    cy.get("#sidebar-menu-list > :nth-child(3) > a").should("be.visible");
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
  it.only("Penambahan tarif formulir", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(3) > a").click();
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
});

describe("Scenario gagal periode pendaftaran", () => {
  it("Penambahan periode pendaftaran tanpa isi kolom nama", () => {
    cy.visit("/spmb/list_periode");
    cy.get(".content-header > h1").should(
      "contain",
      "Daftar Periode Pendaftaran"
    );
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Periode Pendaftaran"
    );
    cy.get("#wrap-button > .btn-success").click();
    cy.get(".content-header > h1").should(
      "contain",
      "Detail Periode Pendaftaran"
    );
    cy.get("#idperiode").select("2020/2021 Genap");
    cy.get("#idgelombang").select("Gelombang 3");
    cy.get("#idsistemkuliah").select("Reguler B");
    cy.get("#tglawalbuka").type("01-10-2021").tab();
    cy.get("#tglakhirbuka").type("31-10-2021").tab();
    cy.get("#tglakhirfinalisasi").type("31-10-2021").tab();
    cy.get("#tglawaldaftarulang").type("01-11-2021").tab();
    cy.get("#tglakhirdaftarulang").type("02-11-2021").tab();
    cy.get("#prefixkodependaftar").type("202103");
    cy.get("#prefixnoujian").type("202103");
    cy.get(".btn-success").click();
    cy.get(".bootbox > .modal-dialog > .modal-content")
      .should("contain", "Mohon mengisi isian yang bergaris merah")
      .and("be.visible");
    cy.get(".bootbox > .modal-dialog > .modal-content > .modal-footer > .btn")
      .should("be.visible")
      .click();
    // cy.get("#namaperiodedaftar").should("have.length", 0);
  });
});
