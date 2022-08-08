// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

//import reporter
import "cypress-mochawesome-reporter/register";

// Import commands.js using ES2015 syntax:
import "./commands";
import "./pmb";
import "./pmb_front";
import "./akademik/login_user";
import "./akademik/dosen";
import "./akademik/admin/00_beranda";
import "./akademik/admin/01_portal";
import "./akademik/admin/02_perkuliahan";
import "./akademik/admin/03_kemahasiswaan";
import "./akademik/admin/04_kampus_merdeka";
import "./akademik/admin/05_data_pelengkap";
import "./akademik/admin/06_laporan";
import "./akademik/admin/07_setting";

// import untuk modul pmb
import "./PMB/login_user";
import "./PMB/admin/00_dashboard";
import "./PMB/admin/01_pendaftar";
import "./PMB/admin/02_ods";
import "./PMB/admin/03_pengaturan";
import "./PMB/admin/04_seleksi";
import "./PMB/admin/05_kelulusan";
import "./PMB/admin/06_referensi";
import "./PMB/admin/07_laporan";
import "./PMB/admin/08_loginas";

// Alternatively you can use CommonJS syntax:
// require('./commands')
// require("cypress-xpath");
require("cypress-plugin-tab");
require("cypress-get-table");

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })
