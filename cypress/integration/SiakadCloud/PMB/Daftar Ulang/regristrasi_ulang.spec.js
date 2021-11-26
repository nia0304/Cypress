/// <reference types="cypress" />

describe('Registrasi Ulang', ()=> {
    beforeEach("Login Siakad", () => {
        cy.login();
        cy.modulpmb();
        cy.filterdashboard();
      });
      it('Validasi berkas daftar ulang pendaftar', ()=> {
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
            cy.fixture("Daftar Ulang/data_pendaftar.json").then((dataFixture)=>{
                expect(tableData).to.deep.equal(dataFixture)
            })
        })
        // cy.get('#idpilihansyarat').select('SKHUN')
        const filetranskrip = "File Upload/lorem-ipsum.pdf";
        cy.get(':nth-child(3) > :nth-child(3) > input').attachFile(filetranskrip)
        cy.get(':nth-child(3) > [align="center"] > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
        cy.get('.col-sm-offset-2 > .btn').click()
        cy.get('.alert').should('contain', 'Berhasil melakukan perubahan syarat registrasi pendaftar')
        cy.get(':nth-child(4) > .btn').should('contain', 'Generate NIM').and('be.visible')
      })

      it('Generate NIM Pendaftar', ()=> {
        cy.visit("/spmb/set_registrasi");
        cy.get('#idpendaftar_label').type('khalil')
        cy.get('.tt-suggestions div').each(($el, index, $list) => {
			if ($el.text() === '202411001 - KHALIL GIBRAN') {
			cy.wrap($el).click()
			}
		})
        cy.get('.input-group-btn > .btn').click()
        cy.get(':nth-child(4) > .btn').should('contain', 'Generate NIM').and('be.visible').click()
        cy.get('.alert').should('contain', 'Pengubahan data Pendaftar berhasil')
        cy.get(':nth-child(4) > .btn').should('contain', 'Batal NIM').and('be.visible')
        cy.get(':nth-child(1) > .table').getTable().should((tableData)=>{
            //cy.log(tableData);
            cy.fixture("Daftar Ulang/NIM_pendaftarDU.json").then((dataFixture)=>{
                expect(tableData).to.deep.equal(dataFixture)
            })
        })
      })
      it('Batal Generate NIM', ()=> {
        cy.visit("/spmb/set_registrasi");
        cy.get('#idpendaftar_label').type('khalil')
        cy.get('.tt-suggestions div').each(($el, index, $list) => {
			if ($el.text() === '202411001 - KHALIL GIBRAN') {
			cy.wrap($el).click()
			}
		})
        cy.get('.input-group-btn > .btn').click()
        cy.get(':nth-child(4) > .btn').should('contain', 'Batal NIM').and('be.visible').click()
        cy.get('.alert').should('contain', 'Pengubahan data Pendaftar berhasil')
        cy.get(':nth-child(1) > .table').getTable().should((tableData)=>{
            cy.fixture("Daftar Ulang/data_pendaftar.json").then((dataFixture)=>{
                expect(tableData).to.deep.equal(dataFixture)
            })
        })
      })
})

