//01_perguruan_tinggi-==============================================================
Cypress.Commands.add('Menu_Data_Perguruan_Tinggi', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Fakultas', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Jurusan', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Program_Studi', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Konsentrasi', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Tingkat_Pendidikan', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Tingkat_Pendidikan_Universitas', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Sistem_Kuliah', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(8) > a').click()
});

Cypress.Commands.add('Menu_Ruang_Kuliah', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(9) > a').click()
});

Cypress.Commands.add('Menu_Kegiatan_Akademik', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(11) > a').click()
});

Cypress.Commands.add('Menu_Kalender_Akademik', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(12) > a').click()
});

Cypress.Commands.add('Menu_Universitas_Luar', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(13) > a').click()
});

Cypress.Commands.add('Menu_Instansi', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(14) > a').click()
});

Cypress.Commands.add('Menu_Contact_Person', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(15) > a').click()
});

//02_perkuliahan-===================================================================
Cypress.Commands.add('Menu_Jenis_Matakuliah', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Kelompok_Matakuliah', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Bidang_Ilmu', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Unsur_Nilai_Perkuliahan', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Kelas_Perkuliahan', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Slot_Waktu', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Jenis_Pertemuan', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Status_Hadir', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(8) > a').click()
});

Cypress.Commands.add('Menu_Jenis_Modul', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(9) > a').click()
});

Cypress.Commands.add('Menu_Kelompok_Perkuliahan', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(10) > a').click()
});

Cypress.Commands.add('Menu_Grup_MK_Wajib_Pilihan', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(11) > a').click()
});

Cypress.Commands.add('Menu_Jenis_Kegiatan_Pendukung', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(12) > a').click()
});
//03_biodata-=======================================================================
Cypress.Commands.add('menu_agama', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Pekerjaan', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Penghasilan', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Suku', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('menu_jas_almamater', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

//04_mahasiswa-=====================================================================
Cypress.Commands.add('menu_status_mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('menu_jenis_tinggal', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('menu_kebutuhan_khusus', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('menu_transportasi', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

//05_pegawai-=======================================================================
Cypress.Commands.add('Menu_Jenis_Pegawai', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Golongan_Pangkat', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Jabatan_Fungsional', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Jabatan_Struktural', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Predikat_Pegawai', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Jenis_Honor', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Tarif_Honor', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Status_Keaktifan', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(8) > a').click()
});

//06_wilayah-=======================================================================
Cypress.Commands.add('Menu_Negara', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Provinsi', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Kota', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Kecamatan', () => {
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});
//07_template_laporan-==============================================================
Cypress.Commands.add('Menu_Surat_Keterangan_Aktif', ()=>{
  cy.get('.container > .nav > :nth-child(6) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});
