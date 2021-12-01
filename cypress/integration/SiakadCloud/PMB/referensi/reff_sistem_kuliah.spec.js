describe('Ngetes Menu SPMB', function () {
	beforeEach('Login Siakad', () => {
		cy.loginuserstaging()
		cy.openmodulpmb()
		cy.actionfilterdashboard()
	})
	it.only('Memastikan nama tabel sistem kuliah ada 4', () => {
		cy.get('.container > .nav > :nth-child(6)').click() // pilih memilih menu Referensi
		// pilih memilih sub menu Gelombang
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Sistem Kuliah
		// cy.get(
		// 	'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(3) > a'
		// )
		// 	.invoke('attr', 'href') // invoke : cypress get href attribute
		// 	.then((href) => {
		// 		cy.visit(href)
		// 	})
		cy.visit('/spmb/ms_sistemkuliah') // makek visit langsung
		cy.get('.content-header > h1').should('contain', 'Sistem Kuliah')
		cy.get('.krs-float-title > div > .fs-14').should(
			'contain',
			'Persiapan Data: Sistem Kuliah'
		)
		cy.get('.table-responsive > .table  > thead > tr')
			.should('contain', 'Kode')
			.and('contain', 'Nama Sistem Kuliah')
			.and('contain', 'Keterangan')
			.and('contain', 'Aksi')
		cy.get('.krs-float-buttons-center').click()
		cy.get('.alert').should(
			'contain',
			'Penyimpanan data cek Proses Alur SPMB berhasil'
		)
	})
	it('Add Data Sistem Kuliah', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Sistem Kuliah
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Sistem Kuliah
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(3) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		cy.get('.col-md-4 > .btn').click()
		cy.get('#i_idsistemkuliah').type('7-1')
		cy.get('#i_namasistemkuliah').type('tes sistem')
        cy.get('#i_keterangan').type('Ket Sistem kuliah')
		cy.get(':nth-child(4) > .btn-success').click()
		cy.get('.alert').should('contain', 'Penambahan data Sistem Kuliah berhasil')
		cy.get('.alert > .close').click()
	})
	it('Edit Data Sistem Kuliah', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Sistem Kuliah
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Sistem Kuliah
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(3) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		cy.get(':nth-child(8) > :nth-child(4) > .btn-primary').click()
		cy.get('#u_idsistemkuliah').clear() // harus di clear terlebih dahulu apabila ingin input data terbaru
		cy.get('#u_idsistemkuliah').type('8*6+2') // result nya jadi 862 -> sudah ada pengecekan dengan trim saat submit (good)
        cy.get('#u_namasistemkuliah').clear()
		cy.get('#u_namasistemkuliah').type('Edit tes sistem')
        cy.get('#u_keterangan').clear()
        cy.get('#u_keterangan').type('Edit Ket Sistem kuliah')
		cy.get(':nth-child(7) > :nth-child(4) > .btn-success').click()
		cy.get('.alert').should('contain', 'Pengubahan data Sistem Kuliah berhasil')
		cy.get('.alert > .close').click()
	})
	it('Delete Data Sistem Kuliah', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Sistem Kuliah
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Sistem Kuliah
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(3) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		cy.get(':nth-child(7) > :nth-child(4) > .btn-danger').click()
		cy.get('.bootbox > .modal-dialog > .modal-content').should(
			'contain',
			'Apakah anda yakin akan menghapus data ini?'
		)
		cy.get('.modal-footer > .btn-primary').click()
		cy.get('.alert').should('contain', 'Penghapusan data Sistem Kuliah berhasil')
		cy.get('.alert > .close').click()
	})
	it('Duplicate Data Sistem Kuliah', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Sistem Kuliah
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Sistem Kuliah
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(3) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		cy.get('.col-md-4 > .btn').click()
		cy.get('#i_idsistemkuliah').type('7-1')
		cy.get('#i_namasistemkuliah').type('tes sistem')
        cy.get('#i_keterangan').type('Ket Sistem kuliah')
		cy.get(':nth-child(4) > .btn-success').click()
		cy.get('.alert').should(
			'contain',
			'Penambahan data Sistem Kuliah gagal, ada duplikasi data'
		)
		cy.get('.alert > .close').click()
        cy.get(':nth-child(4) > .btn-warning').click() // apanila terdapat data yang sama , data yang inputan baru di reload 
	})
})
