/// <reference types="cypress" />

describe('Pendaftaran', ()=> {
    it('Pendaftaran baru', ()=> {
      cy.visit('https://dev.siakadcloud.com/spmbfront/')  
      cy.fixture("PMB Front/pendaftaran").then((data)=> {
        cy.get('.btn-daftar').click()
        //cy.get(':nth-child(2) > .cards-jalur').should('be.visible')
        //jalur pendaftaran
        cy.wait(0);
        cy.get(':nth-child(3) > .cards-jalur > .card-footer > .row > :nth-child(2) > .btn').click()
        //cy.get('.jalur-sub-header').should('contain', data.namajalur)
        //cy.get('.btn').click()
        //identitas anda
        cy.get('#namapendaftar').type(data.namapendaftar)
        cy.get('#jk_L').check()
        cy.get('#nohp').type(data.nohp)
        cy.get('#email').type(data.email)
        cy.get('#tgllahir').clear().type(data.tgllahir).tab()
        cy.get('#nik').type(data.nik)
        //select2 kewarganegaraan
        cy.get('#select2-idnegara-container').click()
        cy.get('.select2-search__field').type(data.kewarganeragaan)
        cy.get('#select2-idnegara-results').each(($el, index, $list)=> {
            if ($el.text() === data.kewarganeragaan) {
				cy.wrap($el).click()
			}
        })
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

      })
    })
})