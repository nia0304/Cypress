/// <reference types="cypress"/>

describe('Redesain pengisian kuesioner edom dan layanan', ()=>{
    beforeEach(() => {
        cy.loginmhs()
        cy.visit('http://localhost/siacloud/siakad/list_angket');
    });

    it('Periode pengisian kuesioner ditutup', ()=>{
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('[data-cy="periode-ditutup"]').should('contain', data.alert_periodetutup )
        })
    })
    
    it('Batas tanggal akhir pengisian kuesioner', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('[data-cy="waktu-pengisian-kuesioner"]').should('contain', data.alert_bataspengisian )
        })
    });

    it('Filter periode pengisian kuesioner bukan 20221', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('[data-cy="dropdown-desktop"]').click()
            cy.get('.dropdown-menu > :nth-child(3) > .radio-filter').click()
            cy.get('[data-cy="waktu-pengisian-kuesioner"]').should('not.exist')
        })
    });

    it('Cari Kuesioner', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('[data-cy="search-bar"]').type(data.kelas_edom)
            cy.get('[data-kelas="273346"]').should('contain', data.kelas_edom)
            cy.get('[data-cy="belum-diisi"]').should('contain', data.belumdiisi)
        })
    });

    it('Mahasiswa keluar dari halaman pengisian kuesioner layanan', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('[data-cy="search-bar"]').type(data.layanan)
            cy.get('[data-jeniskuesioner="layanan"]').should('contain', data.layanan)
            cy.get('[data-cy="belum-diisi"]').should('contain', data.belumdiisi)
            cy.get('[data-jeniskuesioner="layanan"]').click()
            cy.get('[data-cy="nama-kategori"]').should('contain', data.kategori_prasarana)
            cy.get('#btn-out-edom').click()
            cy.get('.modal-paragraf').should('contain', data.exit_kuesioner)
            cy.get('[data-cy="btn-popup-batal"]').should('exist')
            cy.get('[data-cy="btn-popup-yakin"]').click()
        })
    });

    it('Mahasiswa melanjutkan kategori ketika pertanyaan belum diisi', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('[data-cy="search-bar"]').type(data.layanan)
            cy.get('[data-jeniskuesioner="layanan"]').should('contain', data.layanan)
            cy.get('[data-cy="belum-diisi"]').should('contain', data.belumdiisi)
            cy.get('[data-jeniskuesioner="layanan"]').click()
            cy.get('[data-cy="nama-kategori"]').should('contain', data.kategori_prasarana)
            cy.get('.table-highlight-onboarding > .column-table > .row > .col-md-7 > .option-kuesioner > :nth-child(2) > .radio-filter > .circle > .inner').click()
            cy.get('.button-group > [data-cy="btn-next"]').click()
            cy.contains(data.alert_wajibisi).and('exist')
        })
    });

    it('Mahasiswa melanjutkan kategori pengisian kuesioner', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('[data-cy="search-bar"]').type(data.layanan)
            cy.get('[data-jeniskuesioner="layanan"]').should('contain', data.layanan)
            cy.get('[data-cy="belum-diisi"]').should('contain', data.belumdiisi)
            cy.get('[data-jeniskuesioner="layanan"]').click()
            cy.get('[data-cy="nama-kategori"]').should('contain', data.kategori_prasarana)
            cy.get('.table-highlight-onboarding > .column-table > .row > .col-md-7 > .option-kuesioner > :nth-child(2)').click()
            cy.get('.question-2 > .row > .col-md-7 > .option-kuesioner > :nth-child(3) > .radio-filter').click()
            cy.get('.question-3 > .row > .col-md-7 > .option-kuesioner > :nth-child(4) > .radio-filter').click()
            cy.get('.question-4 > .row > .col-md-7 > .option-kuesioner > :nth-child(5) > .radio-filter').click()
            cy.get('#jawaban_6').type(data.bahasan)
            cy.get('.question-7 > .row > .col-md-7 > .option-kuesioner > :nth-child(6) > .radio-filter').click()
            cy.get('.question-8 > .row > .col-md-7 > .option-kuesioner > :nth-child(5) > .radio-filter').click()
            cy.get('.question-9 > .row > .col-md-7 > .option-kuesioner > :nth-child(4) > .radio-filter').click()
            cy.get('.question-10 > .row > .col-md-7 > .option-kuesioner > :nth-child(3) > .radio-filter').click()
            cy.get('.button-group > [data-cy="btn-next"]').click()
            cy.get('[data-cy="nama-kategori"]').should('contain', data.kategori_perpustakaan)   
        })
    });

    it('Mahasiswa menyelesaikan pengisian kuesioner layanan', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('[data-cy="search-bar"]').type(data.layanan)
            cy.get('[data-jeniskuesioner="layanan"]').should('contain', data.layanan)
            cy.get('[data-cy="belum-diisi"]').should('contain', data.belumdiisi)
            cy.get('[data-jeniskuesioner="layanan"]').click()
            cy.get('.button-group > [data-cy="btn-next"]').click()
            cy.get('.table-highlight-onboarding > .column-table > .row > .col-md-7 > .option-kuesioner > :nth-child(2) > .radio-filter').click()
            cy.get('.question-15 > .row > .col-md-7 > .option-kuesioner > :nth-child(3) > .radio-filter').click()
            cy.get('#jawaban_16').type(data.bahasan)
            cy.get('.button-group > [data-cy="btn-next"]').click()
            cy.get(':nth-child(2) > .radio-filter').click()
            cy.get('#jawaban_12').type(data.bahasan)
            cy.get('.button-group > [data-cy="btn-next"]').click()
            cy.get(':nth-child(2) > .radio-filter').click()
            cy.get('#jawaban_14').type(data.bahasan)
            cy.get('.button-group > [data-cy="btn-next"]').should('contain', 'Kirimkan').click()
            cy.get('.modal-paragraf').should('contain', data.kirimjwb)
            cy.get('[data-cy="btn-popup-yakin"]').click()
            cy.get('[data-cy="simpan-berhasil"]').should('contain', data.alert_simpanlayanan)
            cy.get('[data-cy="sudah-diisi"]').should('exist')
        })
    });

    it.only('Mahasiswa cek hasil pengisian kuesioner layanan', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('[data-cy="search-bar"]').type(data.layanan)
            cy.get('[data-jeniskuesioner="layanan"]').should('contain', data.layanan)
            cy.get('[data-cy="sudah-diisi"]').should('exist')
            cy.get('[data-jeniskuesioner="layanan"]').click()
            cy.get('[data-cy="mode-pratinjau"]').should('exist')
            cy.get('.button-group > [data-cy="btn-out-pratinjau"]').should('contain', 'Keluar dari Pratinjau').click()
        })
    });
})
