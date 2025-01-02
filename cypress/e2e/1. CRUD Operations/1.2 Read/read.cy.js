describe("we can test anything spec with this", () => {
  it("will test the server either running or not", () => {
    cy.request("GET", "/").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("success", true);
    });
  });
});
