// it('login siakad password gagal', () => {
// 	cy.visit('https://staging.siakadcloud.com/')
// 	cy.get('#userid').type('meida')
// 	cy.get('#password').type('meida456')
// 	cy.get('.btn').click()
//     // cy.get(".btn btn-flat btn-primary btn-block btn-login").click();
// 	cy.contains('Akun Pengguna atau Kata Sandi anda tidak sesuai')
// })

describe('Ngetes Login', function () {
	it('Bisa Login Dengan Username dan Password Benar', async function () {
        cy.visit('/gate/login')
		cy.fixture('userLogin').then(function (login) {
			cy.log('') // seperti console log
			// this.login = login
            cy.get("#userid").type(login.username);
            cy.wait(5000)
            cy.get("#password").type(login.password);
            cy.get('.btn').click()
            cy.get('.siakad').click()
            // cy.get('.role_box').click()
            cy.get('#siakad > div > div.role_box').click()
		})
	})
})

// describe("Ngetes Login", function () {
//     it.only("Bisa Login Dengan Username dan Password Benar", async function () {
//       cy.visit('/gate/login');
//       cy.get("#userid").type("meida");
//       cy.get("#password").type("meida456");
//       cy.get(".btn").click();
//       cy.get(".siakad").click();
//       cy.get("#siakad > div > div.role_box").click();
//     });
//   });