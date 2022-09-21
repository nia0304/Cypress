//01_laporan_manual-================================================================
Cypress.Commands.add('menumanajemenlaporanmanual', () => {
  cy.visit("siakad/list_laporan");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Daftar Laporan Manual"
  );
});

Cypress.Commands.add('menucetaklaporanmanual', ()=>{
  cy.visit("siakad/repp_laporan");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Laporan Manual"
  );
});

//02_dosen-=========================================================================
Cypress.Commands.add('menujadwalmengajarsemesterdosen', () => {
  cy.visit("siakad/repp_jadwalajar");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Jadwal Semester Dosen"
  );
});

Cypress.Commands.add('menudaftardosen', () => {
  cy.visit("siakad/repp_daftardosen");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Daftar Dosen"
  );
});

Cypress.Commands.add('menurasiodosen', () => {
  cy.visit("siakad/repp_rasiodosenins");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Rasio Dosen"
  );
});

Cypress.Commands.add('menurekappresensidosen', () => {
  cy.visit("siakad/repp_rekapabsendosen");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Rekap Presensi Dosen"
  );
});

Cypress.Commands.add('menuskjadwalmengajardosen', () => {
  cy.visit("siakad/repp_jadwalmengajar");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Jadwal Mengajar Dosen"
  );
});

Cypress.Commands.add('menurekapjadwalmengajardosen', () => {
  cy.visit("siakad/repp_rekapmengajar");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Rekap Jadwal Mengajar Dosen"
  );
});

Cypress.Commands.add('menudistribusidosenwali', () => {
  cy.visit("siakad/repp_distribusidosenwali");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Distribusi Dosen Wali"
  );

});

Cypress.Commands.add('menujurnalperwalian', () => {
  cy.visit("siakad/repp_jurnalperwalian");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Jurnal Perwalian"
  );
});

Cypress.Commands.add('menudosenpembimbing', () => {
  cy.visit("siakad/repp_dpa");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Mahasiswa Bimbingan"
  );
});

Cypress.Commands.add('menuhonorariumdosen', () => {
  cy.visit("siakad/repp_honordosen");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Honorarium Dosen"
  );
});

Cypress.Commands.add('menukelengkapanbiodatadosen', () => {
  cy.visit("siakad/repp_kelengkapanbiodosen");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kelengkapan Biodata Dosen"
  );
});

Cypress.Commands.add('menudetailpresensidosen', () => {
  cy.visit("siakad/repp_isiabsensidosen");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Isi Presensi Dosen"
  );
});

Cypress.Commands.add('menudistribusipengajar', () => {
  cy.visit("siakad/repp_distribusipengajar");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Distribusi Pengajar"
  );
});

Cypress.Commands.add('menulaporanedomperdosen', () => {
  cy.visit("siakad/repp_rekapedomdosen");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Laporan EDOM"
  );
});

//03_mahasiswa-=====================================================================
Cypress.Commands.add('menudaftarhadir', () => {
  cy.visit("siakad/repp_absensi");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Daftar Hadir"
  );
});

Cypress.Commands.add('menukhs', () => {
  cy.visit("siakad/repp_khsmahasiswa");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "KHS Mahasiswa"
  );
});

Cypress.Commands.add('menukrs', () => {
  cy.visit("siakad/repp_krsmahasiswa");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "KRS Mahasiswa"
  );
});

Cypress.Commands.add('menudaftarmahasiswa', () => {
  cy.visit("siakad/repp_daftarmhs");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Daftar Mahasiswa"
  );
});

Cypress.Commands.add('menumahasiswadoterancam', () => {
  cy.visit("siakad/repp_terancamdo");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Mhs Terancam DO"
  );
});

Cypress.Commands.add('menutranskripmahasiswa', () => {
  cy.visit("siakad/repp_transkrip");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Transkrip"
  );
});

Cypress.Commands.add('menumahasiswatransfer', () => {
  cy.visit("siakad/repp_daftarmhstransfer");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Daftar Mhs. Transfer"
  );
});

Cypress.Commands.add('menudaftarcekal', () => {
  cy.visit("siakad/repp_cekalmhs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Cekal Mahasiswa"
  );
});

