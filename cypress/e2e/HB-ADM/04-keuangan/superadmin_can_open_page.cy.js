/// <reference types="cypress"/>

describe("superadmin can open keuangan page", () => {
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".keuangan > .inner").click();
    cy.get("#keuangan > div:nth-child(1) > div:nth-child(2)").click();
    cy.wait(2000);
  });

  it("superadmin can open keuangan page", () => {
    //dashboard
    cy.get(".content-header > h1").should(
      "contain.text",
      "Dashboard Selamat Datang di Sistem Informasi Keuangan Mahasiswa"
    );
    //operasional
    cy.visit("keuangan/set_pembayaran");
    cy.get(".content-header > h1").should("contain.text", "Pembayaran Tagihan");

    cy.visit("keuangan/set_pembayaranformulir");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pembayaran Formulir"
    );

    cy.visit("keuangan/ms_ukt");
    cy.get(".content-header > h1").should(
      "contain.text",
      "UKT Mahasiswa/Pendaftar "
    );

    cy.visit("keuangan/list_monitoringtarif");
    cy.get(".content-header > h1").should("contain.text", "Monitoring Tarif");

    cy.visit("keuangan/list_montagihanmhs");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Monitoring Tagihan Mahasiswa"
    );

    cy.visit("keuangan/list_monaturanakademik");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Monitoring Aturan Akademik"
    );
    //transaksi
    cy.visit("keuangan/list_transaksi");
    cy.get(".content-header > h1").should("contain.text", "Transaksi Keuangan");

    cy.visit("keuangan/list_tagihan");
    cy.get(".content-header > h1").should("contain.text", "Transaksi Tagihan");

    cy.visit("keuangan/list_pembayaran");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Transaksi Pembayaran"
    );

    cy.visit("keuangan/list_deposit");
    cy.get(".content-header > h1").should("contain.text", "Transaksi Deposit");

    cy.visit("keuangan/list_virtualaccount");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Virtual Account Daftar Transaksi VA"
    );

    cy.visit("keuangan/ms_penerimapotongan");
    cy.get(".content-header > h1").should("contain.text", "Penerima Potongan");

    cy.visit("keuangan/ms_penerimavoucher");
    cy.get(".content-header > h1").should("contain.text", "Penerima Voucher");

    //generate
    cy.visit("keuangan/set_generatemhs");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Generate Tagihan Mahasiswa"
    );

    cy.visit("keuangan/set_generatependaftar");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Generate Tagihan Pendaftar"
    );
    //tarif
    cy.visit("keuangan/list_tariftagihan");
    cy.get(".content-header > h1").should("contain.text", "Tarif Akun Tagihan");

    cy.visit("keuangan/ms_tarifmk");
    cy.get(".content-header > h1").should("contain.text", "Tarif Mata Kuliah");

    cy.visit("keuangan/ms_tarifformulir");
    cy.get(".content-header > h1").should(
      "contain.text",
      " Tarif Formulir Pendaftaran"
    );

    cy.visit("keuangan/ms_tarifukt");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Tarif UKT (Uang Kuiah Tunggal)"
    );

    cy.visit("keuangan/set_potongan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Tarif Penerima Potongan"
    );
    //referensi
    cy.visit("keuangan/ms_jenistransaksi");
    cy.get(".content-header > h1").should("contain.text", " Jenis Transaksi ");

    cy.visit("keuangan/ms_kelompok");
    cy.get(".content-header > h1").should("contain.text", "Kelompok");

    cy.visit("keuangan/ms_frekuensi");
    cy.get(".content-header > h1").should("contain.text", "Frekuensi");

    cy.visit("keuangan/ms_jenisakun");
    cy.get(".content-header > h1").should("contain.text", "Jenis Tagihan");

    cy.visit("keuangan/ms_switching");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Switching Metode Pembayaran"
    );

    cy.visit("keuangan/ms_bank");
    cy.get(".content-header > h1").should("contain.text", "Bank");

    cy.visit("keuangan/ms_switchingbank");
    cy.get(".content-header > h1").should("contain.text", "Switching Bank");

    cy.visit("keuangan/ms_channel");
    cy.get(".content-header > h1").should("contain.text", "Channel");

    cy.visit("keuangan/ms_promoswitching");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Promo Switching Bank"
    );

    cy.visit("keuangan/ms_kelompokukt");
    cy.get(".content-header > h1").should("contain.text", "Kelompok UKT");

    cy.visit("keuangan/ms_aturan");
    cy.get(".content-header > h1").should("contain.text", "Aturan Akademik");

    cy.visit("keuangan/ms_rekanan");
    cy.get(".content-header > h1").should("contain.text", "Rekanan");

    cy.visit("keuangan/ms_potongan");
    cy.get(".content-header > h1").should("contain.text", "Potongan");

    cy.visit("keuangan/ms_aturanpotongan");
    cy.get(".content-header > h1").should("contain.text", "Aturan Potongan");

    cy.visit("keuangan/list_voucher");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Voucher Daftar Voucher"
    );

    cy.visit("keuangan/ms_aturanvoucher");
    cy.get(".content-header > h1").should("contain.text", "Aturan Voucher");
    //pengaturan
    cy.visit("keuangan/set_settingtagihan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pengaturan Pembayaran"
    );

    cy.visit("keuangan/set_aturan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pengaturan Aturan Akademik"
    );

    cy.visit("keuangan/ms_aturanswitching");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pengaturan Aturan Switching Bank"
    );

    cy.visit("keuangan/set_settingperiode");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pengaturan Jenis Tagihan"
    );

    cy.visit("keuangan/ms_settingapk");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Setting Setting Pengaturan SIM"
    );

    cy.visit("keuangan/set_plugin");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pengaturan Plugin / Addon"
    );

    cy.visit("keuangan/ms_periodepembayaran");
    cy.get(".content-header > h1").should("contain.text", "Periode Pembayaran");

    //laporan
    cy.visit("keuangan/repp_tagihan");
    cy.get(".content-header > h1").should("contain.text", "Laporan Tagihan");

    cy.visit("keuangan/repp_rekaptagihan");
    cy.get(".content-header > h1").should(
      "contain.text",
      " Laporan Rekap Tagihan"
    );

    cy.visit("keuangan/repp_perwaliantagihan");
    cy.get(".content-header > h1").should("contain.text", "Perwalian Tagihan");

    cy.visit("keuangan/repp_pembayaran");
    cy.get(".content-header > h1").should("contain.text", "Laporan Pembayaran");

    cy.visit("keuangan/repp_rekappembayaran");
    cy.get(".content-header > h1").should("contain.text", "Laporan Pembayaran");

    cy.visit("keuangan/repp_pembayaranmhs");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Pembayaran Per Mahasiswa"
    );

    cy.visit("keuangan/repp_ukt");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Penerima UKT"
    );

    cy.visit("keuangan/repp_tarifukt");
    cy.get(".content-header > h1").should("contain.text", "Laporan Tarif UKT");

    cy.visit("keuangan/repp_tarif");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Tarif Tagihan"
    );

    cy.visit("keuangan/repp_deposit");
    cy.get(".content-header > h1").should("contain.text", "Laporan Deposit");

    cy.visit("keuangan/repp_rekappembayaran");
    cy.get(".content-header > h1").should("contain.text", "Laporan Pembayaran");

    cy.visit("keuangan/repp_potongan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Penerima Potongan"
    );

    cy.visit("keuangan/repp_rekappotongan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Potongan / Beasiswa"
    );

    cy.visit("keuangan/list_laporan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Daftar Laporan Manual"
    );

    cy.visit("keuangan/repp_laporan");
    cy.get(".content-header > h1").should("contain.text", "Laporan Manual");

    cy.visit("keuangan/repp_aturanakademik");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Mhs Tercekal Aturan Akademik"
    );
  });
});
