//01_data_kurikulum-=================================================================
Cypress.Commands.add('menumatakuliah', () => {
  cy.visit("siakad/list_matakuliah");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Mata Kuliah Daftar Mata Kuliah / Blok / Departemen"
  );
});

Cypress.Commands.add('menukurikulumprodi', ()=>{
  cy.visit("siakad/set_kurikulum");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kurikulum Prodi Kurikulum Prodi Per Semester"
  );
});

Cypress.Commands.add('menuprasyaratmatakuliah', () => {
  cy.visit("siakad/set_prasyarat");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Prasyarat Mata Kuliah Prasyarat Mata Kuliah Lulus dan Sedang"
  );
});

Cypress.Commands.add('menuekivalensimatakuliah', () => {
  cy.visit("siakad/list_ekivaturan");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Ekivalensi Mata Kuliah Padanan Mata Kuliah"
  );
});

Cypress.Commands.add('menusetgrupmkwajibpilihan', () => {
  cy.visit("siakad/set_grupmk");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Set Grup Mata Kuliah Wajib Pilihan"
  );
});

Cypress.Commands.add('menutahunkurikulum', () => {
  cy.visit("siakad/ms_tahunkurikulum");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Tahun Kurikulum"
    );
});

Cypress.Commands.add('menubatassks', () => {
  cy.visit("siakad/ms_batassks");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Batas SKS"
  );
});

Cypress.Commands.add('menuskalanilai', () => {
  cy.visit("siakad/ms_skalanilai");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Skala Nilai"
  );
});

Cypress.Commands.add('menukomposisinilai', () => {
  cy.visit("siakad/ms_proporsinilai");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Komposisi Nilai"
  );
});

Cypress.Commands.add('menupredikatkelulusan', () => {
  cy.visit("siakad/ms_predikat");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Predikat Kelulusan"
  );
});

Cypress.Commands.add('menuaturanevaluasi', () => {
  cy.visit("siakad/ms_evaluasi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Evaluasi Akademik"
  );
});

Cypress.Commands.add('menukurikulumkonsentrasi', () => {
  cy.visit("siakad/set_kurikulumbs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kurikulum Konsentrasi Data Kurikulum Konsentrasi"
  );
});

//02_data_kelas-=====================================================================
Cypress.Commands.add('menukelaskuliah', () => {
  cy.visit("siakad/list_kelas");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kelas Kuliah Daftar Kelas & Jadwal Perkuliahan"
  );
});

Cypress.Commands.add('menujadwalpresensi', () => {
  cy.get(".content-header > h1").should(
    "contain.text",
    "Jadwal & Presensi Riwayat dan Presensi Perkuliahan"
  );
});

Cypress.Commands.add('menupemutihannilai', () => {
  cy.visit("siakad/set_pemutihannilai");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Pemutihan Nilai Setting Nilai Default Mahasiswa"
  );
});

Cypress.Commands.add('menutahunajaran', () => {
  cy.visit("siakad/ms_tahunajaran");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Tahun Ajaran"
  );
});

Cypress.Commands.add('menumonitoringruang', () => {
  cy.visit("siakad/data_monitorruang");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Monitoring Ruang Data Penggunaan Ruangan"
  );
});

Cypress.Commands.add('menurekappenggunaanruang', () => {
  cy.visit("siakad/list_rekapruang");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Penggunaan Ruang Rekap Dalam Satuan Jam"
  );
});

//03_administrasi-===================================================================
Cypress.Commands.add('menustatussemester', () => {
  cy.visit("siakad/set_semester");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Status Semester Status Semester Mahasiswa Per Prodi"
  );
});

Cypress.Commands.add('menupembimbingakademik', () => {
  cy.visit("siakad/list_mhspa");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Pembimbing Akademik Daftar Mahasiswa Bimbingan"
  );
});

Cypress.Commands.add('menupaketkuliah', () => {
  cy.visit("siakad/set_paket");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Paket Kuliah Pengambilan Mata Kuliah Paket untuk Mahasiswa"
  );
});

Cypress.Commands.add('menutransfermahasiswa', () => {
  cy.visit("siakad/set_transfermhs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Mahasiswa Pindahan Mahasiswa Pindahan dan Konversi Nilai"
  );
});

Cypress.Commands.add('menukonversinilai', () => {
  cy.visit("siakad/list_ekivnilai");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Konversi Nilai Daftar Mahasiswa dengan Konversi Nilai"
  );
});

Cypress.Commands.add('menuevaluasimahasiswa', () => {
  cy.visit("siakad/list_evaluasimhs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Evaluasi Mahasiswa Daftar Mahasiswa Yang Terkena Evaluasi Pada 2020/2021 Genap"
  );
});

Cypress.Commands.add('menucutikanmahasiswa', () => {
  cy.visit("siakad/set_cuti");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Set Cuti Cutikan Mahasiswa"
  );
});

Cypress.Commands.add('menucekal', () => {
  cy.visit("siakad/set_cekal");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Cekal Pemberian Cekal Mahasiswa"
  );
});

Cypress.Commands.add('menuberhentistudi', () => {
  cy.visit("siakad/set_berhentistudi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Berhenti Studi"
  );
});

