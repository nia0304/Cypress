/// <reference types="cypress"/>

beforeEach("login",()=>{
  cy.login();
  cy.pilih_modul_akademik();
})

/*it("login", () => {
  cy.visit("http://localhost/siacloud/gate/login");
  cy.get("#userid").type("nia");
  cy.get("#password").type("LZ3c%TUu");
  cy.get(".btn").click();
  cy.get('.main_title').should('contain','Daftar Modul');
});*/

/*it("Pilih Modul Akademik",()=>{
  //cy.login();
  cy.get('.siakad > .inner').click();
  cy.get('#siakad').contains('Super Administrator').should('be.visible').click();
  cy.get('.content-header.content-header-vertical h1').should('contain','Beranda');
});*/

it("Pilih Periode",()=>{
  cy.get('#select2-periode-container').click();
  cy.get('.select2-search__field').type('2022/2023 Ganjil');
  cy.get('#select2-periode-results').each(($el, index, $list)=> {
      if ($el.text() === '2022/2023 Ganjil') {
          cy.wrap($el).click();
          //cy.get('#select2-periode-container').select($el);
      }
  })
})


/*it.only("Query Total Mahasiswa",()=>{
  cy.visit('/siakad/list_mahasiswa');
  cy.task("dbQuery", {"query":"your SELECT COUNT(*) FROM (select m.*, substr(m.idperiode,1,4) as angkatan, u.idjenjang, coalesce(u.namasingkat,u.namaunit) namaunit,u.idjenjang, coalesce(w.semmhs::text,'-') as semmhs, u.namaunit namalengkapunit, coalesce(w.ipk::text,'-') as ipk,coalesce(w.ipklulus::text,'-') as ipklulus,coalesce(w.idstatusmhs,'-') as statussmt, coalesce(w.idperiode, '-') periodeakhir, case when w.semmk < w.semmhs then 1 else 0 end as isulang, coalesce(w.skslulus::text,'-') skslulus, w.skstotal from akademik.ak_mahasiswa m join ref.ms_unit u on m.idunit = u.idunit left join akademik.ak_perwalian w on w.nim = m.nim and w.idperiode = m.periodeterakhir and (w.softdelete = '0') where (m.softdelete = '0' and u.softdelete = '0') and u.infoleft >= '1' and u.inforight <= '76')"}).then(queryResponse => {
    expect(queryResponse).to.equal("123")
  });
});*/
