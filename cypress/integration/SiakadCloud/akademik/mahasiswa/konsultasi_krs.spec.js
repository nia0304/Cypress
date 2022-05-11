/// <reference types="cypress"/>

describe("Konsultasi KRS", () => {
    beforeEach("Login Mahasiswa", () => {
        cy.usermhs();
        cy.visit("https://dev.siakadcloud.com/siakad/data_konsultasi_new")
      });
    
      it("Belum ada konsultasi", ()=> {
          cy.get('.page-title').should("contain", "Konsultasi Pembimbing")
          cy.get('[data-cy="empty-list-konsultasi"]').should("contain", "Belum ada Obrolan Disini")
          cy.get('[data-cy="#modal-btn-konsultasi"] > .ripple').should("be.visible")
      })

      it("Filter periode konsultasi tidak ada", ()=> {
        cy.get('#select2-select-periode-container').click()
        cy.get('.select2-search__field').type("2040")
        cy.get('.select2-results__option').should("contain", "No results found")
      })

      it("Pilih filter periode konsultasi", ()=> {
        cy.get('#select2-select-periode-container').click()
        cy.get('.select2-search__field').type("2020/2021 Genap")
        cy.get('#select2-select-periode-results').each(($el, index, $list)=> {
          if ($el.text() === "2020/2021 Genap") {
              cy.wrap($el).click()
          }
      })
      })

      it("Mengosongkan isian modal tambah  konsultasi", ()=>{
        cy.get('[data-cy="#modal-btn-konsultasi"] > .ripple').click()
        cy.get('#modal-add-konsultasi').should('be.visible')
        cy.get('[data-cy="input-topik"]').type('Konsultasi Pengambilan KRS')
        cy.get('[data-cy="input-keterangan"]').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
        cy.get('[data-cy="btn-kosongkan"] > .ripple').click()
      })

      it.only("Menambah konsultasi", ()=>{
        cy.get('[data-cy="#modal-btn-konsultasi"] > .ripple').click()
        cy.get('#modal-add-konsultasi').should('be.visible')
        cy.get('[data-cy="input-topik"]').type('Konsultasi Pengambilan KRS')
        cy.get('[data-cy="input-keterangan"]').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
        cy.get('[data-cy="btn-mulai-konsultasi"] > .ripple').click()
        cy.get('.top-alert > .container-xxl').should('contain', 'Penambahan data konsultasi pembimbing akademik berhasil').and('be.visible')
        cy.get('[data-cy="info-nav-chat"]').should('contain', 'Konsultasi Pengambilan KRS').and('be.visible')
      })
})