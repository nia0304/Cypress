//01_laporan_manual-================================================================
Cypress.Commands.add('Menu_Manajemen_Laporan_Manual', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Cetak_Laporan_Manual', ()=>{
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(2) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

//02_dosen-=========================================================================
Cypress.Commands.add('Menu_Jadwal_Mengajar_Semester_Dosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Dosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Rasio_Dosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Rekap_Presensi_Dosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_SK_Jadwal_Mengajar_Dosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Rekap_Jadwal_Mengajar_Dosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Distribusi_Dosen_Wali', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Jurnal_Perwalian', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(8) > a').click()
});

Cypress.Commands.add('Menu_Dosen_Pembimbing', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(9) > a').click()
});

Cypress.Commands.add('Menu_Honorarium_Dosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(10) > a').click()
});

Cypress.Commands.add('Menu_Kelengkapan_Biodata_Dosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(11) > a').click()
});

Cypress.Commands.add('Menu_Detail_Presensi_Dosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(12) > a').click()
});

Cypress.Commands.add('Menu_Distribusi_Pengajar', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(13) > a').click()
});

Cypress.Commands.add('Menu_Laporan_EDOM_per_Dosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(3) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(14) > a').click()
});

//03_mahasiswa-=====================================================================
Cypress.Commands.add('Menu_Daftar_Hadir', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_KHS', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_KRS', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Mahasiswa_DO_Terancam', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Transkrip_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Mahasiswa_Transfer', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Cekal', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(8) > a').click()
});

Cypress.Commands.add('Menu_Transkrip_Sementara', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(9) > a').click()
});

Cypress.Commands.add('Menu_Ijazah_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(10) > a').click()
});

Cypress.Commands.add('Menu_KTM_per_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(11) > a').click()
});

Cypress.Commands.add('Menu_Rekap_Absensi_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(12) > a').click()
});

Cypress.Commands.add('Menu_Status_KRS_Mhs', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(13) > a').click()
});

Cypress.Commands.add('Menu_KHS_Mahasiswa_Kolektif', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(14) > a').click()
});

Cypress.Commands.add('Menu_Monitoring_Absensi_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(15) > a').click()
});

Cypress.Commands.add('Menu_Masa_Studi', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(16) > a').click()
});

Cypress.Commands.add('Menu_Nilai_Konversi', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(17) > a').click()
});

Cypress.Commands.add('Menu_Kurikulum_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(4) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(18) > a').click()
});

//04_perkuliahan-===================================================================
Cypress.Commands.add('Menu_Jadwal_Kuliah', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Presentase_Kehadiran_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Isi_Absensi_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Pelaksanaan_Perkuliahan', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_MK_Mengulang', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Laporan_Kuesioner', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Berita_Acara_Ujian', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Kartu_Ujian', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(8) > a').click()
});

Cypress.Commands.add('Menu_Silabus_Mata_Kuliah', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(9) > a').click()
});

Cypress.Commands.add('Menu_Distribusi_KRS_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(10) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Kurikulum_Prodi', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(11) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Matakuliah', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(12) > a').click()
});

Cypress.Commands.add('Menu_Mahasiswa_Tercekal_Ujian', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(13) > a').click()
});

Cypress.Commands.add('Menu_Rekap_EDOM_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(14) > a').click()
});

Cypress.Commands.add('Menu_Distribusi_RPS_Mata_Kuliah', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(5) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(15) > a').click()
});

//05_administrasi-==================================================================
Cypress.Commands.add('Menu_Rekap_Kuesioner', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Rekap_KRS', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Status_Semester_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Jumlah_Mahasiswa_per_Status', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Status_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Kalendar_Akademik_Laporan', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Kapasitas_Kelas', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Monitoring_Kelas', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(8) > a').click()
});

Cypress.Commands.add('Menu_Jadwal_Mingguan_Prodi', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(9) > a').click()
});

Cypress.Commands.add('Menu_Rekap_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(10) > a').click()
});

Cypress.Commands.add('Menu_Rekap_Kuesioner_per_Pertanyaan', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(11) > a').click()
});

Cypress.Commands.add('Menu_Rekap_Angket_Layanan', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(12) > a').click()
});

Cypress.Commands.add('Menu_Rekap_Biodata_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(13) > a').click()
});

Cypress.Commands.add('Menu_Evaluasi_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(14) > a').click()
});

Cypress.Commands.add('Menu_Riwayat_Meet', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(6) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(15) > a').click()
});

//06_tingkat_akhir-=================================================================
Cypress.Commands.add('Menu_Proposal_Tugas_Akhir', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Tugas_Akhir', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Jadwal_Ujian_Tugas_Akhir', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Jumlah_Mahasiswa_Tugas_Akhir', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Bimbingan_TA', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Rekap_Mahasiswa_Tugas_Akhir', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Nilai_Uji_Tugas_Akhir', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Wisuda_Yudisium', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(8) > a').click()
});

Cypress.Commands.add('Menu_Daftar_Yudisium', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(9) > a').click()
});

Cypress.Commands.add('Menu_Rekap_Pembimbing_TA', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(10) > a').click()
});

Cypress.Commands.add('Menu_Berita_Acara_TA', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(11) > a').click()
});

Cypress.Commands.add('Menu_Berita_Acara_Proposal_TA', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(12) > a').click()
});

Cypress.Commands.add('Menu_Buku_Wisuda', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(13) > a').click()
});

Cypress.Commands.add('Menu_Distribusi_Dosen_Tugas_Akhir', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(7) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(14) > a').click()
});

//07_nilai-=========================================================================
Cypress.Commands.add('Menu_IPK_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(8) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Rekap_Laporan_IPK', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(8) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Distribusi_Nilai', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(8) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Nilai_KKN', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(8) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Cetak_Nilai_Perkuliahan', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(8) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Nilai_Mahasiswa', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(8) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Rangking_IPK', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(8) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Nilai_MK_per_Periode', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(8) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(8) > a').click()
});

Cypress.Commands.add('Menu_Laporan_Kunci_Nilai_Perkuliahan', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(8) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(9) > a').click()
})

//08_laporan_pddikti-===============================================================
Cypress.Commands.add('Menu_Laporan_PDDikti', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(9) > a').click()
});

//09_laporan_emis-==================================================================
Cypress.Commands.add('Menu_Laporan_Emis_Mhs', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(1) > a').click()
});

Cypress.Commands.add('Menu_Laporan_Emis_Dosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(2) > a').click()
});

Cypress.Commands.add('Menu_Laporan_Emis_Buku', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(3) > a').click()
});

Cypress.Commands.add('Menu_Laporan_Emis_Bukudosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(4) > a').click()
});

Cypress.Commands.add('Menu_Laporan_Emis_Jurnal', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(5) > a').click()
});

Cypress.Commands.add('Menu_Laporan_Emis_Lulusan', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(6) > a').click()
});

Cypress.Commands.add('Menu_Laporan_Emis_Penelitian', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(7) > a').click()
});

Cypress.Commands.add('Menu_Laporan_Emis_Tugasdosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(8) > a').click()
});

Cypress.Commands.add('Menu_Laporan_Emis_Jurnaldosen', () => {
  cy.get('.container > .nav > :nth-child(7) > :nth-child(1)').click()
  cy.get('.open > :nth-child(2) > :nth-child(10) > .dropdown-toggle').click()
  cy.get('.show > .dropdown-menu > :nth-child(9) > a').click()
});