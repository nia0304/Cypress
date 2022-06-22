describe('Ngetes Menu SPMB', function () {
	beforeEach('Login Siakad', () => {
		cy.loginuserdev()
		cy.openmodulpmb()
		cy.actionfilterdashboard()
	})
    it.only('Penambahan Data Kuisoner', () => {
		cy.visit('/spmb/list_periode')
		cy.get('.content-header > h1').should(
			'contain',
			'Daftar Periode Pendaftaran'
		)
		// Start untuk menampilkan menu periode pendaftaran ngetes click filternya
		// cy.get('.container > .nav > :nth-child(3)').click()
		// cy.get(
		// 	'.container > .nav > :nth-child(3) > .dropdown-menu > :nth-child(1)'
		// ).click()
		// cy.get('#accordion > div:nth-child(1) > div.box-header > h4 > a')
		// cy.contains('2020/2021 Genap').click()
		// cy.get('#accordion > div:nth-child(2) > div.box-header > h4 > a').click()
		// cy.contains('Mandiri S1').click()
		// cy.get('#accordion > div:nth-child(3) > div.box-header > h4 > a').click()
		// cy.contains('Gelombang 4').click()

		// cy.get('.krs-float-title > div > .fs-14').should(
		// 	'contain',
		// 	'Persiapan Data: Periode Pendaftaran'
		// )
		// cy.get('body > nav > div.container > form > button').click()
		// cy.get('section.content > div.alert.alert-success').should(
		// 	'contain',
		// 	'Penyimpanan data cek Proses Alur SPMB berhasil'
		// )
					
		cy.filterperiodependaftaran()


		cy.get(':nth-child(1) > .text-right > .btn-info').click()
		cy.visit('/spmb/ms_kuesioner/164')
		cy.get('#i_idpertanyaan').select('03 - Bagaimana kesan anda terhadap proses pendaftaran?')
		cy.get('.btn-success').click()
		cy.get('.alert').should('contain', 'Penambahan data Kuesioner berhasil')
	})
	it('Duplikasi Data Kuisoner', () => {
		cy.visit('/spmb/list_periode')
		cy.get('.content-header > h1').should(
			'contain',
			'Daftar Periode Pendaftaran'
		)
		// Start untuk menampilkan menu periode pendaftaran ngetes click filternya
		// cy.get('.container > .nav > :nth-child(3)').click()
		// cy.get(
		// 	'.container > .nav > :nth-child(3) > .dropdown-menu > :nth-child(1)'
		// ).click()
		// cy.get('#accordion > div:nth-child(1) > div.box-header > h4 > a')
		// cy.contains('2020/2021 Genap').click()
		// cy.get('#accordion > div:nth-child(2) > div.box-header > h4 > a').click()
		// cy.contains('Mandiri S1').click()
		// cy.get('#accordion > div:nth-child(3) > div.box-header > h4 > a').click()
		// cy.contains('Gelombang 4').click()

		// cy.get('.krs-float-title > div > .fs-14').should(
		// 	'contain',
		// 	'Persiapan Data: Periode Pendaftaran'
		// )
		// cy.get('body > nav > div.container > form > button').click()
		// cy.get('section.content > div.alert.alert-success').should(
		// 	'contain',
		// 	'Penyimpanan data cek Proses Alur SPMB berhasil'
		// )
					
		cy.filterperiodependaftaran()


		cy.get(':nth-child(1) > .text-right > .btn-info').click()
		cy.visit('/spmb/ms_kuesioner/164')
		cy.get('#i_idpertanyaan').select('03 - Bagaimana kesan anda terhadap proses pendaftaran?')
		cy.get('.btn-success').click()
		cy.get('.alert').should('contain', 'Penambahan data Kuesioner gagal, ada duplikasi data')
	})
	it('Pengubahan data Kuisoner', () => {
		cy.visit('/spmb/list_periode')
		cy.get('.content-header > h1').should(
			'contain',
			'Daftar Periode Pendaftaran'
		)
		// Start untuk menampilkan menu periode pendaftaran ngetes click filternya
		cy.get('.container > .nav > :nth-child(3)').click()
		cy.get(
			'.container > .nav > :nth-child(3) > .dropdown-menu > :nth-child(1)'
		).click()
		cy.get('#accordion > div:nth-child(1) > div.box-header > h4 > a')
		cy.contains('2020/2021 Genap').click()
		cy.get('#accordion > div:nth-child(2) > div.box-header > h4 > a').click()
		cy.contains('Mandiri S1').click()
		cy.get('#accordion > div:nth-child(3) > div.box-header > h4 > a').click()
		cy.contains('Gelombang 4').click()

		cy.get('.krs-float-title > div > .fs-14').should(
			'contain',
			'Persiapan Data: Periode Pendaftaran'
		)
		// cy.get('body > nav > div.container > form > button').click()
		// cy.get('section.content > div.alert.alert-success').should(
		// 	'contain',
		// 	'Penyimpanan data cek Proses Alur SPMB berhasil'
		// )

		cy.get(':nth-child(1) > .text-right > .btn-info').click()
		cy.visit('/spmb/ms_kuesioner/164')
		cy.get(':nth-child(2) > :nth-child(3) > .btn-primary').click()
		cy.get('#u_idpertanyaan').select('03 - Bagaimana kesan anda terhadap proses pendaftaran?')
		cy.get(':nth-child(2) > :nth-child(3) > .btn-success').click()
		cy.get('.alert').should('contain', 'Pengubahan data Kuesioner berhasil')
	})
	it('Penghapusan data Kuisoner', () => {
		cy.visit('/spmb/list_periode')
		cy.get('.content-header > h1').should(
			'contain',
			'Daftar Periode Pendaftaran'
		)
		// Start untuk menampilkan menu periode pendaftaran ngetes click filternya
		cy.get('.container > .nav > :nth-child(3)').click()
		cy.get(
			'.container > .nav > :nth-child(3) > .dropdown-menu > :nth-child(1)'
		).click()
		cy.get('#accordion > div:nth-child(1) > div.box-header > h4 > a')
		cy.contains('2020/2021 Genap').click()
		cy.get('#accordion > div:nth-child(2) > div.box-header > h4 > a').click()
		cy.contains('Mandiri S1').click()
		cy.get('#accordion > div:nth-child(3) > div.box-header > h4 > a').click()
		cy.contains('Gelombang 4').click()

		cy.get('.krs-float-title > div > .fs-14').should(
			'contain',
			'Persiapan Data: Periode Pendaftaran'
		)
		// cy.get('body > nav > div.container > form > button').click()
		// cy.get('section.content > div.alert.alert-success').should(
		// 	'contain',
		// 	'Penyimpanan data cek Proses Alur SPMB berhasil'
		// )

		cy.get(':nth-child(1) > .text-right > .btn-info').click()
		cy.visit('/spmb/ms_kuesioner/164')
		cy.get(':nth-child(2) > :nth-child(3) > .btn-danger').click()
		cy.get('.bootbox > .modal-dialog > .modal-content').should(
			'contain',
			'Apakah anda yakin akan menghapus data ini?'
		)
		cy.get('.modal-footer > .btn-primary').click()
		cy.get('.alert').should('contain', 'Penghapusan data Kuesioner berhasil')
		cy.get('.alert > .close').click()
	})
})