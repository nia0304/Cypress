describe('Ngetes Menu SPMB', function () {
	beforeEach('Login Siakad', () => {
		cy.loginuser()
		cy.openmodulpmb()
		cy.actionfilterdashboard()
	})
	it.only('Memastikan nama kolom tabel syarat Seleksi ada 3', () => {
		cy.get('.container > .nav > :nth-child(6)').click() // pilih memilih menu Referensi
		// pilih memilih sub menu Referensi > Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Syarat Seleksi
		// cy.get(
		// 	'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(4) > a'
		// )
		// 	.invoke('attr', 'href') // invoke : cypress get href attribute
		// 	.then((href) => {
		// 		cy.visit(href)
		// 	})
		cy.visit('/spmb/ms_syarat') // makek visit langsung
		cy.get('.content-header > h1 ').should('contain', 'Syarat')
		cy.get('.krs-float-title > div > .fs-14').should(
			'contain',
			'Persiapan Data: Syarat Seleksi'
		)
		cy.get('.table-responsive > .table  > thead > tr')
			.should('contain', 'Nama Syarat')
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
		// start membuka href sub menu Seleksi > Syarat Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(4) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 ').should('contain', 'Syarat')
	})
    it('Add Syarat Seleksi', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Syarat Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(4) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 ').should('contain', 'Syarat')
        cy.get('.col-md-4 > .btn').click()
		cy.get('#i_namasyarat').type('Tes-Syarat')
		cy.get('#i_poinsyarat').type('4')
        cy.get(':nth-child(3) > .btn-success').click()
		cy.get('.alert').should('contain', 'Penambahan data Syarat berhasil')
		cy.get('.alert > .close').click()
	})
    it('Edit Syarat Seleksi', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Syarat Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(4) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 ').should('contain', 'Syarat')
        cy.get(':nth-child(12) > :nth-child(3) > .btn-primary').click()
		cy.get('#u_namasyarat').clear().type('Tesss')
		cy.get('#u_poinsyarat').clear().type('5')
        cy.get(':nth-child(12) > :nth-child(3) > .btn-success').click()
		cy.get('.alert').should('contain', 'Pengubahan data Syarat berhasil')
		cy.get('.alert > .close').click()
        // Mohon mengisi isian yang bergaris merah
        // cy.get('.modal-footer > .btn-primary').click()
	})
    it('Delete Syarat Seleksi', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Syarat Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(4) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1').should('contain', 'Syarat')
        cy.get(':nth-child(11) > :nth-child(3) > .btn-danger').click()
        cy.get('.bootbox > .modal-dialog > .modal-content').should(
			'contain',
			'Apakah anda yakin akan menghapus data ini?'
		)
        cy.get('.modal-footer > .btn-primary').click()
		cy.get('.alert').should('contain', 'Penghapusan data Syarat berhasil')
		cy.get('.alert > .close').click()
	})
})