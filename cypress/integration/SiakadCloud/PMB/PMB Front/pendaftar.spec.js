/// <reference types="cypress" />

describe('Pendaftaran', ()=> {
    it('Pendaftaran baru', ()=> {
      cy.visit('https://dev.siakadcloud.com/spmbfront/')  
      cy.fixture("PMB Front/pendaftaran").then((data)=> {
        cy.get('.btn-daftar').click()
        cy.get(':nth-child(6) > .cards-jalur').should('be.visible')
        //jalur pendaftaran
        // cy.get('.jalur-sub-header').should('contain', data.namajalur)
        cy.get(':nth-child(9) > .cards-jalur > .card-footer > .row > :nth-child(1) > .btn').click()
        cy.get('.btn').click()
        //identitas anda
        cy.get('#namapendaftar').type(data.namapendaftar)
        cy.get('#jk_L').check()
        cy.get('#nohp').type(data.nohp)
        cy.get('#email').type(data.email)
        cy.get('#tgllahir').clear().type(data.tgllahir).tab()
        // cy.get('#tmplahir').type(data.tmplahir)
        //select2 kewarganegaraan
        cy.get('#select2-idnegara-container').click()
        cy.get('.select2-search__field').type(data.kewarganeragaan)
        cy.sel2_negara()

        cy.get('#nik').type(data.nik)
        cy.get('.col-md-offset-4 > .btn').should('be.visible')
        cy.get(':nth-child(2) > .btn').should('contain', 'Lanjut').and('be.visible').click()
        
        //asal sekolah
        //select2 provinsi
        cy.get('#select2-idpropinsi-container').click()
        cy.get('.select2-search__field').type(data.provinsi)
        cy.sel2_provinsi()

        //select2 kota
        cy.get('#select2-idkota-container').click()
        cy.get('.select2-search__field').type(data.kota)
        cy.sel2_kota()

        //select2 jenis sekolah
        cy.get('#select2-idjenisinstitusi-container').click()
        cy.get('.select2-search__field').type(data.sekolah)
        cy.sel2_jenissekolah()

        //select2 npsn
        cy.get(':nth-child(4) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-search__field').type(data.npsn).clear()
        cy.get('.select2-search__field').type(data.npsn)
        cy.sel2_npsn()

        cy.get('#jurusan').type(data.jurusan)
        //select2 tahun lulus
        cy.get('#select2-thnlulus-container').click()
        cy.get('.select2-search__field').type(data.thnlulus)
        cy.sel2_thnlulus()

        cy.get('.col-md-offset-4 > .btn').should('contain','Sebelumnya').and('be.visible')
        cy.get(':nth-child(2) > .btn').click()

        //peminatan
        //need lookout
        cy.get('#idjenispilihan').select(data.jenispilihan).wait(0)
        //pilihan1
        cy.get('#select2-pilihan_1-container').click()
        cy.get('.select2-search__field').type(data.pilihan1)
        cy.sel2_pilihan1()

        //pilihan2
        cy.get('#select2-pilihan_2-container').click()
        cy.get('.select2-search__field').type(data.pilihan2)
        cy.sel2_pilihan2()

        cy.get('.col-md-offset-4 > .btn').should('contain', 'Sebelumnya').and('be.visible')
        cy.get(':nth-child(2) > .btn').should('contain','Daftar Sekarang').click()
        
        //Pratinjau
        cy.get('.main-header').should('contain', 'Pratinjau Pendaftar')
        cy.get(':nth-child(3) > label').click()
        cy.get('.row > :nth-child(1) > .btn').should('contain','Perbarui Data')
        cy.get('#confirm-button').should('contain','Konfirmasi Pendaftaran').click()

        //generate formulir
        cy.get(':nth-child(1) > .radio > .col-xs-12 > .cards-pilih-metode').click()
        cy.get('#generate').click()
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-body').should('contain', data.alertgenerate)
        cy.get('.btn-primary').click()
        cy.get('.main-header').should('contain', 'Selesaikan Pembayaran')
        cy.get(':nth-child(1) > .btn').should('contain','Cetak Bukti Daftar').and('be.visible')
        cy.get(':nth-child(2) > .btn').should('contain','Kirim Ulang Email').and('be.visible')
        
      })
    })
})