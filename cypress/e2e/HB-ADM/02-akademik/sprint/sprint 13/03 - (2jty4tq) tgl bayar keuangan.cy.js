/// <reference types="cypress"/>

describe('Penyesuaian tanggal bayar di fitur pembayaran tagihan', () => {
    beforeEach(() => {
        cy.loginsuperadmin()
        cy.modulkeuangan()
        cy.visit('http://localhost/siacloud/keuangan/set_pembayaran')
        cy.fixture("akademik/sprint/sprint13").as('data');
    });

    it('[Mahasiswa] Admin tidak mengisi tanggal bayar', function () {
        cy.get('#nim_label').type(this.data.carimhs)
        cy.get('.tt-suggestion').each(($el) => {
          if ($el.text() === this.data.inquirymhs){cy.wrap($el).click()}
        });
        cy.get('#search-payment').click()
        cy.get('#idbank').select(this.data.bni)
        cy.get('td > .btn').click()
        cy.get('.modal-content').should('contain', this.data.alertwajibisi)
    });
    
    it('[Mahasiswa] Admin tidak mengisi bank', function () {
        cy.get('#nim_label').type(this.data.carimhs)
        cy.get('.tt-suggestion').each(($el) => {
          if ($el.text() === this.data.inquirymhs){cy.wrap($el).click()}
        });
        cy.get('#search-payment').click()
        cy.get('#tglbayar').type(this.data.tglbayar)
        cy.get('td > .btn').click()
        cy.get('.modal-content').should('contain', this.data.alertwajibisi)
    });

    it('[Mahasiswa] Admin tidak mengisi total bayar', function () {
        cy.get('#nim_label').type(this.data.carimhs)
        cy.get('.tt-suggestion').each(($el) => {
          if ($el.text() === this.data.inquirymhs){cy.wrap($el).click()}
        });
        cy.get('#search-payment').click()
        cy.get(':nth-child(1) > [align="text-center"] > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
        cy.get('#tglbayar').type(this.data.tglbayar).tab()
        cy.get('#idbank').select(this.data.bni)
        cy.get('td > .btn').click()
        cy.get('.modal-content').should('contain', this.data.alerttotalbayar)
    });

    it('[pendaftar] Admin tidak mengisi total bayar', function () {
        cy.get('#penerima').select(this.data.pilihuser)
        cy.get('#idpendaftar_label').type(this.data.caripdft)
        cy.get('.tt-suggestion').each(($el) => {
          if ($el.text() === this.data.inquirypdft){cy.wrap($el).click()}
        });
        cy.get('#search-payment').click()
        cy.get(':nth-child(1) > [align="text-center"] > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
        cy.get('#tglbayar').type(this.data.tglbayar).tab()
        cy.get('#idbank').select(this.data.bni)
        cy.get('td > .btn').click()
        cy.get('.modal-content').should('contain', this.data.alerttotalbayar)
    });

    it('[pendaftar] Admin tidak mengisi bank', function () {
        cy.get('#penerima').select(this.data.pilihuser)
        cy.get('#idpendaftar_label').type(this.data.caripdft)
        cy.get('.tt-suggestion').each(($el) => {
          if ($el.text() === this.data.inquirypdft){cy.wrap($el).click()}
        });
        cy.get('#search-payment').click()
        cy.get(':nth-child(1) > [align="text-center"] > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
        cy.get('#tglbayar').type(this.data.tglbayar)
        cy.get('td > .btn').click()
        cy.get('.modal-content').should('contain', this.data.alertwajibisi)
    });

    it('[pendaftar] Admin tidak mengisi tanggal bayar', function () {
        cy.get('#penerima').select(this.data.pilihuser)
        cy.get('#idpendaftar_label').type(this.data.caripdft)
        cy.get('.tt-suggestion').each(($el) => {
          if ($el.text() === this.data.inquirypdft){cy.wrap($el).click()}
        });
        cy.get('#search-payment').click()
        cy.get(':nth-child(1) > [align="text-center"] > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
        cy.get('#idbank').select(this.data.bni)
        cy.get('td > .btn').click()
        cy.get('.modal-content').should('contain', this.data.alertwajibisi)
    });
    
})