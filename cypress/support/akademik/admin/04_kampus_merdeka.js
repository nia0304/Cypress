//01_mahasiswa-=====================================================================
Cypress.Commands.add('menumahasiswamerdeka', () => {
  cy.visit("siakad/list_mahasiswakm");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Mahasiswa Daftar Mahasiswa Kampus Merdeka"
  );
});

//02_kelas_kuliah-==================================================================
Cypress.Commands.add('menukelaskuliah', ()=>{
  cy.visit("siakad/list_kelaskm");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kelas Kuliah Daftar Kelas Kuliah Kampus Merdeka"
  );
});
//03_laporan-=======================================================================
Cypress.Commands.add('menunilaipermahasiswa', () => {
  cy.visit("siakad/repp_nilaimhskm");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Nilai per Mahasiswa"
  );
});

Cypress.Commands.add('menunilaiperkelas', () => {
  cy.visit("siakad/repp_nilaikelaskm");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Nilai per Kelas"
  );
});
