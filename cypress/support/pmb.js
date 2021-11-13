//untuk memilih modul pmb di awal
Cypress.Commands.add("modulpmb", () => {
  cy.get(".spmb > .inner").click(); //pilih modul pmb
  cy.get("#spmb > div > div:nth-child(2)").click(); //pilih role login
  cy.get(".container > .nav > :nth-child(1) > a").click(); //trigger untuk akses url
});

//untuk menentukan 4 filter dashboard pmb secara statis
Cypress.Commands.add("filterdashboard", () => {
  cy.get("#periode")
    .select("2020/2021 Genap")
    .should("have.value", "20202")
    .wait(0);
  cy.get("#jalur").select("Mandiri").should("have.value", "1").wait(0);
  cy.get("#gelombang").select("Gelombang 3").should("have.value", "3").wait(0);
  cy.get("#sistem").select("Reguler A").should("have.value", "1");
  //ketika bar sudah berprogres sesuaikan assertion yg diambil
  cy.get(":nth-child(1) > .col-md-12 > .box").should(
    "contain",
    // "Anda Belum Melakukan Pengisian Tahapan Alur SPMB"
    "Progress Tahapan Alur SPMB:"
  );
});

// untuk masuk ke modul pmb
Cypress.Commands.add("openmodulpmb", () => {
  cy.get(".spmb").click(); //pilih modul pmb
  cy.get("#spmb > div > div.role_box").click(); //pilih role login
});

Cypress.Commands.add("filterlistperiodependaftaran", () => {
  cy.contains("a", /^2020\/2021 Genap$/)
    .click()
    .wait(0);
  cy.get("[data-testid=collapseidgelombang]").click();
  cy.contains("a", /^Gelombang 4$/)
    .click()
    .wait(0);
  cy.get(".text-right > .btn-info").click();
});

//untuk menentukan 4 filter dashboard pmb secara statis
Cypress.Commands.add("actionfilterdashboard", () => {
  cy.get("#periode")
    .select("2020/2021 Genap")
    .should("have.value", "20202")
    .wait(0);
  cy.get("#jalur").select("Mandiri").should("have.value", "1").wait(0);
  cy.get("#gelombang").select("Gelombang 3").should("have.value", "3").wait(0);
  cy.get("#sistem").select("Reguler A").should("have.value", "1");
  //ketika bar sudah berprogres sesuaikan assertion yg diambil
  cy.get(":nth-child(1) > .col-md-12 > .box > .krs-dashboard-box-title").should(
    "contain",
    "Tahapan Alur SPMB"
  );
});
