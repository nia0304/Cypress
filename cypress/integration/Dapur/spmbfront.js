/// <reference types="cypress" />

describe('Pendaftaran', ()=> {
    it('Pendaftaran baru', ()=> {
    //   cy.visit('http://localhost/siacloud/spmbfront/')  
    cy.visit('https://dev.siakadcloud.com/spmbfront/')
    // cy.get('.btn-daftar').click()

    // cy.get(':nth-child(2) > .cards-jalur').should(be.visible)
    // lihat detail jalur pendaftaran
    // body > section > div > div > div > section > div.body-pmb > div:nth-child(2) > div > div:nth-child(2) > div > div.card-footer > div > div:nth-child(1) > a
    // cy.get(':nth-child(2) > .cards-jalur > .card-footer > .row > :nth-child(1) > .btn').click()

    // cy.visit('/spmbfront/jalur-pendaftaran/20212/4/1/1/146')
    // cy.get('.btn-daftar').click()
    // cy.get('#namapendaftar').type('Abaca')
    // cy.get('#nohp').type('086965448232')
    // cy.get('#jk_L').click()
    // cy.get('#email').type('abaca@yopmail.com')
    // cy.get('#tgllahir').clear().type('01-01-2000').tab()
    // cy.get('#nik').type('1234567812345678')
    // cy.get('.btn-warning').click()
    // cy.get('#select2-idpropinsi-container').select('ACEH')

      cy.fixture("PMB Front/data").then((data)=> {
        cy.get('.btn-daftar').click()
        cy.wait(3000)
        cy.get(':nth-child(7) > .cards-jalur').should('be.visible')
        
        //jalur pendaftaran
        cy.get(':nth-child(7) > .cards-jalur > .card-footer > .row > :nth-child(1) > .btn').click()
        cy.get('.jalur-sub-header').should('contain', data.namajalur)
        cy.get('.btn').click()
        //identitas anda
        cy.get('#namapendaftar').type(data.namapendaftar)
        cy.get('#jk_L').check()
        cy.get('#nohp').type(data.nohp)
        cy.get('#email').type(data.email)
        cy.get('#tgllahir').clear().type(data.tgllahir).tab()
        //select2 kewarganegaraan
        cy.get('#select2-idnegara-container').click()
        cy.get('.select2-search__field').type(data.kewarganeragaan)
        cy.get('#select2-idnegara-results').each(($el, index, $list)=> {
            if ($el.text() === data.kewarganeragaan) {
				cy.wrap($el).click()
			}
        })
        cy.get('#nik').type(data.nik)
        cy.get('.col-md-offset-4 > .btn').should('be.visible')
        cy.get(':nth-child(2) > .btn').should('contain', 'Lanjut').and('be.visible').click()
        //asal sekolah
        //select2 provinsi
        cy.get('#select2-idpropinsi-container').click()
        cy.get('.select2-search__field').type(data.provinsi)
        cy.get('#select2-idpropinsi-results').each(($el, index, $list)=> {
            if ($el.text() === data.provinsi) {
				cy.wrap($el).click()
			}
        })
        //select2 kota
        cy.get('#select2-idkota-container').click()
        cy.get('.select2-search__field').type(data.kota)
        cy.get('#select2-idkota-results').each(($el, index, $list)=> {
            if ($el.text() === data.kota) {
				cy.wrap($el).click()
			}
        })
        //select2 jenis sekolah
        cy.get('#select2-idjenisinstitusi-container').click()
        cy.get('.select2-search__field').type(data.sekolah)
        cy.get('#select2-idjenisinstitusi-results').each(($el, index, $list)=> {
            if ($el.text() === data.sekolah) {
				cy.wrap($el).click()
			}
        })
        //select2 npsn
        cy.get(':nth-child(4) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-search__field').type(data.npsn).clear()
        cy.get('.select2-search__field').type(data.npsn)
        cy.get('#select2-npsn-results').each(($el, index, $list)=> {
            if ($el.text() === data.npsn) {
                cy.wrap($el).click()
            }
        })
        //select2 tahun lulus
        cy.get('#select2-thnlulus-container').click()
        cy.get('.select2-search__field').type(data.thnlulus)
        cy.get('#select2-thnlulus-results').each(($el, index, $list)=> {
            if ($el.text() === data.thnlulus) {
                cy.wrap($el).click()
            }
        })

        cy.get('.col-md-offset-4 > .btn').should('be.visible')
        cy.get(':nth-child(2) > .btn').should('contain', 'Lanjut').and('be.visible').click()

        cy.get('#select2-pilihan_1-container').click()
        cy.get('.select2-search__field').type(data.pilihan_1)
        cy.get('#select2-pilihan_1-results').each(($el, index, $list)=> {
            if ($el.text() === data.pilihan_1) {
                cy.wrap($el).click()
            }
        })
        
        cy.get('.col-md-offset-4 > .btn').should('be.visible')
        cy.get(':nth-child(2) > .btn').should('contain', 'Daftar Sekarang ').and('be.visible').click()

      })
    })
})