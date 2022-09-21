/// <reference types="cypress"/>

const judulHalaman = "Jadwal";

describe(judulHalaman, () => {

  beforeEach(() => {
    //login
    cy.loginUserSuperAdmin()
    //open PMB module
    cy.openModulPmb()
    // go to target page
    cy.Menu_Jadwal_Seleksi()

    cy.fixture('HB-PMB/03-pengaturan/jadwal_seleksi').as('data')
  });

  // it('Buka Halaman', () => {
  //   cy.get('.content-header > h1 > small').should('contain',judulHalaman)
  // });

  //positif test
  it('Admin mengisi filter jadwal seleksi', function () {
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

    cy.get("#select2-seleksi-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterSeleksi1);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.filterSeleksi1) {
        cy.wrap($el).click().wait(0)
      }
    })

    cy.get('td').contains(this.data.dataKosong)

  });

  it('Memastikan nama tabel jadwal seleksi ada 8', () => {
    cy.get('.content-header > h1 > small').should('contain', 'Jadwal')

    cy.get('.table-responsive > .table  > thead > tr')
      .should('contain', 'Jenis')
      .should('contain', 'Seleksi')
      .should('contain', 'Ruang')
      .should('contain', 'Tanggal')
      .should('contain', 'Mulai')
      .should('contain', 'Selesai')
      .should('contain', 'Kuota')
      .should('contain', 'Peserta')
      .should('contain', 'No. Ujian')
      .and('contain', 'Aksi')
  })

  it("Penambahan jadwal seleksi", function () {

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

    // filter seleksi
    cy.get("#select2-seleksi-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterSeleksi1);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.filterSeleksi1) {
        cy.wrap($el).click().wait(0)
      }
    })

    // klik tambah
    cy.get("#wrap-button > .btn-success").click()

    // mengisi jenis pilihan
    cy.get("#select2-idjenispilihan-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.jenisProgram1);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.jenisProgram1) {
        cy.wrap($el).click().wait(0)
      }
    })

    // mengisi jenis seleksi
    cy.get("#select2-idjenisseleksi-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterSeleksi1);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.filterSeleksi1) {
        cy.wrap($el).click().wait(0)
      }
    })

    // mengisi ruang
    cy.get("#select2-idruang-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.ruang1);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.ruang1) {
        cy.wrap($el).click().wait(0)
      }
    })

    // mengisi tanggal awal seleksi
    cy.get('#tgljadwal').type(this.data.tgljadwal1).tab();
    // mengisi tanggal selesai seleksi
    cy.get('#tgljadwalselesai').type(this.data.tgljadwalselesai1).tab();
    // mengisi waktu awal seleksi
    cy.get('#waktumulai').type(this.data.waktumulai1);
    // mengisi waktu selesai seleksi
    cy.get('#waktuselesai').type(this.data.waktuselesai1);

    // klik simpan
    cy.get('.btn-success').click()

    // assert modal simpan
    cy.get('.modal-content').should('contain', this.data.modalSimpan)
    cy.get('.modal-footer > .btn-primary').click()
    // klik batalkan 
    // cy.get('.modal-footer > .btn-default').click()

    // assert berhasil simpan 
    cy.get('.alert').should('contain', this.data.alertSimpan)

  })

  it("Pengubah jadwal seleksi", function () {

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

    // filter seleksi
    cy.get("#select2-seleksi-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterSeleksi1);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.filterSeleksi1) {
        cy.wrap($el).click().wait(0)
      }
    })

    // klik edit
    cy.get('td').contains(this.data.filterSeleksi1)
      .parent()
      .find('.btn-info').click().wait(0)

    // klik tombol edit
    cy.get(".col-md-7 > .btn-warning").click()

    // mengisi jenis pilihan
    cy.get("#select2-idjenispilihan-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.jenisProgram2);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.jenisProgram2) {
        cy.wrap($el).click().wait(0)
      }
    })

    // mengisi jenis seleksi
    cy.get("#select2-idjenisseleksi-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterSeleksi2);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.filterSeleksi2) {
        cy.wrap($el).click().wait(0)
      }
    })

    // mengisi ruang
    cy.get("#select2-idruang-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.ruang2);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.ruang2) {
        cy.wrap($el).click().wait(0)
      }
    })

    // mengisi tanggal awal seleksi
    cy.get('#tgljadwal').clear().type(this.data.tgljadwal2).tab();
    // mengisi tanggal selesai seleksi
    cy.get('#tgljadwalselesai').clear().type(this.data.tgljadwalselesai2).tab();
    // mengisi waktu awal seleksi
    cy.get('#waktumulai').clear().type(this.data.waktumulai2);
    // mengisi waktu selesai seleksi
    cy.get('#waktuselesai').clear().type(this.data.waktuselesai2);

    // klik simpan
    cy.get('.btn-success').click()

    // assert modal simpan
    cy.get('.modal-content').should('contain', this.data.modalSimpan)
    cy.get('.modal-footer > .btn-primary').click()
    // klik batalkan 
    // cy.get('.modal-footer > .btn-default').click()

    // assert berhasil simpan 
    cy.get('.alert').should('contain', this.data.alertUbah)

  })

  it("Penghapusan jadwal seleksi", function () {

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

    // filter seleksi
    cy.get("#select2-seleksi-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterSeleksi2);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.filterSeleksi2) {
        cy.wrap($el).click().wait(0)
      }
    })

    // klik edit
    cy.get('td').contains(this.data.filterSeleksi2)
      .parent()
      .find('.btn-danger').click().wait(0)

    cy.get('.modal-content').should('contain', this.data.modalHapus)
    cy.get('.modal-footer > .btn-primary').click()

    // assert berhasil hapus 
    cy.get('.alert').should('contain', this.data.alertHapus)

  })

  it("Generate Jadwal Seleksi", function () {
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

    // filter sistem kuliah
    cy.get("#select2-sistem-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterSistemKuliah);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.filterSistemKuliah) {
        cy.wrap($el).click().wait(0)
      }
    })

    cy.get(".btn-warning").click();
    // cy.get("#idjenispilihan").select("IPA").should("have.value", "IPA");
    // cy.get("#idseleksiprodi").select("TES CBT")

    cy.get("#idjenispilihan").select(this.data.jenisProgramGenerate)
    cy.get("#idseleksiprodi").select(this.data.jenisSeleksiGenerate)

    cy.get("#tgljadwal").type(this.data.tgljadwalGenerate).tab();
    cy.get("#tgljadwalselesai").type(this.data.tgljadwalselesaiGenerate).tab();
    cy.get("#waktumulai").type(this.data.waktumulaiGenerate);
    cy.get("#waktuselesai").type(this.data.waktuselesaiGenerate);
    
    cy.get(".select2-search__field").click();
    cy.get(".select2-search__field").type(this.data.ruang2);
    cy.get('.select2-results__options').each(($el, index, $list) => {
      if ($el.text() === this.data.ruang2) {
        cy.wrap($el).click().wait(0)
      }
    })

    cy.get(".modal-footer > .btn").click();
    cy.get(".modal-footer > .btn-primary").click();

    cy.get("header").scrollIntoView();

    // cy.get("#form_list > div > table").getTable().should(tableData => { 
    //   //        hasil log data diletakkan di fixture          
    //   cy.log(tableData, 'datatable');
    //   cy.fixture('HB-PMB/03-pengaturan/jadwal-seleksi/list_jadwal.json').then((dataFixture) => {
    //     expect(tableData).to.deep.equal(dataFixture)
    //   });
    // });

  })

  // negatif case
  it("Penambahan jadwal seleksi dengan jadwal Bentrok", function () {

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

    // filter seleksi
    cy.get("#select2-seleksi-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterSeleksi2);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.filterSeleksi2) {
        cy.wrap($el).click().wait(0)
      }
    })

    // klik tambah
    cy.get("#wrap-button > .btn-success").click()

    // mengisi jenis pilihan
    cy.get("#select2-idjenispilihan-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.jenisProgram2);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.jenisProgram2) {
        cy.wrap($el).click().wait(0)
      }
    })

    // mengisi jenis seleksi
    cy.get("#select2-idjenisseleksi-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.filterSeleksi2);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.filterSeleksi2) {
        cy.wrap($el).click().wait(0)
      }
    })

    // mengisi ruang
    cy.get("#select2-idruang-container").click();
    cy.get(".select2-dropdown > .select2-search > .select2-search__field").type(this.data.ruang2);
    cy.get('.select2-results__option').each(($el, index, $list) => {
      if ($el.text() === this.data.ruang2) {
        cy.wrap($el).click().wait(0)
      }
    })

    // mengisi tanggal awal seleksi
    cy.get('#tgljadwal').type(this.data.tgljadwal2).tab();
    // mengisi tanggal selesai seleksi
    cy.get('#tgljadwalselesai').type(this.data.tgljadwalselesai2).tab();
    // mengisi waktu awal seleksi
    cy.get('#waktumulai').type(this.data.waktumulai2);
    // mengisi waktu selesai seleksi
    cy.get('#waktuselesai').type(this.data.waktuselesai2);

    // klik simpan
    cy.get('.btn-success').click()

    // assert modal simpan
    cy.get('.modal-content').should('contain', this.data.modalSimpan)
    cy.get('.modal-footer > .btn-primary').click()
    // klik batalkan 
    // cy.get('.modal-footer > .btn-default').click()

    // assert data jadwalBentrok 
    cy.get('.alert').should('contain', this.data.jadwalBentrok)

  })

});
