const judulHalaman = "Fitur Lupa Password";

describe(judulHalaman, () => {
    beforeEach(() => {
        // open spmbfront
        cy.visit('/spmbfront/')
    });

    it('Verifikasi jika login dengan password yang salah', () => {

        cy.get('.login-button').click()
        cy.get("#idpendaftar").type('1234567');
        cy.get("#pin").type('1234567');

        cy.get(".btn-warning").click();

        // assert gagal login 
        cy.get('.alert').should('contain', 'ID Pendaftar dan PIN tidak sesuai.')


    })

    it('Berhasil login', () => {

        cy.get('.login-button').click()
        cy.get("#idpendaftar").type('212713011');
        cy.get("#pin").type('28072022');

        cy.get(".btn-warning").click();

    })

    it('Pendaftar dapat meminta informasi password dan username untuk login', () => {

        cy.get('.login-button').click()
        cy.get("#idpendaftar").type('1234567');
        cy.get("#pin").type('1234567');

        cy.get(".btn-warning").click();

        // assert gagal login 
        cy.get('.alert').should('contain', 'ID Pendaftar dan PIN tidak sesuai.')

        // klik aksi lupa pin 
        cy.get('.d-flex > a').invoke('removeAttr', 'target').click()

        // input email 
        cy.get('#email').type('oliversukma@yopmail.com')

        // klik lanjutkan
        cy.get('.btn').click()

        // assert hasil pencarian : 
        cy.get('.panel-body').should('contain', 'Kamu terdaftar pada jalur pendaftaran berikut ini. Pilih jalur pendaftaran yang kamu butuhkan untuk login.')


        var index01 = null
        cy.get('.namaperiode').each(($el, index, $list) => {
            cy.log($el.text() === 'Jalur KIP Kuliah', index)
            if ($el.text() === 'Jalur KIP Kuliah') {
                index01 = index;

                // cara 1
                cy.get('.card-footer button[type="submit"]').eq(index01).click()
            }
        })

        // assert berhasil kirim ulang ID 
        cy.get('.alert').should('contain', 'Cek emailmu ya. ID dan PIN berhasil kami kirim ke emailmu.')

    })

    it('Pendaftar dapat meminta informasi password dan username untuk login', () => {

        cy.get('.login-button').click()
        cy.get("#idpendaftar").type('1234567');
        cy.get("#pin").type('1234567');

        cy.get(".btn-warning").click();

        // assert gagal login 
        cy.get('.alert').should('contain', 'ID Pendaftar dan PIN tidak sesuai.')

        // klik aksi lupa pin 
        cy.get('.d-flex > a').invoke('removeAttr', 'target').click()

        // input email 
        cy.get('#email').type('tes@yopmail.com')

        // klik lanjutkan
        cy.get('.btn').click()

        // assert hasil pencarian : 
        cy.get('#err_email').should('contain', 'Email tidak ditemukan')

    })
})