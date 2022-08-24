/// <reference types="cypress"/>

describe("superadmin can open keuangan page", () => {
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".hr > .inner").click();
    cy.intercept({
      method: "GET",
      url: "http://localhost/siacloud/gate/ajax/access/**",
    }).as("adminAccess");
    cy.get("#hr").contains("Super Administrator").should("be.visible").click();
    cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
  });

  it("superadmin can open hr page", () => {
    //dashboard
    cy.get(".content-header > h1").should(
      "contain.text",
      "Beranda Selamat Datang di Sistem Informasi Kepegawaian Universitas Sevima"
    );

    //pegawai
    cy.visit("hr/list_pegawai");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pegawai Daftar Pegawai"
    );

    //operasional

    cy.visit("hr/list_hubkerjapegawai");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Monitoring Hubungan Kerja"
    );
    //kehadiran
    cy.visit("hr/ms_settingpresensi");
    cy.get(".content-header > h1").should("contain.text", "Setting Kehadiran");

    cy.visit("hr/list_shiftkerja");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Shift Kerja Daftar Shift Kerja"
    );

    cy.visit("hr/ms_inputpresensi");
    cy.get(".content-header > h1").should("contain.text", "Input Presensi");

    cy.visit("hr/list_monitoringpresensi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Monitoring Presensi"
    );

    cy.visit("hr/list_rekappresensi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Presensi Bulanan Pegawai"
    );
    //monitoring kegiatan
    cy.visit("hr/ms_monitoringkegiatan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Monitoring Kegiatan"
    );
    //cuti
    cy.visit("hr/ms_periodecuti");
    cy.get(".content-header > h1").should("contain.text", "Periode Cuti");

    cy.visit("hr/list_monitoringsisacuti");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Sisa Cuti Pegawai Daftar Sisa Cuti Pegawai"
    );

    cy.visit("hr/list_vcuti");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Pengajuan Cuti Daftar Pengajuan Cuti"
    );

    cy.visit("hr/list_vizin");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pengajuan Izin Daftar Pengajuan Izin"
    );

    cy.visit("hr/list_berita");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Berita Daftar Berita"
    );
    //kompensasi
    cy.visit("hr/list_penghargaan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Riwayat Penghargaan Daftar Penghargaan"
    );

    cy.visit("hr/list_pelanggaran");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Riwayat Pelanggaran Daftar Pelanggaran"
    );

    //validasi data

    cy.visit("hr/set_validasi");
    cy.get(".content-header > h1").should("contain.text", "Jenis Validasi");
    //kepegawaian
    cy.visit("hr/list_vrwthomebase");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Riwayat Homebase Pegawai"
    );

    cy.visit("hr/list_vrwtpangkat");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Riwayat Pangkat"
    );

    cy.visit("hr/list_vrwtfungsional");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Riwayat Jabatan Akademik"
    );

    cy.visit("hr/list_vrwtsubfungsional");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Riwayat Jabatan Fungsional"
    );

    cy.visit("hr/list_vrwtstruktural");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Riwayat Jabatan Struktural"
    );

    cy.visit("hr/list_vrwthubkerja");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Riwayat Hubungan Kerja Pegawai"
    );
    //keluarga

    cy.visit("hr/list_vkeluarga");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Data Pasangan"
    );

    //pengembangan

    cy.visit("hr/list_vrwtpendidikan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Riwayat Pendidikan Pegawai"
    );

    cy.visit("hr/list_vsertifikasi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Sertifikasi Pegawai"
    );

    cy.visit("hr/list_vrwtorganisasi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Riwayat Organisasi Pegawai"
    );

    cy.visit("hr/list_vrwtpenelitian");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Riwayat Penelitian"
    );

    cy.visit("hr/list_vrwtpkm");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Riwayat Pengabdian Masyarakat"
    );

    cy.visit("hr/list_vkemampuanbahasa");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Kemampuan Bahasa Pegawai"
    );

    cy.visit("hr/list_vrwttes");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Validasi Riwayat Tes Pegawai"
    );

    //referensi kepegawaian

    cy.visit("hr/list_unit");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Unit Kerja Daftar Unit Kerja"
    );

    cy.visit("hr/ms_statuspegawai");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Status Aktif"
    );

    cy.visit("hr/ms_hubkerja");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Hubungan Kerja"
    );

    cy.visit("hr/ms_pangkat");
    cy.get(".content-header > h1").should("contain.text", "Pangkat/Golongan");

    cy.visit("hr/ms_jeniskenaikanpangkat");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Jenis Kenaikan Pangkat"
    );

    cy.visit("hr/ms_fungsional");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Jabatan Akademik Daftar Jabatan Akademik"
    );

    cy.visit("hr/ms_subfungsional");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Jabatan Fungsional Daftar Jabatan Fungsional"
    );

    cy.visit("hr/ms_eselon");
    cy.get(".content-header > h1").should("contain.text", "Daftar Eselon");

    cy.visit("hr/ms_jabatan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Jenis Jabatan Struktural "
    );

    cy.visit("hr/list_struktural");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Jabatan Struktural Daftar Jabatan Struktural"
    );

    cy.visit("hr/ms_bidang");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rumpun Bidang Ilmu Daftar Rumpun Bidang Ilmu"
    );

    cy.visit("hr/ms_jenissk");
    cy.get(".content-header > h1").should("contain.text", "Daftar Jenis SK");

    //referensi aktivitas

    cy.visit("hr/ms_jenissertifikasi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Jenis Sertifikasi"
    );

    cy.visit("hr/ms_jenistes");
    cy.get(".content-header > h1").should("contain.text", "Daftar Jenis Tes");

    cy.visit("hr/ms_jenispkm");
    cy.get(".content-header > h1").should("contain.text", "Daftar Jenis PKM");

    cy.visit("hr/ms_outputpenelitian");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Output Penelitian"
    );

    cy.visit("hr/ms_penghargaan");
    cy.get(".content-header > h1").should("contain.text", "Jenis Penghargaan");

    cy.visit("hr/ms_pelanggaran");
    cy.get(".content-header > h1").should("contain.text", "Jenis Pelanggaran");

    cy.visit("hr/ms_sanksi");
    cy.get(".content-header > h1").should("contain.text", "Jenis Sanksi");

    // referensi wilayah

    cy.visit("hr/ms_negara");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Negara Daftar Negara"
    );

    cy.visit("hr/ms_provinsi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Provinsi Daftar Propinsi"
    );

    cy.visit("hr/ms_kota");
    cy.get(".content-header > h1").should("contain.text", "Kota Daftar Kota");

    cy.visit("hr/ms_kecamatan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Kecamatan Daftar Kecamatan"
    );

    //referensi kehadiran

    cy.visit("hr/ms_presensi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Jenis Kehadiran"
    );

    cy.visit("hr/ms_cuti");
    cy.get(".content-header > h1").should("contain.text", "Daftar Cuti");

    cy.visit("hr/ms_jenisizin");
    cy.get(".content-header > h1").should("contain.text", "Jenis Izin");

    cy.visit("hr/ms_hari");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Setting Hari"
    );

    cy.visit("hr/ms_libur");
    cy.get(".content-header > h1").should("contain.text", "Daftar Hari Libur");

    cy.visit("hr/ms_jamkerja");
    cy.get(".content-header > h1").should("contain.text", "Daftar Jam Kerja");

    //referensi pelengkap

    cy.visit("hr/ms_agama");
    cy.get(".content-header > h1").should("contain.text", "Agama");

    cy.visit("hr/ms_bahasa");
    cy.get(".content-header > h1").should("contain.text", "Daftar Bahasa");

    cy.visit("hr/ms_pekerjaan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Nama Pekerjaan"
    );

    cy.visit("hr/ms_statuspernikahan");
    cy.get(".content-header > h1").should("contain.text", "Status Pernikahan");

    cy.visit("hr/ms_pendidikan");
    cy.get(".content-header > h1").should("contain.text", "Tk. Pendidikan");

    cy.visit("hr/ms_universitas");
    cy.get(".content-header > h1").should("contain.text", "Universitas Luar");

    cy.visit("hr/ms_universitasprodi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Prodi Perguruan Tinggi"
    );

    cy.visit("hr/ms_bank");
    cy.get(".content-header > h1").should("contain.text", "Daftar Bank");

    cy.visit("hr/ms_suku");
    cy.get(".content-header > h1").should("contain.text", "Suku Daftar Suku");

    cy.visit("hr/ms_goldarah");
    cy.get(".content-header > h1").should("contain.text", "Golongan Darah");

    //laporan pegawai

    cy.visit("hr/repp_daftarpegawai");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Daftar Pegawai"
    );

    cy.visit("hr/repp_cvpegawai");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Riwayat Hidup Pegawai"
    );

    cy.visit("hr/repp_daftarkeluarga");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Daftar Keluarga"
    );

    //laporan riwayat
    cy.visit("hr/repp_rhomebase");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Riwayat Homebase"
    );

    cy.visit("hr/repp_rpangkat");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Riwayat Pangkat"
    );

    cy.visit("hr/repp_rfungsional");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Riwayat Jabatan Akademik"
    );

    cy.visit("hr/repp_rstruktural");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Riwayat Jabatan Struktural"
    );

    cy.visit("hr/repp_rhubkerja");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Riwayat Hubungan Kerja"
    );

    cy.visit("hr/repp_rekapriwayatmengajar");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Riwayat Mengajar"
    );
    //laporan pengembangan

    cy.visit("hr/repp_rpendidikan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Pengalaman Pendidik"
    );

    cy.visit("hr/repp_rorganisasi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Pengalaman Organisasi"
    );

    cy.visit("hr/repp_rsertifikasi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Pengalaman Sertifikasi"
    );

    cy.visit("hr/repp_rpenelitian");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Pengalaman Penelitian"
    );

    cy.visit("hr/repp_rpkm");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Pengabdian Masyarakat"
    );

    cy.visit("hr/repp_rkemampuanbahasa");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Kemampuan Bahasa"
    );

    cy.visit("hr/repp_rtes");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Pengalaman Tes"
    );

    //laporan kehadiran
    cy.visit("hr/repp_presensiclock");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Riwayat Kehadiran"
    );

    cy.visit("hr/repp_rekappresensi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekapitulasi Kehadiran"
    );

    //laporan laporan manual

    cy.visit("hr/list_laporan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Daftar Laporan Manual"
    );

    cy.visit("hr/repp_laporan");
    cy.get(".content-header > h1").should("contain.text", "Laporan Manual");
    //pegawai sister
    cy.visit("hr/list_pegawaisister");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pegawai Internal Daftar Pegawai Internal"
    );
  });
});
