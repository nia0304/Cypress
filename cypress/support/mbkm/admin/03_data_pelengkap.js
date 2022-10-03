Cypress.Commands.add('menujenisaktivitas', () => {
  cy.visit("mbkm/ms_jeniskegiatan");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Jenis Aktivitas"
  );
});