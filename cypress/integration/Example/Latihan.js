/// <reference types="cypress" />

describe("Dashboard Tahapan Alur PMB", () => {
  beforeEach("Login Siakad PMB", () => {
    cy.login("fikri", "j77/FQjF");
    cy.get(".spmb > .inner").click(); //pilih modul pmb
    cy.get("#spmb > div > div:nth-child(3)").click(); //pilih role login
    cy.get(".container > .nav > :nth-child(1) > a").click(); //trigger untuk akses url
  });

  //   afterEach("Logout Siakad", () => {
  //     cy.logout();
  //   });

  it("Login", () => {
    cy.login("fikri", "j77/FQjF");
    cy.get(".spmb > .inner").click(); //pilih modul pmb
    cy.get("#spmb > div > div:nth-child(3)").click(); //pilih role login
    cy.get(".container > .nav > :nth-child(1) > a").click(); //trigger untuk akses url
  });

  it("[Success] Filter Dashboar untuk menampilkan tahapan", () => {
    cy.window().then((win) => {
      win.first = true;
    });
    cy.get("#periode").select("2020/2021 Genap").should("have.value", "20202");
    cy.window().its("first").should("be.undefined");

    cy.window().then((win) => {
      win.second = true;
    });
    cy.get("#jalur").select("Mandiri S1").should("have.value", "1");
    cy.window().its("second").should("be.undefined");

    cy.window().then((win) => {
      win.three = true;
    });
    cy.get("#gelombang").select("Gelombang 3");
    cy.window().its("three").should("be.undefined");

    cy.get("#sistem").select("Reguler A");
  });

  it("[Succcess EZ] Filter Dashboar untuk menampilkan tahapan", () => {
    cy.get("#periode")
      .select("2020/2021 Genap")
      .should("have.value", "20202")
      .wait(0);
    cy.get("#jalur").select("Mandiri S1").should("have.value", "1").wait(0);
    cy.get("#gelombang")
      .select("Gelombang 3")
      .should("have.value", "3")
      .wait(0);
    cy.get("#sistem").select("Reguler A").should("have.value", "1");
  });

  it.only("[Failed] Filter Dashboar untuk menampilkan tahapan", () => {
    cy.get("#periode").select("2020/2021 Genap");
    cy.get("#jalur").select("Mandiri S1");
    cy.get("#gelombang").select("Gelombang 3");
    cy.get("#sistem").select("Reguler A");
  });
});
