describe('Ngetes Menu SPMB', function () {
	beforeEach('Login Siakad', () => {
		cy.loginuser()
		cy.openmodulpmb()
		// cy.filterdashboard()
	})
	it('Add Data Gelombang', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Gelombang
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Gelombang
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(1) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		cy.get('.col-md-4 > .btn').click()
		cy.get('#i_idgelombang').type('7-1')
		cy.get('#i_namagelombang').type('Gelombang Tes')
		cy.get(':nth-child(3) > .btn-success').click()
		cy.get('.alert').should('contain', 'Penambahan data gelombang berhasil')
		cy.get('.alert > .close').click()
	})
	it('Edit Data Gelombang', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Gelombang
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Gelombang
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(1) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		cy.get(':nth-child(9) > :nth-child(3) > .btn-primary').click()
		cy.get('#u_idgelombang').clear() // harus di clear terlebih dahulu apabila ingin input data terbaru
		cy.get('#u_idgelombang').type('8*6+2') // result nya jadi 862 -> sudah ada pengecekan dengan trim saat submit (good)
		cy.get('#u_namagelombang').clear()
		cy.get('#u_namagelombang').type('*Automation adalah+@')
		cy.get(':nth-child(9) > :nth-child(3) > .btn-success').click()
		cy.get('.alert').should('contain', 'Pengubahan data gelombang berhasil')
		cy.get('.alert > .close').click()
	})
	it.only('Delete Data Gelombang', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Gelombang
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Gelombang
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(1) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		cy.get(':nth-child(9) > :nth-child(3) > .btn-danger').click()
		cy.get('.bootbox > .modal-dialog > .modal-content').should(
			'contain',
			'Apakah anda yakin akan menghapus data ini?'
		)
		cy.get('.modal-footer > .btn-primary').click()
		cy.get('.alert').should('contain', 'Penghapusan data gelombang berhasil')
		cy.get('.alert > .close').click()
	})
	it('Duplicate Data Gelombang', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Gelombang
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Gelombang
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(1) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		cy.get('.col-md-4 > .btn').click()
		cy.get('#i_idgelombang').type('7-1')
		cy.get('#i_namagelombang').type('Automation')
		cy.get(':nth-child(3) > .btn-success').click()
		cy.get('.alert').should(
			'contain',
			'Penambahan data gelombang gagal, ada duplikasi data'
		)
		cy.get('.alert > .close').click()
	})
})
