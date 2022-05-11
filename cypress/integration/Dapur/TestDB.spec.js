describe("Tes Reset Database", () => {
  before(() => {
    // backup dulu database nya command backup
    // pg_dump -U postgres -h localhost --schema=spmb --clean siakad_lokal > spmb.sql
    // taroh file backup di folder fixtures
    cy.exec("createdb -O sevima -T siacloud siacloud_test");
  });

  after(() => {
    cy.exec("dropdb siacloud_test");
  });

  it("tambah peserta", () => {
    cy.visit("http://localhost/siacloud/gate/login");
    cy.fixture("userLogin").then((data) => {
      cy.get("#userid").type(data.username);
      cy.get("#password").type(data.password);
    });
    cy.get(".btn").click();
    cy.modulpmb();
    cy.get(".container > .nav > :nth-child(2) > a").click();
    cy.get("#wrap-button > .btn-success").click();
    //peserta
    cy.get("#idperiodedaftar")
      .select(
        "2020/2021 Genap - Gelombang 3 - Mandiri - Reguler A - Mandiri 20/21 Genap Gel 3"
      )
      .wait(0);
    cy.get("#namapendaftar").type("reset");
    cy.get("#tmplahir").type("Surabaya");
    cy.get("#tgllahir").type("12-12-2000").tab();
    cy.get("#jk").select("Laki-Laki");
    cy.get("#idjenispilihan").select("IPA");
    cy.get("#nik").type("1122334455667788");
    cy.get("#email").type("reset@yopmail.com");
    cy.get("#nohp").type("08564646464646");
    cy.get("#item-domisili > a").click();
    cy.get("#idpropinsi").select("JAWA TIMUR");
    cy.get("#alamat").type("rungkut");
    cy.get(".btn-success").click();
    cy.get(".modal-footer > .btn-primary").click();
  });
});
