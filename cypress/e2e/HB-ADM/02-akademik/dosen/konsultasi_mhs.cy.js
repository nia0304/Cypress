/// <reference types="cypress"/>

describe("Konsultasi Mahasiswa", () => {
  // before("create db", () => {
  //   cy.exec("createdb -U postgres -p 5433 -T backupdb testsiakad");
  // });
  beforeEach("Login Dosen", () => {
    cy.logindosen();
    cy.modulakademik();
    cy.visit("http://localhost/siacloud/siakad/data_konsultasi_new");
  });
  // after(() => {
  //   cy.exec("dropdb -U postgres -p 5433 testsiakad");
  // });
  
  it("Pilih filter periode konsultasi", () => {
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get("#select2-select-periode-container").click();
      cy.get(".select2-search__field").type(data.periode);
      cy.get("#select2-select-periode-results").each(($el, index, $list) => {
        if ($el.text() === data.periode) {
          cy.wrap($el).click();
        }
      });
      cy.get(
        '.content-chat > .field-chat > [data-cy="empty-content-konsultasi"] > .empty-state'
      ).should("contain", "Belum ada Obrolan Disini");
    });
  });

  it("Filter periode konsultasi tidak ada", () => {
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get("#select2-select-periode-container").click();
      cy.get(".select2-search__field").type(data.periode_salah);
      cy.get(".select2-results__option").should(
        "contain",
        data.info_periodesalah
      );
    });
  });

  it("Kosongkan Kolom Tambah konsultasi", () => {
    cy.periodekonsultasi();
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get('[data-cy="#modal-btn-konsultasi"] > .ripple').click();
      cy.get("#modal-add-konsultasi").should("be.visible");
      cy.get('[data-cy="data-periode"]').should("have.value", data.periode);
      cy.get("#select2-select-nama-modal-container").click().wait(1000)
      cy.get(".select2-search__field").type(data.exnama_mhs);
      cy.get("#select2-select-nama-modal-results").each(($el) => {
        if ($el.text() === data.nama_mhs) {
          cy.wrap($el).click();
        }
      });
      cy.get('[data-cy="input-topik"]').type(data.topik1);
      cy.get('[data-cy="input-keterangan"]').type(data.keterangan);
      cy.get('[data-cy="btn-kosongkan"] > .ripple').click();
    });
  });

  it("Tambah konsultasi", () => {
    cy.periodekonsultasi();
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get('[data-cy="#modal-btn-konsultasi"] > .ripple').click();
      cy.get("#modal-add-konsultasi").should("be.visible");
      cy.get('[data-cy="data-periode"]').should("have.value", data.periode);
      cy.get("#select2-select-nama-modal-container").click().wait(1000)
      cy.get(".select2-search__field").type(data.exnama_mhs);
      cy.get("#select2-select-nama-modal-results").each(($el, index, $list) => {
        if ($el.text() === data.nama_mhs) {
          cy.wrap($el).click();
        }
      });
      cy.get('[data-cy="input-topik"]').type(data.topik1);
      cy.get('[data-cy="input-keterangan"]').type(data.keterangan);
      cy.get('[data-cy="btn-mulai-konsultasi"] > .ripple').click();
      cy.get(".top-alert > .container-xxl").should(
        "contain",
        data.alert_tambahkonsultasi
      );
      cy.get(
        ':nth-child(2) > [data-cy="list-chat-konsultasi"] > .justify-content-between'
      )
        .should("contain", data.exnama_mhs)
        .and("be.visible");
      cy.get(
        '[data-cy="list-content-konsultasi-20220204"] > .list-content-konsultasi'
      )
        .should("contain", data.topik1)
        .and("be.visible");
      cy.get(
        '.content-chat > .field-chat > [data-cy="empty-content-konsultasi"] > .empty-state'
      ).should("contain", data.empty_state1);
    });
  });

  it("Chat konsultasi bimbingan", () => {
    cy.periodekonsultasi();
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get(
        ':nth-child(2) > [data-cy="list-chat-konsultasi"] > .justify-content-between'
      ).click();
      cy.get('[data-list-topik="3993"]').click()
      cy.get(".justify-content-between > .d-block > h3").should(
        "contain",
        data.topik1
      );
      cy.get(
        '.content-chat > .field-chat > [data-cy="empty-content-konsultasi"] > .empty-state'
      ).should("contain", data.empty_state1);
      cy.get('[data-cy="input-chat"]').type(data.chat_dsn);
      cy.get('[data-cy="btn-submit-chat"]').click();
      cy.get(".top-alert > .container-xxl")
        .should("contain",data.alert_chat)
        .and("be.visible");
      cy.get(".right > .bubble-chat").should("contain", data.chat_dsn);
    });
  });

  it("Cari mahasiswa bimbingan", () => {
    cy.periodekonsultasi();
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get('[data-cy="input-search"]').type(data.exnama_mhs);
      cy.get('[data-cy="list-chat-konsultasi"]')
        .should("contain", data.exnama_mhs)
        .and("be.visible");
    });
  });

  it("Catatan Konsultasi", () => {
    cy.periodekonsultasi();
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get(
        '[data-cy="list-chat-konsultasi"]'
      ).click();
      cy.get('[data-list-topik="3993"]').click();
      cy.get('[data-cy="btn-catatan"]').click();
      cy.get(
        "#modal_catatan_konsultasi > .modal-dialog > .modal-content"
      ).should("be.visible");
      cy.get("#wrap-button").click(); //gagal disini
    });
  });
});
