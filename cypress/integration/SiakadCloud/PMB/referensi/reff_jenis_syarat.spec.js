describe('Ngetes Menu SPMB', function () {
	beforeEach('Login Siakad', () => {
		cy.loginuser()
		cy.openmodulpmb()
		cy.actionfilterdashboard()
	})

	it.only('Check Halaman Seleksi > Memastikan isi tabel jenis syarat ada 4', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Jenis Syarat atau memakai link href
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(3) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})

		// cy.visit('/spmb/ms_jenissyarat') // memakai visit
		cy.get('.content-header > h1').should('contain', 'Jenis Syarat')
		cy.get('.krs-float-title > div > .fs-14').should(
			'contain',
			'Persiapan Data: Jenis Syarat'
		)
		cy.get('.table-responsive > .table')
			.should('contain', 'ADM')
			.and('contain', 'BM')
			.and('contain', 'DFU')
			.and('contain', 'UKT')
		cy.get('.krs-float-buttons-center').click()
		cy.get('.alert').should(
			'contain',
			'Penyimpanan data cek Proses Alur SPMB berhasil'
		)
	})
	it('Edit Jenis Syarat', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Jenis Syarat
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(3) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
	    cy.get('.content-header > h1 ').should('contain', 'Jenis Syarat')
	    cy.get(':nth-child(4) > :nth-child(3) > .btn-primary').click()
		cy.get('#u_namajenissyarat').clear().type('Uang Kuliah Tunggal')
	    cy.get(':nth-child(4) > :nth-child(3) > .btn-success').click()
		cy.get('.alert').should('contain', 'Pengubahan data Kelompok Syarat berhasil')
		cy.get('.alert > .close').click()
	})
})
