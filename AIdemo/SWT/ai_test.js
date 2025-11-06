// Feature("ai");

// Scenario("test something", ({ I }) => {
//   I.amOnPage("http://localhost:3000/");
//   pause();
// });

Feature("DateTime Checker");

Scenario("Check future datetime shows time difference", async ({ I }) => {
  I.amOnPage("http://localhost:8080/");

  const now = new Date();
  const future = new Date(now.getTime() + 1000 * 60 * 60 * 24); // +1 day
  const yyyy = future.getFullYear();
  const mm = String(future.getMonth() + 1).padStart(2, "0");
  const dd = String(future.getDate()).padStart(2, "0");
  const hh = String(future.getHours()).padStart(2, "0");
  const min = String(future.getMinutes()).padStart(2, "0");

  // ✅ Gán giá trị bằng JavaScript
  I.executeScript((data) => {
    document.querySelector("#dateInput").value = data.date;
    document.querySelector("#timeInput").value = data.time;
  }, { date: `${yyyy}-${mm}-${dd}`, time: `${hh}:${min}` });

  I.click("#checkButton");

  I.waitForElement("#result", 5);
  I.waitForText("Selected:", 10, "#result");
  I.waitForText("Time difference", 10, "#result");
  I.see("in the future", "#result");
});