//04_proposal_tugas_akhir-===========================================================
Cypress.Commands.add('menudaftarproposal', () => {
  cy.visit("siakad/list_pengajuanta");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Proposal Tugas Akhir Daftar Proposal Tugas Akhir Mahasiswa"
  );
});

Cypress.Commands.add('menutahapproposal', () => {
  cy.visit("siakad/ms_tahapajuta");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Tahap Pengajuan"
  );
});

Cypress.Commands.add('menusyaratujian', () => {
  cy.visit("siakad/ms_syaratajuta");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Syarat Ujian"
  );
});

Cypress.Commands.add('menuunsurnilai', () => {
  cy.visit("siakad/ms_refnilaiajuta");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Unsur Nilai Proposal"
  );
});

//05_data_tugas_akhir-===============================================================
Cypress.Commands.add('menudaftartugasakhir', () => {
  cy.visit("siakad/list_ta");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Tugas Akhir Daftar Tugas Akhir Mahasiswa"
  );
});

Cypress.Commands.add('menutahaptugasakhir', () => {
  cy.visit("siakad/ms_tahapskripsi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Tahap Tugas Akhir"
  );
});

Cypress.Commands.add('menusyaratujianta', () => {
  cy.visit("siakad/ms_syaratskripsi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Syarat Ujian"
  );
});

Cypress.Commands.add('menuunsurniilaita', () => {
  cy.visit("siakad/ms_refnilaiskripsi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Unsur Nilai Tugas Akhir"
  );
});

//06_data_yudisium-==================================================================
Cypress.Commands.add('menutambahpeserta', () => {
  cy.visit("siakad/set_cekyudisium");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Tambah Peserta"
  );
});

Cypress.Commands.add('menudaftarsyaratyudisium', () => {
  cy.visit("siakad/list_syaratyudisium");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Syarat Yudisium"
  );
});

Cypress.Commands.add('menudaftaryudisium', () => {
  cy.visit("siakad/list_yudisium");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Daftar Yudisium Daftar Mahasiswa Terdaftar Yudisium"
  );
});

Cypress.Commands.add('menupenomorandokumen', () => {
  cy.visit("siakad/set_noyudisium");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Penomoran Dokumen Penomoran Dokumen Yudisium (SK/Ijasah/Transkrip)"
  );
});

Cypress.Commands.add('menuperiodeyudisium', () => {
  cy.visit("siakad/ms_periodewisuda");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Periode Yudisium"
  );
});

Cypress.Commands.add('menusyaratyudisium', () => {
  cy.visit("siakad/ms_syaratwisuda");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Syarat Yudisium"
  );
});

//07_kegiatan_pendukung-=============================================================
Cypress.Commands.add('menukegiatanpendukung', () => {
  cy.visit("siakad/list_kkn");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kegiatan Pendukung Daftar Kegiatan Pendukung"
  );
});

//08_kuesioner-======================================================================
Cypress.Commands.add('menudaftarpertanyaan', () => {
  cy.visit("siakad/ms_pertanyaanangket");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Daftar Pertanyaan"
  );
});

Cypress.Commands.add('menudaftarjawaban', () => {
  cy.visit("siakad/ms_jawabanangket");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Daftar Jawaban"
  );
});

Cypress.Commands.add('menukategoriedom', () => {
  cy.visit("siakad/ms_katedom");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kategori Edom"
  );
});

//09_data_wisuda-====================================================================
Cypress.Commands.add('menuperiodewisuda', () => {
  cy.visit("siakad/list_wisuda");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Wisuda Daftar Wisuda"
  );
});

Cypress.Commands.add('menupesertawisuda', () => {
  cy.visit("siakad/list_pesertawisuda");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Peserta Wisuda Daftar Peserta Wisuda"
  );
});

//10_kepaniteraan_klinik-============================================================
Cypress.Commands.add('menukelompokkepaniteraan', () => {
  cy.visit("siakad/set_kelompokpnt");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kelompok Kepaniteraan"
  );
});

Cypress.Commands.add('menujadwalkepaniteraan', () => {
  cy.visit("siakad/set_jadwalpnt");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Jadwal Kepaniteraan"
  );
});

Cypress.Commands.add('menupresensikepaniteraan', () => {
  cy.visit("siakad/list_absenpnt");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Presensi Kepaniteraan"
  );
});

Cypress.Commands.add('menunilaikepaniteraan', () => {
  cy.visit("siakad/list_nilaipnt");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Error Halaman tidak dapat diakses"
  );
});

Cypress.Commands.add('menurumahsakitmitrafk', () => {
  cy.visit("siakad/ms_perusahaan");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Instansi"
  );
});

Cypress.Commands.add('menudokterrumahsakitmitrafk', () => {
  cy.visit("siakad/list_cp");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Contact Person Daftar Contact Person Instansi"
  );

});

Cypress.Commands.add('menudepartemenklinik', () => {
  cy.visit("siakad/ms_deptperusahaan");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Departemen"
  );
});

Cypress.Commands.add('menukomponenpenilaian', () => {
  cy.visit("siakad/ms_pntnilaiujian");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Komp. Penilaian"
  );
});

Cypress.Commands.add('menuujianklinik', () => {
  cy.visit("siakad/ms_pntujian");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Ujian Klinik"
  );
});

Cypress.Commands.add('menuunsurnilaiujianklinik', () => {
  cy.visit("siakad/ms_pntnilai");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Unsur Nilai"
  );
});

