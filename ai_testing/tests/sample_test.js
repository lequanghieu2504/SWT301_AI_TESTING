Feature("Sample");

Scenario("Login manually", async ({ I }) => {
  I.amOnPage("http://localhost:8080/api/auth/login");
  I.fillField("username", "user");
  I.fillField("password", "password");
  I.click("Login");
  I.see("Welcome, user");
});
