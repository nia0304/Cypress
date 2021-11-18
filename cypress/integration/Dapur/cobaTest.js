/// <reference types="cypress" />

describe('Program Studi', () => {
	beforeEach('Login Siakad', () => {
		// cy.loginuser()
		cy.loginuserdev()
		cy.openmodulpmb()
		// cy.actionfilterdashboard()
		cy.actionfilterdashboarddev()
	})
	it('Penambahan program studi', () => {
		cy.visit('/spmb/list_periode')
		cy.contains('a', /^2020\/2021 Genap$/)
			.click()
			.wait(0)
		cy.get('[data-testid=collapseidgelombang]').click()
		cy.contains('a', /^Gelombang 4$/)
			.click()
			.wait(0)
		cy.get('.text-right > .btn-info').click()
		cy.get('#sidebar-menu-list > :nth-child(4) > a')
			.should('be.visible')
			.click()
		cy.get('.col-md-7 > .btn-success').click()
		cy.get('#idunit').select('S1 - Sistem Informasi')
		cy.get('#idjenispilihan').select('IPA')
		cy.get('#jmlditerima').type('150')
		cy.get('#nilaiminimal').type('75')
		cy.get('#prefixnim').type('202104')
		cy.get('#jmlurutannim').select('3')
		// cy.get(
		//   "#block-pilihan[1] > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
		// ).click();
		// cy.get("#block-pilihan[1] > div > label > div > ins").click();
		cy.get(
			'#block-pilihan[1] > div > label > .icheckbox_minimal > .iCheck-helper'
		).click()
	})
	it('Edir program studi', () => {
		cy.visit('/spmb/list_periode')
		cy.get(
			'#form_list > div > table > tbody > tr:nth-child(1) > :nth-child(10) > .btn-info'
		).click()
		cy.visit('/spmb/list_sebaranprodi/39')
		cy.get('#header-search > div.row > div.col-md-7 > .btn-success').click()
		// #sebaran-pilihan > div.row > div.col-sm-6 > div.row:nth-child(1)
		cy.get(
			'#sebaran-pilihan > div.row > div.col-sm-6 > div.row > div.col-md-7 > .labelinput:nth-child(1) > .icheckbox_minimal > .iCheck-helper'
		)
			.first()
			.click()
		// cy.get(
		// 	'#sebaran-pilihan > div.row > div.col-sm-6 > div.row:nth-child(1) > div.col-md-7 > .labelinput:nth-child(1) > .icheckbox_minimal > .iCheck-helper'
		// ).last().click()
		// #sebaran-pilihan > div > div > div:nth-child(2) > div > label > .icheckbox_minimal > .iCheck-helper
		cy.get(
			'#sebaran-pilihan > div > div > div:nth-child(2) > div > label > .icheckbox_minimal > .iCheck-helper'
		).click()
		// get element check pilihan program studi baris Pertama = pilihan(1) dan pilihan(3)
		cy.get(
			'#sebaran-pilihan > div > div > div:nth-child(1) > div > label > .icheckbox_minimal > .iCheck-helper'
		)
			.first()
			.click()
		cy.get(
			'#sebaran-pilihan > div > div > div:nth-child(1) > div > label > .icheckbox_minimal > .iCheck-helper'
		)
			.last()
			.click()
		// get element check pilihan program studi baris Kedua = pilihan(2)
	})
	it('Penambahan Penguji di jadwal seleksi', () => {
		cy.visit('/spmb/list_jadwal')
		cy.get(
			'#form_list > div > table > tbody > tr:nth-child(1) > :nth-child(11) > .btn-info'
		).click()
		cy.visit('/spmb/ms_penguji/47')
		cy.get('#i_nip_label').type('andre')
		cy.get('.tt-suggestions div').each(($el, index, $list) => {
			// $el is a wrapped jQuery element
			if ($el.text() === '1001079001 - ANDREW SHANDY UTAMA') {
				// wrap this element so we can
				// use cypress commands on it
				cy.wrap($el).click()
			}
			// else {
			//   // do something else
			// }
		})
	})

	// Menguji Periode Pendaftaran dengan iframe
	it('TES iframe saat Penambahan data periode pendaftaran', () => {
		cy.get('.container > .nav > :nth-child(3)').click() // pilih memilih menu Referensi
		// pilih memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(3) > .dropdown-menu > :nth-child(1)'
		).click()
		// start membuka href sub menu
		cy.get(
			'body > header > div > div > ul > li:nth-child(3) > ul > li:nth-child(1) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		// cy.visit('/spmb/data_periode')
		cy.get('.content-header > h1 > small').should(
			'contain',
			'Daftar Periode Pendaftaran'
		)
		// cy.get('#wrap-button > .btn-success').click()
		cy.get('.krs-float-title > div > .fs-14').should(
			'contain',
			'Persiapan Data: Periode Pendaftaran'
		)

		cy.get('#wrap-button > .btn-success')
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
		cy.get('#namaperiodedaftar').type(
			'Tes Mandiri Prestasi Gelombang 4 20/21 Genap'
		)
		cy.get('#idperiode').select('2020/2021 Genap')
		cy.get('#idgelombang').select('Gelombang 4')
		cy.get('#idjalurpendaftaran').select('Mandiri S1')
		cy.get('#idsistemkuliah').select('Reguler A')
		cy.get('#status').select('Aktif')
		// data pelengkap
		cy.get('#tglawalbuka').type('01-10-2021').tab()
		cy.get('#tglakhirbuka').type('31-12-2021').tab()
		cy.get('#tglakhirfinalisasi').type('31-12-2021').tab()
		cy.get('#tglawaldaftarulang').type('01-10-2021').tab()
		cy.get('#tglakhirdaftarulang').type('31-12-2021').tab()
		cy.get(
			'#block-isbayar > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper'
		).click()
		cy.get('#jmlnikunik').type('16')
		cy.get(
			'#block-bukabidikmisi > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper'
		).click()
		cy.get('#maxpoinbidikmisi').clear().type('100')
		cy.get('#prefixkodependaftar').clear().type('2')
		cy.get('#jmlurutankodependaftar').select('1')
		cy.get('#prefixnoujian').clear().type('10')
		cy.get('#jmlurutannoujian').select('1')

		// START Mencoba Iframe
		cy.get('#item-keterangan > a').click()
		const iframe = cy
			.get(':nth-child(1) > div.col-md-12 > .wysihtml5-sandbox')
			.its('0.contentDocument.body')
			.should('be.visible')
			.then((current)=>{
				let stripe = cy.wrap(current)
				stripe.type('hello')})

		const iframe1 = cy
			.get(':nth-child(3) > div.col-md-12 > .wysihtml5-sandbox')
			.its('0.contentDocument.body')
			.should('be.visible')
			.then(cy.wrap)

		iframe1.clear().type('Tes Iframe')
		// END Mencoba Iframe

		// data pengaturan
		// cy.get('#item-pengaturan').type('2015')
		// cy.get('#thnlulusakhir').type('2015')
		// cy.get('#tglbataslahirmin').type('01-10-2004').tab()
		// cy.get('#tglbataslahir').type('31-12-2004').tab()
		// cy.get(
		// 	'#block-istampildayatampung > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper'
		// ).click()
		// cy.get(
		// 	'#block-istampildatapesantren > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper'
		// ).click()
		// cy.get('#tglumumkannilai').type('25-10-2021').tab()
		// cy.get('#waktuumumkannilai').type('0855')
		// cy.get('#tglumumkankelulusan').type('30-10-2021').tab()
		// cy.get('#waktuumumkankelulusan').type('2400')

		// data keterangan
		// cy.get(':nth-child(1) > div.col-md-12 > .wysihtml5-sandbox')
		// 	.then(($element) => {
		// 		const $body = $element.contents().find('body')
		// 		let stripe = cy.wrap($body)
		// 		console.log(stripe)
		//         stripe.find('body').eq(0).click().type('4242424242424242')
		// 		// stripe.type('aku', { force: true })
		// 	})

		// const iframe2 = cy
		// 	.get(':nth-child(5) > div.col-md-12 > .wysihtml5-sandbox')
		// 	.its('0.contentDocument.body')
		// 	.should('be.visible')
		// 	.then(cy.wrap).type('bbba')

		// iframe.clear().type('hello')

		// const iframe = cy
		// 	.get(':nth-child(3) > div.col-md-12 > .wysihtml5-sandbox').then($element) =>
		// 	{
		// 		const $body = 
		// 	}
		// selector iframe masih error
		// cy.get('.btn-success').click()
		// cy.get(
		// 	'.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
		// ).click()


		// cy.get(':nth-child(1) > div.col-md-12 > .wysihtml5-sandbox')
		// 	.its('0.contentDocument.body')
		// 	.should('not.be.empty')
		// 	.then((body) => {
		// 		cy.wrap(body)
		// 			.find('[name=keterangan]')
		// 			.type('6011111111111117', { force: true })
		// 	})

		// cy.get(':nth-child(1) > div.col-md-12 > .wysihtml5-sandbox').should(
		// 	(iframe) =>
		// 		expect(iframe.contents().find('body').to.exist)
		// 			.then((iframe) => cy.wrap(iframe.contents().find('body', { timeout: 10 * 1000 })))
		// 			.within({}, ($iframe) => {
		// 				cy.get('input').type('fake@email.com')
		// 			})
		// )

		// cy.get(':nth-child(1) > div.col-md-12 > .wysihtml5-sandbox').within($iframe => {
		// 	const body = $iframe.contents().find('body')
		// 	cy.wrap(body).clear().type('test')
		// 	// myIframe.contentDocument.body.getElementsByTagName('p')[0].textContent = p.
		// })

		// cy.get(':nth-child(1) > div.col-md-12 > textarea#keterangan > .wysihtml5-sandbox')
		// 	.then(function ($iframe) {
		// 		const $body = $iframe.contents().find('body')

		// 		cy.wrap($body).find('input:eq(0)').type('4242424242424242')

		// 		cy.wrap($body).find('input:eq(1)').type('1222')

		// 		cy.wrap($body).find('input:eq(2)').type('123')
		// 	})
		// cy.get(':nth-child(1) > div.col-md-12 > .wysihtml5-sandbox')
		// 	.its('0.contentDocument.body')
		// 	.should('be.visible')
		// 	.then(cy.wrap)
		// 	.type('aaaaaku')
		// type('blassfghjjk bhjkkjh ffgggjhkjkjkjkjkjkjkjk')
	})

	// Mengetes Ini bisadengan 1 iframe saja
	it('test Iframe', () => {
		cy.visit('https://the-internet.herokuapp.com/iframe')
		const iframe = cy
			.get('#mce_0_ifr')
			.its('0.contentDocument.body')
			.should('be.visible')
			.then(cy.wrap)

		iframe.clear()
		iframe.type('hello')
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
		cy.visit('/spmb/ms_syaratdaftar/164')
		cy.get('#i_idsyarat').select('Bukti Biaya Daftar')
		cy.get('#insert-row-ms > td > .btn-success').click()
		cy.get('#i_idsyarat').select('Bukti Terdaftar di Forlap DIKTI')
		cy.get('.btn-success').first().click()
		cy.get('.alert').should('contain', 'Penambahan data Syarat Pendaftaran berhasil')
	})
})
