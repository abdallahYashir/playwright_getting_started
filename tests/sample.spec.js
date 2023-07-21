const { test, expect } = require('@playwright/test');

test.describe('Sauce Labs navigation', () => {

  // TODO: use of test book beforeEach
  test('has heading Swag Labs', async({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle(/Swag Labs/);

    const headingLocator = page.locator('.login_logo');
    await expect(headingLocator).toHaveText(/Swag Labs/);
  });

  // TODO: login
  test('has heading Swag Labs', async({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    const username = 'standard_user';
    const password = 'secret_sauce';

    // fill inputs
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    
    // click on login
    await page.getByRole('button').click();

    // expect Products element to appear

  });
  
  // TODO: add to cart

});
