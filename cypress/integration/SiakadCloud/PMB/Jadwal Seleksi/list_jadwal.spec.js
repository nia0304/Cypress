/// <reference types="cypress" />

describe("List Jadwal Seleksi", () => {
    beforeEach("Login Siakad", () => {
      cy.userlogin();
      cy.modulpmb();
    });

    it("Tambah Jadwal Seleksi", () => {
        cy.visit('/spmb/list_jadwal');
        //pilih filter
        cy.get("#periode").select("2020/2021 Genap");
        cy.wait(5000);
        cy.get("#jalur").select("Mandiri");
        cy.wait(5000);
        cy.get("#gelombang").select("Gelombang 1");
        cy.wait(5000);
        cy.get("#sistem").select("Reguler A");
        cy.wait(5000);
        //tambah jadwal seleksi
        cy.get("#wrap-button > .btn-success").click();
        cy.get("header").scrollIntoView();
        cy.get("#idjenispilihan").select("IPA").should("have.value", "IPA");
        cy.get("#idjenisseleksi").select("TES CBT").should("have.value", "12");
        cy.get("#idruang").select("111 - Ruang 111").should("have.value","22");
        cy.get("#tgljadwal").type("01-10-2021").tab();
        cy.get("#waktumulai").type("11:00");
        cy.get("#waktuselesai").type("14:00");
        cy.get("header").scrollIntoView();
        cy.get(".btn-success > span").click();
        cy.get(".modal-footer > .btn-primary").click();
        cy.get("header").scrollIntoView();
        cy.get(".alert").should(
          "contain",
          "Penambahan data Jadwal Seleksi berhasil"
        );
    });

    it("Edit Jadwal Seleksi", () => {
      cy.visit('/spmb/list_jadwal');
      cy.get("#periode").select("2020/2021 Genap");
      cy.wait(5000);
      cy.get("#jalur").select("Mandiri");
      cy.wait(5000);
      cy.get("#gelombang").select("Gelombang 1");
      cy.wait(5000);
      cy.get("#sistem").select("Reguler A");
      cy.wait(5000);
      cy.get(":nth-child(2) > .text-right > .btn-info > .fa").click();
      cy.get(".col-md-7 > .btn-warning").click();
      cy.get("#idruang").select("C1 - Ruang C - 306").should("have.value","4");
      cy.get("header").scrollIntoView();
      cy.get(".btn-success > span").click();
      cy.get(".modal-footer > .btn-primary").should("be.visible").click();
      cy.get("header").scrollIntoView();
      cy.get(".alert").should("contain", "Pengubahan data Jadwal Seleksi berhasil");
    });

    it("Hapus Jadwal Seleksi", () => {
      cy.visit('/spmb/list_jadwal');
      cy.get("#periode").select("2020/2021 Genap");
      cy.wait(5000);
      cy.get("#jalur").select("Mandiri");
      cy.wait(5000);
      cy.get("#gelombang").select("Gelombang 1");
      cy.wait(5000);
      cy.get("#sistem").select("Reguler A");
      cy.wait(5000);
      cy.get("header").scrollIntoView();
      cy.get(":nth-child(2) > .text-right > .btn-danger > .fa").click();
      cy.get(".modal-footer > .btn-primary").click();
      cy.get(".alert").should("contain" , "Penghapusan data Jadwal Seleksi berhasil");
    });

    it("Duplikat Jadwal Seleksi", () => {
      cy.visit('/spmb/list_jadwal');
      cy.get("#periode").select("2020/2021 Genap");
      cy.wait(5000);
      cy.get("#jalur").select("Mandiri");
      cy.wait(5000);
      cy.get("#gelombang").select("Gelombang 1");
      cy.wait(5000);
      cy.get("#sistem").select("Reguler A");
      cy.wait(5000);
      cy.get("#wrap-button > .btn-success").click();
      cy.get("header").scrollIntoView();
      cy.get("#idjenispilihan").select("IPA").should("have.value", "IPA");
      cy.get("#idjenisseleksi").select("TES CBT").should("have.value", "12");
      cy.get("#idruang").select("111 - Ruang 111").should("have.value","22");
      cy.get("#tgljadwal").type("01-10-2021").tab();
      cy.get("#waktumulai").type("11:00");
      cy.get("#waktuselesai").type("14:00");
      cy.get("header").scrollIntoView();
      cy.get(".btn-success > span").click();
      cy.get(".modal-footer > .btn-primary").click();
      cy.get("header").scrollIntoView();
      cy.get(".alert").should(
        "contain",
        "Ruangan Bentrok Dengan Jadwal TES CBT Pada Ruang Ruang 111  Tanggal 1 Oktober 2021 Jam 11:00:00 - 14:00:00"
      );
      cy.get(".btn-info > span").click();
  });

    it.only("Generate Jadwal Seleksi", () => {
      cy.visit('/spmb/list_jadwal');
      cy.get("#periode").select("2020/2021 Genap");
      cy.wait(5000);
      cy.get("#jalur").select("Mandiri");
      cy.wait(5000);
      cy.get("#gelombang").select("Gelombang 1");
      cy.wait(5000);
      cy.get("#sistem").select("Reguler A");
      cy.wait(5000);
      cy.get(".btn-warning").click();
      cy.get("#idjenispilihan").select("IPA").should("have.value", "IPA");
      cy.get("#idseleksiprodi").select("KELENGKAPAN").should("have.value", "16");
      cy.get("#tgljadwal").type("02-10-2021").tab();
      cy.get("#waktumulai").type("11:00");
      cy.get("#waktuselesai").type("14:00");
      cy.get(".col-sm-8 > :nth-child(2)").click();
      cy.get(".modal-footer > .btn").click();
      cy.get(".modal-footer > .btn-primary").click();
      cy.get("header").scrollIntoView();
      cy.get(".alert").should(
        "contain",
        "Penambahan data Jadwal Seleksi berhasil"
      );
      cy.get("#form_list > div > table").getTable().should(tableData => { 
        //        hasil log data diletakkan di fixture          
        //cy.log(tableData);
        cy.fixture('Jadwal Seleksi/list_jadwal.json').then((dataFixture) => {
          expect(tableData).to.deep.equal(dataFixture)
        });
      });
  });
});