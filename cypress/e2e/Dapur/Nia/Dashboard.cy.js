/// <reference types="cypress"/>

beforeEach("login",()=>{
    cy.login();
    cy.pilih_modul_akademik();
  })

it("Dashboard Mahasiswa Baru",()=>{
    cy.visit('/siakad/home');
    cy.get(':nth-child(1) > .small-box-new > .inner > h3').invoke('text').then((jmlmhsbaru)=>{
        const x=jmlmhsbaru.trim();

        cy.visit('/siakad/list_mahasiswa');
        cy.get(':nth-child(2) > .box-header > .box-title > [data-testid]').click();
        cy.get('#collapseAngkatan > .box-body > .slimScrollDiv > .tree > ul > :nth-child(1) > a').click();
        cy.get('.col-md-4 > .callout').invoke('text').then((totalmhsbaru)=>{
            const y=totalmhsbaru.trim().replace('(','').split(" ")[2];
            expect(y).to.equal(x);
        })
    })
})

it("Dashboard Mahasiswa Aktif",()=>{
    cy.visit('/siakad/home');
    cy.get(".small-box-new.bg-green h3:first").invoke('text').then((jmlmhsaktif)=>{
        const x=jmlmhsaktif.trim();

        cy.visit('/siakad/list_mahasiswa');
        cy.get(':nth-child(3) > .box-header > .box-title > [data-testid]').click();
        cy.get('#collapseStatusMahasiswa > .box-body > .slimScrollDiv > .tree > ul > :nth-child(1) > a').click();
        cy.get('.col-md-4 > .callout').invoke('text').then((totalmhsaktif)=>{ 
            cy.log(totalmhsaktif);
            const y= totalmhsaktif.trim().replace('(','').split(" ")[2];
            expect(y).to.equal(x);
        })
    })
})

it("Dashboard Mahasiswa Terdaftar",()=>{
    cy.visit('/siakad/home');
    cy.get(".small-box-new.bg-green h3:last").invoke('text').then((jmlmhsterdaftar)=>{
        const x=jmlmhsterdaftar.trim();
        cy.log(x);
        cy.visit('/siakad/list_mahasiswa');
        cy.get('.col-md-4 > .callout').invoke('text').then((totalmhsterdaftar)=>{
            const y = totalmhsterdaftar.trim().replace('(','').split(" ")[2];
            expect(y).to.equal(x);
        })
    })
})


  