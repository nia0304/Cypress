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

// Import commands.js using ES2015 syntax:
import "./commands";
import "./pmb";
import "./pmb_front";
import "./akademik/login_user";
import "./akademik/dosen";
import "./akademik/admin/01_portal";
import "./akademik/admin/02_perkuliahan";
import "./akademik/admin/03_kemahasiswaan";
import "./akademik/admin/04_kampus_merdeka";
// import "./akademik/admin/05_data_pelengkap";
// import "./akademik/admin/06_laporan";
// import "./akademik/admin/07_setting";

// Alternatively you can use CommonJS syntax:
// require('./commands')
// require("cypress-xpath");
require("cypress-plugin-tab");
require("cypress-get-table");
