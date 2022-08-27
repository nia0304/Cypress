/// <reference types="cypress"/>

describe("super admin can login and open all page in module PMB", () => {
  beforeEach(() => {
    cy.loginUserAdminPt();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".spmb > .inner").click();

    cy.intercept({
      method: "GET",
      url: "http://localhost/siacloud/gate/ajax/access/**",
    }).as("adminAccess");
    cy.get("#spmb")
      .contains("Administrator Perguruan Tinggi")
      .should("be.visible")
      .click();
    cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
  });

  it("super admin can open menu di modul spmb", () => {
    //dashboard
    cy.visit("spmb/home");
    cy.get(".content-header > h1").should("contain.text", "Dashboard");

    //pendaftar
    cy.visit("spmb/list_pendaftar");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Daftar Pendaftar"
    );

    //ODS
    cy.visit("spmb/one_day_service");
    cy.get(".title").should("contain.text", "Pendaftaran");

    //pengaturan
    cy.visit("spmb/list_periode");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Daftar Periode Pendaftaran"
    );

    cy.visit("spmb/ms_prodi");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Sebaran Program Studi"
    );

    cy.visit("spmb/ms_seleksipendaftaran");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Seleksi Pendaftaran"
    );

    cy.visit("spmb/ms_syaratpendaftaran");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Syarat Seleksi"
    );

    cy.visit("spmb/list_jadwal");
    cy.get(".content-header > h1 > small").should("contain.text", "Jadwal");

    cy.visit("spmb/ms_kelompokukt");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Kelompok & Tarif UKT"
    );

    //seleksi
    cy.visit("spmb/list_nilaiseleksi");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Nilai Seleksi"
    );

    cy.visit("spmb/list_syaratseleksi");
    cy.get(".content-header > h1").should("contain.text", "Syarat Seleksi");

    cy.visit("spmb/set_nilaiseleksi");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Hasil Seleksi"
    );

    cy.visit("spmb/set_syaratseleksi");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Administrasi"
    );

    cy.visit("spmb/set_uktpendaftar");
    cy.get(".content-header > h1").should("contain.text", "UKT Pendaftar");

    cy.visit("spmb/set_bidikmisi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "KIP Kuliah Pendaftar"
    );

    //kelulusan
    cy.visit("spmb/list_kelulusan");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Rekomendasi Prodi"
    );

    cy.visit("spmb/set_registrasi");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Registrasi Ulang"
    );

    cy.visit("spmb/set_mahasiswa");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Generate Mahasiswa"
    );

    cy.visit("spmb/ms_batalnim");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Pembatan NIM"
    );

    //Referensi > pendaftaran
    cy.visit("spmb/ms_gelombang");
    cy.get(".content-header > h1").should("contain.text", "Gelombang");

    cy.visit("spmb/ms_jalurpendaftaran");
    cy.get(".content-header > h1").should("contain.text", "Jalur Pendaftaran");

    cy.visit("spmb/ms_sistemkuliah");
    cy.get(".content-header > h1").should("contain.text", "Sistem Kuliah");

    cy.visit("spmb/ms_jenisprogram");
    cy.get(".content-header > h1").should("contain.text", "Jenis Program");

    //Referensi > berita
    cy.visit("spmb/list_pengumuman");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Daftar Pengumuman & Informasi"
    );

    cy.visit("spmb/ms_linkterkait");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Tautan Terkait"
    );

    cy.visit("spmb/list_broadcast");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Daftar Broadcast"
    );

    //Referensi > seleksi
    cy.visit("spmb/ms_jenisseleksi");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Daftar Jenis Seleksi"
    );

    cy.visit("spmb/ms_komposisi");
    cy.get(".content-header > h1").should("contain.text", "Komposisi Seleksi");

    cy.visit("spmb/ms_jenissyarat");
    cy.get(".content-header > h1").should("contain.text", "Jenis Syarat");

    cy.visit("spmb/ms_syarat");
    cy.get(".content-header > h1").should("contain.text", "Syarat");

    cy.visit("spmb/ms_pilihansyarat");
    cy.get(".content-header > h1").should("contain.text", "Pilihan Syarat");

    cy.visit("spmb/ms_mapel");
    cy.get(".content-header > h1").should("contain.text", "Mata Pelajaran");

    cy.visit("spmb/ms_penilaian");
    cy.get(".content-header > h1").should("contain.text", "Penilaian Rapor");

    //Referensi > pendidikan
    cy.visit("spmb/ms_jenisinstitusi");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Daftar Jenis Institusi"
    );

    cy.visit("spmb/list_sekolah");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Daftar Sekolah"
    );

    cy.visit("spmb/ms_universitas");
    cy.get(".content-header > h1").should("contain.text", "Perguruan Tinggi");

    cy.visit("spmb/ms_universitasprodi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Prodi Perguruan Tinggi"
    );

    //Referensi > wilayah
    cy.visit("spmb/ms_negara");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Daftar Negara"
    );

    cy.visit("spmb/ms_propinsi");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Daftar Propinsi"
    );

    cy.visit("spmb/ms_kota");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Daftar Kota"
    );

    cy.visit("spmb/ms_kecamatan");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Daftar Kecamatan"
    );

    //Referensi > biodata
    cy.visit("spmb/ms_agama");
    cy.get(".content-header > h1").should("contain.text", "Agama");

    cy.visit("spmb/ms_pekerjaan");
    cy.get(".content-header > h1").should("contain.text", "Pekerjaan");

    cy.visit("spmb/ms_penghasilan");
    cy.get(".content-header > h1").should("contain.text", "Penghasilan");

    cy.visit("spmb/ms_almamater");
    cy.get(".content-header > h1").should("contain.text", "Jas Almamater");

    //Referensi > pelengkap
    cy.visit("spmb/ms_ruang");
    cy.get(".content-header > h1").should("contain.text", "Ruang");

    cy.visit("spmb/ms_pemberirekomendasi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pemberi Rekomendasi"
    );

    cy.visit("spmb/list_pertanyaan");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Daftar Pertanyaan"
    );

    cy.visit("spmb/ms_refwebsite");
    cy.get(".content-header > h1").should("contain.text", "Referensi Website");

    cy.visit("spmb/ms_settingapk");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Setting Pengaturan SIM"
    );

    //Laporan > pendaftar
    cy.visit("spmb/repp_pendaftar");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Biodata Pendaftar"
    );

    cy.visit("spmb/repp_uktpendaftar");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan UKT Pendaftar"
    );

    cy.visit("spmb/repp_pendaftarbidikmisi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Pendaftar KIP Kuliah"
    );

    cy.visit("spmb/repp_tahappendaftar");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Tahap Pendaftar"
    );

    cy.visit("spmb/repp_cetakformulir");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Bukti Pendaftaran"
    );

    cy.visit("spmb/repp_prodipendaftar");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pilihan Prodi Pendaftar"
    );

    cy.visit("spmb/repp_perekomendasi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Perekomendasi Pendaftar"
    );

    cy.visit("spmb/repp_hitunguktpendaftar");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Perhitungan UKT Pendaftar"
    );

    //Laporan > seleksi
    cy.visit("spmb/repp_nilaiseleksi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Nilai Seleksi Pendaftar"
    );

    cy.visit("spmb/repp_presensiruang");
    cy.get(".content-header > h1").should("contain.text", "Presensi Ujian");

    cy.visit("spmb/repp_absensiujian");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Hadir Seleksi"
    );

    cy.visit("spmb/repp_jadwalseleksi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Jadwal Seleksi"
    );

    cy.visit("spmb/repp_kartuujian");
    cy.get(".content-header > h1").should("contain.text", "Kartu Ujian");

    //Laporan > kelulusan
    cy.visit("spmb/repp_rekomprodi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Rekomendasi Prodi"
    );

    cy.visit("spmb/repp_daftarulang");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Daftar Ulang"
    );

    //Laporan > rekapitulasi
    cy.visit("spmb/repp_rekapprodi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Prodi Pendaftar"
    );

    cy.visit("spmb/repp_kuotaukt");
    cy.get(".content-header > h1").should("contain.text", "Rekap Kuota UKT");

    cy.visit("spmb/repp_rekapbidikmisi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Pendaftar KIP Kuliah"
    );

    cy.visit("spmb/repp_rekaprekomprodi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Rekomendasi Prodi"
    );

    cy.visit("spmb/repp_rekapsekolah");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Sekolah Pendaftar"
    );

    cy.visit("spmb/repp_rekapkota");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Kota Pendaftar"
    );

    cy.visit("spmb/repp_kuisionerpendaftar");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Kuesioner Pendaftar"
    );

    cy.visit("spmb/repp_persentasekuesioner");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Persentase Kuesioner"
    );

    cy.visit("spmb/repp_rekapalmamater");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Ukuran Jas Almamater"
    );

    //Laporan > Laporan manual
    cy.visit("spmb/list_laporan");
    cy.get(".content-header > h1 > small").should(
      "contain.text",
      "Daftar Laporan Manual"
    );

    cy.visit("spmb/repp_laporan");
    cy.get(".content-header > h1").should("contain.text", "Laporan Manual");

    cy.visit("spmb/set_loginas");
    cy.get(".content-header > h1").should("contain.text", "Login As");
  });
});
