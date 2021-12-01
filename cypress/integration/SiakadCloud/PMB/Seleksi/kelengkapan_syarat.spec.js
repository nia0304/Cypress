describe("List Nilai Seleksi", () => {
    beforeEach('Login Siakad', () => {
		cy.loginuserdev()
		cy.openmodulpmb()
		cy.actionfilterdashboarddev()
	})

    it.only('Kelengkapan syarat', () => {
		// cy.visit('/spmb/set_registrasi')
    cy.get('.container > .nav > :nth-child(4)').click()
		cy.get(
			'.container > .nav > :nth-child(4) > .dropdown-menu > :nth-child(5)'
		).click()
		// cy.get('#idpendaftar_label').type('{downarrow}Agus Saputra')
		cy.get('#idpendaftar_label').type('hami s')
		cy.get('.tt-suggestions div').each(($el, index, $list) => {
			// $el is a wrapped jQuery element
			if ($el.text() === '22 - hami spmb') {
				// wrap this element so we can
				// use cypress commands on it
				cy.wrap($el).click()
			}
			// else {
			//   // do something else
			// }
		})
		cy.get('.input-group-btn > button').click()
    cy.get('#jenissyarat').select('Administrasi')
    cy.wait(5000)
    cy.get('[id="keterangansyarat[18]"]').type('ada')
    cy.get(
      ':nth-child(1) > [align="center"] > .labelinput > .icheckbox_minimal > .iCheck-helper'
    ).click()
    cy.get('[name="keterangansyarat[21]"]').type('ya')
    cy.get(
      ':nth-child(2) > [align="center"] > .labelinput > .icheckbox_minimal > .iCheck-helper'
    ).click()
    cy.get('[name="keterangansyarat[22]"]').type('hore')
    cy.get(
      ':nth-child(3) > [align="center"] > .labelinput > .icheckbox_minimal > .iCheck-helper'
    ).click()
    cy.get('.btn-success').click()
    cy.get('.alert').should('contain', 'Berhasil melakukan perubahan penilaian seleksi pendaftar')
	})
})