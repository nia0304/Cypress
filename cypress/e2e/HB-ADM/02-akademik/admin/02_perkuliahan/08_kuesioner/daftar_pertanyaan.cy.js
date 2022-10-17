/// <reference types="cypress"/>

describe('Automation Daftar Pertanyaan EDOM', ()=>{
 
  beforeEach(() => {
      cy.loginsuperadmin()
      cy.modulakademik()
      cy.visit('siakad/ms_pertanyaanangket');
  });

  it('Admin memilih filter periode, kategori dan tingkat pendidikan', () => {
    cy.get('#periode').select('2022/2023 Ganjil').wait(0)
    cy.get('#kategori').select('Materi Pembelajaran').wait(0)
    cy.get('#jenjang').select('S1 - STRATA 1').wait(0)
  });

});
