// it('login siakad password gagal', () => {
// 	cy.visit('https://staging.siakadcloud.com/')
// 	cy.get('#userid').type('meida')
// 	cy.get('#password').type('meida456')
// 	cy.get('.btn').click()
//     // cy.get(".btn btn-flat btn-primary btn-block btn-login").click();
// 	cy.contains('Akun Pengguna atau Kata Sandi anda tidak sesuai')
// })

// describe('Ngetes Login', function () {
// 	it('Bisa Login Dengan Username dan Password Benar', async function () {
//         cy.visit('/gate/login')
// 		cy.fixture('dataLogin').then(function (login) {
// 			cy.log('') // seperti console log
// 			// this.login = login
//             cy.get("#userid").type(login.username);
//             cy.wait(5000)
//             cy.get("#password").type(login.password);
//             cy.get('.btn').click()
//             cy.get('.siakad').click()
//             cy.get('#siakad > div > div.role_box').click()
// 		})
// 	})
// })

describe('Ngetes Menu SPMB', function () {
	it('Bisa Login Dengan Username dan Password Benar', async function () {
		cy.visit('/gate/login')
		cy.fixture('dataLogin').then(function (login) {
			cy.log('') // seperti console log
			// this.login = login
			cy.get('#userid').type(login.username)
			// cy.wait(5000)
			cy.get('#password').type(login.password)
			cy.get('.btn').click()
			cy.get('.spmb').click()
			cy.get('#spmb > div > div.role_box').click()
			cy.get('.container > .nav > :nth-child(6)').click()
			cy.get(
				'.container > .nav > :nth-child(6) > .dropdown-menu > :nth-child(1)'
			).click()

			cy.get('body > header > div > div > ul > li.dropdown.nohover.open > ul > li.dropdown-submenu.dropdown.show > ul > li:nth-child(1) > a')
				.invoke('attr', 'href') // invoke : cypress get href attribute
				.then((href) => {
				cy.visit(href)
			})
            cy.get('div > .btn').click()

            // apabila ada visit di atas dan visit di bawah maka akan error karena akan ketumpuk yang di visit duluan yang mana 
            // solusi untuk visit yang kedua harus di masukkan dalam then(), dan visit akan dilakukan di dalamnya

			// cy.visit("/spmb/ms_gelombang");

		})
	})
})
