const {test, expect} = require('@playwright/test');

test('buy a product on swag labs demo', async({ page }) => {
  const demoUrl = 'https://www.saucedemo.com';
  const inventoryUrl = 'https://www.saucedemo.com/inventory.html';
  const username = 'standard_user';
  const password = 'secret_sauce';

  await page.goto(demoUrl);
  await expect(page).toHaveTitle(/Swag Labs/);

  await page.fill('[data-test="username"]', username);
  await page.fill('[data-test="password"]', password);

  await page.click('[data-test="login-button"]');

  await expect(page.url()).toBe(inventoryUrl);

  const selectors = {
    'add_to_cart': {
      'sauce_labs_backpack': 'add-to-cart-sauce-labs-backpack'
    }
  };

  await page.click(`[data-test=${selectors.add_to_cart.sauce_labs_backpack}]`)
  
  await page.waitForTimeout(3000);

});

const addToCart = () => {
  // do stuff
}
