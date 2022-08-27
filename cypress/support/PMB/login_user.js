
Cypress.Commands.add("loginUserSuperAdmin", () => {
  // cy.visit("https://dev-pmb-v2.siakadcloud.com");
  // cy.visit("https://ods.siakadcloud.com");
  cy.visit("/")
  cy.fixture("login/login_user").then((data) => {
    cy.get("#userid").type(data.user_super);
    cy.get("#password").type(data.pass_super);
  });
  cy.get(".btn").click();
});

Cypress.Commands.add("loginUserAdminPmb", () => {
  // cy.visit("https://dev-pmb-v2.siakadcloud.com");
  // cy.visit("https://ods.siakadcloud.com");
  cy.visit("/")
  cy.fixture("login/login_user").then((data) => {
    cy.get("#userid").type(data.admin_pmb);
    cy.get("#password").type(data.pass_admin_pmb);
  });
  cy.get(".btn").click();
});

Cypress.Commands.add("loginUserAdminPt", () => {
  // cy.visit("https://dev-pmb-v2.siakadcloud.com");
  // cy.visit("https://ods.siakadcloud.com");
  cy.visit("/")
  cy.fixture("login/login_user").then((data) => {
    cy.get("#userid").type(data.admin_pt);
    cy.get("#password").type(data.pass_admin_pt);
  });
  cy.get(".btn").click();
});

Cypress.Commands.add("loginPendaftar", () => {
  // cy.visit("https://dev-pmb-v2.siakadcloud.com");
  // cy.visit("https://ods.siakadcloud.com");

  cy.visit("/spmbfront/")

  cy.fixture("login/login_user").then((data) => {
    cy.get('.login-button').click()
    cy.get("#idpendaftar").type(data.id_pendaftar);
    cy.get("#pin").type(data.pass_pendaftar);
  });
  cy.get(".btn-warning").click();
});

Cypress.Commands.add("loginPendaftar2", () => {
  // cy.visit("https://dev-pmb-v2.siakadcloud.com");
  // cy.visit("https://ods.siakadcloud.com");

  cy.visit("/spmbfront/")

  cy.fixture("login/login_user").then((data) => {
    cy.get('.login-button').click()
    cy.get("#idpendaftar").type(data.id_pendaftar2);
    cy.get("#pin").type(data.pass_pendaftar2);
  });
  cy.get(".btn-warning").click();
});

// untuk masuk ke modul pmb
Cypress.Commands.add("openModulPmb", () => {
  cy.get(".spmb").click(); //pilih modul pmb
  cy.get('#spmb > div > div:nth-child(2)').click(); // pilih role sebagai super admin PT 
  // cy.get('#spmb > div > div:nth-child(3)').click(); // pilih role sebagai super admin jurusan akutansi
  // cy.get("#spmb > div > div.role_box").click(); //pilih role login
});

// untuk masuk ke menu ODS
Cypress.Commands.add("openMenuOds", () => {
  // cy.get('.header-menu-mobile').click()
  // cy.get('#one_day_service').click({force: true})
  cy.get(':nth-child(3) > .nav-link').click()
});

//untuk menentukan 4 filter
Cypress.Commands.add("filterPencarian", () => {
  // filter periode --> 2020 /2021 Genap
  cy.get('#periode').select('20202')

  cy.wait(3000)

  // filter Gelombang -> Gelombang 1
  cy.get('#gelombang').select('Gelombang 1').should('have.value', '1')

  cy.wait(3000)

  // filter Jalur pendaftaran --> Mandiri S1
  cy.get('#jalur').select('Mandiri S1').should('have.value', '1')

  cy.wait(3000)

  // filter Sistem Kuliah --> Reguler A
  cy.get('#sistem').select('Reguler A').should('have.value', '1')

  cy.wait(3000)

});

//untuk menentukan 4 filter ODS secara statis
Cypress.Commands.add("filterOds", () => {
  // filter periode 
  cy.get('#select2-select-periode-container').click()
  cy.get('#select2-select-periode-results > :nth-child(2)').click()
  cy.get('#select2-select-periode-container').should('contain', '2022 Ganjil')
  // cy.get('#select2-select-periode-container').should('contain', '2021 Genap')
  // filter Jalur pendaftaran
  cy.get('#select2-select-jalur-container').click()
  cy.get('#select2-select-jalur-results > :nth-child(2)').click()
  cy.get('#select2-select-jalur-container').should('contain', 'Reguler')
  // cy.get('#select2-select-jalur-results > :nth-child(2)').click()
  // cy.get('#select2-select-jalur-container').should('contain', 'Mandiri S1')
  // filter Gelombang
  cy.get('#select2-select-gelombang-container').click()
  cy.get('#select2-select-gelombang-results > :nth-child(4)').click()
  cy.get('#select2-select-gelombang-container').should('contain', 'Gelombang 2')
  // cy.get('#select2-select-gelombang-results > :nth-child(1)').click()
  // cy.get('#select2-select-gelombang-container').should('contain', 'Gelombang 1')
  // filter Sistem Kuliah
  cy.get('#select2-select-sistem-container').click()
  cy.get('#select2-select-sistem-results > :nth-child(2)').click()
  cy.get('#select2-select-sistem-container').should('contain', 'Reguler Pagi')
  // cy.get('#select2-select-sistem-results > :nth-child(1)').click()
  // cy.get('#select2-select-sistem-container').should('contain', 'Reguler A')
});