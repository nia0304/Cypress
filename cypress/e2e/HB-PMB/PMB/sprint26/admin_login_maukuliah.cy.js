const judulHalaman = "Admin Login Maukuliah dair Siakadcloud";

describe(judulHalaman, () => {

    beforeEach(() => {
        //login
        cy.loginUserSuperAdmin()
        //open PMB module
        cy.openModulPmb()
        // go to target page
        cy.Menu_Dashboard()

        cy.fixture('HB-PMB/sprint26/admin_login_maukuliah').as('data')
    });

    it('Login maukuliah melalui modul pmb (email admin telah terdaftar)', function () {
        
        cy.get('.text-wrapper > .btn').invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'https://dev.maukuliah.id/')
    })

    it('Login maukuliah melalui modul pmb (email admin belum terdaftar)', function () {
        
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