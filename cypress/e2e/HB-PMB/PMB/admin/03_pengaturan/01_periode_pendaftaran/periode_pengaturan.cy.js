/// <reference types="cypress"/>

const judulHalaman = "Daftar Periode Pendaftaran";

describe(judulHalaman, () => {

  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Periode()

    cy.fixture('HB-PMB/03-pengaturan/periode_pengaturan').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('.content-header > h1 > small').should('contain',judulHalaman)
  // });

  //positif test
  it('Admin mengisi filter periode pendaftaran', function () {
    // filter periode
    cy.contains("#collapseidperiode > .box-body a", this.data.filterPeriode).click();
    // filter jalur
    cy.get(':nth-child(2) > .box-header').click()
    cy.contains("#collapseidjalurpendaftaran > .box-body a", this.data.filterJalur).click({ force: true });
    // filter gelombang
    cy.get(':nth-child(3) > .box-header').click()
    cy.contains("#collapseidgelombang > .box-body a", this.data.filterGelombang).click({ force: true });
    // filter sistem kuliah
    cy.get(':nth-child(4) > .box-header').click()
    cy.contains("#collapseidsistemkuliah > .box-body a", this.data.filterSistemKuliah).click({ force: true });
    // filter status
    cy.get(':nth-child(5) > .box-header').click()
    cy.contains("#collapsestatus > .box-body a", this.data.filterStatus).click({ force: true });

    cy.get('td').contains(this.data.filterPeriode)

  });

  it('Memastikan nama tabel periode pendaftaran ada 8', () => {
    cy.get('.content-header > h1 > small').should('contain', 'Daftar Periode Pendaftaran')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Periode Pendaftaran')
      .should('contain', 'Periode')
      .should('contain', 'Gelombang')
      .should('contain', 'Jalur')
      .should('contain', 'Sistem Kuliah')
      .should('contain', 'Jumlah Prodi')
      .should('contain', 'Status')
      .and('contain', 'Aksi')
  })

  it("Penambahan periode pendaftaran gratis", function () {

    cy.get("#wrap-button > .btn-success").click()
    cy.get("#namaperiodedaftar").type(this.data.namaperiodedaftar);
    cy.get("#idperiode").select(this.data.idperiode, { force: true });
    cy.get("#idgelombang").select(this.data.idgelombang, { force: true });
    cy.get("#idjalurpendaftaran").select(this.data.idjalurpendaftaran, { force: true });
    cy.get("#idsistemkuliah").select(this.data.idsistemkuliah, { force: true });
    //tab pelengkap
    cy.get("#tglawalbuka").type(this.data.tglawalbuka).tab();
    cy.get("#tglakhirbuka").type(this.data.tglakhirbuka).tab();
    cy.get("#tglakhirfinalisasi").type(this.data.tglakhirfinalisasi).tab();
    cy.get("#tglawaldaftarulang").type(this.data.tglawaldaftarulang).tab();
    cy.get("#tglakhirdaftarulang").type(this.data.tglakhirdaftarulang).tab();
    cy.get("#jmlnikunik").clear().type(this.data.jmlnikunik);
    cy.get("#prefixkodependaftar").type(this.data.prefixkodependaftar);
    cy.get("#jmlurutankodependaftar").select(this.data.jmlurutankodependaftar);
    cy.get("#prefixnoujian").type(this.data.prefixnoujian);
    cy.get("#jmlurutannoujian").select(this.data.jmlurutannoujian);
    cy.get("#urutan").clear().type(this.data.urutan);
    //tab pengaturan
    cy.get("#item-pengaturan > a").click();
    cy.get("#thnlulusakhir").type(this.data.thnlulusakhir);
    cy.get("#tglumumkannilai").type(this.data.tglumumkannilai).tab();
    cy.get("#waktuumumkannilai").type(this.data.waktuumumkannilai);
    cy.get("#tglumumkankelulusan").type(this.data.tglumumkankelulusan).tab();
    cy.get("#waktuumumkankelulusan").type(this.data.waktuumumkankelulusan);
    cy.get(
      "#block-ispilihprodisama > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      "#block-ispilihfakultassama > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(".btn-success").click();

    // assert modal simpan
    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    // klik batalkan
    // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-default').click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)

  });

  it("Pengubahan periode pendaftaran gratis", function () {

    // filter periode
    cy.contains("#collapseidperiode > .box-body a", this.data.filterPeriode).click();
    // filter jalur
    cy.get(':nth-child(2) > .box-header').click()
    cy.contains("#collapseidjalurpendaftaran > .box-body a", this.data.filterJalur).click({ force: true });
    // filter gelombang
    cy.get(':nth-child(3) > .box-header').click()
    cy.contains("#collapseidgelombang > .box-body a", this.data.filterGelombang).click({ force: true });
    // filter sistem kuliah
    cy.get(':nth-child(4) > .box-header').click()
    cy.contains("#collapseidsistemkuliah > .box-body a", this.data.filterSistemKuliah).click({ force: true });

    cy.get('td').contains(this.data.namaperiodedaftar)
      .parent()
      .find('.btn-info').click().wait(0)
    // klik edit
    cy.get(".col-md-7 > .btn-warning").click()
    cy.get("#namaperiodedaftar").clear().type(this.data.namaperiodedaftaredit);
    cy.get("#idperiode").select(this.data.idperiode, { force: true });
    cy.get("#idgelombang").select(this.data.idgelombang, { force: true });
    cy.get("#idjalurpendaftaran").select(this.data.idjalurpendaftaran, { force: true });
    cy.get("#idsistemkuliah").select(this.data.idsistemkuliah, { force: true });
    //tab pelengkap
    cy.get("#tglawalbuka").clear().type(this.data.tglawalbuka).tab();
    cy.get("#tglakhirbuka").clear().type(this.data.tglakhirbuka).tab();
    cy.get("#tglakhirfinalisasi").clear().type(this.data.tglakhirfinalisasi).tab();
    cy.get("#tglawaldaftarulang").clear().type(this.data.tglawaldaftarulang).tab();
    cy.get("#tglakhirdaftarulang").clear().type(this.data.tglakhirdaftarulang).tab();
    cy.get("#jmlnikunik").clear().type(this.data.jmlnikunik);
    cy.get("#prefixkodependaftar").clear().type(this.data.prefixkodependaftar);
    cy.get("#jmlurutankodependaftar").select(this.data.jmlurutankodependaftar);
    cy.get("#prefixnoujian").clear().type(this.data.prefixnoujian);
    cy.get("#jmlurutannoujian").select(this.data.jmlurutannoujian);
    cy.get("#urutan").clear().type(this.data.urutan);

    // klik simpan
    cy.get(".btn-success").click();

    // assert modal simpan
    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    // klik batalkan
    // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-default').click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertUbah)

  });

  it("Penghapusan periode pendaftaran gratis", function () {

    // filter periode
    cy.contains("#collapseidperiode > .box-body a", this.data.filterPeriode).click();
    // filter jalur
    cy.get(':nth-child(2) > .box-header').click()
    cy.contains("#collapseidjalurpendaftaran > .box-body a", this.data.filterJalur).click({ force: true });
    // filter gelombang
    cy.get(':nth-child(3) > .box-header').click()
    cy.contains("#collapseidgelombang > .box-body a", this.data.filterGelombang).click({ force: true });
    // filter sistem kuliah
    cy.get(':nth-child(4) > .box-header').click()
    cy.contains("#collapseidsistemkuliah > .box-body a", this.data.filterSistemKuliah).click({ force: true });

    cy.get('td').contains(this.data.namaperiodedaftaredit)
      .parent()
      .find('.btn-danger').click().wait(0)

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)

  });

  it("Penambahan periode pendaftaran berbayar", function () {

    cy.get("#wrap-button > .btn-success").click()
    cy.get("#namaperiodedaftar").type(this.data.namaperiodedaftarbayar);
    cy.get("#idperiode").select(this.data.idperiodebayar, { force: true });
    cy.get("#idgelombang").select(this.data.idgelombangbayar, { force: true });
    cy.get("#idjalurpendaftaran").select(this.data.idjalurpendaftaranbayar, { force: true });
    cy.get("#idsistemkuliah").select(this.data.idsistemkuliahbayar, { force: true });
    //tab pelengkap
    cy.get("#tglawalbuka").type(this.data.tglawalbukabayar).tab();
    cy.get("#tglakhirbuka").type(this.data.tglakhirbukabayar).tab();
    cy.get("#tglakhirfinalisasi").type(this.data.tglakhirfinalisasibayar).tab();
    cy.get("#tglawaldaftarulang").type(this.data.tglawaldaftarulangbayar).tab();
    cy.get("#tglakhirdaftarulang").type(this.data.tglakhirdaftarulangbayar).tab();
    cy.get(
      "#block-isbayar > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get("#jmlnikunik").clear().type(this.data.jmlnikunikbayar);
    cy.get("#prefixkodependaftar").type(this.data.prefixkodependaftarbayar);
    cy.get("#jmlurutankodependaftar").select(this.data.jmlurutankodependaftarbayar);
    cy.get("#prefixnoujian").type(this.data.prefixnoujianbayar);
    cy.get("#jmlurutannoujian").select(this.data.jmlurutannoujianbayar);
    cy.get("#urutan").clear().type(this.data.urutanbayar);
    //tab pengaturan
    cy.get("#item-pengaturan > a").click();
    cy.get("#thnlulusakhir").type(this.data.thnlulusakhirbayar);
    cy.get("#tglumumkannilai").type(this.data.tglumumkannilaibayar).tab();
    cy.get("#waktuumumkannilai").type(this.data.waktuumumkannilaibayar);
    cy.get("#tglumumkankelulusan").type(this.data.tglumumkankelulusanbayar).tab();
    cy.get("#waktuumumkankelulusan").type(this.data.waktuumumkankelulusanbayar);
    cy.get(
      "#block-ispilihprodisama > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      "#block-ispilihfakultassama > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(".btn-success").click();

    // assert modal simpan
    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    // klik batalkan
    // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-default').click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertSimpan)

  });

  // negatif case
  it("Penambahan periode pendaftaran yang sama", function () {

    cy.get("#wrap-button > .btn-success").click()
    cy.get("#namaperiodedaftar").type(this.data.namaperiodedaftar);
    cy.get("#idperiode").select(this.data.idperiode, { force: true });
    cy.get("#idgelombang").select(this.data.idgelombangSama, { force: true });
    cy.get("#idjalurpendaftaran").select(this.data.idjalurpendaftaran, { force: true });
    cy.get("#idsistemkuliah").select(this.data.idsistemkuliah, { force: true });
    //tab pelengkap
    cy.get("#tglawalbuka").type(this.data.tglawalbuka).tab();
    cy.get("#tglakhirbuka").type(this.data.tglakhirbuka).tab();
    cy.get("#tglakhirfinalisasi").type(this.data.tglakhirfinalisasi).tab();
    cy.get("#tglawaldaftarulang").type(this.data.tglawaldaftarulang).tab();
    cy.get("#tglakhirdaftarulang").type(this.data.tglakhirdaftarulang).tab();
    cy.get("#jmlnikunik").clear().type(this.data.jmlnikunik);
    cy.get("#prefixkodependaftar").type(this.data.prefixkodependaftar);
    cy.get("#jmlurutankodependaftar").select(this.data.jmlurutankodependaftar);
    cy.get("#prefixnoujian").type(this.data.prefixnoujian);
    cy.get("#jmlurutannoujian").select(this.data.jmlurutannoujian);
    cy.get("#urutan").clear().type(this.data.urutan);
    //tab pengaturan
    cy.get("#item-pengaturan > a").click();
    cy.get("#thnlulusakhir").type(this.data.thnlulusakhir);
    cy.get("#tglumumkannilai").type(this.data.tglumumkannilai).tab();
    cy.get("#waktuumumkannilai").type(this.data.waktuumumkannilai);
    cy.get("#tglumumkankelulusan").type(this.data.tglumumkankelulusan).tab();
    cy.get("#waktuumumkankelulusan").type(this.data.waktuumumkankelulusan);
    cy.get(
      "#block-ispilihprodisama > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      "#block-ispilihfakultassama > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(".btn-success").click();

    // assert modal simpan
    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    // klik batalkan
    // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-default').click()

    // assert 
    cy.get('.alert').should('contain', this.data.alertDuplikasi)

  });

  it("Penghapusan periode pendaftaran yang sudah tereferensi", function () {

    // filter periode
    cy.contains("#collapseidperiode > .box-body a", this.data.filterPeriode).click();
    // filter jalur
    cy.get(':nth-child(2) > .box-header').click()
    cy.contains("#collapseidjalurpendaftaran > .box-body a", this.data.filterJalur).click({ force: true });
    // filter gelombang
    cy.get(':nth-child(3) > .box-header').click()
    cy.contains("#collapseidgelombang > .box-body a", this.data.filterGelombang2).click({ force: true });
    // filter sistem kuliah
    cy.get(':nth-child(4) > .box-header').click()
    cy.contains("#collapseidsistemkuliah > .box-body a", this.data.filterSistemKuliah2).click({ force: true });

    cy.get('td').contains(this.data.namaperiodedaftarhapus)
      .parent()
      .find('.btn-danger').click().wait(0)

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertGagalHapus)

  });

  it("Penambahan periode pendaftaran tanpa melengkapi data", function () {

    cy.get("#wrap-button > .btn-success").click()
    cy.get("#namaperiodedaftar").type(this.data.namaperiodedaftarbayar);
    cy.get("#idperiode").select(this.data.idperiodebayar, { force: true });
    cy.get("#idgelombang").select(this.data.idgelombangbayar, { force: true });
    cy.get("#idjalurpendaftaran").select(this.data.idjalurpendaftaranbayar, { force: true });
    cy.get("#idsistemkuliah").select(this.data.idsistemkuliahbayar, { force: true });
    
    cy.get(".btn-success").click();

    // assert modal simpan
    cy.get('.bootbox-body').should('contain', this.data.modalSimpan)
    cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    // klik batalkan
    // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-default').click()

    // assert
    cy.get('.bootbox-body').should('contain', this.data.modalPeringatan)
    // cy.get('.modal-footer > .btn-primary').click()

  });

  it("Penghapusan periode pendaftaran di aksi all ketika tidak ada data yang di pilih", function () {

    cy.get("#wrap-button > .btn-danger").click()
    cy.get('.bootbox-body').should('contain', this.data.modalHapusAll)
    // klik ok
    // cy.get('.modal-footer > .btn').click()

  });

  

});
