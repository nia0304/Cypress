// untuk command submenu laporan pendaftar 
Cypress.Commands.add('Menu_Lap_Biodata', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
    cy.visit('/spmb/repp_pendaftar')
});

Cypress.Commands.add('Menu_Lap_Ukt', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
    cy.visit('/spmb/repp_uktpendaftar')
});

Cypress.Commands.add('Menu_Lap_Bidikmisi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
    cy.visit('/spmb/repp_pendaftarbidikmisi')
});

Cypress.Commands.add('Menu_Lap_Pendaftar_Per_Tahap', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
    cy.visit('/spmb/repp_tahappendaftar')
});

Cypress.Commands.add('Menu_Lap_Bukti_Pendaftaran', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
    cy.visit('/spmb/repp_cetakformulir')
});

Cypress.Commands.add('Menu_Lap_Pilihan_Prodi_Pendaftar', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
    cy.visit('/spmb/repp_prodipendaftar')
});

Cypress.Commands.add('Menu_Lap_Perekomendasi_Pendaftar', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
    cy.visit('/spmb/repp_perekomendasi')
});

Cypress.Commands.add('Menu_Lap_Perhitungan_Ukt_Pendaftar', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
    cy.visit('/spmb/repp_hitunguktpendaftar')
});

// untuk command submenu laporan seleksi 
Cypress.Commands.add('Menu_Lap_Nilai_Seleksi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(2) > a').click()
    cy.visit('/spmb/repp_nilaiseleksi')
});

Cypress.Commands.add('Menu_Lap_Presensi_Ujian', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(2) > a').click()
    cy.visit('/spmb/repp_presensiruang')
});

Cypress.Commands.add('Menu_Lap_Daftar_Hadir', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(2) > a').click()
    cy.visit('/spmb/repp_absensiujian')
});

Cypress.Commands.add('Menu_Lap_Jadwal_Seleksi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(2) > a').click()
    cy.visit('/spmb/repp_jadwalseleksi')
});

Cypress.Commands.add('Menu_Lap_Kartu_Ujian', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(2) > a').click()
    cy.visit('/spmb/repp_kartuujian')
});

// untuk command submenu laporan kelulusan
Cypress.Commands.add('Menu_Lap_Rekomendasi_Prodi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(3) > a').click()
    cy.visit('/spmb/repp_rekomprodi')
});

Cypress.Commands.add('Menu_Lap_Daftar_Ulang', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(3) > a').click()
    cy.visit('/spmb/repp_daftarulang')
});

// untuk command submenu laporan rekapitulasi 
Cypress.Commands.add('Menu_Lap_Prodi_Pendaftar', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
    cy.visit('/spmb/repp_rekapprodi')
});

Cypress.Commands.add('Menu_Lap_Kuota_Ukt', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
    cy.visit('/spmb/repp_kuotaukt')
});

Cypress.Commands.add('Menu_Lap_Bidikmisi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
    cy.visit('/spmb/repp_rekapbidikmisi')
});

Cypress.Commands.add('Menu_Lap_Rekap_Rekom_Prodi', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
    cy.visit('/spmb/repp_rekaprekomprodi')
});

Cypress.Commands.add('Menu_Lap_Rekap_Sekolah', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
    cy.visit('/spmb/repp_rekapsekolah')
});

Cypress.Commands.add('Menu_Lap_Rekap_Kota', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
    cy.visit('/spmb/repp_rekapkota')
});

Cypress.Commands.add('Menu_Lap_Kuisoner_Pendaftar', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
    cy.visit('/spmb/repp_kuisionerpendaftar')
});

Cypress.Commands.add('Menu_Lap_Persentase_Kuisoner', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
    cy.visit('/spmb/repp_persentasekuesioner')
});

Cypress.Commands.add('Menu_Lap_Rekap_almamater', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(4) > a').click()
    cy.visit('/spmb/repp_rekapalmamater')
});

// untuk command submenu laporan Manual 
Cypress.Commands.add('Menu_Lap_Manual', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(5) > a').click()
    cy.visit('/spmb/list_laporan')
});

Cypress.Commands.add('Menu_Lap_Cetak_Manual', () => {
    cy.get('#menu > div > div > ul > li:nth-child(8) > a').click()
    cy.get('#menu > div > div > ul > li.nav-item.dropdown.open > div > div > ul > li:nth-child(5) > a').click()
    cy.visit('/spmb/repp_laporan')
});