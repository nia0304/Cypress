/// <reference types="cypress" />

describe('Generate Mahasiswa', ()=> {
    beforeEach("Login Siakad", () => {
        cy.login();
        cy.modulpmb();
        cy.filterdashboard();
      });
      it('Generate & batal NIM per pendaftar', ()=> {
        cy.visit("/spmb/set_mahasiswa");
        cy.get('#gelombang').select('Gelombang 4').wait(0)
        //generate nim
        cy.get(':nth-child(9) > .btn-info').click()
        cy.get('.bootbox > .modal-dialog > .modal-content').should('contain','Apakah anda yakin akan melakukan generate NIM pendaftar?')
        cy.get('.modal-footer > .btn-default').should('contain','Cancel')
        cy.get('.modal-footer > .btn-primary').click()
        cy.get("#form_list > div > table")
      .getTable()
      .should((tableData) => {
        // cy.log(tableData);
        cy.fixture("Daftar Ulang/generate_NIM.json").then(
          (dataFixture) => {
            expect(tableData).to.deep.equal(dataFixture);
          }
        );
      });
      cy.get('.alert').should('contain','Berhasil Generate NIM')
      })
      it('Batal generate NIM', ()=> {
        cy.visit("/spmb/set_mahasiswa");
        cy.get('#gelombang').select('Gelombang 4').wait(0)
        cy.get(':nth-child(9) > .btn-warning').should('be.visible').click()
        cy.get('.bootbox > .modal-dialog > .modal-content').should('contain','Apakah anda yakin akan melakukan pembatalan NIM pendaftar?')
        cy.get('.modal-footer > .btn-default').should('contain','Cancel')
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.alert').should('contain','Berhasil Batalkan NIM')
      })

      it('Generate NIM Semua', ()=> {
        cy.visit("/spmb/set_mahasiswa");
        cy.get('#gelombang').select('Gelombang 4').wait(0)
        cy.get('#wrap-button > .btn-info').click()
        cy.get('.bootbox > .modal-dialog > .modal-content').should('contain','Apakah anda yakin akan melakukan generate NIM pendaftar?')
        cy.get('.modal-footer > .btn-default').should('contain','Cancel')
        cy.get('.modal-footer > .btn-primary').click()
        cy.get("#form_list > div > table")
      .getTable()
      .should((tableData) => {
        // cy.log(tableData);
        cy.fixture("Daftar Ulang/generate_NIM.json").then(
          (dataFixture) => {
            expect(tableData).to.deep.equal(dataFixture);
          }
        );
      });
      cy.get('.alert').should('contain','Berhasil 1 dan Gagal 0 generate NIM Pendaftar')
      })
      it.only('Batal generate NIM Semua', ()=> {
        cy.visit("/spmb/set_mahasiswa");
        cy.get('#gelombang').select('Gelombang 4').wait(0)
        cy.get('#wrap-button > .btn-warning').click()
        cy.get('.bootbox > .modal-dialog > .modal-content').should('contain','Apakah anda yakin akan melakukan pembatalan NIM pendaftar?')
        cy.get('.modal-footer > .btn-default').should('contain','Cancel')
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.alert').should('contain','Berhasil 1 dan Gagal 0 membatalkan NIM Pendaftar')
      })
      
      
})