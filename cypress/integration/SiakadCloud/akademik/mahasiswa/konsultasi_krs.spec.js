/// <reference types="cypress"/>

describe("Konsultasi KRS", () => {
  beforeEach("Login Mahasiswa", () => {
    cy.loginmhs();
    cy.visit("https://dev.siakadcloud.com/siakad/data_konsultasi_new");
  });

  it("Belum ada konsultasi", () => {
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get(".page-title").should("contain", "Konsultasi Pembimbing");
      cy.get('[data-cy="empty-list-konsultasi"]').should(
        "contain",
        data.empty_state1
      );
      cy.get('[data-cy="#modal-btn-konsultasi"] > .ripple').should(
        "be.visible"
      );
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

  it("Pilih filter periode konsultasi", () => {
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get("#select2-select-periode-container").click();
      cy.get(".select2-search__field").type(data.periode);
      cy.get("#select2-select-periode-results").each(($el, index, $list) => {
        if ($el.text() === data.periode) {
          cy.wrap($el).click();
        }
      });
    });
  });

  it("Mengosongkan isian modal tambah  konsultasi", () => {
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get('[data-cy="#modal-btn-konsultasi"] > .ripple').click();
      cy.get("#modal-add-konsultasi").should("be.visible").wait(1000);
      cy.get('[data-cy="input-topik"]').type(data.topik1);
      cy.get('[data-cy="input-keterangan"]').type(data.keterangan);
      cy.get('[data-cy="btn-kosongkan"] > .ripple').click();
    });
  });

  it.only("Tambah konsultasi dengan topik kosong", () => {
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get('[data-cy="#modal-btn-konsultasi"] > .ripple').click();
      cy.get(".card-title > h3")
        .should("contain", "Konsultasi Baru")
        .wait(1000);
      cy.get('[data-cy="input-keterangan"]').type(data.keterangan);
      cy.get('[data-cy="btn-mulai-konsultasi"] > .ripple').click();
      cy.get(".top-alert > .container-xxl")
        .should("contain", data.alert_topikkosong)
        .and("be.visible");
    });
  });

  it("Menambah konsultasi", () => {
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get('[data-cy="#modal-btn-konsultasi"] > .ripple').click();
      cy.get(".card-title > h3")
        .should("contain", "Konsultasi Baru")
        .wait(1000);
      cy.get('[data-cy="input-topik"]').type(data.topik1);
      cy.get('[data-cy="input-keterangan"]').type(data.keterangan);
      cy.get('[data-cy="btn-mulai-konsultasi"] > .ripple').click();
      cy.get(".top-alert > .container-xxl")
        .should("contain", data.alert_tambahkonsultasi)
        .and("be.visible");
      cy.get('[data-cy="info-nav-chat"]')
        .should("contain", data.topik1)
        .and("be.visible");
    });
  });

  it("Kirim pesan bimbingan", () => {
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get(
        '.content-chat > .field-chat > [data-cy="empty-content-konsultasi"] > .empty-state'
      ).should("contain", data.empty_statepesan);
      cy.get('[data-cy="list-chat-konsultasi"] > .justify-content-between')
        .should("contain", data.nama_dosen)
        .click();
      cy.get(".list-content-konsultasi")
        .should("contain", data.topik1)
        .and("be.visible")
        .click();
      cy.get('[data-cy="input-chat"]').type(data.pesan);
      cy.get('[data-cy="btn-submit-chat"]').click();
      cy.get(".top-alert > .container-xxl").should("contain", data.alert_chat);
      cy.get(".right > .bubble-chat").should("contain", data.pesan);
    });
  });

  it("Cari konsultasi", () => {
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get('[data-cy="input-search"]').type(data.cari_topik);
      cy.get(".d-block > h3").should("contain", data.cari_topik);
    });
  });

  it("Tambah konsultasi baru", () => {
    cy.fixture("akademik/mahasiswa/konsultasi_krs").then((data) => {
      cy.get('[data-cy="#modal-btn-konsultasi"] > .ripple').click().wait(1000);
      cy.get('[data-cy="input-topik"]').type(data.topik2);
      cy.get('[data-cy="input-keterangan"]').type(data.keterangan);
      cy.get('[data-cy="btn-mulai-konsultasi"] > .ripple').click();
      cy.get(".top-alert > .container-xxl")
        .should("contain", data.alert_tambahkonsultasi)
        .and("be.visible");
      cy.get(".content-top-nav > .justify-content-between").should(
        "contain",
        data.topik2
      );
    });
  });
});