Cypress.Commands.add('menutranskripsementara', () => {
  cy.visit("siakad/repp_transkripsmt");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Transkrip Sementara"
  );
});

Cypress.Commands.add('menuijazahmahasiswa', () => {
  cy.visit("siakad/repp_ijazah");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Ijazah Mahasiswa"
  );
});

Cypress.Commands.add('menuktmpermahasiswa', () => {
  cy.visit("siakad/repp_ktm");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "KTM Per Mahasiswa"
  );
});

Cypress.Commands.add('menurekapabsensimahasiswa', () => {
  cy.visit("siakad/repp_rekapabsenmhs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Rekap Presensi Mahasiswa"
  );
});

Cypress.Commands.add('menustatuskrsmhs', () => {
  cy.visit("siakad/repp_krsmhs");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Laporan Status KRS"
  );
});

Cypress.Commands.add('menukhsmahasiswakolektif', () => {
  cy.visit("siakad/repp_khsmhskolektif");
  cy.get(".content-header > h1").should(
    "contain.text",
    "KHS Mahasiswa Kolektif"
  );
});

Cypress.Commands.add('menumonitoringabsensimahasiswa', () => {
  cy.visit("siakad/repp_absensimhs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Mon. Presensi Mahasiswa"
  );
});

Cypress.Commands.add('menumasastudi', () => {
  cy.visit("siakad/repp_masastudi");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Masa Studi"
  );
});

Cypress.Commands.add('menunilaikonversi', () => {
  cy.visit("siakad/repp_nilaikonversi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Nilai Konversi"
  );
});

Cypress.Commands.add('menukurikulummahasiswa', () => {
  cy.visit("siakad/repp_kurikulummhs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kurikulum Mahasiswa"
  );
});

//04_perkuliahan-===================================================================
Cypress.Commands.add('menujadwalkuliah', () => {
  cy.visit("siakad/repp_jadwalkuliah");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Jadwal Perkuliahan Semester Ini (Mahasiswa)"
  );
});

Cypress.Commands.add('menupresentasekehadiranmahasiswa', () => {
  cy.visit("siakad/repp_prosentaseabs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Persentase Presensi Mhs."
  );
});

Cypress.Commands.add('menuisiabsensimahasiswa', () => {
  cy.visit("siakad/repp_isiabsensi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Isi Presensi Mahasiswa"
  );
});

Cypress.Commands.add('menupelaksanaanperkuliahan', () => {
  cy.visit("siakad/repp_perkuliahan");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Jurnal/Pelaksanaan Kuliah"
  );
});

Cypress.Commands.add('menumkmengulang', () => {
  cy.visit("siakad/repp_mkmengulang");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Mata Kuliah Mengulang"
  );
});

Cypress.Commands.add('menulaporankuesioner', () => {
  cy.visit("siakad/repp_angket");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Laporan Kuesioner"
  );
});

Cypress.Commands.add('menuberitaacaraujian', () => {
  cy.visit("siakad/repp_absensiujian");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Berita Acara Ujian"
  );
});

Cypress.Commands.add('menukartuujian', () => {
  cy.visit("siakad/repp_kartuujian");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Kartu Ujian"
  );
});

Cypress.Commands.add('menusilabusmatakuliah', () => {
  cy.visit("siakad/repp_silabus");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Silabus Mata Kuliah"
  );
});

Cypress.Commands.add('menudistribusikrsmahasiswa', () => {
  cy.visit("siakad/repp_distribusikrsmhs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Distribusi KRS Mahasiswa"
  );
});

Cypress.Commands.add('menudaftarkurikulumprodi', () => {
  cy.visit("siakad/repp_kurikulumprodi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Daftar Kurikulum Prodi"
  );
});

Cypress.Commands.add('menudaftarmatakuliah', () => {
  cy.visit("siakad/repp_matakuliah");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Daftar matakuliah"
  );
});

Cypress.Commands.add('menumahasiswatercekalujian', () => {
  cy.visit("siakad/repp_cekalujian");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Mahasiswa Tercekal Ujian"
  );
});

Cypress.Commands.add('menurekapedommahasiswa', () => {
  cy.visit("siakad/repp_rekapedommhs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Rekap Angket Mahasiswa"
  );
});

