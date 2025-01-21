describe("just", () => {
  it("check", () => {
    cy.visit("https://portal.bootcampshub.ai");

    cy.url().then((url) => {
      if (url.includes("/auth/login")) {
        cy.get(
          ".auth_form > :nth-child(1) > .input_area > .input_with_icon > input"
        ).type("riajulpro.english@gmail.com");

        cy.get(
          ":nth-child(2) > .input_field_2 > .input_area > .input_with_icon > input"
        ).type("passwordNotFound");

        cy.get(".auth_form > .submit_button").click();

        cy.get(".ant-btn").click();
        cy.get("li > .ant-btn").click();
      } else {
        cy.log("the value is false");
      }
    });
  });
});
