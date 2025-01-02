describe("we can test anything spec with this", () => {
  it("will test the server either running or not", () => {
    cy.request("GET", "/").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("success", true);
    });
  });

  it("will test the post route", () => {
    cy.request("POST", "/data", {
      name: "John Doe",
      age: 99,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("message");
    });
  });

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

  it.skip("will delete the data according to the id", () => {
    cy.request("DELETE", "/data/1735241414610").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("message");
    });
  });

  it("will console the message", () => {
    cy.log("This is a log message of second test");
  });
});
