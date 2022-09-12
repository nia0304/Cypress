//01_perguruan_tinggi-==============================================================
Cypress.Commands.add('menudataperguruantinggi', () => {
  cy.visit("siakad/data_universitas/detail");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Data Universitas Sevima"
  );
});

Cypress.Commands.add('menufakultas', () => {
  cy.visit("siakad/list_fakultas");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Fakultas Daftar Fakultas"
  );
});

Cypress.Commands.add('menujurusan', () => {
  cy.visit("siakad/list_jurusan");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Jurusan Daftar Jurusan"
  );
});

Cypress.Commands.add('menuprogramstudi', () => {
  cy.visit("siakad/list_prodi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Program Studi Daftar Program Studi"
  );
});

Cypress.Commands.add('menukonsentrasi', () => {
  cy.visit("siakad/ms_bidangstudi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Konsentrasi Daftar Konsentrasi"
  );
});

Cypress.Commands.add('menutingkatpendidikan', () => {
  cy.visit("siakad/ms_tingkatpendidikan");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Tk. Pendidikan"
  );
});

Cypress.Commands.add('menutingkatpendidikanuniversitas', () => {
  cy.visit("siakad/ms_jenjang");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Tk. Pendidikan Universitas"
  );
});

Cypress.Commands.add('menusistemkuliah', () => {
  cy.visit("siakad/ms_sistemkuliah");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Sistem Kuliah"
  );
});

Cypress.Commands.add('menuruangkuliah', () => {
  cy.visit("siakad/ms_ruang");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Ruang Kuliah"
  );
});

Cypress.Commands.add('menukegiatanakademik', () => {
  cy.visit("siakad/ms_kegiatan");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Kegiatan Akad."
  );
});

Cypress.Commands.add('menukalenderakademik', () => {
  cy.visit("siakad/ms_kalender");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kalender Akademik Daftar Kegiatan"
  );
});

Cypress.Commands.add('menuuniversitasluar', () => {
  cy.visit("siakad/ms_universitas");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Universitas Luar"
  );
});

Cypress.Commands.add('menuinstansi', () => {
  cy.visit("siakad/ms_perusahaan");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Instansi"
  );
});

Cypress.Commands.add('menucontactperson', () => {
  cy.visit("siakad/list_cp");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Contact Person Daftar Contact Person Instansi"
  );
});

//02_perkuliahan-===================================================================
Cypress.Commands.add('menujenismatakuliah', () => {
  cy.visit("siakad/ms_jenismk");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Jenis Mata Kuliah"
  );
});

Cypress.Commands.add('menubidangilmu', () => {
  cy.visit("siakad/ms_bidangilmu");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Bidang Ilmu"
  );

});

Cypress.Commands.add('menukelompokmatakuliah', () => {
  cy.visit("siakad/ms_kelompokmk");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Kelompok MK"
  );
});


Cypress.Commands.add('menuunsurnilaiperkuliahan', () => {
  cy.visit("siakad/ms_refnilai");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Unsur Nilai"
  );
});

Cypress.Commands.add('menukelasperkuliahan', () => {
  cy.visit("siakad/ms_kelasperkuliahan");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "kelas perkuliahan"
  );
});

Cypress.Commands.add('menuslotwaktu', () => {
  cy.visit("siakad/ms_slotwaktu");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Slot Waktu"
  );
});

Cypress.Commands.add('menujenispertemuan', () => {
  cy.visit("siakad/ms_jenispertemuan");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Jenis Pertemuan"
  );
});

Cypress.Commands.add('menustatushadir', () => {
  cy.visit("siakad/ms_statushadir");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Status Hadir"
  );
});

Cypress.Commands.add('menujenismodul', () => {
  cy.visit("siakad/ms_jenismodulmkblok");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Jenis Modul MK"
  );
});

Cypress.Commands.add('menukelompokperkuliahan', () => {
  cy.visit("siakad/ms_kelompokperkuliahan");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Kel. Perkuliahan"
  );
});

