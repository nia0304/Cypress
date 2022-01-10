describe("Tes Reset Database", () => {
    before(() => {
      // psql -U sevima -d siacloud -c 'DROP Schema spmb cascade'
  
      // pg_dump --schema=schemaname,schemaname --clean dbname > filebackup.sql
      // taroh file backup di folder fixtures
      cy.exec("psql -U sevima -d siacloud -c 'DROP Schema spmb cascade'");
  
      cy.exec(
        'pg_restore --clean --if-exist --format=custom --dbname=siacloud "./cypress/fixtures/db/tes.dump"'
      );
    });
    it("Login dan Delete User Soko", () => {
      // test code disini
    });
  });
  