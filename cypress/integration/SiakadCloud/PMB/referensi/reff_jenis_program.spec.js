describe('Ngetes Menu SPMB', function () {
	beforeEach('Login Siakad', () => {
		cy.loginuserstaging()
		cy.openmodulpmb()
		cy.actionfilterdashboard()
	})
	it.only('Memastikan nama tabel jenis program ada 4', () => {
		cy.get('.container > .nav > :nth-child(6)').click() // pilih memilih menu Referensi
		// pilih memilih sub menu Referensi > pendaftaran
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Sistem Kuliah
		// cy.get(
		// 	'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(4) > a'
		// )
		// 	.invoke('attr', 'href') // invoke : cypress get href attribute
		// 	.then((href) => {
		// 		cy.visit(href)
		// 	})
		cy.visit('/spmb/ms_jenisprogram') // makek visit langsung
		cy.get('.content-header > h1').should('contain', 'Jenis Program')
		cy.get('.krs-float-title > div > .fs-14').should(
			'contain',
			'Persiapan Data: Jenis Program'
		)
		cy.get('.table-responsive > .table  > thead > tr')
			.should('contain', 'Kode')
			.and('contain', 'Nama Jenis Program')
			.and('contain', 'IPC')
			.and('contain', 'Aksi')
		cy.get('.krs-float-buttons-center').click()
		cy.get('.alert').should(
			'contain',
			'Penyimpanan data cek Proses Alur SPMB berhasil'
		)
	})
	it('Edit Data Jenis Program', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Jenis Program
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Jenis Program
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(4) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		cy.get(':nth-child(1) > :nth-child(4) > .btn-primary').click()
		cy.get('#u_idjenispilihan').clear()
		cy.get('#u_idjenispilihan').type('AAA')
		cy.get('#u_namajenispilihan').clear()
		cy.get('#u_namajenispilihan').type('Bahasa')
		cy.get(':nth-child(1) > :nth-child(4) > .btn-success').click()
		cy.get('.alert').should('contain', 'Pengubahan data Jenis Program berhasil')
		cy.get('.alert > .close').click()
	})
	it('Delete Data Jenis Program', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Jenis Program
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Jenis Program
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(4) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		cy.get(':nth-child(1) > :nth-child(4) > .btn-danger').click()
		cy.get('.bootbox > .modal-dialog > .modal-content').should(
			'contain',
			'Apakah anda yakin akan menghapus data ini?'
		)
		cy.get('.modal-footer > .btn-primary').click()
		cy.get('.alert').should('contain', 'Penghapusan data Jenis Program berhasil')
		cy.get('.alert > .close').click()
	})
	it('Duplicate Data Jenis Program', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Jenis Program
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Jenis Program
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(4) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		cy.get(':nth-child(1) > :nth-child(4) > .btn-primary').click()
		cy.get('#u_idjenispilihan').clear()
		cy.get('#u_idjenispilihan').type('IPA')
		cy.get('#u_namajenispilihan').clear()
		cy.get('#u_namajenispilihan').type('Bahasa')
		cy.get(':nth-child(1) > :nth-child(4) > .btn-success').click()
		cy.get('.alert').should(
			'contain',
			'Penambahan data Jenis Program gagal, ada duplikasi data'
		)
		cy.get('.alert > .close').click()
	})
})
