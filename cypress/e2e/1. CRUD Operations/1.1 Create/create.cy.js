describe("we can test anything spec with this", () => {
  it("will test the post route", () => {
    cy.request({
      method: "POST",
      url: "/data",
      body: {
        name: "John Doe",
        age: 99,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("message");
    });
  });
});
