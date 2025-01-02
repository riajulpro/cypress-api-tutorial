describe("we can test anything spec with this", () => {
  it("will update the data according to the id", () => {
    cy.request("PUT", "/data/1735242307862", {
      name: "HMS Miraz",
      age: 19,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("message");
    });
  });
});
