const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://unsplash.com/');

  await  page.click('[href="/login"]');

  await page.type('[name="user[email]"]', 'email@email.com');
  await page.type('#user_password', 'teste'); 
  
  await page.click('[type="submit"]');

  await page.waitForNavigation();

  await page.goto('https://unsplash.com/photos/LzWXPcJg7lk');

  await page.click('[title="Like photo"]')

 // await browser.close();
})();