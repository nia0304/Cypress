/// <reference types="cypress"/>

describe('Testing data referensi periode yudisium', ()=>{
 
  beforeEach(() => {
      cy.loginsuperadmin()
      cy.modulakademik()
      cy.visit('siakad/ms_periodewisuda');
  });

  //positif test
  it('Admin menambahkan periode yudisium dengan periode kosong', () => {
    cy.get('button').contains('Tambah').click()
    cy.get('#i_idperiodewsd')
    cy.get('#i_idperiode').select('2020/2021 Genap')
    cy.get('#i_namaperiodewsd').type('20202')
    cy.get('#i_tglyudisium').type('01-09-2022').tab()
    cy.get('#i_tglawaldaftar').type('02-09-2022').tab()
    cy.get('#i_tglakhirdaftar').type('31-09-2022').tab()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.konfirmasi_isian_kosong()
  });

  it('Admin menambahkan periode yudisium dengan mengisi periode dan periode akademik', () => {
    cy.get('button').contains('Tambah').click()
    cy.get('#i_idperiodewsd').type('20202')
    cy.get('#i_idperiode').select('2020/2021 Genap')
      .parent()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain', 'Penambahan data periode wisuda berhasil').and('be.visible')
  });

  it('Admin menambahkan periode yudisium dengan periode karakter', () => {
    cy.get('button').contains('Tambah').click()
    cy.get('#i_idperiodewsd').type('22/22')
    cy.get('#i_idperiode').select('2020 Pendek')
      .parent()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain', 'Penambahan data periode wisuda berhasil').and('be.visible')
  });

  it('Admin menambahkan periode yudisium dengan periode huruf', () => {
    cy.get('button').contains('Tambah').click()
    cy.get('#i_idperiodewsd').type('2periode')
    cy.get('#i_idperiode').select('2021 Gasal')
      .parent()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain', 'Penambahan data periode wisuda berhasil').and('be.visible')
  });

  it('Admin menambahkan periode yudisium', () => {
    cy.get('button').contains('Tambah').click()
    cy.get('#i_idperiodewsd').type('20212')
    cy.get('#i_idperiode').select('2021 Genap')
    cy.get('#i_namaperiodewsd').type('20202')
    cy.get('#i_tglyudisium').type('01-09-2022').tab()
    cy.get('#i_tglawaldaftar').type('02-09-2022').tab()
    cy.get('#i_tglakhirdaftar').type('31-09-2022').tab()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain', 'Penambahan data periode wisuda berhasil').and('be.visible')
  });

  //negatif test
  it('Admin menambahkan data yang sama (duplikasi)', () => {
    cy.get('button').contains('Tambah').click()
    cy.get('#i_idperiodewsd').type('20212')
    cy.get('#i_idperiode').select('2021 Genap')
    cy.get('#i_namaperiodewsd').type('20202')
    cy.get('#i_tglyudisium').type('01-09-2022').tab()
    cy.get('#i_tglawaldaftar').type('02-09-2022').tab()
    cy.get('#i_tglakhirdaftar').type('31-09-2022').tab()
      .parent()
      .find('button.btn.btn-success.btn-xs.btn-flat').click()
    cy.get('.alert').should('contain', 'Penambahan data periode wisuda gagal, ada duplikasi data').and('be.visible')
  });

  it.only('Admin menambahkan periode yudisium dengan format tanggal yudisium y-m-d', () => {
    cy.get('button').contains('Tambah').click()
    cy.get('#i_idperiodewsd').type('3')
    cy.get('#i_idperiode').select('2022/2023 Ganjil')
    cy.get('#i_namaperiodewsd').type('20221')
    cy.get('#i_tglyudisium').type('2022-09-09')
      .tab()
      .tab()
      .tab()
      .parent()
    cy.get('#i_tglyudisium').invoke('val').then((tgl => cy.log(tgl)))
  });
});
