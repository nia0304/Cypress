const filepath = "foto.jpg";
cy.get('input[type="file"]').attachFile(filepath);