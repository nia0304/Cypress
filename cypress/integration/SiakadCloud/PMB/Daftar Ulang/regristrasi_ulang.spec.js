/// <reference types="cypress" />

describe('Registrasi Ulang', ()=> {
    beforeEach("Login Siakad", () => {
        cy.login();
        cy.modulpmb();
        cy.filterdashboard();
      });
      it('Cari Data berkas daftar ulang pendaftar', ()=> {
        cy.visit("/spmb/set_registrasi");
        cy.get('#idpendaftar_label').type('khalil')
        cy.get('.tt-suggestions div').each(($el, index, $list) => {
			if ($el.text() === '202411001 - KHALIL GIBRAN') {
			cy.wrap($el).click()
			}
		})
        cy.get('.input-group-btn > .btn').click()
        cy.get(':nth-child(1) > .table').getTable().should((tableData)=>{
            //cy.log(tableData);
            cy.fixture("Daftar Ulang/daftar_ulang").then((dataFixture)=>{
                expect(tableData).to.deep.equal(dataFixture)
            })
        })
      })
})