Cypress.Commands.add('menudistribusirpsmatakuliah', () => {
  cy.visit("siakad/repp_distrps");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Distribusi RPS Mata Kuliah"
  );
});

//05_administrasi-==================================================================
Cypress.Commands.add('menurekapkuesioner', () => {
  cy.visit("siakad/repp_rekapangket");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Rekap Kuesioner"
  );
});

Cypress.Commands.add('menurekapkrs', () => {
  cy.visit("siakad/repp_rekapkrs");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Rekap KRS"
  );
});

Cypress.Commands.add('menustatussemestermahasiswa', () => {
  cy.visit("siakad/repp_statussemester");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan status Semester Mahasiswa"
  );
});

Cypress.Commands.add('menujumlahmahasiswaperstatus', () => {
  cy.visit("siakad/repp_statusmhs5thn");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Jumlah Mahasiswa Per Status"
  );
});

Cypress.Commands.add('menulaporanstatusmahasiswa', () => {
  cy.visit("siakad/repp_statusmhs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Rekap Status Akademik"
  );
});

Cypress.Commands.add('menukalendarakademiklaporan', () => {
  cy.visit("siakad/repp_kalender");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Kalender Akademik"
  );
});

Cypress.Commands.add('menukapasitaskelas', () => {
  cy.visit("siakad/repp_kapasitaskelas");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Kapasitas Kelas"
  );
});

Cypress.Commands.add('menumonitoringkelas', () => {
  cy.visit("siakad/repp_monitoringkelas");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Monitoring Kelas"
  );
});

Cypress.Commands.add('menujadwalmingguanprodi', () => {
  cy.visit("siakad/repp_jadwalmingguanprodi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Jadwal Mingguan Prodi"
  );
});

Cypress.Commands.add('menurekapmahasiswa', () => {
  cy.visit("siakad/repp_rekapmhsprodi");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Rekap Mahasiswa"
  );
});

Cypress.Commands.add('menurekapkuesionerperpertanyaan', () => {
  cy.visit("siakad/repp_rekapangketperpertanyaan");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Rekap Kuesioner Per Pertanyaan"
  );
});

Cypress.Commands.add('menurekapangketlayanan', () => {
  cy.visit("siakad/repp_rekapangketlayanan");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Rekap Kuesioner Layanan"
  );
});

Cypress.Commands.add('menurekapbiodatamahasiswa', () => {
  cy.visit("siakad/repp_rekapbiodata");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Rekap Biodata Mahasiswa"
  );
});

Cypress.Commands.add('menuevaluasimahasiswa', () => {
  cy.visit("siakad/repp_evaluasimhs");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Evaluasi Mahasiswa"
  );
});

Cypress.Commands.add('menuriwayatmeet', () => {
  cy.visit("siakad/repp_riwayatmeet");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Riwayat Meet"
  );
});

//06_tingkat_akhir-=================================================================
Cypress.Commands.add('menuproposaltugasakhir', () => {
  cy.visit("siakad/repp_proposalskripsi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Proposal Tugas Akhir"
  );
});

Cypress.Commands.add('menudaftartugasakhir', () => {
  cy.visit("siakad/repp_skripsi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Tugas Akhir"
  );
});

Cypress.Commands.add('menujadwalujiantugasakhir', () => {
  cy.visit("siakad/repp_jadwalujita");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Jadwal Ujian Tugas Akhir"
  );
});

Cypress.Commands.add('menujumlahmahasiswatugasakhir', () => {
  cy.visit("siakad/repp_totalmhsskripsi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Jumlah Mahasiswa Tugas Akhir"
  );
});

Cypress.Commands.add('menubimbinganta', () => {
  cy.visit("siakad/repp_bimbinganta");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Bimbingan Tugas Akhir Mhs"
  );
});

Cypress.Commands.add('menurekapmahasiswatugasakhir', () => {
  cy.visit("siakad/repp_mhsskripsi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Rekap Mahasiswa Tugas Akhir"
  );
});

Cypress.Commands.add('menunilaiujitugasakhir', () => {
  cy.visit("siakad/repp_nilaiujiskripsi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Nilai Tugas Akhir"
  );
});

Cypress.Commands.add('menudaftarwisudayudisium', () => {
  cy.visit("siakad/repp_daftarwisuda");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Daftar Wisuda / Yudisium"
  );
});

