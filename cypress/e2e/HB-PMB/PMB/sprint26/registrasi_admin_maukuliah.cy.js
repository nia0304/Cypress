const judulHalaman = "Admin Login Maukuliah dair Siakadcloud";

describe(judulHalaman, () => {

    beforeEach(() => {
        //login admin PMB
        cy.loginUserAdminPmb()
        
        // go to target page
        cy.Menu_Dashboard()

        cy.fixture('HB-PMB/sprint26/admin_login_maukuliah').as('data')
    });

    it('Registrasi maukuliah melalui pmb', function () {
        
        cy.get('.text-wrapper > .btn').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://dev.maukuliah.id/')

        cy.get('#nama_awal').type(this.data.namaAwal)
        cy.get('#nama_akhir').type(this.data.namaAkhir)
        cy.get('#password').type(this.data.password)
        cy.get('#no_telepon').type(this.data.noTelp)
        cy.get('#jabatan').type(this.data.jabatan)

        cy.get('#btn-submit').click()

        cy.get('.ant-spin-container').should('contain', 'Berhasil login ke maukuliah')
    })

    it('Registrasi maukuliah melalui pmb tanpa melengkapi data', function () {
        
        cy.get('.text-wrapper > .btn').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://dev.maukuliah.id/')

        cy.get('#btn-submit').click()

        cy.get(':nth-child(4) > .form-group > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error')
        .should('contain', 'password wajib diisi')

        cy.get(':nth-child(5) > .form-group > .ant-row > .ant-form-item-control > .ant-form-item-explain > .ant-form-item-explain-error')
        .should('contain', 'no telepon wajib diisi')
    })

    it('Data kampus tidak terdaftar pada maukuliah', function () {
        
        cy.get('.text-wrapper > .btn').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://dev.maukuliah.id/')

        cy.get('.ant-result-title').should('contain', 'Universitas Anda tidak terdaftar di Maukuliah')
        
    })

    it('Salah satu field form ada yang tidak terisi', function () {
        
        cy.get('.text-wrapper > .btn').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://dev.maukuliah.id/login-siakadcloud')
        
    })

    it('Login maukuliah melalui modul pmb jika email belum di isi di siakadcloud', function () {
        
        cy.get('.text-wrapper > .btn').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://dev.maukuliah.id/')

        cy.get('.ant-result-title').should('contain', this.data.alertEmailKosong)
        
    })

    it('Add on belum tersetting pada administrasi aplikasi', function () {
        
        cy.get('.text-wrapper > .btn').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://dev.maukuliah.id/')

        cy.get('.ant-result-title').should('contain', this.data.alertAddon)
        
    })

    it('Data kampus tidak terdaftar pada maukuliah)', function () {
        
        cy.get('.text-wrapper > .btn').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://dev.maukuliah.id/')

        cy.get('.ant-result-title').should('contain', this.data.alertUnivBelumTerdaftar)
        
    })

})