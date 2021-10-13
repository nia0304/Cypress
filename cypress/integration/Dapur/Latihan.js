/// <reference types="cypress" />
beforeEach("Login Siakad PMB", () => {
  cy.login("fikri", "j77/FQjF");
  cy.get(".spmb > .inner").click(); //pilih modul pmb
  cy.get("#spmb > div > div:nth-child(2)").click(); //pilih role login
  cy.get(".container > .nav > :nth-child(1) > a").click(); //trigger untuk akses url
});
//   afterEach("Logout Siakad", () => {
//     cy.logout();
//   });
describe("Dashboard Tahapan Alur PMB", () => {
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

  it("[Failed] Filter Dashboar untuk menampilkan tahapan", () => {
    cy.get("#periode").select("2020/2021 Genap");
    cy.get("#jalur").select("Mandiri S1");
    cy.get("#gelombang").select("Gelombang 3");
    cy.get("#sistem").select("Reguler A");
  });

  it.only("select filter periode", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2021\/2022 Gasal$/).click();
    cy.contains("a", /^2022 Gasal$/).click();
    // cy.contains("2022 Gasal").click();
    // cy.get(
    //   "#collapseidperiode > .box-body > .slimScrollDiv > .tree > ul > :nth-child(2) > a"
    // ).should("contain", "2022 Gasal");
  });
});

it("login staging", () => {
  cy.visit("dev.siakadcloud.com");
  cy.get("#userid").type("fikri");
  cy.get("#password").type("j77/FQjF");
  cy.get(".btn").click();
});

describe("Ngetes Login", function () {
  it("Bisa Login Dengan Username dan Password Benar", async function () {
    cy.visit("staging.siakadcloud.com");
    cy.get("#userid").type("meida");
    cy.get("#password").type("meida456");
    cy.get(".btn").click();
    cy.get(".siakad").click();
    cy.get("#siakad > div > div.role_box").click();
  });
});
