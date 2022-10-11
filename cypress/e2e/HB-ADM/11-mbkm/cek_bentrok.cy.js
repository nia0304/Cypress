/// <reference types="cypress"/>
var nim= '1974201015';
var mhs= '1974201015 - ERIZAL';
//var nim= '1974201005';
describe('Cek Bentrok MBKM', ()=>{
 
  beforeEach(() => {
    //login
      cy.loginsuperadmin()
  });

  /**
   * Beberapa test case bentrok tanggal aktivitas
   * 1. Validasi dari Marketplace
   * 2. Validasi dari Pengajuan
   * 3. Telah divalidasi -> New Pengajuan di Marketplace
   * 4. Telah divalidasi -> New Pengajuan di Pengajuan Manual
   */

  it('Mahasiswa Apply Marketplace', () => {
      cy.moduladminaplikasi()
      cy.visit('http://localhost/siacloud/admin/set_loginas');
      cy.get('#userid_label').type(nim);
      cy.get('.tt-suggestion').each(($el, index, $list) => {
        if($el.text() === mhs){
            cy.wrap($el).click()
        }
      })
      cy.get('[data-cy=btn-login]').click();
      cy.url().should('contains', 'http://localhost/siacloud/gate/menu');
      cy.get('#link-mbkm').click();
      cy.get('#mbkm .rolename').click();
      cy.url().should('contains', 'http://localhost/siacloud/mbkm/home');
      cy.visit('http://localhost/siacloud/mbkm/detail_lowongan/8');
      cy.get('#btn-daftar').click();
      cy.get('.btn-primary').click();
      cy.visit('http://localhost/siacloud/mbkm/detail_lowongan/7');
      cy.get('#btn-daftar').click();
      cy.get('.btn-primary').click();
  });

  it('Mahasiswa Create Pengajuan Manual', () => {
    cy.moduladminaplikasi()
    cy.visit('http://localhost/siacloud/admin/set_loginas');
      cy.get('#userid_label').type(nim);
      cy.get('.tt-suggestion').each(($el, index, $list) => {
        if($el.text() === mhs){
            cy.wrap($el).click()
        }
      })
      cy.get('[data-cy=btn-login]').click();
      cy.url().should('contains', 'http://localhost/siacloud/gate/menu');
      cy.get('#link-mbkm').click();
      cy.get('#mbkm .rolename').click();
      cy.url().should('contains', 'http://localhost/siacloud/mbkm/home');
    cy.visit('mbkm/data_mbkm');
    cy.get('#departemen').type('cek bentrok');
    cy.get('#keterangan').type('cek bentrok');
    cy.get('#idperusahaan').select('new company', { force: true });
    cy.wait(100);
    cy.get('#idperusahaanjobtitle').select('new position', { force: true })
    cy.wait(100);
    cy.get('.btn-success').click();
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('[data-type="ajukan"]').click();
    cy.get('.modal-footer > .btn-primary').click();
  });

  it.skip('Admin Approval dari Marketplace', () => {
    cy.modulmbkm();
    cy.visit('mbkm/list_pendaftarmbkm/8');
    cy.get('[style="width:25px"] > .icheckbox_minimal > .iCheck-helper').click();
    cy.get('.btn-success').click();
    cy.get('.modal-footer > .btn-primary').click();
  });

  it('Admin Approval dari Pengajuan MBKM Manual', () => {
    cy.modulmbkm();
    cy.visit('mbkm/list_mbkm');
    cy.pencarian(nim);
    cy.get('[style="width:25px"] > .icheckbox_minimal > .iCheck-helper').click();
    cy.get('#wrap-button > .btn-success').click();
    cy.get('.modal-footer > .btn-primary').click();
  });

  it('Mahasiswa Apply lagi dari Marketplace', () => {
    cy.moduladminaplikasi()
      cy.visit('http://localhost/siacloud/admin/set_loginas');
      cy.get('#userid_label').type(nim);
      cy.get('.tt-suggestion').each(($el, index, $list) => {
        if($el.text() === mhs){
            cy.wrap($el).click()
        }
      })
      cy.get('[data-cy=btn-login]').click();
      cy.url().should('contains', 'http://localhost/siacloud/gate/menu');
      cy.get('#link-mbkm').click();
      cy.get('#mbkm .rolename').click();
      cy.url().should('contains', 'http://localhost/siacloud/mbkm/home');
      cy.visit('http://localhost/siacloud/mbkm/detail_lowongan/1');
      cy.get('#btn-daftar').click();
      cy.get('.btn-primary').click();
  });

  it('Mahasiswa Apply lagi dari Pengajuan Manual', () => {
    cy.moduladminaplikasi()
    cy.visit('http://localhost/siacloud/admin/set_loginas');
      cy.get('#userid_label').type(nim);
      cy.get('.tt-suggestion').each(($el, index, $list) => {
        if($el.text() === mhs){
            cy.wrap($el).click()
        }
      })
      cy.get('[data-cy=btn-login]').click();
      cy.url().should('contains', 'http://localhost/siacloud/gate/menu');
      cy.get('#link-mbkm').click();
      cy.get('#mbkm .rolename').click();
      cy.url().should('contains', 'http://localhost/siacloud/mbkm/home');
    cy.visit('mbkm/data_mbkm');
    cy.get('#departemen').type('cek bentrok');
    cy.get('#keterangan').type('cek bentrok');
    cy.get('#idperusahaan').select('new company', { force: true });
    cy.wait(100);
    cy.get('#idperusahaanjobtitle').select('new position', { force: true })
    cy.wait(100);
    cy.get('.btn-success').click();
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('[data-type="ajukan"]').click();
    cy.get('.modal-footer > .btn-primary').click();
  });
});