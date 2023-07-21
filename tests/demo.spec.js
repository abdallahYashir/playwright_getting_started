// this test is written in playwright
const { test, expect } = require('@playwright/test');

// write a test to go https://www.saucedemo.com/
// login with standard_user
// add a product to the cart
// go to the cart
// checkout
// enter first name
// enter last name
// enter zip code
// click continue
// click finish
// assert that the thank you message is displayed
// assert that the url is now https://www.saucedemo.com/checkout-complete.html
// assert that the cart is now empty
// assert that the cart badge is now 0

test('buy a product', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    // wait for 1 sec
    // await page.waitForTimeout(1000);
    await page.click('[data-test="login-button"]');

    // check product text appears on page
    await page.waitForSelector('[data-test="add-to-cart-sauce-labs-backpack"]');

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="shopping-cart-container"]');
    await page.click('[data-test="checkout"]');
    await page.fill('[data-test="firstName"]', 'John');
    await page.fill('[data-test="lastName"]', 'Doe');
    await page.fill('[data-test="postalCode"]', '12345');
    await page.click('[data-test="continue"]');
    await page.click('[data-test="finish"]');
    await page.waitForSelector('[data-test="checkout-complete"]');
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-complete.html');
    expect(await page.textContent('[data-test="checkout-complete"]')).toBe('THANK YOU FOR YOUR ORDER');
    expect(await page.textContent('[data-test="shopping_cart_badge"]')).toBe('0');
});

