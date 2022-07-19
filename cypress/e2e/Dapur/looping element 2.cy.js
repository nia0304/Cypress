/// <reference types="cypress"/>

describe('Automation Test Suite - Fixtures', function () {
    //looping through both the fixtues 
        describe('test', () => {
            // accessing the test data from the fixture file
            before(function () {
                cy.fixture("looping").then(function (testData) {
                    this.testData = testData;
                })
            })
            beforeEach(() => {
                cy.loginsuperadmin()
                cy.modulakademik()
            }); 
            it("login", function () {
                cy.visit('http://localhost/siacloud/siakad/ms_tahapajuta');
                cy.get('#select2-jenis-container').click()
                cy.get('.select2-search__field').type('tesis{enter}')
                this.testData.forEach((value) => {
                    // cy.log(value)
                    cy.get('#wrap-button > .btn').click()
                    cy.get('#i_nourut').type(value.urut)
                    cy.get('#i_namatahap').type(value.nama)
                    cy.get(':nth-child(4) > .btn-success').click()
                })
            })
        })
})