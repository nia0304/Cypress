describe("Super Administrator bisa melakukan management jenis cuti pada menu jenis cuti", () => {
  before(() => {
    cy.exec(
      "docker run --name qa-test -e POSTGRESS_PASSWORD=123 -e PGDATA=postgres -p 5433:5432 -d qa-test"
    );
    cy.wait(30000);
  });

  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".hr > .inner").click();
    cy.intercept({
      method: "GET",
      url: "http://localhost/siacloud/gate/ajax/access/**",
    }).as("adminAccess");
    cy.get("#hr > div:nth-child(1) > div:nth-child(2)").click();
    cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
  });

  after(() => {
    cy.exec("docker stop qa-test");
    cy.exec("docker rm qa-test");
  });

  //positive test
  it("Super Admin Bisa Create Jenis Cuti Baru", () => {
    cy.visit("hr/ms_cuti");
    cy.get(".content-header > h1").should("contain.text", "Daftar Cuti");
    cy.get("button.btn-sm > span:nth-child(2)").click();

    cy.get("#i_idjeniscuti").type("4");
    cy.get("#i_jeniscuti").type("Cuti Covid");
    cy.get("#i_standarcuti").type("10");
    cy.get("#i_formatkode").type("{{kode}}/{{urutan}}/{{tahun}}", {
      parseSpecialCharSequences: false,
    });
    cy.get("#i_keterangan").type("Keterangannya");
    cy.get("#i_keterangan").parent().next().find(".fa-floppy-o").click();
    //pastikan alert keluar
    cy.get(".alert").contains("Penambahan data Jenis Cuti berhasil");
  });

  it("Super Admin Bisa Edit Salah Satu Jenis Cuti", () => {
    cy.visit("hr/ms_cuti");
    cy.get(".content-header > h1").should("contain.text", "Daftar Cuti");
    cy.get("td")
      .contains("Cuti Covid")
      .next()
      .next()
      .next()
      .next()
      .find("button.btn.btn-primary.btn-xs.btn-flat")
      .click();
    cy.get("#u_jeniscuti").clear().type("Cuti Covid Edited");
    cy.get("#u_keterangan").parent().next().find(".fa-floppy-o").click();
    cy.get(".alert")
      .should("be.visible")
      .contains("Pengubahan data Jenis Cuti berhasil ");
  });

  it("Super Admin Bisa Delete Jenis Cuti Baru", () => {
    cy.visit("hr/ms_cuti");
    cy.get(".content-header > h1").should("contain.text", "Daftar Cuti");
    cy.get("td")
      .contains("Cuti Covid Edited")
      .next()
      .next()
      .next()
      .next()
      .find("button.btn.btn-danger.btn-xs.btn-flat")
      .click();
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert")
      .should("be.visible")
      .contains("Penghapusan data Jenis Cuti berhasil");
  });

  it.skip("Create Jenis Cuti Kode Cuti Harus Di isi", () => {});

  it.skip("Create Jenis Cuti Nama Jenis Cuti Harus Di isi", () => {});

  it.skip("Create Jenis Cuti Format Nomor Surat Harus Di isi", () => {});

  it.skip("Super Admin Ga Bisa Create Jenis Cuti Yang Sama", () => {});
});
