const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 50, // we can see it
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to http://localhost:4200/
  await page.goto('http://localhost:4200/');

  // Go to http://localhost:4200/dashboard
  await page.goto('http://localhost:4200/dashboard');

  // Click text="New Recipe"
  await page.click('text="New Recipe"');
  // assert.equal(page.url(), 'http://localhost:4200/new');

  // Click input[name="name"]
  await page.click('input[name="name"]');

  // Fill input[name="name"]
  await page.fill('input[name="name"]', 'Test Recipe');

  // Click input[name="calories"]
  await page.click('input[name="calories"]');

  // Fill input[name="calories"]
  await page.fill('input[name="calories"]', '8');

  // Press Tab
  await page.press('input[name="calories"]', 'Tab');

  // Fill input[name="carbs"]
  await page.fill('input[name="carbs"]', '8');

  // Press Tab
  await page.press('input[name="carbs"]', 'Tab');

  // Fill input[name="fat"]
  await page.fill('input[name="fat"]', '8');

  // Press Tab
  await page.press('input[name="fat"]', 'Tab');

  // Fill input[name="protein"]
  await page.fill('input[name="protein"]', '8');

  // Press Tab
  await page.press('input[name="protein"]', 'Tab');

  // Click text=/.*Save Recipe.*/
  await page.click('text=/.*Save Recipe.*/');

  // Click text=/.*Save Recipe.*/
  await page.click('text=/.*Save Recipe.*/');

  // Click text=/.*Save Recipe.*/
  await page.click('text=/.*Save Recipe.*/');

  // Click text=/.*Save Recipe.*/
  await page.click('text=/.*Save Recipe.*/');

  // Click text=/.*RecipeService post: \{"id":"ea0.*/
  await page.click('text=/.*RecipeService post: \{"id":"ea0.*/');

  // Click text=/.*RecipeService post: \{"id":"ea0.*/
  await page.click('text=/.*RecipeService post: \{"id":"ea0.*/');

  // Click text=/.*RecipeService post: \{"id":"ea0.*/
  await page.click('text=/.*RecipeService post: \{"id":"ea0.*/');

  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();
