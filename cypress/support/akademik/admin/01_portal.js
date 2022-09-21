Cypress.Commands.add('menumahasiswa', () => {
  cy.visit("siakad/list_mahasiswa");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Mahasiswa Daftar Mahasiswa"
  );
});

Cypress.Commands.add('menupegawai', ()=>{
  cy.visit("siakad/list_pegawai");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Pegawai Daftar Pegawai"
  );
});

Cypress.Commands.add('menupengumuman', () => {
  cy.visit("siakad/list_berita");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Pengumuman Daftar Pengumuman"
  );
});

Cypress.Commands.add('menukelasedLink', () => {
  cy.visit("siakad/list_forumedlink");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Kelas EdLink Daftar Forum Kelas EdLink"
  );
});

Cypress.Commands.add('menuforumkelas', () => {
  cy.visit("siakad/list_forum");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Forum Kelas (Lama) Daftar Forum Diskusi Kelas"
  );
});

Cypress.Commands.add('menukonsultasi', () => {
  cy.visit("siakad/list_konsultasi");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Konsultasi Pembimbing Daftar Konsultasi Pembimbing"
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

Cypress.Commands.add('menumonitoringkegiatanakademik', () => {
  cy.visit("siakad/data_monitorkalender");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Monitoring Kalender Akademik"
  );
});

Cypress.Commands.add('menubroadcast', () => {
  cy.visit("siakad/list_broadcast");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Broadcast Daftar Broadcast"
  );
});

