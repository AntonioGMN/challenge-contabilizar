describe("teste", () => {
	it("vai", () => {
		cy.visit("http://127.0.0.1:5500/index.html");

		cy.get("[id=cpf]").type("74914372061");
		cy.get("[id=valor]").type("1234.78");
		cy.get("[id=registrar]").click();

		cy.get("[id=cpf]").type("74914372061");
		cy.get("[id=valor]").type("-123.56 ");
		cy.get("[id=registrar]").click();

		cy.get("[id=cpf]").type("74914372061");
		cy.get("[id=valor]").type("-865");
		cy.get("[id=registrar]").click();

		///////////////////////////////////////////////
		cy.get("[id=cpf]").type("41421980096");
		cy.get("[id=valor]").type("-987");
		cy.get("[id=registrar]").click();

		cy.get("[id=cpf]").type("41421980096");
		cy.get("[id=valor]").type("123");
		cy.get("[id=registrar]").click();

		cy.get("[id=cpf]").type("41421980096");
		cy.get("[id=valor]").type("-1225.90");
		cy.get("[id=registrar]").click();

		//////////////////////////////////////////////
		cy.get("[id=cpf]").type("05987701007");
		cy.get("[id=valor]").type("1267.39");
		cy.get("[id=registrar]").click();

		cy.get("[id=cpf]").type("05987701007");
		cy.get("[id=valor]").type("143.90");
		cy.get("[id=registrar]").click();

		cy.get("[id=cpf]").type("05987701007");
		cy.get("[id=valor]").type("23.40");
		cy.get("[id=registrar]").click();

		/////////////////////////////////////////////
		cy.get("[id=cpf]").type("93975495022");
		cy.get("[id=valor]").type("1943");
		cy.get("[id=registrar]").click();

		cy.get("[id=cpf]").type("93975495022");
		cy.get("[id=valor]").type("8000.21");
		cy.get("[id=registrar]").click();

		cy.get("[id=cpf]").type("93975495022");
		cy.get("[id=valor]").type("546.78");
		cy.get("[id=registrar]").click();
	});
});
