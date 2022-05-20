/// <reference types="cypress"/>

describe("Konsultasi Mahasiswa", () => {
  before("create db", () => {
    cy.exec("createdb -U postgres -p 5433 -T backupdb testsiakad");
  });
  beforeEach("Login Dosen", () => {
    cy.logindosen();
    cy.modulakademik();
    cy.visit("https://dev.siakadcloud.com/siakad/data_konsultasi_new");
  });
  after(() => {
    cy.exec("dropdb -U postgres -p 5433 testsiakad");
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
});
