Cypress.Commands.add("periodekonsultasi", () => {
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
