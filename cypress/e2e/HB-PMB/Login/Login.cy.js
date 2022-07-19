
Cypress.Commands.add("loginUserSuperAdmin", () => {
    // cy.visit("https://dev-pmb-v2.siakadcloud.com");
    cy.visit("https://ods.siakadcloud.com");
    cy.fixture("login/login_user").then((data) => {
      cy.get("#userid").type(data.user_super);
      cy.get("#password").type(data.pass_super);
    });
    cy.get(".btn").click();
  });

  it("login siakad password gagal", () => {
    cy.visit("https://ods.siakadcloud.com");
    cy.get("#userid").type("meida");
    cy.get("#password").type("meida");
    cy.get(".btn").click();
    cy.contains("Akun Pengguna atau Kata Sandi anda tidak sesuai");
  });
  
  it.only("login siakad berhasil", () => {
    cy.visit("/");
    cy.get("#userid").type("meidasvm");
    cy.get("#password").type("X31!2Rxd");
    cy.get(".btn").click();
  });