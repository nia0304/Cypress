//01_data_kurikulum-=================================================================
Cypress.Commands.add('Menu_Mata_Kuliah', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Kurikulum_Prodi', ()=>{
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Prasyarat_Mata_Kuliah', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Ekivalensi_Mata_Kuliah', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Set_Grup_MK_Wajib_Pilihan', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('menu_tahun_kurikulum', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Batas_SKS', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(8) > a').click()
});

Cypress.Commands.add('Menu_Skala_Nilai', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(9) > a').click()
});

Cypress.Commands.add('Menu_Komposisi_Nilai', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(10) > a').click()
});

Cypress.Commands.add('Menu_Predikat_Kelulusan', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(11) > a').click()
});

Cypress.Commands.add('Menu_Aturan_Evaluasi', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(12) > a').click()
});

Cypress.Commands.add('Menu_Kurikulum_Konsentrasi', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(13) > a').click()
});

//02_data_kelas-=====================================================================
Cypress.Commands.add('Menu_Kelas_Kuliah', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Jadwal_Presensi', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Pemutihan_Nilai', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Tahun_Ajaran', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Monitoring_Ruang', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Rekap_Penggunaan_Ruang', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

//03_administrasi-===================================================================
Cypress.Commands.add('Menu_Status_Semester', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Pembimbing_Akademik', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Paket_Kuliah', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Transfer_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Konversi_Nilai', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Evaluasi_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Cutikan_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(8) > a').click()
});

Cypress.Commands.add('Menu_Cekal', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(9) > a').click()
});

Cypress.Commands.add('Menu_Berhenti_Studi', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(10) > a').click()
});

//04_proposal_tugas_akhir-===========================================================
Cypress.Commands.add('Menu_Daftar_Proposal', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Tahap_Proposal', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Syarat_Ujian', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Unsur_Nilai', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

//05_data_tugas_akhir-===============================================================
Cypress.Commands.add('Menu_Daftar_Tugas_Akhir', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Tahap_Tugas_Akhir', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Syarat_UjianTA', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Unsur_NilaiTA', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

//06_data_yudisium-==================================================================
Cypress.Commands.add('Menu_Tambah_Peserta', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Syarat_Yudisium', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Yudisium', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Penomoran_Dokumen', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Periode_Yudisium', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Syarat_Yudisium', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

//07_kegiatan_pendukung-=============================================================
Cypress.Commands.add('Menu_Kegiatan_Pendukung', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > a').click()
});

//08_kuesioner-======================================================================
Cypress.Commands.add('Menu_Daftar_Pertanyaan', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(8) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Jawaban', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(8) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Kategori_Edom', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(8) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

//09_data_wisuda-====================================================================
Cypress.Commands.add('Menu_Periode_Wisuda', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(9) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Peserta_Wisuda', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(9) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

//10_kepaniteraan_klinik-============================================================
Cypress.Commands.add('Menu_Kelompok_Kepaniteraan', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Jadwal_Kepaniteraan', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Presensi_Kepaniteraan', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Nilai_Kepaniteraan', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Rumah_Sakit_Mitra_Fk', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Dokter_Rumah_Sakit_Mitra_FK', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Departemen_Klinik', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(8) > a').click()
});

Cypress.Commands.add('Menu_Komponen_Penilaian', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(9) > a').click()
});

Cypress.Commands.add('Menu_Ujian_Klinik', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(10) > a').click()
});

Cypress.Commands.add('Menu_Unsur_Nilai_Ujian_Klinik', () => {
  cy.get('.container > .nav > :nth-child(3) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(11) > a').click()
});

