/// <reference types="cypress"/>

beforeEach("login",()=>{
    cy.login();
    cy.pilih_modul_akademik();
  })

it("Dashboard Mahasiswa Baru",()=>{
    cy.get(':nth-child(1) > .small-box-new > .inner > h3').invoke('text').then((jmlmhsbaru)=>{
        cy.log(jmlmhsbaru);
    })
    cy.visit('/siakad/list_mahasiswa');
    cy.get(':nth-child(2) > .box-header > .box-title > [data-testid]').click();
    cy.get('#collapseAngkatan > .box-body > .slimScrollDiv > .tree > ul > :nth-child(1) > a').click();
    cy.get('.col-md-4 > .callout').invoke('text').then((totalmhsbaru)=>{
        cy.log(totalmhsbaru);
        let splitText = totalmhsbaru.trim().replace('(','').split(" ")[2]
        cy.log(splitText);
        expect(splitText).to.equal('9');
    })
})

it("Dashboard Mahasiswa Aktif",()=>{
    cy.visit('/siakad/home')
    cy.get(".small-box-new.bg-green h3:first").invoke('text').then((jmlmhsaktif)=>{
        cy.log(jmlmhsaktif);
    })
    cy.visit('/siakad/list_mahasiswa');
    cy.get(':nth-child(3) > .box-header > .box-title > [data-testid]').click();
    cy.get('#collapseStatusMahasiswa > .box-body > .slimScrollDiv > .tree > ul > :nth-child(1) > a').click();
    cy.get('.col-md-4 > .callout').invoke('text').then((totalmhsaktif)=>{
        cy.log(totalmhsaktif);
        let splitText = totalmhsaktif.trim().replace('(','').split(" ")[2]
        cy.log(splitText);
        expect(splitText).to.equal('13.334');
    })
})

it.only("Dashboard Mahasiswa Terdaftar",()=>{
    cy.visit('/siakad/home')
    cy.get(".small-box-new.bg-green h3:last").invoke('text').then((jmlmhsterdaftar)=>{
        cy.log(jmlmhsterdaftar);
    })
    cy.visit('/siakad/list_mahasiswa');
    cy.get('.col-md-4 > .callout').invoke('text').then((totalmhsterdaftar)=>{
        cy.log(totalmhsterdaftar);
        cy.get('#collapseStatusMahasiswa > .box-body > .slimScrollDiv > .tree > ul > :nth-child(1) > a').click();
        let splitText = totalmhsterdaftar.trim().replace('(','').split(" ")[2]
        cy.log(splitText);
        expect(splitText).to.equal('44.439');
    })
})


  