Cypress.Commands.add('alert_notifikasi', function (step) {
  var text;
  if(step=="C"){
    text="Penambahan data tahun kurikulum berhasil";
  }
  else if(step=="U"){
    text="Pengubahan data tahun kurikulum berhasil";
  }
  else if(step=="D"){
    text="Penghapusan data tahun kurikulum berhasil";
  }
  else{
    text="Penambahan data tahun kurikulum gagal, ada duplikasi data";
  }
  cy.get(".alert").should("be.visible").contains(text);
});

Cypress.Commands.add('alert_mandatory', () => {
  cy.get('.modal-content')
      .should("be.visible")
      .contains("Mohon mengisi isian yang bergaris merah");
    cy.get('.modal-footer > .btn').click();
});

Cypress.Commands.add('refresh_page', function (namaMenu) {
  cy.get('.input-group-btn > .btn-primary').click();
  cy.get('.content-header > h1').should('contain',namaMenu);
});

Cypress.Commands.add('pencarian', function (value) {
  cy.get('.col-xs-8 > .input-group > .form-control').clear().type(value);
  cy.get('.input-group-btn > .btn-success').click();
  cy.get('td').then(($td) => {
    if ($td.text().includes('Data kosong')) {
      cy.get('td').should("be.visible").contains("Data kosong") //if not found
    } else {
      cy.get('td').should("be.visible").contains(value); //if found
    }
  });
});

Cypress.Commands.add('delete', function (hapus) {
  cy.get('.modal-title').contains("Konfirmasi");
  cy.get('.bootbox-body').contains("Apakah anda yakin akan menghapus data ini?");
  if(hapus=="Ya"){
    cy.get('.modal-footer > .btn-primary').click();
  }
  else{
    cy.get('.modal-footer > .btn-default').click();
  }
});


