/// <reference types="cypress"/>

describe("superadmin can login and open all page in akademik aplikasi module", () => {
    beforeEach(() => {
        cy.loginsuperadmin();
        cy.get(".main_title").should("contain", "Daftar Modul");
        cy.get('.siakad > .inner').click();
        cy.intercept({
        method: "GET",
        url: "http://localhost/siacloud/gate/ajax/access/**",
        }).as("adminAccess");
        //cy.get("#admin > div:nth-child(1) > div:nth-child(3)").click();
        cy.get('#siakad > .content > .role_box').click();
        cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
    });

    it("superadmin can open dashboard akademik aplikasi module", () => {
        cy.get(".content-header > h1").should("contain.text", "Beranda");
    });

    it("superadmin can open menu di modul akademik aplikasi", () => {
        
        //Portal
        cy.visit("siakad/list_mahasiswa");
        cy.get(".content-header > h1").should("contain.text", "Mahasiswa Daftar Mahasiswa");
        
        cy.visit("siakad/list_pegawai");
        cy.get(".content-header > h1").should("contain.text", "Pegawai Daftar Pegawai");
        
        cy.visit("siakad/list_berita");
        cy.get(".content-header > h1").should("contain.text", "Pengumuman Daftar Pengumuman");
        
        cy.visit("siakad/list_forumedlink");
        cy.get(".content-header > h1").should("contain.text", "Kelas EdLink Daftar Forum Kelas EdLink");
        
        cy.visit("siakad/list_forum");
        cy.get(".content-header > h1").should("contain.text", "Forum Kelas (Lama) Daftar Forum Diskusi Kelas");
        
        cy.visit("siakad/list_konsultasi");
        cy.get(".content-header > h1").should("contain.text", "Konsultasi Pembimbing Daftar Konsultasi Pembimbing");

        cy.visit("siakad/ms_kegiatan");
        cy.get(".content-header > h1").should("contain.text", "Kegiatan Akad.");

        cy.visit("siakad/ms_kalender");
        cy.get(".content-header > h1").should("contain.text", "Kalender Akademik Daftar Kegiatan");

        cy.visit("siakad/data_monitorkalender");
        cy.get(".content-header > h1").should("contain.text", "Monitoring Kalender Akademik");

        cy.visit("siakad/list_broadcast");
        cy.get(".content-header > h1").should("contain.text", "Broadcast Daftar Broadcast");

        //Perkuliahan
        cy.visit("siakad/list_matakuliah");
        cy.get(".content-header > h1").should("contain.text", "Mata Kuliah Daftar Mata Kuliah / Blok / Departemen");

        cy.visit("siakad/set_kurikulum");
        cy.get(".content-header > h1").should("contain.text", "Kurikulum Prodi Kurikulum Prodi Per Semester");

        cy.visit("siakad/set_prasyarat");
        cy.get(".content-header > h1").should("contain.text", "Prasyarat Mata Kuliah Prasyarat Mata Kuliah Lulus dan Sedang");

        cy.visit("siakad/list_ekivaturan");
        cy.get(".content-header > h1").should("contain.text", "Ekivalensi Mata Kuliah Padanan Mata Kuliah");

        cy.visit("siakad/set_grupmk");
        cy.get(".content-header > h1").should("contain.text", "Set Grup Mata Kuliah Wajib Pilihan");

        cy.visit("siakad/ms_tahunkurikulum");
        cy.get(".content-header > h1").should("contain.text", "Tahun Kurikulum");

        cy.visit("siakad/ms_batassks");
        cy.get(".content-header > h1").should("contain.text", "Batas SKS");

        cy.visit("siakad/ms_skalanilai");
        cy.get(".content-header > h1").should("contain.text", "Skala Nilai");

        cy.visit("siakad/ms_proporsinilai");
        cy.get(".content-header > h1").should("contain.text", "Komposisi Nilai");

        cy.visit("siakad/ms_predikat");
        cy.get(".content-header > h1").should("contain.text", "Predikat Kelulusan");

        cy.visit("siakad/ms_evaluasi");
        cy.get(".content-header > h1").should("contain.text", "Evaluasi Akademik");

        cy.visit("siakad/set_kurikulumbs");
        cy.get(".content-header > h1").should("contain.text", "Kurikulum Konsentrasi Data Kurikulum Konsentrasi");

        cy.visit("siakad/list_kelas");
        cy.get(".content-header > h1").should("contain.text", "Kelas Kuliah Daftar Kelas & Jadwal Perkuliahan");

        cy.visit("siakad/list_jadwal");
        cy.get(".content-header > h1").should("contain.text", "Jadwal & Presensi Riwayat dan Presensi Perkuliahan");

        cy.visit("siakad/set_pemutihannilai");
        cy.get(".content-header > h1").should("contain.text", "Pemutihan Nilai Setting Nilai Default Mahasiswa");

        cy.visit("siakad/ms_tahunajaran");
        cy.get(".content-header > h1").should("contain.text", "Tahun Ajaran");

        cy.visit("siakad/data_monitorruang");
        cy.get(".content-header > h1").should("contain.text", "Monitoring Ruang Data Penggunaan Ruangan");

        cy.visit("siakad/list_rekapruang");
        cy.get(".content-header > h1").should("contain.text", "Penggunaan Ruang Rekap Dalam Satuan Jam");

        cy.visit("siakad/set_semester");
        cy.get(".content-header > h1").should("contain.text", "Status Semester Status Semester Mahasiswa Per Prodi");
        
        cy.visit("siakad/list_mhspa");
        cy.get(".content-header > h1").should("contain.text", "Pembimbing Akademik Daftar Mahasiswa Bimbingan");

        cy.visit("siakad/set_paket");
        cy.get(".content-header > h1").should("contain.text", "Paket Kuliah Pengambilan Mata Kuliah Paket untuk Mahasiswa");

        cy.visit("siakad/set_transfermhs");
        cy.get(".content-header > h1").should("contain.text", "Mahasiswa Pindahan Mahasiswa Pindahan dan Konversi Nilai");

        cy.visit("siakad/list_ekivnilai");
        cy.get(".content-header > h1").should("contain.text", "Konversi Nilai Daftar Mahasiswa dengan Konversi Nilai");

        cy.visit("siakad/list_evaluasimhs");
        cy.get(".content-header > h1").should("contain.text", "Evaluasi Mahasiswa Daftar Mahasiswa Yang Terkena Evaluasi Pada 2020/2021 Genap");

        cy.visit("siakad/set_cuti");
        cy.get(".content-header > h1").should("contain.text", "Set Cuti Cutikan Mahasiswa");

        cy.visit("siakad/set_cekal");
        cy.get(".content-header > h1").should("contain.text", "Cekal Pemberian Cekal Mahasiswa");

        cy.visit("siakad/set_berhentistudi");
        cy.get(".content-header > h1").should("contain.text", "Berhenti Studi");

        cy.visit("siakad/list_pengajuanta");
        cy.get(".content-header > h1").should("contain.text", "Proposal Tugas Akhir Daftar Proposal Tugas Akhir Mahasiswa");
        
        cy.visit("siakad/ms_tahapajuta");
        cy.get(".content-header > h1").should("contain.text", "Tahap Pengajuan");

        cy.visit("siakad/ms_syaratajuta");
        cy.get(".content-header > h1").should("contain.text", "Syarat Ujian");

        cy.visit("siakad/ms_refnilaiajuta");
        cy.get(".content-header > h1").should("contain.text", "Unsur Nilai Proposal");

        cy.visit("siakad/list_ta");
        cy.get(".content-header > h1").should("contain.text", "Tugas Akhir Daftar Tugas Akhir Mahasiswa");

        cy.visit("siakad/ms_tahapskripsi");
        cy.get(".content-header > h1").should("contain.text", "Tahap Tugas Akhir");

        cy.visit("siakad/ms_syaratskripsi");
        cy.get(".content-header > h1").should("contain.text", "Syarat Ujian");

        cy.visit("siakad/ms_refnilaiskripsi");
        cy.get(".content-header > h1").should("contain.text", "Unsur Nilai Tugas Akhir");
        
        
        //Kemahasiswaan
        cy.visit("siakad/ms_jenisaktivitasmhs");
        cy.get(".content-header > h1").should("contain.text", "Jenis Aktivitas");

        cy.visit("siakad/ms_tingkatprestasimhs");
        cy.get(".content-header > h1").should("contain.text", "Tingkat Prestasi");

        cy.visit("siakad/ms_jenisprestasimhs");
        cy.get(".content-header > h1").should("contain.text", "Jenis Prestasi");

        cy.visit("siakad/list_kelompokaktivitasmhs");
        cy.get(".content-header > h1").should("contain.text", "Kelompok Aktivitas");

        cy.visit("siakad/ms_peringkatmhs");
        cy.get(".content-header > h1").should("contain.text", "Peringkat");

        cy.visit("siakad/ms_jenisdokumenaktivitasmhs");
        cy.get(".content-header > h1").should("contain.text", "Jenis Dokumen Daftar Jenis Dokumen Pendukung");

        cy.visit("siakad/list_aktivitasmhs");
        cy.get(".content-header > h1").should("contain.text", "Aktivitas dan Prestasi Daftar Aktivitas dan Prestasi");

        cy.visit("siakad/set_validasiaktivitas");
        cy.get(".content-header > h1").should("contain.text", "Validasi Aktivitas Mahasiswa");

        cy.visit("siakad/ms_jenispelanggaran");
        cy.get(".content-header > h1").should("contain.text", "Jenis Pelanggaran");

        cy.visit("siakad/ms_kelompokpelanggaran");
        cy.get(".content-header > h1").should("contain.text", "Kelompok Pelanggaran");

        cy.visit("siakad/ms_sanksipelanggaran");
        cy.get(".content-header > h1").should("contain.text", "Sanksi Pelanggaran");

        cy.visit("siakad/list_pelanggaranmhs");
        cy.get(".content-header > h1").should("contain.text", "Pelanggaran Mahasiswa");

        cy.visit("siakad/list_settingskpiprodi");
        cy.get(".content-header > h1").should("contain.text", "Setting SKPI");

        cy.visit("siakad/repp_skpi");
        cy.get(".content-header > h1").should("contain.text", "SKPI Mahasiswa");

        cy.visit("siakad/repp_prestasimhs");
        cy.get(".content-header > h1").should("contain.text", "Rekap Prestasi Mahasiswa");

        cy.visit("siakad/repp_skpi_mahasiswa");
        cy.get(".content-header > h1").should("contain.text", "Laporan SKPI Mahasiswa");

        cy.visit("siakad/repp_skkm");
        cy.get(".content-header > h1").should("contain.text", "Laporan SKKM Mahasiswa");
        
        //Kampus Merdeka
        cy.visit("siakad/list_mahasiswakm");
        cy.get(".content-header > h1").should("contain.text", "Mahasiswa Daftar Mahasiswa Kampus Merdeka");

        cy.visit("siakad/list_kelaskm");
        cy.get(".content-header > h1").should("contain.text", "Kelas Kuliah Daftar Kelas Kuliah Kampus Merdeka");

        cy.visit("siakad/repp_nilaimhskm");
        cy.get(".content-header > h1").should("contain.text", "Nilai per Mahasiswa");

        cy.visit("siakad/repp_nilaikelaskm");
        cy.get(".content-header > h1").should("contain.text", "Nilai per Kelas");
        
        //Data Pelengkap
        cy.visit("siakad/data_universitas/detail");
        cy.get(".content-header > h1").should("contain.text", "Data Universitas Sevima");

        cy.visit("siakad/list_fakultas");
        cy.get(".content-header > h1").should("contain.text", "Fakultas Daftar Fakultas");

        cy.visit("siakad/list_jurusan");
        cy.get(".content-header > h1").should("contain.text", "Jurusan Daftar Jurusan");

        cy.visit("siakad/list_prodi");
        cy.get(".content-header > h1").should("contain.text", "Program Studi Daftar Program Studi");
        
        cy.visit("siakad/ms_bidangstudi");
        cy.get(".content-header > h1").should("contain.text", "Konsentrasi Daftar Konsentrasi");

        cy.visit("siakad/ms_tingkatpendidikan");
        cy.get(".content-header > h1").should("contain.text", "Tk. Pendidikan");

        cy.visit("siakad/ms_jenjang");
        cy.get(".content-header > h1").should("contain.text", "Tk. Pendidikan Universitas");

        cy.visit("siakad/ms_sistemkuliah");
        cy.get(".content-header > h1").should("contain.text", "Sistem Kuliah");

        cy.visit("siakad/ms_ruang");
        cy.get(".content-header > h1").should("contain.text", "Ruang Kuliah");

        cy.visit("siakad/ms_kegiatan");
        cy.get(".content-header > h1").should("contain.text", "Kegiatan Akad.");

        cy.visit("siakad/ms_kalender");
        cy.get(".content-header > h1").should("contain.text", "Kalender Akademik Daftar Kegiatan");

        cy.visit("siakad/ms_universitas");
        cy.get(".content-header > h1").should("contain.text", "Universitas Luar");

        cy.visit("siakad/ms_perusahaan");
        cy.get(".content-header > h1").should("contain.text", "Instansi");

        cy.visit("siakad/list_cp");
        cy.get(".content-header > h1").should("contain.text", "Contact Person Daftar Contact Person Instansi");

        cy.visit("siakad/ms_jenismk");
        cy.get(".content-header > h1").should("contain.text", "Jenis Mata Kuliah");

        cy.visit("siakad/ms_bidangilmu");
        cy.get(".content-header > h1").should("contain.text", "Bidang Ilmu");

        cy.visit("siakad/ms_kelompokmk");
        cy.get(".content-header > h1").should("contain.text", "Kelompok MK");

        cy.visit("siakad/ms_refnilai");
        cy.get(".content-header > h1").should("contain.text", "Unsur Nilai");

        cy.visit("siakad/ms_kelasperkuliahan");
        cy.get(".content-header > h1").should("contain.text", "kelas perkuliahan");

        cy.visit("siakad/ms_slotwaktu");
        cy.get(".content-header > h1").should("contain.text", "Slot Waktu");

        cy.visit("siakad/ms_jenispertemuan");
        cy.get(".content-header > h1").should("contain.text", "Jenis Pertemuan");

        cy.visit("siakad/ms_statushadir");
        cy.get(".content-header > h1").should("contain.text", "Status Hadir");

        cy.visit("siakad/ms_jenismodulmkblok");
        cy.get(".content-header > h1").should("contain.text", "Jenis Modul MK");

        cy.visit("siakad/ms_kelompokperkuliahan");
        cy.get(".content-header > h1").should("contain.text", "Kel. Perkuliahan");

        cy.visit("siakad/ms_grupmk");
        cy.get(".content-header > h1").should("contain.text", "Grup MK Wajib Pilihan");

        cy.visit("siakad/ms_jeniskegiatan");
        cy.get(".content-header > h1").should("contain.text", "Jenis Kegiatan Pendukung");

        cy.visit("siakad/ms_agama");
        cy.get(".content-header > h1").should("contain.text", "Agama");

        cy.visit("siakad/ms_pekerjaan");
        cy.get(".content-header > h1").should("contain.text", "Pekerjaan");

        cy.visit("siakad/ms_penghasilan");
        cy.get(".content-header > h1").should("contain.text", "Penghasilan");

        cy.visit("siakad/ms_suku");
        cy.get(".content-header > h1").should("contain.text", "Suku Daftar Suku");

        cy.visit("siakad/ms_almamater");
        cy.get(".content-header > h1").should("contain.text", "Jas Almamater");

        cy.visit("siakad/ms_statusmhs");
        cy.get(".content-header > h1").should("contain.text", "Status Mahasiswa");

        cy.visit("siakad/ms_jenistinggal");
        cy.get(".content-header > h1").should("contain.text", "Jenis Tinggal");

        cy.visit("siakad/ms_kebutuhankhusus");
        cy.get(".content-header > h1").should("contain.text", "Kebutuhan Khusus");

        cy.visit("siakad/ms_transport");
        cy.get(".content-header > h1").should("contain.text", "Transportasi");

        cy.visit("siakad/ms_jenispeg");
        cy.get(".content-header > h1").should("contain.text", "Jenis Pegawai");

        cy.visit("siakad/ms_golpangkat");
        cy.get(".content-header > h1").should("contain.text", "Golongan/Pangkat");

        cy.visit("siakad/ms_jabfung");
        cy.get(".content-header > h1").should("contain.text", "Jab. Fungsional");

        cy.visit("siakad/ms_jabstruktural");
        cy.get(".content-header > h1").should("contain.text", "Jab. Struktural");

        cy.visit("siakad/ms_predikatdosen");
        cy.get(".content-header > h1").should("contain.text", "Predikat Dosen");

        cy.visit("siakad/ms_honor");
        cy.get(".content-header > h1").should("contain.text", "Jenis Honor");

        cy.visit("siakad/list_honortarif");
        cy.get(".content-header > h1").should("contain.text", "Tarif Honor Daftar Tarif Honor");

        cy.visit("siakad/ms_statusaktif");
        cy.get(".content-header > h1").should("contain.text", "Status Keaktifan");

        cy.visit("siakad/ms_negara");
        cy.get(".content-header > h1").should("contain.text", "Negara Daftar Negara");

        cy.visit("siakad/ms_propinsi");
        cy.get(".content-header > h1").should("contain.text", "Provinsi Daftar Propinsi");

        cy.visit("siakad/ms_kota");
        cy.get(".content-header > h1").should("contain.text", "Kota Daftar Kota");

        cy.visit("siakad/ms_kecamatan");
        cy.get(".content-header > h1").should("contain.text", "Kecamatan Daftar Kecamatan");

        cy.visit("siakad/list_templatesurataktif");
        cy.get(".content-header > h1").should("contain.text", "Template Surat Keterangan Aktif");

        //Laporan
        cy.visit("siakad/list_laporan");
        cy.get(".content-header > h1").should("contain.text", "Laporan Daftar Laporan Manual");

        cy.visit("siakad/repp_laporan");
        cy.get(".content-header > h1").should("contain.text", "Laporan Manual");

        cy.visit("siakad/repp_jadwalajar");
        cy.get(".content-header > h1").should("contain.text", "Jadwal Semester Dosen");

        cy.visit("siakad/repp_daftardosen");
        cy.get(".content-header > h1").should("contain.text", "Daftar Dosen");

        cy.visit("siakad/repp_rasiodosenins");
        cy.get(".content-header > h1").should("contain.text", "Rasio Dosen");

        cy.visit("siakad/repp_rekapabsendosen");
        cy.get(".content-header > h1").should("contain.text", "Rekap Presensi Dosen");

        cy.visit("siakad/repp_jadwalmengajar");
        cy.get(".content-header > h1").should("contain.text", "Jadwal Mengajar Dosen");

        cy.visit("siakad/repp_rekapmengajar");
        cy.get(".content-header > h1").should("contain.text", "Rekap Jadwal Mengajar Dosen");

        cy.visit("siakad/repp_distribusidosenwali");
        cy.get(".content-header > h1").should("contain.text", "Distribusi Dosen Wali");

        cy.visit("siakad/repp_jurnalperwalian");
        cy.get(".content-header > h1").should("contain.text", "Jurnal Perwalian");

        cy.visit("siakad/repp_dpa");
        cy.get(".content-header > h1").should("contain.text", "Mahasiswa Bimbingan");

        cy.visit("siakad/repp_honordosen");
        cy.get(".content-header > h1").should("contain.text", "Honorarium Dosen");

        cy.visit("siakad/repp_kelengkapanbiodosen");
        cy.get(".content-header > h1").should("contain.text", "Kelengkapan Biodata Dosen");

        cy.visit("siakad/repp_isiabsensidosen");
        cy.get(".content-header > h1").should("contain.text", "Isi Presensi Dosen");

        cy.visit("siakad/repp_distribusipengajar");
        cy.get(".content-header > h1").should("contain.text", "Distribusi Pengajar");

        cy.visit("siakad/repp_rekapedomdosen");
        cy.get(".content-header > h1").should("contain.text", "Laporan EDOM");

        cy.visit("siakad/repp_absensi");
        cy.get(".content-header > h1").should("contain.text", "Daftar Hadir");

        cy.visit("siakad/repp_khsmahasiswa");
        cy.get(".content-header > h1").should("contain.text", "KHS Mahasiswa");

        cy.visit("siakad/repp_krsmahasiswa");
        cy.get(".content-header > h1").should("contain.text", "KRS Mahasiswa");

        cy.visit("siakad/repp_daftarmhs");
        cy.get(".content-header > h1").should("contain.text", "Daftar Mahasiswa");

        cy.visit("siakad/repp_terancamdo");
        cy.get(".content-header > h1").should("contain.text", "Mhs Terancam DO");

        cy.visit("siakad/repp_transkrip");
        cy.get(".content-header > h1").should("contain.text", "Transkrip");

        cy.visit("siakad/repp_daftarmhstransfer");
        cy.get(".content-header > h1").should("contain.text", "Daftar Mhs. Transfer");

        cy.visit("siakad/repp_cekalmhs");
        cy.get(".content-header > h1").should("contain.text", "Laporan Cekal Mahasiswa");

        cy.visit("siakad/repp_transkripsmt");
        cy.get(".content-header > h1").should("contain.text", "Transkrip Sementara");

        cy.visit("siakad/repp_ijazah");
        cy.get(".content-header > h1").should("contain.text", "Ijazah Mahasiswa");

        cy.visit("siakad/repp_ktm");
        cy.get(".content-header > h1").should("contain.text", "KTM Per Mahasiswa");

        cy.visit("siakad/repp_rekapabsenmhs");
        cy.get(".content-header > h1").should("contain.text", "Rekap Presensi Mahasiswa");

        cy.visit("siakad/repp_krsmhs");
        cy.get(".content-header > h1").should("contain.text", "Laporan Status KRS");

        cy.visit("siakad/repp_khsmhskolektif");
        cy.get(".content-header > h1").should("contain.text", "KHS Mahasiswa Kolektif");

        cy.visit("siakad/repp_absensimhs");
        cy.get(".content-header > h1").should("contain.text", "Mon. Presensi Mahasiswa");

        cy.visit("siakad/repp_masastudi");
        cy.get(".content-header > h1").should("contain.text", "Masa Studi");

        cy.visit("siakad/repp_nilaikonversi");
        cy.get(".content-header > h1").should("contain.text", "Laporan Nilai Konversi");

        cy.visit("siakad/repp_kurikulummhs");
        cy.get(".content-header > h1").should("contain.text", "Kurikulum Mahasiswa");

        cy.visit("siakad/repp_jadwalkuliah");
        cy.get(".content-header > h1").should("contain.text", "Jadwal Perkuliahan Semester Ini (Mahasiswa)");
        
        cy.visit("siakad/repp_prosentaseabs");
        cy.get(".content-header > h1").should("contain.text", "Persentase Presensi Mhs.");

        cy.visit("siakad/repp_isiabsensi");
        cy.get(".content-header > h1").should("contain.text", "Isi Presensi Mahasiswa");

        cy.visit("siakad/repp_perkuliahan");
        cy.get(".content-header > h1").should("contain.text", "Jurnal/Pelaksanaan Kuliah");

        cy.visit("siakad/repp_mkmengulang");
        cy.get(".content-header > h1").should("contain.text", "Mata Kuliah Mengulang");

        cy.visit("siakad/repp_angket");
        cy.get(".content-header > h1").should("contain.text", "Laporan Kuesioner");

        cy.visit("siakad/repp_absensiujian");
        cy.get(".content-header > h1").should("contain.text", "Berita Acara Ujian");
        
        cy.visit("siakad/repp_kartuujian");
        cy.get(".content-header > h1").should("contain.text", "Kartu Ujian");

        cy.visit("siakad/repp_silabus");
        cy.get(".content-header > h1").should("contain.text", "Silabus Mata Kuliah");

        cy.visit("siakad/repp_distribusikrsmhs");
        cy.get(".content-header > h1").should("contain.text", "Laporan Distribusi KRS Mahasiswa");
        
        cy.visit("siakad/repp_kurikulumprodi");
        cy.get(".content-header > h1").should("contain.text", "Laporan Daftar Kurikulum Prodi");

        cy.visit("siakad/repp_matakuliah");
        cy.get(".content-header > h1").should("contain.text", "Daftar matakuliah");

        cy.visit("siakad/repp_cekalujian");
        cy.get(".content-header > h1").should("contain.text", "Mahasiswa Tercekal Ujian");

        cy.visit("siakad/repp_rekapedommhs");
        cy.get(".content-header > h1").should("contain.text", "Laporan Rekap Angket Mahasiswa");

        cy.visit("siakad/repp_distrps");
        cy.get(".content-header > h1").should("contain.text", "Distribusi RPS Mata Kuliah");

        cy.visit("siakad/repp_rekapangket");
        cy.get(".content-header > h1").should("contain.text", "Rekap Kuesioner");

        cy.visit("siakad/repp_rekapkrs");
        cy.get(".content-header > h1").should("contain.text", "Rekap KRS");

        cy.visit("siakad/repp_statussemester");
        cy.get(".content-header > h1").should("contain.text", "Laporan status Semester Mahasiswa");

        cy.visit("siakad/repp_statusmhs5thn");
        cy.get(".content-header > h1").should("contain.text", "Jumlah Mahasiswa Per Status");

        cy.visit("siakad/repp_statusmhs");
        cy.get(".content-header > h1").should("contain.text", "Rekap Status Akademik");

        cy.visit("siakad/repp_kalender");
        cy.get(".content-header > h1").should("contain.text", "Laporan Kalender Akademik");

        cy.visit("siakad/repp_kapasitaskelas");
        cy.get(".content-header > h1").should("contain.text", "Laporan Kapasitas Kelas");

        cy.visit("siakad/repp_monitoringkelas");
        cy.get(".content-header > h1").should("contain.text", "Monitoring Kelas");

        cy.visit("siakad/repp_jadwalmingguanprodi");
        cy.get(".content-header > h1").should("contain.text", "Jadwal Mingguan Prodi");

        cy.visit("siakad/repp_rekapmhsprodi");
        cy.get(".content-header > h1").should("contain.text", "Rekap Mahasiswa");

        cy.visit("siakad/repp_rekapangketperpertanyaan");
        cy.get(".content-header > h1").should("contain.text", "Rekap Kuesioner Per Pertanyaan");

        cy.visit("siakad/repp_rekapbiodata");
        cy.get(".content-header > h1").should("contain.text", "Rekap Biodata Mahasiswa");

        cy.visit("siakad/repp_evaluasimhs");
        cy.get(".content-header > h1").should("contain.text", "Evaluasi Mahasiswa");

        cy.visit("siakad/repp_riwayatmeet");
        cy.get(".content-header > h1").should("contain.text", "Riwayat Meet");

        cy.visit("siakad/repp_kuesionerlayanan");
        cy.get(".content-header > h1").should("contain.text", "Rekap Kuesioner Layanan");

        cy.visit("siakad/repp_rekapangketlayanan");
        cy.get(".content-header > h1").should("contain.text", "Rekap Kuesioner Layanan");

        cy.visit("siakad/repp_proposalskripsi");
        cy.get(".content-header > h1").should("contain.text", "Laporan Proposal Tugas Akhir");

        cy.visit("siakad/repp_skripsi");
        cy.get(".content-header > h1").should("contain.text", "Laporan Tugas Akhir");

        cy.visit("siakad/repp_jadwalujita");
        cy.get(".content-header > h1").should("contain.text", "Jadwal Ujian Tugas Akhir");

        cy.visit("siakad/repp_totalmhsskripsi");
        cy.get(".content-header > h1").should("contain.text", "Laporan Jumlah Mahasiswa Tugas Akhir");

        cy.visit("siakad/repp_bimbinganta");
        cy.get(".content-header > h1").should("contain.text", "Bimbingan Tugas Akhir Mhs");

        cy.visit("siakad/repp_mhsskripsi");
        cy.get(".content-header > h1").should("contain.text", "Laporan Rekap Mahasiswa Tugas Akhir");

        cy.visit("siakad/repp_nilaiujiskripsi");
        cy.get(".content-header > h1").should("contain.text", "Laporan Nilai Tugas Akhir");

        cy.visit("siakad/repp_daftarwisuda");
        cy.get(".content-header > h1").should("contain.text", "Daftar Wisuda / Yudisium");

        cy.visit("siakad/repp_yudisium");
        cy.get(".content-header > h1").should("contain.text", "Yudisium");

        cy.visit("siakad/repp_rekappembimbingta");
        cy.get(".content-header > h1").should("contain.text", "Laporan Rekap Pembimbing TA");

        cy.visit("siakad/repp_beritaacarata");
        cy.get(".content-header > h1").should("contain.text", "Berita Acara TA");

        cy.visit("siakad/repp_beritaacaraajuta");
        cy.get(".content-header > h1").should("contain.text", "Berita Acara Proposal TA");

        cy.visit("siakad/repp_bukuwisuda");
        cy.get(".content-header > h1").should("contain.text", "Buku Wisuda");

        cy.visit("siakad/repp_distgsakhir");
        cy.get(".content-header > h1").should("contain.text", "Distribusi Dosen Tugas Akhir");

        cy.visit("siakad/repp_ipk");
        cy.get(".content-header > h1").should("contain.text", "Laporan IPK");

        cy.visit("siakad/repp_rekapipk");
        cy.get(".content-header > h1").should("contain.text", "Laporan IPK");

        cy.visit("siakad/repp_distribusinilai");
        cy.get(".content-header > h1").should("contain.text", "Distribusi Nilai");

        cy.visit("siakad/repp_nilaikkn");
        cy.get(".content-header > h1").should("contain.text", "Laporan Nilai KKN");

        cy.visit("siakad/repp_nilaikuliah");
        cy.get(".content-header > h1").should("contain.text", "Nilai Perkuliahan");

        cy.visit("siakad/repp_nilaimhs");
        cy.get(".content-header > h1").should("contain.text", "Laporan Nilai Mahasiswa");

        cy.visit("siakad/repp_ipktertinggi");
        cy.get(".content-header > h1").should("contain.text", "Rangking IPK");

        cy.visit("siakad/repp_nilaimk");
        cy.get(".content-header > h1").should("contain.text", "Nilai MK per Periode");

        cy.visit("siakad/repp_kuncinilai");
        cy.get(".content-header > h1").should("contain.text", "Kunci Nilai Perkuliahan");

        cy.visit("siakad/repp_datapdd");
        cy.get(".content-header > h1").should("contain.text", "Laporan PD-DIKTI");

        cy.visit("siakad/repp_emismhs");
        cy.get(".content-header > h1").should("contain.text", "Emis Mahasiswa");

        cy.visit("siakad/repp_emisdosen");
        cy.get(".content-header > h1").should("contain.text", "Laporan Emis Dosen");

        cy.visit("siakad/repp_emisbuku");
        cy.get(".content-header > h1").should("contain.text", "Emis Buku");

        cy.visit("siakad/repp_emisbukudosen");
        cy.get(".content-header > h1").should("contain.text", "Emis Buku Dosen");

        cy.visit("siakad/repp_emisjurnal");
        cy.get(".content-header > h1").should("contain.text", "Emis Jurnal");

        cy.visit("siakad/repp_emislulusan");
        cy.get(".content-header > h1").should("contain.text", "Laporan Emis Lulusan");

        cy.visit("siakad/repp_emispenelitian");
        cy.get(".content-header > h1").should("contain.text", "Emis Penilitian");

        cy.visit("siakad/repp_emistugasdosen");
        cy.get(".content-header > h1").should("contain.text", "Emis Tugas Dosen");

        cy.visit("siakad/repp_emisjurnaldosen");
        cy.get(".content-header > h1").should("contain.text", "Emis Jurnal Dosen");

        //Setting
        cy.visit("siakad/list_periode");
        cy.get(".content-header > h1").should("contain.text", "Periode Akademik Daftar Periode Akademik");

        cy.visit("siakad/list_settingprodi");
        cy.get(".content-header > h1").should("contain.text", "Setting Setting Program Studi");

        cy.visit("siakad/ms_katkuesionerlayanan");
        cy.get(".content-header > h1").should("contain.text", "Kategori Kuesioner Layanan");

        cy.visit("siakad/list_jenisjawabanangket");
        cy.get(".content-header > h1").should("contain.text", "Jenis Jawaban Daftar Jenis Jawaban");

        cy.visit("siakad/list_kuesionerlayanan");
        cy.get(".content-header > h1").should("contain.text", "Kuesioner Layanan Daftar Kuesioner Layanan");

        cy.visit("siakad/list_angketlayanan");
        cy.get(".content-header > h1").should("contain.text", "Angket Layanan");

        cy.visit("siakad/ms_settingapk/detail");
        cy.get(".content-header > h1").should("contain.text", "Setting Setting Pengaturan SIM");
    });
});