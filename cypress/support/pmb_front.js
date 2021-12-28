Cypress.Commands.add('sl2_negara', ()=> {
    cy.fixture("PMB Front/pendaftaran").then((data)=> {
        cy.get('#select2-idnegara-results').each(($el, index, $list)=> {
            if ($el.text() === data.kewarganeragaan) {
                cy.wrap($el).click()
            }
        })
    })
})

Cypress.Commands.add('sl2_provinsi', ()=> {
    cy.fixture("PMB Front/pendaftaran").then((data)=> {
        cy.get('#select2-idpropinsi-results').each(($el, index, $list)=> {
            if ($el.text() === data.provinsi) {
                cy.wrap($el).click()
            }
        })
    })
})

Cypress.Commands.add('sl2_kota', ()=> {
    cy.fixture("PMB Front/pendaftaran").then((data)=> {
        cy.get('#select2-idkota-results').each(($el, index, $list)=> {
            if ($el.text() === data.kota) {
                cy.wrap($el).click()
            }
        })
    })
})

Cypress.Commands.add('sl2_jenissekolah', ()=> {
    cy.fixture("PMB Front/pendaftaran").then((data)=> {
        cy.get('#select2-idjenisinstitusi-results').each(($el, index, $list)=> {
            if ($el.text() === data.sekolah) {
                cy.wrap($el).click()
            }
        })
    })
})

Cypress.Commands.add('sl2_npsn', ()=> {
    cy.fixture("PMB Front/pendaftaran").then((data)=> {
        cy.get('#select2-npsn-results').each(($el, index, $list)=> {
            if ($el.text() === data.npsn) {
                cy.wrap($el).click()
            }
        })
    })
})

Cypress.Commands.add('sl2_thnlulus', ()=> {
    cy.fixture("PMB Front/pendaftaran").then((data)=> {
        cy.get('#select2-thnlulus-results').each(($el, index, $list)=> {
            if ($el.text() === data.thnlulus) {
                cy.wrap($el).click()
            }
        })
    })
})

Cypress.Commands.add('sl2_pilihan1', ()=> {
    cy.fixture("PMB Front/pendaftaran").then((data)=> {
        cy.get('#select2-pilihan_1-results').each(($el, index, $list)=> {
            if ($el.text() === data.pilihan1) {
                cy.wrap($el).click()
            }
        })
    })
})

Cypress.Commands.add('sl2_pilihan2', ()=> {
    cy.fixture("PMB Front/pendaftaran").then((data)=> {
        cy.get('#select2-pilihan_2-results').each(($el, index, $list)=> {
            if ($el.text() === data.pilihan2) {
                cy.wrap($el).click()
            }
        })
    })
})
