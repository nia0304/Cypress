/// <reference types="cypress"/>

describe('Testing data pelengkap tarif honor', ()=>{
 
  beforeEach(() => {
      cy.loginsuperadmin()
      cy.modulakademik()
      cy.visit('siakad/list_honortarif');
      cy.fixture('HB-ADM/02-akademik/05_data_pelengkap/05-pegawai/tarif_honor').as('data')
      cy.fixture('modal_konfirmasi').as('writting')
  });

  //positif rest
  it('Admin cek filter jenis honor', function () {
    cy.get('#kodehonor').select(this.data.praktikum)
    cy.get('#kodehonor option:selected').invoke('text').then((honor => {
      cy.wrap(honor).should('equal', this.data.praktikum)
    }))
  });

  it('Admin cek filter jabatan fungsional', function () {
    cy.get('#jabfung').select(this.data.jabfung)
    cy.get('#jabfung option:selected').invoke('text').then((jabfung => {
      cy.wrap(jabfung).should('equal', this.data.jabfung)
    }))
  });

  it('Admin cek filter pendidikan terakhir', function () {
    cy.get('#jenjang').select(this.data.jenjang)
    cy.get('#jenjang option:selected').invoke('text').then((jenjang => {
      cy.wrap(jenjang).should('equal', this.data.jenjang)
    }))
  });

  it('Admin cek filter jenis pegawai', function () {
    cy.get('#jenispeg').select(this.data.jenispeg)
    cy.get('#jenispeg option:selected').invoke('text').then((jenispeg => {
      cy.wrap(jenispeg).should('equal', this.data.jenispeg)
    }))
  });
  it('Admin cek filter jabatan struktural', function () {
    cy.get('#jabstruk').select(this.data.jabstruk)
    cy.get('#jabstruk option:selected').invoke('text').then((jabstruk => {
      cy.wrap(jabstruk).should('equal', this.data.jabstruk)
    }))
  });

  it('Admin menambahkan data tarif honor ketika jenis honor tidak diisi', function () {
    cy.get('[data-type="add"]').should('be.visible').click();
    // cy.get('#kodehonor')
    cy.get('#idjenispeg').select(this.data.jenispeg)
    cy.get('#idjabfung').select(this.data.jabfung)
    cy.get('#idjabstruktural').select(this.data.jabstruk)
    cy.get('#idjenjang').select(this.data.jenjang)
    cy.get('#nominal').type(this.data.nominal01)
    cy.get('[data-type="save"]').should('be.visible').click()
    cy.konfirmasi_isian_kosong()
  });
  it('Admin menambahkan data tarif honor ketika nominal tarif tidak diisi', function () {
    cy.get('[data-type="add"]').should('be.visible').click();
    cy.get('#kodehonor').select(this.data.mengajar)
    cy.get('#idjenispeg').select(this.data.jenispeg)
    cy.get('#idjabfung').select(this.data.jabfung)
    cy.get('#idjabstruktural').select(this.data.jabstruk)
    cy.get('#idjenjang').select(this.data.jenjang)
    // cy.get('#nominal')
    cy.get('[data-type="save"]').should('be.visible').click()
    cy.konfirmasi_isian_kosong()
  });

  it.only('Admin menambahkan data tarif honor', function () {
    cy.get('[data-type="add"]').should('be.visible').click();
    cy.get('#kodehonor').select(this.data.mengajar)
    cy.get('#idjenispeg').select(this.data.jenispeg)
    cy.get('#idjabfung').select(this.data.jabfung)
    cy.get('#idjabstruktural').select(this.data.jabstruk)
    cy.get('#idjenjang').select(this.data.jenjang)
    cy.get('#nominal').type(this.data.nominal01)
    cy.get('[data-type="save"]').should('be.visible').click()
    cy.modal_konfirmasi(this.writting.simpan, "ya")
    cy.get('.alert').should('contain', this.data.alertsimpan)
      .and('be.visible')
  });

  it('Admin mengubah data tarif honor', function () {
    cy.get('td').contains(this.data.mengajar)
      .parent()
      .find('button.btn.btn-info.btn-xs.btn-flat')
      .click()
    cy.get('[data-type="edit"]').click()
    cy.get('#nominal').clear().type(this.data.nominal02)
    cy.get('[data-type="save"]').click();
    cy.konfirmasi_simpan()
  });

  //negatif test
  it('Admin menambahkan data yang sama (duplikasi)', function () {
    cy.get('[data-type="add"]').should('be.visible').click();
    cy.get('#kodehonor').select(this.data.mengajar)
    cy.get('#idjenispeg').select(this.data.jenispeg)
    cy.get('#idjabfung').select(this.data.jabfung)
    cy.get('#idjabstruktural').select(this.data.jabstruk)
    cy.get('#idjenjang').select(this.data.jenjang)
    cy.get('#nominal').type(this.data.nominal01)
    cy.get('[data-type="save"]').should('be.visible').click()
    cy.konfirmasi_simpan()
    cy.get('.alert').should('contain', this.data.alertduplikasi)
      .and('be.visible')
  });
  
  it('Admin menambahkan data tarif dengan nominal minus', function () {
    cy.get('[data-type="add"]').should('be.visible').click();
    cy.get('#kodehonor').select(this.data.mengajar)
    cy.get('#idjenispeg').select(this.data.jenispeg)
    cy.get('#idjenjang').select(this.data.jenjang)
    cy.get('#nominal').type(this.data.nominal03)
    cy.get('[data-type="save"]').should('be.visible').click()
    cy.konfirmasi_simpan()
  });

  it('Admin hapus data tarif', function () {
    for(let n = 1; n <= 2; n++){
      cy.get(':nth-child(1) > .text-right > .btn-danger').click()
      cy.konfirmasi_setuju_hapus()
      cy.get('.alert').should('contain', this.data.alerthapus)
      cy.wait(400)
    }    
  });
});
