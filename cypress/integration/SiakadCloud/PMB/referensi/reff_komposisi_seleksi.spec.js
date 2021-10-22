describe('Ngetes Menu SPMB', function () {
	beforeEach('Login Siakad', () => {
		cy.loginuser()
		cy.openmodulpmb()
		// cy.filterdashboard()
	})
	it('Check Halaman Seleksi', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Komposisi Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(2) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 ').should('contain', 'Komposisi Seleksi')
	})
    it('Add Komposisi Seleksi', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Komposisi Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(2) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 ').should('contain', 'Komposisi Seleksi')
        cy.get('.col-md-4 > .btn').click()
		cy.get('#i_idkomposisi').type('7-1')
		cy.get('#i_namakomposisi').type('Seleksi Komposisi/*2sd')
          cy.get(':nth-child(3) > .btn-success').click()
		cy.get('.alert').should('contain', 'Penambahan data Komposisi Seleksi berhasil')
		cy.get('.alert > .close').click()
        // Penambahan data Komposisi Seleksi gagal, ada duplikasi data
	})
    it('Duplikasi Data Komposisi Seleksi', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Komposisi Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(2) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 ').should('contain', 'Komposisi Seleksi')
        cy.get('.col-md-4 > .btn').click()
		cy.get('#i_idkomposisi').type('7-1')
		cy.get('#i_namakomposisi').type('Seleksi Komposisi/*2sd')
          cy.get(':nth-child(3) > .btn-success').click()
		cy.get('.alert').should('contain', 'Penambahan data Komposisi Seleksi gagal, ada duplikasi data')
		cy.get('.alert > .close').click()
	})
    it.only('Edit Komposisi Seleksi', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Komposisi Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(2) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 ').should('contain', 'Komposisi Seleksi')
        cy.get(':nth-child(6) > :nth-child(3) > .btn-primary').click()
		cy.get('#u_idkomposisi').clear().type('7-1/3')
		cy.get('#u_namakomposisi').clear().type('Edit Seleksi Komposisi/*2sd')
        cy.get(':nth-child(6) > :nth-child(3) > .btn-success').click()
		cy.get('.alert').should('contain', 'Pengubahan data Komposisi Seleksi berhasil')
		cy.get('.alert > .close').click()
	})
    it('Delete Komposisi Seleksi', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Komposisi Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(2) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1').should('contain', 'Komposisi Seleksi')
        // cy.get('.col-md-4 > .btn').click()
        cy.get(':nth-child(6) > :nth-child(3) > .btn-danger').click()
        cy.get('.bootbox > .modal-dialog > .modal-content').should(
			'contain',
			'Apakah anda yakin akan menghapus data ini?'
		)
        cy.get('.modal-footer > .btn-primary').click()
		cy.get('.alert').should('contain', 'Penghapusan data Komposisi Seleksi berhasil')
		cy.get('.alert > .close').click()
	})
})