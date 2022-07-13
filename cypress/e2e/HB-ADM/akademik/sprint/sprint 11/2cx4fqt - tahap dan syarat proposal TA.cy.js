/// <reference types="cypress"/>

describe('Penyesuaian informasi tahapan & syarat proposal & tugas akhir dimodul Akademik', ()=>{
    beforeEach(() => {
        cy.loginsuperadmin()
        cy.modulakademik()
    });
    
    it('Cek filter jenis TA di tahap pengajuan proposal', () => {
        cy.visit('http://localhost/siacloud/siakad/ms_tahapajuta');
        cy.get('.select2-selection').click()
        cy.get('#select2-jenis-results').should('contain', 'Skripsi').and('contain' ,'Tugas Akhir').and('contain' ,'Disertasi').and('contain' ,'Tesis')
    });

    it('Admin mengisi tahapan untuk setiap jenis TA', () => {
        cy.visit('http://localhost/siacloud/siakad/ms_tahapajuta');
        cy.fixture('akademik/sprint/sprint11').then((data) => {
        cy.get('.content-header > h1').should('contain', data.title_tahapproposal)
            cy.get('.select2-selection').click()
            cy.get('.select2-search__field').type(data.fil_jenista)
            //tahap 1
            cy.get('#wrap-button > .btn').click()
            cy.get('#i_nourut').type(data.no1)
            cy.get('#i_namatahap').type(data.tahap1)
            cy.get('.iCheck-helper').click()
            cy.get(':nth-child(4) > .btn-success').click()
            cy.get('.alert').should('contain', data.alert_tambah)
            //tahap 2
            cy.get('#wrap-button > .btn').click()
            cy.get('#i_nourut').type(data.no2)
            cy.get('#i_namatahap').type(data.tahap2)
            cy.get(':nth-child(4) > .btn-success').click()
            cy.get('.alert').should('contain', data.alert_tambahtahapujian)
            //tahap 3
            cy.get('#wrap-button > .btn').click()
            cy.get('#i_nourut').type(data.no3)
            cy.get('#i_namatahap').type(data.tahap3)
            cy.get('.iCheck-helper').click()
            cy.get(':nth-child(4) > .btn-success').click()
            cy.get('.alert').should('contain', data.alert_tambah)
            cy.get(':nth-child(1) > .table').getTable().should((tableData)=>{
                // cy.log(tableData);
                cy.fixture("akademik/sprint/tbl_tahapproposal").then((dataFixture)=>{
                    expect(tableData).to.deep.equal(dataFixture)
                })
            })
        })
    });

    it('Admin mengisi syarat ujian untuk tahap yang sudah dibuat', () => {
        cy.visit('http://localhost/siacloud/siakad/ms_syaratajuta');
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('.content-header > h1').should('contain', data.title_syaratproposal)
            cy.get('#select2-jenis-container').click()
            cy.get('.select2-search__field').type(data.fil_jenista)
            cy.get('#select2-tahap-container').click()
            cy.get('#select2-tahap-results').should('contain', data.tahap1).and('contain', data.tahap3)
            cy.get('.select2-search__field').type(data.fil_tahapsyaratujian1)
            //syarat1-tahap1
            cy.get('#wrap-button > .btn').click()
            cy.get('#i_namasyaratskripsi').type(data.nama_syarat1)
            cy.get('#i_keterangan').type(data.ket_syarat1)
            cy.get(':nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
            cy.get(':nth-child(7) > .btn-success').click()
            cy.get('.alert').should('contain', data.alert_tambahsyaratujian)
            //syarat2- tahap1
            cy.get('#wrap-button > .btn').click()
            cy.get('#i_namasyaratskripsi').type(data.nama_syarat2)
            cy.get('#i_keterangan').type(data.ket_syarat2)
            cy.get(':nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
            cy.get(':nth-child(7) > .btn-success').click()
            cy.get('.alert').should('contain', data.alert_tambahsyaratujian)
            //syarat3-tahap2
            cy.get('#select2-tahap-container').click()
            cy.get('.select2-search__field').type(data.fil_tahapsyaratujian2)
            cy.get('#wrap-button > .btn').click()
            cy.get('#i_namasyaratskripsi').type(data.nama_syarat3)
            cy.get('#i_keterangan').type(data.ket_syarat3)
            cy.get(':nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
            cy.get(':nth-child(7) > .btn-success').click()
            cy.get('.alert').should('contain', data.alert_tambahsyaratujian)
            //syarat4- tahap2
            cy.get('#wrap-button > .btn').click()
            cy.get('#i_namasyaratskripsi').type(data.nama_syarat4)
            cy.get('#i_keterangan').type(data.ket_syarat4)
            cy.get(':nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper').click()
            cy.get(':nth-child(7) > .btn-success').click()
            cy.get('.alert').should('contain', data.alert_tambahsyaratujian)
            //syarat5- tahap2
            cy.get('#wrap-button > .btn').click()
            cy.get('#i_namasyaratskripsi').type(data.nama_syarat5)
            cy.get('#i_keterangan').type(data.ket_syarat5)
            cy.get(':nth-child(7) > .btn-success').click()
            cy.get('.alert').should('contain', data.alert_tambahsyaratujian)
            cy.get('#select2-tahap-container').click()
            cy.get('.select2-search__field').type(data.fil_tahapsyaratujian3)
            //get table
            cy.get(':nth-child(1) > .table').getTable().should((tableData)=>{
                // cy.log(tableData);
                cy.fixture("akademik/sprint/tbl_syaratproposal").then((dataFixture)=>{
                    expect(tableData).to.deep.equal(dataFixture)
                })
            })
        })
    });

    it('Cek Tahap dan Syarat proposal di Detail Mahasiswa', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.visit('http://localhost/siacloud/siakad/list_pengajuanta');
            cy.get('#select2-jenis-container').click()
            cy.get('.select2-search__field').type(data.fil_jenista)
            cy.get('.text-right > .btn-info').click()
            cy.get('.list-unstyled > :nth-child(4) > a').click()
            cy.get(':nth-child(1) > .callout').should('contain', data.tahap1)
            cy.get(':nth-child(3) > .callout').should('contain', data.tahap3)
            cy.get(':nth-child(2) > .table').getTable().should((tableData)=>{
                // cy.log(tableData);
                cy.fixture("akademik/sprint/tbl_detailmhssyarat1").then((dataFixture)=>{
                    expect(tableData).to.deep.equal(dataFixture)
                })
            })
            cy.get(':nth-child(4) > .table').getTable().should((tableData)=>{
                // cy.log(tableData);
                cy.fixture("akademik/sprint/tbl_detailmhssyarat2").then((dataFixture)=>{
                    expect(tableData).to.deep.equal(dataFixture)
                })
            })
        })
    });

    it('Admin hapus syarat ujian untuk tahap yang sudah dibuat', () => {
        cy.visit('http://localhost/siacloud/siakad/ms_syaratajuta');
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('.content-header > h1').should('contain', data.title_syaratproposal)
            cy.get('#select2-jenis-container').click()
            cy.get('.select2-search__field').type(data.fil_jenista)
            //lopping hapus syarat ujian
            for(let n = 1; n <= 5; n++){
                cy.get(':nth-child(2) > :nth-child(7) > .btn-danger').click({multiple: true})
                cy.get('.modal-footer > .btn-primary').click()
                cy.wait(400)
            }
        })
    });

    it('Admin hapus tahap pengajuan proposal', () => {
       cy.visit('http://localhost/siacloud/siakad/ms_tahapajuta');
       cy.fixture('akademik/sprint/sprint11').then((data) => {
           cy.get('#select2-jenis-container').click()
           cy.get('.select2-search__field').type(data.fil_jenista)
           //lopping hapus tahap ujian
           for(let n = 1; n <= 3; n++){
                cy.get(':nth-child(2) > :nth-child(4) > .btn-danger').click({multiple: true})
                cy.get('.modal-footer > .btn-primary').click()
                cy.wait(400)
            }
        })
    });
    
})