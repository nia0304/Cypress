/// <reference types="cypress"/>

describe ('Automation Mahasiswa Keluar',()=>{
    beforeEach(()=>{
      cy.login();
    });

    it('Admin bisa menambah data status keluar "Drop Out/Dikeluarkan"',()=>{
      cy.modulakademik();
      cy.visit('/siakad/list_mhskeluar');
      cy.get('button.btn.btn-success.btn-sm').click();
      cy.visit('/siakad/data_mhskeluar');
      cy.get('#nim_label').type('20220010001');
      cy.get('.tt-highlight').each(($el, index, $list)=>{
          if($el.text()==='20220010001'){
              cy.wrap($el).click();
          }
      })
      cy.get('.box-body').click();
      cy.get('.col-md-10.input-idunit').should('contain','S1 - Teknik Sipil');
      cy.get('.col-md-10.input-periodeterakhir').should('contain','2022/2023 Genap');
      cy.get('#idstatusmhs').select('Drop Out / Dikeluarkan').wait(0);
      cy.get('#noskkeluar').type('19.DO.04.2023');
      cy.get('#tglskkeluar').type('17-04-2023');
      cy.get('#alasankeluar').type('DO karena sudah 3x tidak pernah kuliah');
      const filepath = '/Uploads/Pengumuman Batas Pelaporan PDDikti 2021-2.pdf';
      cy.get('[name="filelampirankeluar"]').attachFile(filepath);
      cy.get('.btn.btn-success.btn-sm').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Apakah anda yakin akan menyimpan data ini?');
      cy.get('.btn.btn-primary').click();
      cy.get('.alert').should('contain','Pengubahan data mahasiswa berhasil');
      cy.get('.btn.btn-info.btn-sm').click();
      cy.visit('/siakad/list_mhskeluar');
      cy.get('.col-xs-8 > .input-group').type('20220010001');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive').contains('20220010001'); 
      cy.visit('/siakad/list_mahasiswa');
      cy.get('.col-xs-8 > .input-group > .input-sm').type('20220010001');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('[data-type="edit"]').click();
      cy.get('#block-idstatusmhs').should('contain','Drop Out / Dikeluarkan');
      cy.get('#block-periodeterakhir').should('contain','2022/2023 Genap');
      cy.get('#sidebar-menu-list').contains("Status Semester").click();
      cy.contains('Tambah').should('not.be.visible');
      cy.get('.alert').should('contain','Anda sudah tidak dapat menambahkan Status Semester mahasiswa, karena Status Mahasiswa saat ini');
    });

    it('Admin bisa mengubah data status menjadi "Hilang"',()=>{
      cy.modulakademik();
      cy.visit('/siakad/list_mhskeluar');
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('.btn.btn-info.btn-xs.btn-flat').click();
      cy.get('.col-md-12 > .btn-warning').click();
      cy.get('#idstatusmhs').select('Hilang').wait(0);
      cy.get('#noskkeluar').clear().type('20/DO/04/2023');
      cy.get('#tglskkeluar').clear().type('20-04-2023');
      cy.get('#alasankeluar').clear().type('DO karena sudah 3x tidak pernah kuliah.');
      const filepath = '/Uploads/Surat keterangan mahasiswa status hilang.pdf';
      cy.get('[name="filelampirankeluar"]').attachFile(filepath);
      cy.get('.btn.btn-success.btn-sm').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Apakah anda yakin akan menyimpan data ini?');
      cy.get('.btn.btn-primary').click();
      cy.get('.alert').should('contain','Pengubahan data mahasiswa berhasil');
      cy.visit('/siakad/list_mahasiswa');
      cy.get('.col-xs-8 > .input-group > .input-sm').type('20220010001');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('[data-type="edit"]').click();
      cy.get('#block-idstatusmhs').should('contain','Hilang');
      cy.get('#block-periodeterakhir').should('contain','2022/2023 Genap');
      cy.get('#sidebar-menu-list').contains("Status Semester").click();
      cy.contains('Tambah').should('not.be.visible');
      cy.get('.alert').should('contain','Anda sudah tidak dapat menambahkan Status Semester mahasiswa, karena Status Mahasiswa saat ini');
    });

    it('Admin bisa mengubah data status menjadi "Mengundurkan Diri / Keluar"',()=>{
      cy.modulakademik();
      cy.visit('/siakad/list_mhskeluar');
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('.btn.btn-info.btn-xs.btn-flat').click();
      cy.get('.col-md-12 > .btn-warning').click();
      cy.get('#idstatusmhs').select('Mengundurkan Diri / Keluar');
      cy.get('.btn.btn-success.btn-sm').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Apakah anda yakin akan menyimpan data ini?');
      cy.get('.btn.btn-primary').click();
      cy.get('.alert').should('contain','Pengubahan data mahasiswa berhasil');
      cy.visit('/siakad/list_mahasiswa');
      cy.get('.col-xs-8 > .input-group > .input-sm').type('20220010001');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('[data-type="edit"]').click();
      cy.get('#block-idstatusmhs').should('contain','Mengundurkan Diri / Keluar');
      cy.get('#block-periodeterakhir').should('contain','2022/2023 Genap');
      cy.get('#sidebar-menu-list').contains("Status Semester").click();
      cy.contains('Tambah').should('not.be.visible');
      cy.get('.alert').should('contain','Anda sudah tidak dapat menambahkan Status Semester mahasiswa, karena Status Mahasiswa saat ini');
    });

    it('Admin bisa mengubah data status menjadi "Lainnya"',()=>{
      cy.modulakademik();
      cy.visit('/siakad/list_mhskeluar');
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('.btn.btn-info.btn-xs.btn-flat').click();
      cy.get('.col-md-12 > .btn-warning').click();
      cy.get('#idstatusmhs').select('Lainnya');
      cy.get('.btn.btn-success.btn-sm').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Apakah anda yakin akan menyimpan data ini?');
      cy.get('.btn.btn-primary').click();
      cy.get('.alert').should('contain','Pengubahan data mahasiswa berhasil');
      cy.visit('/siakad/list_mahasiswa');
      cy.get('.col-xs-8 > .input-group > .input-sm').type('20220010001');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('[data-type="edit"]').click();
      cy.get('#block-idstatusmhs').should('contain','Lainnya');
      cy.get('#block-periodeterakhir').should('contain','2022/2023 Genap');
      cy.get('#sidebar-menu-list').contains("Status Semester").click();
      cy.contains('Tambah').should('not.be.visible');
      cy.get('.alert').should('contain','Anda sudah tidak dapat menambahkan Status Semester mahasiswa, karena Status Mahasiswa saat ini');
    });

    it('Admin bisa mengubah data status menjadi "Putus Sekolah"',()=>{
      cy.modulakademik();
      cy.visit('/siakad/list_mhskeluar');
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('.btn.btn-info.btn-xs.btn-flat').click();
      cy.get('.col-md-12 > .btn-warning').click();
      cy.get('#idstatusmhs').select('Putus Sekolah');
      cy.get('.btn.btn-success.btn-sm').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Apakah anda yakin akan menyimpan data ini?');
      cy.get('.btn.btn-primary').click();
      cy.get('.alert').should('contain','Pengubahan data mahasiswa berhasil');
      cy.visit('/siakad/list_mahasiswa');
      cy.get('.col-xs-8 > .input-group > .input-sm').type('20220010001');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('[data-type="edit"]').click();
      cy.get('#block-idstatusmhs').should('contain','Putus Sekolah');
      cy.get('#block-periodeterakhir').should('contain','2022/2023 Genap');
      cy.get('#sidebar-menu-list').contains("Status Semester").click();
      cy.contains('Tambah').should('not.be.visible');
      cy.get('.alert').should('contain','Anda sudah tidak dapat menambahkan Status Semester mahasiswa, karena Status Mahasiswa saat ini');
    });

    it('Admin bisa mengubah data status menjadi "Transfer / Mutasi"',()=>{
      cy.modulakademik();
      cy.visit('/siakad/list_mhskeluar');
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('.btn.btn-info.btn-xs.btn-flat').click();
      cy.get('.col-md-12 > .btn-warning').click();
      cy.get('#idstatusmhs').select('Transfer / Mutasi');
      cy.get('.btn.btn-success.btn-sm').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Apakah anda yakin akan menyimpan data ini?');
      cy.get('.btn.btn-primary').click();
      cy.get('.alert').should('contain','Pengubahan data mahasiswa berhasil');
      cy.visit('/siakad/list_mahasiswa');
      cy.get('.col-xs-8 > .input-group > .input-sm').type('20220010001');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('[data-type="edit"]').click();
      cy.get('#block-idstatusmhs').should('contain','Transfer / Mutasi');
      cy.get('#block-periodeterakhir').should('contain','2022/2023 Genap');
      cy.get('#sidebar-menu-list').contains("Status Semester").click();
      cy.contains('Tambah').should('not.be.visible');
      cy.get('.alert').should('contain','Anda sudah tidak dapat menambahkan Status Semester mahasiswa, karena Status Mahasiswa saat ini');
    });

    it('Admin bisa mengubah data status menjadi "Wafat"',()=>{
      cy.modulakademik();
      cy.visit('/siakad/list_mhskeluar');
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('.btn.btn-info.btn-xs.btn-flat').click();
      cy.get('.col-md-12 > .btn-warning').click();
      cy.get('#idstatusmhs').select('Wafat');
      cy.get('.btn.btn-success.btn-sm').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Apakah anda yakin akan menyimpan data ini?');
      cy.get('.btn.btn-primary').click();
      cy.get('.alert').should('contain','Pengubahan data mahasiswa berhasil');
      cy.visit('/siakad/list_mahasiswa');
      cy.get('.col-xs-8 > .input-group > .input-sm').type('20220010001');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('[data-type="edit"]').click();
      cy.get('#block-idstatusmhs').should('contain','Wafat');
      cy.get('#block-periodeterakhir').should('contain','2022/2023 Genap');
      cy.get('#sidebar-menu-list').contains("Status Semester").click();
      cy.contains('Tambah').should('not.be.visible');
      cy.get('.alert').should('contain','Anda sudah tidak dapat menambahkan Status Semester mahasiswa, karena Status Mahasiswa saat ini');
    });

    it('Admin bisa membatalkan data status keluar',()=>{
      cy.modulakademik();
      cy.visit('/siakad/list_mhskeluar');
      cy.get('.table-responsive')
        .contains('20220010001')
        .parent()
        .find('.btn.btn-info.btn-xs.btn-flat').click();
      cy.get('.col-md-12 > .btn-danger').click();
      cy.get('#modal-konfirmasi').should('contain','Apakah anda yakin akan membatalkan status keluar mahasiswa ini?')
      cy.get('.btn.btn-primary').click();
      cy.get('.alert').should('contain','Berhasil membatalkan status keluar mahasiswa dengan NIM 20220010001');
      cy.visit('/siakad/list_mhskeluar');
      cy.get('.col-xs-8 > .input-group').type('20220010001');
      cy.get('.input-group-btn > .btn-success').click();
      cy.contains('20220010001').should('not.be.visible'); 
    });

    it('Admin tidak bisa menambah data status keluar',()=>{
      cy.modulakademik();
      cy.visit('/siakad/list_mhskeluar');
      cy.get('#wrap-button > .btn-success').click();
      cy.get('.btn-success').click();
    });

    it('Admin menambah data yang sama',()=>{
      cy.modulakademik();
      cy.visit('/siakad/list_mhskeluar');
      cy.get('.table-responsive')
      .contains('20230010001');
      cy.get('button.btn.btn-success.btn-sm').click();
      cy.visit('/siakad/data_mhskeluar');
      cy.get('#nim_label').type('20230010001');
      cy.get('.tt-highlight').each(($el, index, $list)=>{
          if($el.text()==='20230010001'){
              cy.wrap($el).click();
          }
      })
      cy.get('.box-body').click();
      cy.get('.col-md-10.input-idunit').should('contain','S1 - Teknik Sipil');
      cy.get('.col-md-10.input-periodeterakhir').should('contain','2023/2024 Gasal');
      cy.get('#idstatusmhs').select('Drop Out / Dikeluarkan').wait(0);
      cy.get('#noskkeluar').type('19.DO.04.2023');
      cy.get('#tglskkeluar').type('17-04-2023');
      cy.get('#alasankeluar').type('DO karena sudah 3x tidak pernah kuliah');
      const filepath = '/Uploads/Pengumuman Batas Pelaporan PDDikti 2021-2.pdf';
      cy.get('[name="filelampirankeluar"]').attachFile(filepath);
      cy.get('.btn.btn-success.btn-sm').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Apakah anda yakin akan menyimpan data ini?');
      cy.get('.btn.btn-primary').click();
      cy.get('.alert').should('contain','Pengubahan data mahasiswa berhasil');
      cy.get('.btn.btn-info.btn-sm').click();
      cy.visit('/siakad/list_mhskeluar');
      cy.get('.col-xs-8 > .input-group').type('20230010001');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive').contains('20230010001'); 
    });

    it('Admin menambah data mahasiswa keluar "Lulus"',()=>{
      cy.modulakademik();
      cy.visit('/siakad/list_mahasiswa');
      cy.get('.col-xs-8 > .input-group > .input-sm').clear().type('20230010009');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('20230010009')
        .parent()
        .find('[data-type="edit"]').click();
      cy.get('#sidebar-menu-list').contains("Status Semester").click();
      cy.get('.table-responsive')
        .should('contain','2023 Gasal')
        .parent()
        .should('contain','Non Aktif')
      cy.visit('/siakad/list_yudisium');
      cy.get('#wrap-button > .btn-success').click();
      cy.get('#nim_label').type('20230010009');
      cy.get('.tt-dataset-1').click();
      cy.get('#idperiodewsd').select('2023 Gasal');
      cy.get('#tglskyudisium').type('27-04-2023').tab();
      cy.get('#noskyudisium').type('02/Lulus/2023');
      cy.get('[data-type="save"]').click();
      cy.get('#modal-konfirmasi').should('contain','Apakah anda yakin akan menyimpan data ini?');
      cy.get('.modal-footer > .btn-primary').click();
      cy.get('.alert').should('contain','Penambahan data yudisium berhasil');
      cy.visit('/siakad/list_mahasiswa');
      cy.get('.col-xs-8 > .input-group > .input-sm').clear().type('20230010009');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('20230010009')
        .parent()
        .find('[data-type="edit"]').click();
      cy.get('#block-idstatusmhs').should('contain','Lulus');
      cy.get('#block-periodeterakhir').should('contain','2023/2024 Gasal');
      cy.get('#sidebar-menu-list').contains("Status Semester").click();
      cy.contains('Tambah').should('not.be.visible');
      cy.get('.alert').should('contain','Anda sudah tidak dapat menambahkan Status Semester mahasiswa, karena Status Mahasiswa saat ini');
    });

    it('Admin mengubah periode lulus dibawah periode masuk',()=>{
      cy.modulakademik();
      cy.visit('/siakad/list_yudisium');
      cy.get('.col-xs-8 > .input-group > .input-sm').type('20230010009');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
         .contains('20230010009')
         .parent()
         .find('[data-type="edit"]').click();
      cy.get('[data-type="edit"').click();
      cy.get('#idperiodewsd').select('2022 Genap');
      cy.get('[data-type="save"]').click();
      cy.get('#modal-konfirmasi').should('contain','Apakah anda yakin akan menyimpan data ini?');
      cy.get('.modal-footer > .btn-primary').click();
      cy.get('.alert').should('contain','Pengubahan data yudisium berhasil');
      cy.get('[data-type="list"]').click();
      cy.get('.col-xs-8 > .input-group > .input-sm').clear().type('20230010009');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive').should('contain','20230010009');
      cy.visit('/siakad/list_mahasiswa');
      cy.get('.col-xs-8 > .input-group > .input-sm').clear().type('20230010009');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('20230010009')
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .should('contain','-')
        .next()
        .should('be.empty')
        .next()
        .should('contain','-')
        .parent()
        .find('[data-type="edit"]').click();
      cy.get('#block-idstatusmhs').should('contain','Lulus');
      cy.get('#block-periodeterakhir').should('contain','2022/2023 Genap');
      cy.get('#sidebar-menu-list').contains("Status Semester").click();
      cy.contains('Tambah').should('not.be.visible');
      cy.get('.alert').should('contain','Anda sudah tidak dapat menambahkan Status Semester mahasiswa, karena Status Mahasiswa saat ini');
      cy.get('.table-responsive')
        .should('contain','2023 Gasal')
        .parent()
        .should('contain','Non Aktif')
      cy.get('.callout > .row > .col-md-3').each(($el,index,$list)=>{
        if($el.text()==='Semester'){
          if($el.next().text()===''){
            cy.get($el.next()).should('be.empty'); 
          }
          if($el.next().next().next().text() === ' / '){
            cy.get($el.next().next().next()).should('contain','/');
          }
        }
        if($el.text()==='Tahun Kurikulum'){
          if($el.next().next().next().next().text()===' / '){
            cy.get($el.next().next().next()).should('contain','/');
          }
        }
      });
    })

    it('Admin mengubah periode lulus sebelum periode terakhir',()=>{
    cy.modulakademik();
    cy.visit('/siakad/list_mahasiswa');
    cy.get('.col-xs-8 > .input-group > .input-sm').clear().type('15165021');
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('.table-responsive')
      .contains('15165021')
      .parent()
      .find('[data-type="edit"]').click();
    cy.get('#sidebar-menu-list').contains("Status Semester").click();
    cy.get('.table-responsive')
      .should('contain','2022 Genap')
      .parent()
      .should('contain','Non Aktif')
    cy.visit('/siakad/list_yudisium');
    cy.get('.col-xs-8 > .input-group > .input-sm').type('15165021');
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('.table-responsive')
        .contains('15165021')
        .parent()
        .find('[data-type="edit"]').click();
    cy.get('[data-type="edit"').click();
    cy.get('#idperiodewsd').select('2022 Ganjil');
    cy.get('#tglskyudisium').type('27-04-2023').tab();
    cy.get('#noskyudisium').type('03/Lulus/2023');
    cy.get('[data-type="save"]').click();
    cy.get('#modal-konfirmasi').should('contain','Apakah anda yakin akan menyimpan data ini?');
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('.alert').should('contain','Pengubahan data yudisium berhasil');
    cy.get('[data-type="list"]').click();
    cy.get('.col-xs-8 > .input-group > .input-sm').clear().type('15165021');
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('.table-responsive').should('contain','15165021');
    cy.visit('/siakad/list_mahasiswa');
    cy.get('.col-xs-8 > .input-group > .input-sm').clear().type('15165021');
    cy.get('.input-group-btn > .btn-success').click();
    cy.get('.table-responsive')
      .contains('15165021')
      .parent()
      .find('[data-type="edit"]').click();
    cy.get('#block-idstatusmhs').should('contain','Lulus');
    cy.get('#block-periodeterakhir').should('contain','2022/2023 Gasal');
    cy.get('#sidebar-menu-list').contains("Status Semester").click();
    cy.contains('Tambah').should('not.be.visible');
    cy.get('.alert').should('contain','Anda sudah tidak dapat menambahkan Status Semester mahasiswa, karena Status Mahasiswa saat ini');
    cy.get('.table-responsive')
      .contains('2022 Genap')
      .should('not.exist');        
    })

    it('Admin menghapus data lulusan',()=>{
      cy.modulakademik();
      cy.visit('/siakad/list_yudisium');
      cy.get('.col-xs-8 > .input-group > .input-sm').type('20220080562');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('20220080562')
        .parent()
        .find('[data-type="edit"]').click();
      cy.get('[data-type="delete"').click();
      cy.get('#modal-konfirmasi').should('contain','Apakah anda yakin akan menghapus data ini?');
      cy.get('.modal-footer > .btn-primary').click();
      cy.get('.alert').should('contain','Penghapusan data yudisium berhasil');
      cy.get('.col-xs-8 > .input-group > .input-sm').clear().type('20220080562');
      cy.get('.input-group-btn > .btn-success').click();
      cy.contains('20220080562').should('not.be.visible');
      cy.visit('/siakad/list_mahasiswa');
      cy.get('.col-xs-8 > .input-group > .input-sm').clear().type('20220080562');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('20220080562')
        .parent()
        .find('[data-type="edit"]').click();
      cy.get('#block-idstatusmhs').should('contain','Aktif');
      cy.get('#block-periodeterakhir').should('not.be.visible');
      cy.get('#sidebar-menu-list').contains("Status Semester").click();
      cy.get('.btn-success').should('be.visible');
      cy.contains('Anda sudah tidak dapat menambahkan Status Semester mahasiswa,')
        .should('not.exist');
    });

    it.only ('Admin generate mahasiswa baru',()=>{
      cy.openModulPmb();
      cy.visit('/spmb/set_mahasiswa');
      cy.get('.col-xs-8 > .input-group > .form-control.input-sm').clear().type('231111011');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('231111011')
        .parent()
        .find('[data-type="generatemhs"]')
        .click();
      cy.get('#modal-konfirmasi').should('contain', 'Apakah anda yakin akan melakukan generate Mahasiswa');
      cy.get('.modal-footer > .btn-primary').click();
      cy.get('.alert').should('contain','Berhasil Generate Mahasiswa');
      cy.get('#menu > a').invoke('removeAttr', 'target').click();
      cy.modulakademik();
      cy.visit('/siakad/list_mahasiswa');
      cy.get('.col-xs-8 > .input-group > .form-control').clear().type('20230050016');
      cy.get('.input-group-btn > .btn-success').click();
      cy.get('.table-responsive')
        .contains('20230050016')
        .parent()
        .find('[data-type="edit"]').click();
      cy.get('#block-idstatusmhs').should('contain','Aktif');
      cy.get('#block-periodeterakhir').should('not.be.visible');
    });    
})