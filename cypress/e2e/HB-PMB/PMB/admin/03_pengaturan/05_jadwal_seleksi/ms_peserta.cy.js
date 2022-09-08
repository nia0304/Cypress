/// <reference types="cypress" />

describe("Peserta Seleksi", () => {
    beforeEach("Login Siakad", () => {
        cy.loginUserSuperAdmin();
        cy.openModulPmb();

        cy.Menu_Jadwal_Seleksi()

        cy.fixture('HB-PMB/03-pengaturan/jadwal-seleksi/ms_peserta').as('data')
    });

    it("Generate Peserta Seleksi", function () {
        // filter periode
        cy.get("#select2-periode-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterPeriode);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterPeriode) {
                cy.wrap($el).click().wait(0)
            }
        })

        // filter gelombang
        cy.get("#select2-gelombang-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterGelombang);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterGelombang) {
                cy.wrap($el).click().wait(0)
            }
        })

        // filter jalur
        cy.get("#select2-jalur-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterJalur);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterJalur) {
                cy.wrap($el).click().wait(0)
            }
        })

        // filter jalur
        cy.get("#select2-sistem-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterSistemKuliah);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterSistemKuliah) {
                cy.wrap($el).click().wait(0)
            }
        })

        // klik edit
        cy.get('td').contains(this.data.filterSeleksi1)
            .parent()
            .find('.btn-info').click().wait(0)

        cy.get("#sidebar-menu-list > :nth-child(3) > a")
            .should("contain", this.data.menu)
            .click();
        cy.get(".btn-success > span").click();
        // aseert modal
        cy.get('.bootbox-body').should("contain", this.data.modalGenerate)
        // klik generate peserta
        cy.get(".modal-footer > .btn-primary").click();

        cy.get('.alert').should('contain', this.data.alertBerhasilGenerate)


        // // klik batal
        // cy.get(".modal-footer > .btn-default").click();
        // // klik generate peserta dan tagihan
        // cy.get(".modal-footer > .btn-info").click();

        // cy.get("#form_list > div > table").getTable().should(tableData => {
        //     //        hasil log data diletakkan di fixture          
        //            cy.log(tableData)
        //     cy.fixture('HB-PMB/03-pengaturan/jadwal-seleksi/list_peserta_seleksi.json').then((dataFixture) => {
        //         expect(tableData).to.deep.equal(dataFixture)
        //     });
        // });
    });

    it("Edit nilai Peserta Seleksi", function () {
        // filter periode
        cy.get("#select2-periode-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterPeriode);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterPeriode) {
                cy.wrap($el).click().wait(0)
            }
        })

        // filter gelombang
        cy.get("#select2-gelombang-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterGelombang);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterGelombang) {
                cy.wrap($el).click().wait(0)
            }
        })

        // filter jalur
        cy.get("#select2-jalur-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterJalur);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterJalur) {
                cy.wrap($el).click().wait(0)
            }
        })

        // filter jalur
        cy.get("#select2-sistem-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterSistemKuliah);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterSistemKuliah) {
                cy.wrap($el).click().wait(0)
            }
        })

        // klik edit
        cy.get('td').contains(this.data.filterSeleksi1)
            .parent()
            .find('.btn-info').click().wait(0)

        cy.get("#sidebar-menu-list > :nth-child(3) > a")
            .should("contain", this.data.menu)
            .click();

        cy.get('td').contains(this.data.namaPeserta)
            .parent()
            .find('.btn-primary').click().wait(0)


        cy.get('#u_nilaiseleksi').type(this.data.nilaiSeleksi)

        cy.get(':nth-child(6) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
        cy.get(':nth-child(7) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
        cy.get('#u_nip').select(this.data.namaDosen1)

        cy.get(':nth-child(9) > button.btn.btn-success.btn-xs.btn-flat').click()

        cy.get('.alert').should('contain', this.data.alertUbah)

    });

    it("Hapus Peserta Seleksi", function () {
        // filter periode
        cy.get("#select2-periode-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterPeriode);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterPeriode) {
                cy.wrap($el).click().wait(0)
            }
        })

        // filter gelombang
        cy.get("#select2-gelombang-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterGelombang);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterGelombang) {
                cy.wrap($el).click().wait(0)
            }
        })

        // filter jalur
        cy.get("#select2-jalur-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterJalur);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterJalur) {
                cy.wrap($el).click().wait(0)
            }
        })

        // filter jalur
        cy.get("#select2-sistem-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterSistemKuliah);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterSistemKuliah) {
                cy.wrap($el).click().wait(0)
            }
        })

        // klik edit
        cy.get('td').contains(this.data.filterSeleksi1)
            .parent()
            .find('.btn-info').click().wait(0)

        cy.get("#sidebar-menu-list > :nth-child(3) > a")
            .should("contain", this.data.menu)
            .click();

        cy.get('td').contains(this.data.namaPeserta)
            .parent()
            .find('.btn-danger').click().wait(0)

        cy.get('.modal-content').should('contain', this.data.modalHapus)
        cy.get('.modal-footer > .btn-primary').click()

        cy.get("header").scrollIntoView();
        // assert berhasil hapus 
        cy.get('.alert').should('contain', this.data.alertUbah)

    });

    //negatif case
    it("Hapus all Peserta Seleksi tanpa memilih peserta", function () {
        // filter periode
        cy.get("#select2-periode-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterPeriode);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterPeriode) {
                cy.wrap($el).click().wait(0)
            }
        })

        // filter gelombang
        cy.get("#select2-gelombang-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterGelombang);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterGelombang) {
                cy.wrap($el).click().wait(0)
            }
        })

        // filter jalur
        cy.get("#select2-jalur-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterJalur);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterJalur) {
                cy.wrap($el).click().wait(0)
            }
        })

        // filter jalur
        cy.get("#select2-sistem-container").click();
        cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterSistemKuliah);
        cy.get('.select2-results__option').each(($el, index, $list) => {
            if ($el.text() === this.data.filterSistemKuliah) {
                cy.wrap($el).click().wait(0)
            }
        })

        // klik edit
        cy.get('td').contains(this.data.filterSeleksi1)
            .parent()
            .find('.btn-info').click().wait(0)

        cy.get("#sidebar-menu-list > :nth-child(3) > a")
            .should("contain", this.data.menu)
            .click();

        cy.get('.col-md-7 > .btn-danger').click()

        cy.get('.bootbox-body').should('contain', this.data.modalKonfirmasiHapus)
        // // klik ok 
        // cy.get('.modal-footer > .btn').click()

    });

});