const { test, expect } = require("@playwright/test");

test("Check shopping list page", async ({ page }) => {
  await page.goto("https://aldin00-exam.onrender.com/Shopping-List");
  const list = await page.$("li");
  expect(list).toBeTruthy();
});
