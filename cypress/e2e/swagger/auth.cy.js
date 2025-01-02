describe("we can test anything spec with this", () => {
  let token;

  before(() => {
    cy.fixture("token").then((data) => {
      token = data.token;
    });
  });

  it("will test the login route", () => {
    cy.request({
      method: "POST",
      url: "/api/user/signup",
      body: {
        email: "kordiyokne@gufum.com",
        password: "123456",
        name: "Riajul Pro",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("will test the verify otp route", () => {
    cy.request({
      method: "POST",
      url: "/api/user/verifyotp",
      body: {
        email: "kordiyokne@gufum.com",
        otp: "834480",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it.only("will test the login route", () => {
    cy.request({
      method: "POST",
      url: "/api/user/signin",
      body: {
        email: "kordiyokne@gufum.com",
        password: "123456",
      },
      failOnStatusCode: false,
    }).then((response) => {
      if (response.status === 200) {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("token");
        token = response.body.token;
      } else {
        expect(response.status).to.eq(401);
        expect(response.body).to.have.property("message");
      }
    });
  });

  it("will test the login route", () => {
    cy.request({
      method: "POST",
      url: "/api/user/verify",
      headers: {
        Authorization: `${token}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      console.log(response.body);
    });
  });
});
