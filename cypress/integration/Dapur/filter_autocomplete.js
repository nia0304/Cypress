describe('Ngetes Menu SPMB', function () {
	beforeEach('Login Siakad', () => {
		cy.loginuser()
		cy.openmodulpmb()
		// cy.filterdashboard()
	})

	it('Open Periode Pendaftaran', async function () {
		// Start untuk menampilkan menu periode pendaftaran ngetes click filternya
		cy.get('.container > .nav > :nth-child(3)').click()
		cy.get(
			'.container > .nav > :nth-child(3) > .dropdown-menu > :nth-child(1)'
		).click()
		cy.get('#accordion > div:nth-child(1) > div.box-header > h4 > a')
		cy.contains('2022 Gasal').click()
		cy.get('#accordion > div:nth-child(2) > div.box-header > h4 > a').click()
		cy.contains('Mandiri').click()
		cy.get('#accordion > div:nth-child(3) > div.box-header > h4 > a').click()
		cy.contains('Gelombang 1').click()

		cy.get('#wrap-button > a')
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
	})
	it.only('Open Kelulusan', async function () {
		cy.get('.container > .nav > :nth-child(5)').click()
		cy.get(
			'.container > .nav > :nth-child(5) > .dropdown-menu > :nth-child(2)'
		).click()
		// cy.get('#idpendaftar_label').type('{downarrow}Agus Saputra')
		cy.get('#idpendaftar_label').type('agus')
		cy.get('.tt-suggestions div').each(($el, index, $list) => {
			// $el is a wrapped jQuery element
			if ($el.text() === '0003IPA620181 - BAGUSTIAN APRIYANDI') {
				// wrap this element so we can
				// use cypress commands on it
				cy.wrap($el).click()
			}
			// else {
			//   // do something else
			// }
		})
		cy.get('.input-group-btn > button').click()
	})
})
