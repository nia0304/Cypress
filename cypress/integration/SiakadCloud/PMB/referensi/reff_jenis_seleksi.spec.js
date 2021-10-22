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
		// start membuka href sub menu Seleksi > Jenis Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(1) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 > small ').should('contain', 'Daftar Jenis Seleksi')
	})
    it('Add Jenis Seleksi', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Jenis Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(1) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 > small ').should('contain', 'Daftar Jenis Seleksi')
        cy.get('.col-md-4 > .btn').click()
		cy.get('#i_kodejenisseleksi').type('7-1')
		cy.get('#i_namajenisseleksi').type('Seleksi Tes/*2sd')
        cy.get('#i_jeniskelulusan').select('Nilai').should('have.value', 'N');
        // cy.get('.icheckbox_minimal > #i_iswajibikut_1 [type="checkbox"]').check('1', { force: true }).should('be.checked')
        cy.get(
            ':nth-child(4) > .labelinput > .icheckbox_minimal > .iCheck-helper'
          ).click()
          cy.get(
            ':nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper'
          ).click();
          cy.get(
            ':nth-child(6) > .labelinput > .icheckbox_minimal > .iCheck-helper'
          ).click();
          cy.get(
            ':nth-child(7) > .labelinput > .icheckbox_minimal > .iCheck-helper'
          ).click();
          cy.get(
            ':nth-child(8) > .labelinput > .icheckbox_minimal > .iCheck-helper'
          ).click();
          cy.get(':nth-child(9) > .btn-success').click()
		cy.get('.alert').should('contain', 'Penambahan data Jenis Seleksi berhasil')
		cy.get('.alert > .close').click()
	})
    it('Edit Jenis Seleksi', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Jenis Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(1) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 > small ').should('contain', 'Daftar Jenis Seleksi')
        // cy.get('.col-md-4 > .btn').click()
        cy.get(':nth-child(9) > :nth-child(9) > .btn-primary').click()
        cy.get('#u_kodejenisseleksi').clear()
		cy.get('#u_kodejenisseleksi').type('BEASISWA1')
        cy.get('#u_namajenisseleksi').clear()
		cy.get('#u_namajenisseleksi').type('Seleksi Tes')
        cy.get('#u_jeniskelulusan').select('Nilai').should('have.value', 'N')
        // cy.get('.icheckbox_minimal > #i_iswajibikut_1 [type="checkbox"]').check('1', { force: true }).should('be.checked')
        cy.get(
            ':nth-child(9) > :nth-child(4) > .labelinput > .icheckbox_minimal > .iCheck-helper'
          ).click()
          cy.get(
            ':nth-child(9) > :nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper'
          ).click()
          cy.get(
            ':nth-child(9) > :nth-child(6) > .labelinput > .icheckbox_minimal > .iCheck-helper'
          ).click()
          cy.get(
            ':nth-child(9) > :nth-child(7) > .labelinput > .icheckbox_minimal > .iCheck-helper'
          ).click()
          cy.get(
            ':nth-child(9) > :nth-child(8) > .labelinput > .icheckbox_minimal > .iCheck-helper'
          ).click()
        cy.get(':nth-child(9) > :nth-child(9) > .btn-success').click()
		cy.get('.alert').should('contain', 'Pengubahan data Jenis Seleksi berhasil')
		cy.get('.alert > .close').click()
	})
    it('Delete Jenis Seleksi', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Jenis Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(1) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 > small ').should('contain', 'Daftar Jenis Seleksi')
        // cy.get('.col-md-4 > .btn').click()
        cy.get(':nth-child(9) > :nth-child(9) > .btn-danger').click()
        cy.get('.bootbox > .modal-dialog > .modal-content').should(
			'contain',
			'Apakah anda yakin akan menghapus data ini?'
		)
        cy.get('.modal-footer > .btn-primary').click()
		cy.get('.alert').should('contain', 'Penghapusan data Jenis Seleksi berhasil')
		cy.get('.alert > .close').click()
	})
    it.only('Detail Jenis Seleksi', async function () {
		// start memilih menu Referensi
		cy.get('.container > .nav > :nth-child(6)').click()
		// start memilih sub menu Seleksi
		cy.get(
			'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(3)'
		).click()
		// start membuka href sub menu Seleksi > Jenis Seleksi
		cy.get(
			'body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(1) > a'
		)
			.invoke('attr', 'href') // invoke : cypress get href attribute
			.then((href) => {
				cy.visit(href)
			})
        cy.get('.content-header > h1 > small ').should('contain', 'Daftar Jenis Seleksi')
        // cy.get('.col-md-4 > .btn').click()
        cy.get(':nth-child(9) > :nth-child(9) > .btn-info').click()
        cy.contains('Detail Jenis Seleksi').should('be.visible')
        cy.contains('Keterangan: Jenis Akun').should('be.visible')
        // cy.get('#div_cari > .twitter-typeahead > .tt-input').type()
        cy.get('.btn-warning').click()
        cy.get('.btn-success').should('contain', 'Simpan').and('be.visible')
        cy.get('.btn-warning').should('contain', 'Batal').and('be.visible')
        cy.get('.btn-danger').should('contain', 'Hapus').and('be.visible')

        cy.get('#kodejenisseleksi').clear().type('BEASISWAAA')
        cy.get('#namajenisseleksi').clear().type('Seleksi Tes')
		cy.get('#keterangan').type('Keterangan')
        cy.get('#block-iswajibikut > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
        cy.get('#block-iswajiblulus > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
        cy.get('#block-dayatampung').type('150')
        cy.get('#block-isruang > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
        cy.get('#block-isbebastes > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
        cy.get('#block-iscbt > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
        cy.get('#idjenisakun').select('TES KESEHATAN').should('have.value', 'TESKES')
        cy.get('.btn-success').click()
        cy.get('.modal-content').should(
			'contain',
			'Apakah anda yakin akan menyimpan data ini?'
		)
        cy.get('.modal-footer > .btn-default').should('contain', 'Cancel').and('be.visible')
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.alert').should('contain', 'Pengubahan data Jenis Seleksi berhasil')
		cy.get('.alert > .close').click()
	})
})
