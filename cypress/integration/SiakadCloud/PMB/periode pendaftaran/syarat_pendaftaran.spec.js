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

  it("Ubah syarat pendaftaran", () => {
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
  it("Hapus syarat pendaftaran", () => {
    cy.visit("/spmb/list_periode");
    cy.filterlistperiodependaftaran();
    cy.get("#sidebar-menu-list > :nth-child(7) > a")
      .should("be.visible")
      .click();
    //klik hapus syarat urutan 1
    cy.get(":nth-child(2) > :nth-child(6) > .btn-danger").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menghapus data ini?"
    );
    cy.get(".modal-footer > .btn-default").should("contain", "Cancel");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penghapusan data Syarat Pendaftaran berhasil"
    );
    //klik hapus syarat urutan 2
    cy.get(":nth-child(2) > :nth-child(6) > .btn-danger").click();
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penghapusan data Syarat Pendaftaran berhasil"
    );
  });
  it.only("Salin syarat pendaftar", () => {
    cy.visit("/spmb/list_periode");
    cy.filterlistperiodependaftaran();
    cy.get("#sidebar-menu-list > :nth-child(7) > a")
      .should("be.visible")
      .click();
    //klik salin
    cy.get(".col-md-7 > .btn-warning").should("contain", "Salin").click();
    cy.get("#modal-copy > .modal-dialog > .modal-content")
      .should("contain", "Salin Sebaran Program Studi")
      .and("be.visible");
    //pilih filter salin
    cy.get("#periodecopy").select("2020/2021 Genap");
    cy.get("#jalurcopy").select("Mandiri");
    cy.get("#gelombangcopy").select("Gelombang 3");
    cy.get("#sistemkuliahcopy").select("Reguler A");
    cy.get("#syaratcopy").select("Administrasi");
    cy.get(".modal-footer > .btn").should("be.visible").click();
    //pop up konfirmasi
    cy.get(".bootbox > .modal-dialog > .modal-content")
      .should(
        "contain",
        "Apakah anda yakin akan menyalin Syarat Daftar Administrasi?"
      )
      .and("be.visible");
    cy.get(".modal-footer > .btn-default").should("contain", "Cancel");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should("contain", "Salin Pengaturan berhasil");
    //get table assertion
    cy.get("#form_list > div > table")
      .getTable()
      .should((tableData) => {
        // cy.log(tableData);
        cy.fixture("syarat_pendaftaran.json").then((dataFixture) => {
          expect(tableData).to.deep.equal(dataFixture);
        });
      });
  });
});
