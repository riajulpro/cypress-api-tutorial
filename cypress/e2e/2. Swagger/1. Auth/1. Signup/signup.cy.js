describe("signing to the swagger", () => {
  it("will create an user", () => {
    cy.request("POST", "/api/user/signup", {
      name: "Riajul",
      email: "riajul@gmail.com",
      password: "123456",
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("isOtpSend", true);
      cy.log(res);
      console.log(res);
    });
  });
});
