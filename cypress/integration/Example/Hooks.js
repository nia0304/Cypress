describe("Scenario PMB dgn Hook", () => {
  // BeforeEach digunakan untuk login
  beforeEach("login Siakad Berhasil", () => {
    cy.visit("dev.siakadcloud.com");
    cy.get("#userid").type("fikri");
    cy.get("#password").type("j77/FQjF");
    cy.get(".btn").click();
    cy.get(".spmb > .inner").click(); //pilih modul pmb
    cy.get("#spmb > div > div:nth-child(3)").click(); //pilih role login
    cy.get(".container > .nav > :nth-child(1) > a").click(); //trigger untuk akses url
  });

  // AfterEach digunakan untuk logout
  afterEach("Logout", () => {
    cy.get(".user > .dropdown-toggle").click();
    cy.get(
      "body > header > nav > div > div > ul > li.dropdown.user.user-menu > ul > li.user-footer > div > a:nth-child(3)"
    ).click();
  });

  it("Modul PMB - reff gelombang", () => {
    cy.visit("https://dev.siakadcloud.com/spmb/ms_gelombang");
  });

  it("Modul PMB -  reff jalur pendaftaran", () => {
    // cy.get("body > header > div > div > ul > li:nth-child(6) > a").click();
    cy.visit("https://dev.siakadcloud.com/spmb/ms_jalurpendaftaran");
  });
});
