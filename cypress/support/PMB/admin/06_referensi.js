// untuk command submenu pendaftaran 
Cypress.Commands.add('Menu_Gelombang', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
    cy.visit('/spmb/ms_gelombang')
});

Cypress.Commands.add('Menu_Jalur_Pendaftaran', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
    cy.visit('/spmb/ms_jalurpendaftaran')
});

Cypress.Commands.add('Menu_Sistem_Kuliah', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
    cy.visit('/spmb/ms_sistemkuliah')
});

Cypress.Commands.add('Menu_Jenis_Program', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
    cy.visit('/spmb/ms_jenisprogram')
});

// untuk command submenu berita 
Cypress.Commands.add('Menu_Pengumuman', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(2) > a').click()
    cy.visit('/spmb/list_pengumuman')
});

Cypress.Commands.add('Menu_Tautan', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(2) > a').click()
    cy.visit('/spmb/ms_linkterkait')
});

Cypress.Commands.add('Menu_Broadcast', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(2) > a').click()
    cy.visit('/spmb/list_broadcast')
});

// untuk command submenu seleksi 
Cypress.Commands.add('Menu_jenis_seleksi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(3) > a').click()
    cy.visit('/spmb/ms_jenisseleksi')
});

Cypress.Commands.add('Menu_komposisi_seleksi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(3) > a').click()
    cy.visit('/spmb/ms_komposisi')
});

Cypress.Commands.add('Menu_jenis_syarat', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(3) > a').click()
    cy.visit('/spmb/ms_jenissyarat')
});

Cypress.Commands.add('Menu_syarat_seleksi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(3) > a').click()
    cy.visit('/spmb/ms_syarat')
});

Cypress.Commands.add('Menu_pilihan_syarat', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(3) > a').click()
    cy.visit('/spmb/ms_pilihansyarat')
});

Cypress.Commands.add('Menu_mata_pelajaran', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(3) > a').click()
    cy.visit('/spmb/ms_mapel')
});

Cypress.Commands.add('Menu_penilaian_rapor', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(3) > a').click()
    cy.visit('/spmb/ms_penilaian')
});

// untuk command submenu sekolah 
Cypress.Commands.add('Menu_Jenis_Institusi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
    cy.visit('/spmb/ms_jenisinstitusi')
});

Cypress.Commands.add('Menu_Sekolah', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
    cy.visit('/spmb/list_sekolah')
});

Cypress.Commands.add('Menu_Perguruan_Tinggi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
    cy.visit('/spmb/ms_universitas')
});

Cypress.Commands.add('Menu_Prodi_Perguruan_Tinggi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
    cy.visit('/spmb/ms_universitasprodi')
});

// untuk command submenu wilayah 
Cypress.Commands.add('Menu_Negara', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(5) > a').click()
    cy.visit('/spmb/ms_negara')
});

Cypress.Commands.add('Menu_Provinsi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(5) > a').click()
    cy.visit('/spmb/ms_propinsi')
});

Cypress.Commands.add('Menu_Kota', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(5) > a').click()
    cy.visit('/spmb/ms_kota')
});

Cypress.Commands.add('Menu_Kecamatan', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(5) > a').click()
    cy.visit('/spmb/ms_kecamatan')
});

// untuk command submenu biodata 
Cypress.Commands.add('Menu_Agama', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(6) > a').click()
    cy.visit('/spmb/ms_agama')
});

Cypress.Commands.add('Menu_Pekerjaan', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(6) > a').click()
    cy.visit('/spmb/ms_pekerjaan')
});

Cypress.Commands.add('Menu_Penghasilan', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(6) > a').click()
    cy.visit('/spmb/ms_penghasilan')
});

Cypress.Commands.add('Menu_Jas_Almamater', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(6) > a').click()
    cy.visit('/spmb/ms_almamater')
});

// untuk command submenu penegkap 
Cypress.Commands.add('Menu_Ruang', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(7) > a').click()
    cy.visit('/spmb/ms_ruang')
});

Cypress.Commands.add('Menu_Rekomendasi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(7) > a').click()
    cy.visit('/spmb/ms_pemberirekomendasi')
});

Cypress.Commands.add('Menu_Pertanyaan_Kuisoner', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(7) > a').click()
    cy.visit('/spmb/list_pertanyaan')
});

Cypress.Commands.add('Menu_Referensi_Website', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(7) > a').click()
    cy.visit('/spmb/ms_refwebsite')
});

Cypress.Commands.add('Menu_Setting_Aplikasi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(7) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(7) > a').click()
    cy.visit('/spmb/ms_settingapk')
});