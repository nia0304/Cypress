/// <reference types="cypress"/>

describe('Penyesuaian kuesioner layanan', ()=>{
    beforeEach(() => {
        cy.loginsuperadmin()
        cy.modulakademik()
    });

    it('Cek informasi nonaktif kuesioner lama', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.visit('http://localhost/siacloud/siakad/list_angketlayanan');
            cy.get('.alert-v1').should('contain', data.alert_cutoff)
            cy.get('.alert-v1 > .btn').should('contain', data.btn_kuesionerbaru).click()
            // cy.url().should('contain', 'list_kuesionerlayanan')
        })
    });

    it('Cek periode 2022/2023 Ganjil tidak muncul di kuesioner lama', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.visit('http://localhost/siacloud/siakad/list_angketlayanan');
            cy.get('#select2-periode-container').click()
            cy.get('.select2-search__field').type(data.periodecutoff)
            cy.get('.select2-results__option').should('contain', data.periodetidakada)
        })
    });

    it('Cek isian kuesioner layanan di periode akademik 2022/2023 Ganjil', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.visit('http://localhost/siacloud/siakad/list_periode');
            cy.get(':nth-child(1) > .text-right > .btn-info').click()
            cy.get('#block-idkuesionerlayanan > .col-md-5').should('contain', data.new_kuesioner)
        })
    });

    it('Cek laporan rekap kuesioner layanan baru untuk periode di bawah 2022/2023 Ganjil', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.visit('http://localhost/siacloud/siakad/repp_kuesionerlayanan');
            cy.get('#select2-idperiode-container').click()
            cy.get('.select2-search__field').type(data.periodelama)
            cy.get('.select2-results__option').should('contain', data.periodetidakada)
        })
    });

    it('Cek laporan rekap kuesioner layanan baru (Skala)', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.visit('http://localhost/siacloud/siakad/repp_kuesionerlayanan');
            cy.get('#select2-idperiode-container').click()
            cy.get('.select2-results__option').click()
            cy.get('[onclick="goSubmitRep(this)"]').click()
            cy.get('.title').should('contain', data.title)
            cy.get(':nth-child(2) > [width="34%"]').should('contain', data.skala)
        })
    });

    it('Cek laporan rekap kuesioner layanan baru (Essay)', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.visit('http://localhost/siacloud/siakad/repp_kuesionerlayanan');
            cy.get('#select2-idperiode-container').click()
            cy.get('.select2-results__option').click()
            cy.get(':nth-child(2) > .iradio_minimal > .iCheck-helper').click()
            cy.get('[onclick="goSubmitRep(this)"]').click()
            cy.get('.title').should('contain', data.title)
            cy.get(':nth-child(2) > [width="34%"]').should('contain', data.Essay)
        })
    });

    it('Cek laporan kuesioner layanan lama (Pilihan Ganda)', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.visit('http://localhost/siacloud/siakad/repp_rekapangketlayanan');
            cy.get('#select2-idperiode-container').click()
            cy.get('.select2-search__field').type(data.periodelama)
            cy.get('#select2-idperiode-results').each(($el) => {
                if ($el.text() === data.periodelama){cy.wrap($el).click()}
            });
            cy.get('[onclick="goSubmitRep(this)"]').click()
            cy.get('.title').should('contain', data.title)
            cy.get('tbody > :nth-child(1) > :nth-child(7)').should('contain', data.pilihanganda)
        })
    });

    it('Cek laporan kuesioner layanan lama (Uraian)', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.visit('http://localhost/siacloud/siakad/repp_rekapangketlayanan');
            cy.get('#select2-idperiode-container').click()
            cy.get('.select2-search__field').type(data.periodelama)
            cy.get('#select2-idperiode-results').each(($el) => {
                if ($el.text() === data.periodelama){cy.wrap($el).click()}
            });
            cy.get(':nth-child(2) > .iradio_minimal > .iCheck-helper').click()
            cy.get('[onclick="goSubmitRep(this)"]').click()
            cy.get('.title').should('contain', data.title)
            cy.get('tbody > :nth-child(1) > :nth-child(7)').should('contain', data.uraian)
        })
    });

    it.only('Cek periode cut off tidak muncul di kuesioner lama', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.visit('http://localhost/siacloud/siakad/repp_rekapangketlayanan');
            cy.get('#select2-idperiode-container').click()
            cy.get('.select2-search__field').type(data.periodecutoff)
            cy.get('.select2-results__option').should('contain', data.periodetidakada)
        })
    });
})