Cypress.Commands.add('menugrupmkwajibpilihan', () => {
  cy.visit("siakad/ms_grupmk");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Grup MK Wajib Pilihan"
  );
});

Cypress.Commands.add('menujeniskegiatanpendukung', () => {
  cy.visit("siakad/ms_jeniskegiatan");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Jenis Kegiatan Pendukung"
  );
});
//03_biodata-=======================================================================
Cypress.Commands.add('menuagama', () => {
  cy.visit("siakad/ms_agama");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Agama"
  );
});

Cypress.Commands.add('menupekerjaan', () => {
  cy.visit("siakad/ms_pekerjaan");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Pekerjaan"
  );
});

Cypress.Commands.add('menupenghasilan', () => {
  cy.visit("siakad/ms_penghasilan");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Penghasilan"
  );
});

Cypress.Commands.add('menusuku', () => {
  cy.visit("siakad/ms_suku");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Suku Daftar Suku"
  );
});

Cypress.Commands.add('menujasalmamater', () => {
  cy.visit("siakad/ms_almamater");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Jas Almamater"
  );
});

//04_mahasiswa-=====================================================================
Cypress.Commands.add('menustatusmahasiswa', () => {
  cy.visit("siakad/ms_statusmhs");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Status Mahasiswa"
  );
});

Cypress.Commands.add('menujenistinggal', () => {
  cy.visit("siakad/ms_jenistinggal");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Jenis Tinggal"
  );
});

Cypress.Commands.add('menukebutuhankhusus', () => {
  cy.visit("siakad/ms_kebutuhankhusus");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Kebutuhan Khusus"
  );
});

Cypress.Commands.add('menutransportasi', () => {
  cy.visit("siakad/ms_transport");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Transportasi"
  );
});

//05_pegawai-=======================================================================
Cypress.Commands.add('menujenispegawai', () => {
  cy.visit("siakad/ms_jenispeg");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Jenis Pegawai"
  );
});

Cypress.Commands.add('menugolonganpangkat', () => {
  cy.visit("siakad/ms_golpangkat");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Golongan/Pangkat"
  );
});

Cypress.Commands.add('menujabatanfungsional', () => {
  cy.visit("siakad/ms_jabfung");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Jab. Fungsional"
  );
});

Cypress.Commands.add('menujabatanstruktural', () => {
  cy.visit("siakad/ms_jabstruktural");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Jab. Struktural"
  );
});

Cypress.Commands.add('menupredikatpegawai', () => {
  cy.visit("siakad/ms_predikatdosen");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Predikat Dosen"
  );
});

Cypress.Commands.add('menujenishonor', () => {
  cy.visit("siakad/ms_honor");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Jenis Honor"
  );
});

Cypress.Commands.add('menutarifhonor', () => {
  cy.visit("siakad/list_honortarif");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Tarif Honor Daftar Tarif Honor"
  );
});

Cypress.Commands.add('menustatuskeaktifan', () => {
  cy.visit("siakad/ms_statusaktif");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Status Keaktifan"
  );
});

//06_wilayah-=======================================================================
Cypress.Commands.add('menunegara', () => {
  cy.visit("siakad/ms_negara");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Negara Daftar Negara"
  );
});

Cypress.Commands.add('menuprovinsi', () => {
  cy.visit("siakad/ms_propinsi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Provinsi Daftar Propinsi"
  );
});

Cypress.Commands.add('menukota', () => {
  cy.visit("siakad/ms_kota");
  cy.get(".content-header > h1").should(
    "contain.text", 
    "Kota Daftar Kota"
  );
});

Cypress.Commands.add('menukecamatan', () => {
  cy.visit("siakad/ms_kecamatan");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kecamatan Daftar Kecamatan"
  );
});
//07_template_laporan-==============================================================
Cypress.Commands.add('menusuratketeranganaktif', ()=>{
  cy.visit("siakad/list_templatesurataktif");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Template Surat Keterangan Aktif"
  );
});
