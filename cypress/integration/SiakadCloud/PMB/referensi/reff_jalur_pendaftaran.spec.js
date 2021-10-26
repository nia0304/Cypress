describe('Ngetes Menu SPMB', function () {
	beforeEach('Login Siakad', () => {
		cy.loginuser()
		cy.openmodulpmb()
		cy.actionfilterdashboard()
	})

	it.only('Memastikan nama tabel jalur pendaftaran ada 5', () => {
		cy.get('.container > .nav > :nth-child(6)').click() // pilih memilih menu Referensi
		// pilih memilih sub menu Referensi > Pendaftaran
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu Jalur Pendaftaran
		// cy.get(
		// 	'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(2) > a'
		// )
		// 	.invoke('attr', 'href') // invoke : cypress get href attribute
		// 	.then((href) => {
		// 		cy.visit(href)
		// 	})
		cy.visit('/spmb/ms_jalurpendaftaran') // makek visit langsung
		cy.get('.content-header > h1').should('contain', 'Jalur Pendaftaran')
		cy.get('.krs-float-title > div > .fs-14').should(
			'contain',
			'Persiapan Data: Jalur Pendaftaran'
		)
		cy.get('.table-responsive > .table  > thead > tr')
			.should('contain', 'Kode')
			.and('contain', 'Nama Jalur Penerimaan')
			.and('contain', 'Jenis Pendaftaran')
			.and('contain', 'Keterangan')
			.and('contain', 'Aksi')
		cy.get('.krs-float-buttons-center').click()
		cy.get('.alert').should(
			'contain',
			'Penyimpanan data cek Proses Alur SPMB berhasil'
		)
	})
	
	it('Add Data Jalur Pendaftaran', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Jalur Pendaftaran
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start memilih href sub menu Jalur Pendaftaran
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(2) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})

		cy.get('.col-md-4 > .btn').click()
		cy.get('#i_idjalurpendaftaran').type('7-1')
		cy.get('#i_namajalurpendaftaran').type('Jalur Automation')
		cy.get("#i_istransfer").select("Peserta Didik Baru").should("have.value", "0");
		cy.get("#i_keterangan").type("Test Jalur");
		cy.get(':nth-child(5) > .btn-success').click()
		cy.get('.alert').should('contain', 'Penambahan data jalurpendaftaran berhasil')
		cy.get('.alert > .close').click()
	})
	it('Edit Data Jalur Pendaftaran', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Jalur Pendaftaran
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start memilih href sub menu Jalur Pendaftaran
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(2) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})

		cy.get(':nth-child(16) > :nth-child(5) > .btn-primary').click()
		cy.get('#u_idjalurpendaftaran').clear() // harus di clear terlebih dahulu apabila ingin input data terbaru
		cy.get('#u_idjalurpendaftaran').type('8*6+2') // result nya jadi 862 -> sudah ada pengecekan dengan trim saat submit (good)
		cy.get('#u_namajalurpendaftaran').clear()
		cy.get('#u_namajalurpendaftaran').type('*jalur Automation+@')
		// cy.get("#u_istransfer").clear();
		cy.get("#u_istransfer").select("Peserta Didik Baru").should("have.value", "0");
		cy.get("#u_keterangan").clear();
		cy.get("#u_keterangan").type("edit Jalur");
		cy.get(':nth-child(16) > :nth-child(5) > .btn-success').click()
		cy.get('.alert').should('contain', 'Pengubahan data jalurpendaftaran berhasil')
		cy.get('.alert > .close').click()
	})
	it('Delete Data Jalur Pendaftaran', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Jalur Pendaftaran
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start memilih href sub menu Jalur Pendaftaran
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(2) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		cy.get(':nth-child(16) > :nth-child(5) > .btn-danger').click()
		cy.get('.bootbox > .modal-dialog > .modal-content').should(
			'contain',
			'Apakah anda yakin akan menghapus data ini?'
		)
		cy.get('.modal-footer > .btn-primary').click()
		cy.get('.alert').should('contain', 'Penghapusan data jalurpendaftaran berhasil')
		cy.get('.alert > .close').click()
	})
	it('Duplicate Data Jalur Pendaftaran', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Jalur Pendaftaran
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
		).click()
		// start memilih href sub menu Jalur Pendaftaran
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(2) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})

		cy.get('.col-md-4 > .btn').click()
		cy.get('#i_idjalurpendaftaran').type('7-1')
		cy.get('#i_namajalurpendaftaran').type('Jalur Automation')
		cy.get("#i_istransfer").select("Peserta Didik Baru").should("have.value", "0");
		cy.get("#i_keterangan").type("Test Jalur");
		cy.get(':nth-child(5) > .btn-success').click()
		cy.get('.alert').should(
			'contain',
			'Penambahan data jalurpendaftaran gagal, ada duplikasi data'
		)
		cy.get('.alert > .close').click()
		cy.get(':nth-child(5) > .btn-warning').click()
	})
})
