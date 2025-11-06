Feature("Login UI");

// Scenario("Login through browser", async ({ I }) => {
//   I.amOnPage("login");
//   I.fillField("username", "user");
//   I.fillField("password", "password");
//   I.click('button[type="submit"]');
//   I.waitForText("Đăng nhập thành công!", 10);
// });

Scenario("AI login test", async ({ I }) => {
  await I.sendAI(`
    Open page login,
    enter username "user" and password "password",
    click the login button,
    and verify that "Đăng nhập thành công!" appears within 10 seconds.
  `);
});

// Feature("Login UI");

// Scenario("AI login test", async ({ I }) => {
//   const response = await I.sendAI(`
//     Hãy viết test cho việc đăng nhập:
//     1. Vào trang /login
//     2. Nhập username là 'user'
//     3. Nhập password là 'password'
//     4. Click nút đăng nhập
//     5. Kiểm tra hiển thị "Đăng nhập thành công!"
//   `);

//   console.log("✅ AI returned:\n", response);
// });
