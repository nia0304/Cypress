/// <reference types="cypress" />

describe('Test Syarat Seleksi', () => {
	beforeEach('Login Siakad', () => {
		cy.loginuserdev()
		cy.openmodulpmb()
		cy.actionfilterdashboarddev()
	})

	it.only('Seleksi syarat', () => {
		cy.visit('/spmb/list_syaratseleksi')
		// cy.get('.container > .nav > :nth-child(4)').click()
		// cy.get(
		// 	'.container > .nav > :nth-child(4) > .dropdown-menu > :nth-child(2)'
		// ).click()
		cy.get('#periode').select('2020/2021 Genap')
		cy.wait(5000)
		cy.get('#jalur').select('Mandiri S1')
		cy.wait(5000)
		cy.get('#sistem').select('Reguler A')
		cy.wait(5000)
		cy.get('#jenissyarat').select('Administrasi')
		cy.wait(5000)
		cy.get('#gelombang').select('Gelombang 4')
		cy.wait(5000)

		cy.get('.col-xs-8 > .input-group > .form-control').type('hami')
		cy.get('.input-group-btn > .btn-success').click()

		cy.get('#form_list > div > table')
			.getTable()
			.should((tableData) => {
				// cy.log(tableData)
				cy.fixture('Seleksi/syarat_seleksi.json').then((dataFixture) => {
					// cy.log('fixtureees ==>', dataFixture)
					expect(tableData).to.deep.equal(dataFixture)
				})
			})

		cy.get(':nth-child(1) > :nth-child(9) > .btn-primary').click()
		cy.get(
			'#form_list :nth-child(1) > :nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper'
		).click()
		cy.get(':nth-child(1) > :nth-child(9) > .btn-success').click()
		cy.get('.btn-success').first().click()
		cy.get('.bootbox > .modal-dialog > .modal-content').should(
			'contain',
			'Apakah anda yakin akan generate nilai semua pendaftar?'
		)
		cy.get('.modal-footer > .btn-primary').click()
		cy.get('.alert').should('contain', 'Berhasil melakukan generate nilai')

		cy.get('.btn-danger').click()
		cy.get('.bootbox > .modal-dialog > .modal-content').should(
			'contain',
			'Apakah anda yakin akan membatalkan nilai semua pendaftar?'
		)
		cy.get('.modal-footer > .btn-primary').click()
		cy.get('.alert').should('contain', 'Berhasil melakukan pembatalan nilai')

		// cy.get('.alert > .close').click()
	})
})
