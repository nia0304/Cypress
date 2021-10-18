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
Cypress.Commands.add('openmodulpmb', () => {
	cy.get('.spmb').click() //pilih modul pmb
	cy.get('#spmb > div > div.role_box').click() //pilih role login
})
