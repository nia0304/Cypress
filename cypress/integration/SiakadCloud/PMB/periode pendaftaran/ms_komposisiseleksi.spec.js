/// <reference types="cypress" />

describe("Komposisi Seleksi", () => {
    beforeEach("Login Siakad", () => {
        cy.userlogin();
        cy.modulpmb();
    });

    it.only("Tambah Komposisi Seleksi dengan prosentase 100%", () => {
        cy.visit("/spmb/list_periode");
        cy.contains("a", /^2020\/2021 Genap$/).click().wait(0);
        cy.get("[data-testid=collapseidgelombang]").click();
        cy.contains("a", /^Gelombang 4$/).click().wait(0);
        cy.get(".text-right > .btn-info").click();
        cy.get("#sidebar-menu-list > :nth-child(6) > a")
          .should("be.visible").click();
        //tambah komposisi seleksi prosentase 50%
        cy.get("header").scrollIntoView();
        cy.get("#idjenisseleksi").select("KELENGKAPAN").should("have.value","16");
        cy.wait(5000); //waktu di run selalu error timeout
        cy.get("#i_idjenispilihan").select("IPA");
        cy.get("#i_idkomposisi").select("absensi");
        cy.get("#i_prosentasekomposisi").type("50");
        cy.get("#insert-row-ms > :nth-child(4) > .btn > .fa").click();
        cy.get(".col-md-10 > .alert").should("contain","Total Persentase Nilai untuk jenis pilihan IPA kurang dari 100% (50%)");
        //tambah komposisi seleksi prosentase 100%
        cy.get("#i_idjenispilihan").select("IPA");
        cy.get("#i_idkomposisi").select("nilai");
        cy.get("#i_prosentasekomposisi").type("50");
        cy.get("#insert-row-ms > :nth-child(4) > .btn > .fa").click();
        cy.get("header").scrollIntoView();
        cy.get(".alert").should("contain","Penambahan data Komposisi Seleksi berhasil");
        //validasi data tabel
        cy.get("#form_list > div > table").getTable().should(tableData => {
            //cy.log(tableData)
            cy.fixture('list_komposisiseleksi.json').then((dataFixture) => {
                expect(tableData).to.deep.equal(dataFixture)
              });
        });
    });

    it("Tambah Komposisi Seleksi dengan prosentase kurang dari 100%", () => {
        cy.visit("/spmb/list_periode");
        cy.contains("a", /^2020\/2021 Genap$/).click().wait(0);
        cy.get("[data-testid=collapseidgelombang]").click();
        cy.contains("a", /^Gelombang 4$/).click().wait(0);
        cy.get(".text-right > .btn-info").click();
        cy.get("#sidebar-menu-list > :nth-child(6) > a")
          .should("be.visible").click();
        //tambah komposisi seleksi
        cy.get("header").scrollIntoView();
        cy.get("#idjenisseleksi").select("KELENGKAPAN").should("have.value","16");
        cy.wait(5000); //waktu di run selalu error timeout
        cy.get("#i_idjenispilihan").select("IPA");
        cy.get("#i_idkomposisi").select("absensi");
        cy.get("#i_prosentasekomposisi").type("50");
        cy.get("#insert-row-ms > :nth-child(4) > .btn > .fa").click();
        cy.get(".col-md-10 > .alert").should("contain","Total Persentase Nilai untuk jenis pilihan IPA kurang dari 100% (50%)");
    });

    it("Edit data komposisi seleksi", () => {
        cy.visit("/spmb/list_periode");
        cy.contains("a", /^2020\/2021 Genap$/).click().wait(0);
        cy.get("[data-testid=collapseidgelombang]").click();
        cy.contains("a", /^Gelombang 4$/).click().wait(0);
        cy.get(".text-right > .btn-info").click();
        cy.get("#sidebar-menu-list > :nth-child(6) > a")
          .should("be.visible").click();
        //edit komposisi seleksi
        cy.get("header").scrollIntoView();
        cy.get("#idjenisseleksi").select("KELENGKAPAN").should("have.value","16");
        cy.wait(5000); //waktu di run selalu error timeout
        cy.get(":nth-child(2) > :nth-child(4) > .btn-primary > .fa").click();
        //hanya mengubah jenis pilihan dan prosentase
        cy.get("#u_idjenispilihan").select("IPS");
        cy.get("#u_prosentasekomposisi").clear().type("100");
        cy.get(":nth-child(2) > :nth-child(4) > .btn-success > .fa").click();
        cy.get("header").scrollIntoView();
        cy.get(".alert").should("contain","Pengubahan data Komposisi Seleksi berhasil");
        cy.get(".col-md-10 > .alert").should("contain","Total Persentase Nilai untuk jenis pilihan IPA kurang dari 100% (50%)");
    });

    it("Hapus data komposisi seleksi", () => {
        cy.visit("/spmb/list_periode");
        cy.contains("a", /^2020\/2021 Genap$/).click().wait(0);
        cy.get("[data-testid=collapseidgelombang]").click();
        cy.contains("a", /^Gelombang 4$/).click().wait(0);
        cy.get(".text-right > .btn-info").click();
        cy.get("#sidebar-menu-list > :nth-child(6) > a")
          .should("be.visible").click();
        //hapus komposisi seleksi absensi jenis program IPS
        cy.get("#idjenisseleksi").select("KELENGKAPAN").should("have.value","16");
        cy.get(":nth-child(2) > :nth-child(4) > .btn-danger > .fa").click();
        cy.get(".bootbox > .modal-dialog > .modal-content").should(
            "contain",
            "Apakah anda yakin akan menghapus data Komposisi Seleksi?"
        );
        cy.get(".modal-footer > .btn-primary").click();
        cy.get(".alert").should("contain","Penghapusan data Komposisi Seleksi berhasil");
    });

    it("Salin data komposisi seleksi", () => {
        cy.visit("/spmb/list_periode");
        cy.contains("a", /^2020\/2021 Genap$/).click().wait(0);
        cy.get("[data-testid=collapseidgelombang]").click();
        cy.contains("a", /^Gelombang 4$/).click().wait(0);
        cy.get(".text-right > .btn-info").click();
        cy.get("#sidebar-menu-list > :nth-child(6) > a")
          .should("be.visible").click();
        //salin komposisi seleksi ke periode pendaftaran lain
        cy.get("#idjenisseleksi").select("KELENGKAPAN").should("have.value","16");
        cy.get("header").scrollIntoView();
        cy.wait(5000);
        cy.get(".col-md-7 > .btn-warning").click();
        cy.get("#periodecopy").select("2020/2021 Genap");
        cy.get("#jalurcopy").select("Mandiri");
        cy.get("#gelombangcopy").select("Gelombang 1");
        cy.get("#sistemkuliahcopy").select("Reguler A");
        cy.get("#komposisicopy").select("KELENGKAPAN");
        cy.get(".modal-footer > .btn").click();
        cy.get(".bootbox > .modal-dialog > .modal-content").should(
            "contain",
            "Apakah anda yakin akan menyalin Syarat Daftar ?"
        );
        cy.get(".modal-footer > .btn-primary").click();
        cy.get(".alert").should("contain","Salin Pengaturan Komposisi Seleksi Pendaftaran  berhasil");
        //cek periode pendaftaran tujuan salin data
        cy.get(".btn-info > span").click();
        cy.visit("spmb/ms_komposisiseleksi/117");
        //validasi data tabel
        cy.get("#form_list > div > table").getTable().should(tableData => {
            cy.log(tableData)
        });
    });    
});