describe("we can test anything spec with this", () => {
  it.skip("will delete the data according to the id", () => {
    cy.request("DELETE", "/data/1735241414610").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("message");
    });
  });
});
