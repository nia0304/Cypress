describe("Tes Reset Database", () => {
  before(() => {
    cy.exec(
      "docker run --name qa-postgres-db -e POSTGRESS_PASSWORD=ppa -e PGDATA=postgres -p 5433:5432 -d qa-postgres-db"
    );
    cy.wait(30000);
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".hr > .inner").click();
    cy.intercept({
      method: "GET",
      url: "http://localhost/siacloud/gate/ajax/access/**",
    }).as("adminAccess");
    cy.get("#hr > div:nth-child(1) > div:nth-child(2)").click();
    cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
  });

  after(() => {
    cy.exec("docker rm qa-postgres-db --force");
  });

  it("Tes Delete Jenis Cuti", () => {
    cy.visit("hr/ms_cuti");
    cy.get(".content-header > h1").should("contain.text", "Daftar Cuti");
    cy.get("td")
      .contains("Cuti Melahirkan")
      .next()
      .next()
      .next()
      .next()
      .find("button.btn.btn-danger.btn-xs.btn-flat")
      .click();
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert")
      .should("be.visible")
      .contains("Penghapusan data Jenis Cuti berhasil");
  });
});
