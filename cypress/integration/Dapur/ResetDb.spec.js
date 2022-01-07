describe('Tes Reset Database', () => {
    before(() => {
        // backup dulu database nya command backup 
        // pg_dump --schema=schemaname,schemaname --clean dbname > filebackup.sql
        // taroh file backup di folder fixtures
       cy.exec('psql -U username -d dbname -f ./cypress/fixtures/filebackup.sql')
    });
    it('Login dan Delete User Soko', () => {
        // test code disini
    });
});