describe("we can test anything spec with this", () => {
  it("will test the server either running or not", () => {
    cy.request("GET", "/").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property(
        "message",
        "Server is running fine"
      );
      cy.log(response);
      console.log(response);
    });
  });

  it.only("testing with jsonplaceholder", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then(
      (res) => {
        expect(res.body).to.have.length(100);

        cy.get(res.body).each(($obj) => {
          expect($obj).to.have.property("id");
          expect($obj).to.have.property("title");
          expect($obj).to.have.property("body");
        });
      }
    );
  });
});
