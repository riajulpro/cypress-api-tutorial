describe("checking card", () => {
  it("will check the cards", () => {
    cy.visit("http://localhost:3000");

    cy.get(".card")
      .should("exist")
      .each(($card) => {
        cy.wrap($card).within(() => {
          cy.get(".card_title").should("be.visible");
          cy.get(".card_content").should("be.visible");
        });
      });
  });
});
