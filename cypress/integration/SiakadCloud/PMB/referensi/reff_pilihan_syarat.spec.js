describe('Ngetes Menu SPMB', function () {
	beforeEach('Login Siakad', () => {
		cy.loginuserstaging()
		cy.openmodulpmb()
		cy.actionfilterdashboard()
	})
	it.only('Memastikan nama kolom tabel jenis syarat ada 4', () => {
		cy.get('.container > .nav > :nth-child(6)').click() // pilih memilih menu Referensi
		// pilih memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Pilihan Syarat
		// cy.get(
		// 	'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(5) > a'
		// )
		// 	.invoke('attr', 'href') // invoke : cypress get href attribute
		// 	.then((href) => {
		// 		cy.visit(href)
		// 	})
		cy.visit('/spmb/ms_pilihansyarat')
		cy.get('.content-header > h1').should('contain', 'Pilihan Syarat')
		cy.get('.krs-float-title > div > .fs-14').should(
			'contain',
			'Persiapan Data: Pilihan Syarat'
		)
		cy.get('.table-responsive > .table')
			.should('contain', 'Nama Pilihan')
			.and('contain', 'Poin')
			.and('contain', 'Aksi')
		cy.get('.krs-float-buttons-center').click()
		cy.get('.alert').should(
			'contain',
			'Penyimpanan data cek Proses Alur SPMB berhasil'
		)
	})

	it('Check Halaman Seleksi', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Pilihan Syarat
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(5) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 ').should('contain', 'Pilihan Syarat')
	})
    it('Add Pilihan Syarat', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Pilihan Syarat
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(5) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 ').should('contain', 'Pilihan Syarat')
        cy.get('.col-md-4 > .btn').click()
		cy.get('#i_namapilihansyarat').type('*Tes/pilihan-Syarat')
		cy.get('#i_poinpilihan').type('4')
        cy.get(':nth-child(3) > .btn-success').click()
		cy.get('.alert').should('contain', 'Penambahan data Syarat berhasil')
		cy.get('.alert > .close').click()
	})
    it('Edit Pilihan Syarat', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Pilihan Syarat
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(5) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 ').should('contain', 'Pilihan Syarat')
        cy.get(':nth-child(2) > :nth-child(3) > .btn-primary').click()
		cy.get('#u_namapilihansyarat').clear().type('Tesss')
		cy.get('#u_poinpilihan').clear().type('5')
        cy.get(':nth-child(2) > :nth-child(3) > .btn-success').click()
		cy.get('.alert').should('contain', 'Pengubahan data Syarat berhasil')
		cy.get('.alert > .close').click()
	})
    it('Delete Pilihan Syarat', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Pilihan Syarat
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(5) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1').should('contain', 'Pilihan Syarat')
        cy.get(':nth-child(2) > :nth-child(3) > .btn-danger').click()
        cy.get('.bootbox > .modal-dialog > .modal-content').should(
			'contain',
			'Apakah anda yakin akan menghapus data ini?'
		)
        cy.get('.modal-footer > .btn-primary').click()
		cy.get('.alert').should('contain', 'Penghapusan data Syarat berhasil')
		cy.get('.alert > .close').click()
	})
})