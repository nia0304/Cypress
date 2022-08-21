describe("pendaftar can login and open all page in PMB", () => {
    beforeEach(() => {
        //login
        cy.loginPendaftar()
        cy.get(".header-title > h3").should("contain", "Seleksi Penerimaan Mahasiswa Baru");
        // cy.get(".spmb > .inner").click();

        // cy.intercept({
        //     method: "GET",
        //     url: "http://localhost/siacloud/gate/ajax/access/**",
        // }).as("adminAccess");
        // cy.get("#spmb > div:nth-child(1) > div:nth-child(2)").click();
        // cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
    });

    it("pendaftar can login and open all page in PMB", () => {
        cy.visit("/spmbfront/biodata")
        cy.get(".main-header").should("contain.text", "Selamat Datang");

        cy.visit("/spmbfront/administrasi")
        cy.get(".main-header").should("contain.text", "BERKAS ADMINISTRASI");

        cy.visit("/spmbfront/nilai-rapor")
        cy.get(".main-header").should("contain.text", "NILAI RAPOR");

        cy.visit("/spmbfront/bidik-misi")
        cy.get(".main-header").should("contain.text", "KIP Kuliah");

        cy.visit("/spmbfront/finalisasi")
        cy.get(".main-header").should("contain.text", "Pengumpulan Data");

        cy.visit("/spmbfront/seleksi")
        cy.get(".main-header").should("contain.text", "Jadwal Seleksi");

        // cy.visit("/spmbfront/hasil-seleksi")
        // cy.get(".main-header").should("contain.text", "Hasil Seleksi");

        // cy.visit("/spmbfront/daftar-ulang")
        // cy.get(".main-header").should("contain.text", "DAFTAR ULANG");

        cy.visit("/spmbfront/riwayatkeuangan")
        cy.get(".main-header").should("contain.text", "RIWAYAT TAGIHAN DAN PEMBAYARAN");

        cy.visit("/spmbfront/program-studi")
        cy.get(".main-header").should("contain.text", "Program Studi");
        
        cy.visit("/spmbfront/pengumuman")
        cy.get(".main-header").should("contain.text", "Pengumuman");

        cy.visit("/spmbfront/daftar-informasi")
        cy.get(".main-header").should("contain.text", "Informasi");
        
    })

})