Cypress.Commands.add('menudaftaryudisium', () => {
  cy.visit("siakad/repp_yudisium");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Yudisium"
  );
});

Cypress.Commands.add('menurekappembimbingta', () => {
  cy.visit("siakad/repp_rekappembimbingta");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Rekap Pembimbing TA"
  );
});

Cypress.Commands.add('menuberitaacarata', () => {
  cy.visit("siakad/repp_beritaacarata");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Berita Acara TA"
  );
});

Cypress.Commands.add('menuberitaacaraproposalta', () => {
  cy.visit("siakad/repp_beritaacaraajuta");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Berita Acara Proposal TA"
  );
});

Cypress.Commands.add('menubukuwisuda', () => {
  cy.visit("siakad/repp_bukuwisuda");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Buku Wisuda"
  );
});

Cypress.Commands.add('menudistribusidosentugasakhir', () => {
  cy.visit("siakad/repp_distgsakhir");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Distribusi Dosen Tugas Akhir"
  );
});

//07_nilai-=========================================================================
Cypress.Commands.add('menuipkmahasiswa', () => {
  cy.visit("siakad/repp_ipk");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Laporan IPK"
  );
});

Cypress.Commands.add('menurekaplaporanipk', () => {
  cy.visit("siakad/repp_rekapipk");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Laporan IPK"
  );
});

Cypress.Commands.add('menudistribusinilai', () => {
  cy.visit("siakad/repp_distribusinilai");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Distribusi Nilai"
  );
});

Cypress.Commands.add('menunilaikkn', () => {
  cy.visit("siakad/repp_nilaikkn");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Laporan Nilai KKN"
  );
});

Cypress.Commands.add('menucetaknilaiperkuliahan', () => {
  cy.visit("siakad/repp_nilaikuliah");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Nilai Perkuliahan"
  );
});

Cypress.Commands.add('menunilaimahasiswa', () => {
  cy.visit("siakad/repp_nilaimhs");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Nilai Mahasiswa"
  );
});

Cypress.Commands.add('menurangkingipk', () => {
  cy.visit("siakad/repp_ipktertinggi");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Rangking IPK"
  );

});

Cypress.Commands.add('menunilaimkperperiode', () => {
  cy.visit("siakad/repp_nilaimk");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Nilai MK per Periode"
  );
});

Cypress.Commands.add('menulaporankuncinilaiperkuliahan', () => {
  cy.visit("siakad/repp_kuncinilai");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kunci Nilai Perkuliahan"
  );
})

//08_laporan_pddikti-===============================================================
Cypress.Commands.add('menulaporanpddikti', () => {
  cy.visit("siakad/repp_datapdd");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Laporan PD-DIKTI"
  );
});

//09_laporan_emis-==================================================================
Cypress.Commands.add('menulaporanemismhs', () => {
  cy.visit("siakad/repp_emismhs");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Emis Mahasiswa"
  );
});

Cypress.Commands.add('menulaporanemisdosen', () => {
  cy.visit("siakad/repp_emisdosen");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Laporan Emis Dosen"
  );
});

Cypress.Commands.add('menulaporanemisbuku', () => {
  cy.visit("siakad/repp_emisbuku");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Emis Buku"
  );
});

Cypress.Commands.add('menulaporanemisbukudosen', () => {
  cy.visit("siakad/repp_emisbukudosen");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Emis Buku Dosen"
  );
});

Cypress.Commands.add('menulaporanemisjurnal', () => {
  cy.visit("siakad/repp_emisjurnal");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Emis Jurnal"
  );
});

Cypress.Commands.add('menulaporanemislulusan', () => {
  cy.visit("siakad/repp_emislulusan");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Laporan Emis Lulusan"
  );
});

Cypress.Commands.add('menulaporanemispenelitian', () => {
  cy.visit("siakad/repp_emispenelitian");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Emis Penilitian"
  );
});

Cypress.Commands.add('menulaporanemistugasdosen', () => {
  cy.visit("siakad/repp_emistugasdosen");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Emis Tugas Dosen"
  );
});

Cypress.Commands.add('menulaporanemisjurnaldosen', () => {
  cy.visit("siakad/repp_emisjurnaldosen");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Emis Jurnal Dosen"
  );
});