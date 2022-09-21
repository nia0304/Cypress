/// <reference types="cypress" />

describe("Data Penguji", () => {
    beforeEach("Login Siakad", () => {
        cy.loginUserSuperAdmin();
        cy.openModulPmb();

        cy.Menu_Jadwal_Seleksi()

        cy.fixture('HB-PMB/03-pengaturan/jadwal-seleksi/ms_peserta').as('data')
    });

    it("Tambah Data Penguji", function () {

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


        // cy.get(":nth-child(2) > .text-right > .btn-info > .fa").click();
        cy.get("#sidebar-menu-list > :nth-child(2) > a")
            .should("contain", this.data.menu)
            .click();
        cy.get('#i_nip_label').type(this.data.cariDosen1)
        cy.get('.tt-dataset-1 div').each(($el, index, $list) => {
            if ($el.text() == this.data.namaDosen1) {
                cy.wrap($el).click()
            }
        });
        cy.get(":nth-child(2) > .labelinput > .icheckbox_minimal > .iCheck-helper").click();
        cy.get("#insert-row-ms > :nth-child(4) > .btn > .fa").click();
        cy.get("header").scrollIntoView();
        cy.get(".alert").should("contain", this.data.alertSimpan);
    });

    it("Edit Data Penguji", function () {
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

        cy.get("#sidebar-menu-list > :nth-child(2) > a")
            .should("contain", this.data.menu)
            .click();
        cy.get(':nth-child(2) > :nth-child(4) > .btn-primary > .fa').click();
        cy.get('#u_nip_label').clear().type(this.data.cariDosen2);
        cy.get('.tt-dropdown-menu > .tt-dataset-2 div').each(($el, index, $list) => {
            if ($el.text() == this.data.namaDosen2) {
                cy.wrap($el).click()
            }
        });

        cy.get(":nth-child(2) > :nth-child(4) > .btn-success > .fa").click();
        //cy.get("#insert-row-ms > :nth-child(4) > .btn > .fa").click();
        cy.get("header").scrollIntoView();
        cy.get(".alert").should("contain", this.data.alertUbah);
    });

    it("Hapus data penguji", function () {
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

        cy.get("#sidebar-menu-list > :nth-child(2) > a")
            .should("contain", this.data.menu)
            .click();

        cy.get('td').contains(this.data.namaDosen2)
            .parent()
            .find('.btn-danger').click().wait(0)

        cy.get('.modal-content').should('contain', this.data.modalHapus)
        cy.get('.modal-footer > .btn-primary').click()

        cy.get("header").scrollIntoView();
        // assert berhasil hapus 
        cy.get('.alert').should('contain', this.data.alertHapus)
    });

    // negatif case
    it("Duplikat data penguji", function () {
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


        // cy.get(":nth-child(2) > .text-right > .btn-info > .fa").click();
        cy.get("#sidebar-menu-list > :nth-child(2) > a")
            .should("contain", this.data.menu)
            .click();
        cy.get('#i_nip_label').type(this.data.cariDosen1)
        cy.get('.tt-dataset-1 div').each(($el, index, $list) => {
            if ($el.text() == this.data.namaDosen1) {
                cy.wrap($el).click()
            }
        });
        cy.get(":nth-child(2) > .labelinput > .icheckbox_minimal > .iCheck-helper").click();
        cy.get("#insert-row-ms > :nth-child(4) > .btn > .fa").click();
        cy.get("header").scrollIntoView();
        cy.get(".alert").should("contain", this.data.alertBentrok);

    });

    it("Menambahkan dosen penguji tanpa melengkapi data", function () {
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


        // cy.get(":nth-child(2) > .text-right > .btn-info > .fa").click();
        cy.get("#sidebar-menu-list > :nth-child(2) > a")
            .should("contain", this.data.menu)
            .click();
        // cy.get('#i_nip_label').type(this.data.cariDosen1)
        // cy.get('.tt-dataset-1 div').each(($el, index, $list) => {
        //     if ($el.text() == this.data.namaDosen1) {
        //         cy.wrap($el).click()
        //     }
        // });
        // cy.get(":nth-child(2) > .labelinput > .icheckbox_minimal > .iCheck-helper").click();
        cy.get("#insert-row-ms > :nth-child(4) > .btn > .fa").click();
        // cy.get("header").scrollIntoView();
        cy.get('.modal-content').should('contain', this.data.modalPeringatan)

    });
});
