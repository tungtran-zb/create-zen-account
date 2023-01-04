// open https://www.dev.zenbusiness.com/ by puppeteer

const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { sleepInPuppeteer } = require("./utils");
const fs = require("fs");

// Load Chance
const Chance = require("chance");

const chance = new Chance();

puppeteer.use(StealthPlugin());

const createAccount = async ({ page, email, password }) => {
  await page.goto("https://www.dev.zenbusiness.com/");

  // wait for input with aria-label="ZenBusiness Form Field"
  await page.waitForSelector("input[aria-label='ZenBusiness Form Field']");

  const cookies = await page.cookies();
  fs.writeFileSync("cookies.json", JSON.stringify(cookies));

  // click input with aria-label="ZenBusiness Form Field"
  await page.click("input[aria-label='ZenBusiness Form Field']");
  await page.type(
    "input[aria-label='ZenBusiness Form Field']",
    chance.company()
  );

  await page.setDefaultNavigationTimeout(30000);
  await page.setDefaultTimeout(30000);

  // click button with aria-label "Start Now"
  await page.waitForSelector("a[aria-label='Start Now']");
  await page.click("a[aria-label='Start Now']");

  // Click switch with class MuiSwitch-input
  await page.waitForSelector("input.MuiSwitch-input");
  await page.click("input.MuiSwitch-input");

  // click data-testid="flowButton-49-yes"
  await page.waitForSelector("div[data-testid='flowButton-49-yes']");
  await page.click("div[data-testid='flowButton-49-yes']");

  // // input data-testid="textInput-186" with value "AgilityIO"
  // await page.waitForSelector("input[data-testid='textInput-186']");
  // await page.type("input[data-testid='textInput-186']", "AgilityIO");
  // // enter
  // await page.keyboard.press("Enter");

  // input data-testid="textInput-196" with value "New York"
  await page.waitForSelector("input[data-testid='textInput-196']");
  await page.type("input[data-testid='textInput-196']", "New York");
  // enter
  await page.keyboard.press("Enter");

  // click button data-testid="selectInputSubmit-196"
  await page.waitForSelector("button[data-testid='selectInputSubmit-196']");
  await page.click("button[data-testid='selectInputSubmit-196']");

  // input data-testid="textInput-37" with value "Yates County"
  await page.waitForSelector("input[data-testid='textInput-37']");
  await page.type("input[data-testid='textInput-37']", "Yates County");
  // enter
  await page.keyboard.press("Enter");

  // click button data-testid="selectInputSubmit-37"
  await page.waitForSelector("button[data-testid='selectInputSubmit-37']");
  await page.click("button[data-testid='selectInputSubmit-37']");

  // input data-testid="textInput-16" with value "nguyen"
  await page.waitForSelector("input[data-testid='textInput-16']");
  await page.type("input[data-testid='textInput-16']", chance.first());
  // enter
  await page.keyboard.press("Enter");

  // Click button data-testid="textButtonInput-16"
  await page.waitForSelector("button[data-testid='textButtonInput-16']");
  await page.click("button[data-testid='textButtonInput-16']");

  // click div data-testid="flowButton-17-lots"
  await page.waitForSelector("div[data-testid='flowButton-17-lots']");
  await page.click("div[data-testid='flowButton-17-lots']");

  // click div data-testid="flowButton-19-6-more"
  await page.waitForSelector("div[data-testid='flowButton-19-6-more']");
  await page.click("div[data-testid='flowButton-19-6-more']");

  // click div data-testid="flowButton-20-no"
  await page.waitForSelector("div[data-testid='flowButton-20-no']");
  await page.click("div[data-testid='flowButton-20-no']");

  // click div data-testid="flowButton-21-making-money"
  await page.waitForSelector("div[data-testid='flowButton-21-making-money']");
  await page.click("div[data-testid='flowButton-21-making-money']");

  // click div data-testid="flowButton-23-huge"
  await page.waitForSelector("div[data-testid='flowButton-23-huge']");
  await page.click("div[data-testid='flowButton-23-huge']");

  // input data-testid="textInput-24" with "3D Printing"
  await page.waitForSelector("input[data-testid='textInput-24']");
  await page.type("input[data-testid='textInput-24']", "3D Printing");
  // enter
  await page.keyboard.press("Enter");

  // click button data-testid="selectInputSubmit-24"
  await page.waitForSelector("button[data-testid='selectInputSubmit-24']");
  await page.click("button[data-testid='selectInputSubmit-24']");

  // click div data-testid="flowButton-25-save-progress"
  await page.waitForSelector("div[data-testid='flowButton-25-save-progress']");
  await page.click("div[data-testid='flowButton-25-save-progress']");

  // input data-testid="textInput-38" with value "nguyen"
  await page.waitForSelector("input[data-testid='textInput-38']");
  await page.type("input[data-testid='textInput-38']", chance.last());
  // click button data-testid="textButtonInput-38"
  await page.waitForSelector("button[data-testid='textButtonInput-38']");
  await page.click("button[data-testid='textButtonInput-38']");

  // generate random email with format [YOUR EMAIL ID]+zbtest.[date].[iterator]@zenbusiness.com
  // get today in format YYYYMMDD
  // input data-testid="textInput-39" with value "email"
  await page.waitForSelector("input[data-testid='textInput-39']");
  await page.type("input[data-testid='textInput-39']", email);
  // click button data-testid="textButtonInput-39"
  await page.waitForSelector("button[data-testid='textButtonInput-39']");
  await page.click("button[data-testid='textButtonInput-39']");

  // input data-testid="textInput-40" with value 800-800-8000
  await page.waitForSelector("input[data-testid='textInput-40']");
  await page.type("input[data-testid='textInput-40']", "8008008000");
  // click button data-testid="textButtonInput-40"
  await page.waitForSelector("button[data-testid='textButtonInput-40']");
  await page.click("button[data-testid='textButtonInput-40']");

  // click div data-testid="flowButton-41-pub-yes"
  await page.waitForSelector("div[data-testid='flowButton-41-pub-yes']");
  await page.click("div[data-testid='flowButton-41-pub-yes']");

  // click div data-testid="flowButton-27-ra-yes"
  await page.waitForSelector("div[data-testid='flowButton-27-ra-yes']");
  await page.click("div[data-testid='flowButton-27-ra-yes']");

  // click div data-testid="flowButton-28-ein-biz-yes"
  await page.waitForSelector("div[data-testid='flowButton-28-ein-biz-yes']");
  await page.click("div[data-testid='flowButton-28-ein-biz-yes']");

  // click div data-testid="flowButton-232-show-pro"
  await page.waitForSelector("div[data-testid='flowButton-232-show-pro']");
  await page.click("div[data-testid='flowButton-232-show-pro']");

  // click div data-testid="flowButton-233-show-more-pro"
  await page.waitForSelector("div[data-testid='flowButton-233-show-more-pro']");
  await page.click("div[data-testid='flowButton-233-show-more-pro']");

  // click div data-testid="flowButton-234-pro-plan"
  await page.waitForSelector("div[data-testid='flowButton-234-pro-plan']");
  await page.click("div[data-testid='flowButton-234-pro-plan']");

  // click data-testid="flowButton-57-zbmoney-monthly"
  await page.waitForSelector(
    "div[data-testid='flowButton-57-zbmoney-monthly']"
  );
  await page.click("div[data-testid='flowButton-57-zbmoney-monthly']");

  // click div data-testid="flowButton-32-rush"
  await page.waitForSelector("div[data-testid='flowButton-32-rush']");
  await page.click("div[data-testid='flowButton-32-rush']");

  // click div data-testid="flowButton-35-tools-yes"
  await page.waitForSelector("div[data-testid='flowButton-35-tools-yes']");
  await page.click("div[data-testid='flowButton-35-tools-yes']");

  // click div data-testid="flowButton-36-account-review"
  await page.waitForSelector("div[data-testid='flowButton-36-account-review']");
  await page.click("div[data-testid='flowButton-36-account-review']");

  // checkout button
  // click button data-testid="checkout-button"
  await page.waitForSelector("button[data-testid='checkout-button']");
  await page.click("button[data-testid='checkout-button']");
  // click button data-testid="checkout-continue-to-payment"
  await page.waitForSelector(
    "button[data-testid='checkout-continue-to-payment']"
  );
  await page.click("button[data-testid='checkout-continue-to-payment']");

  // select iframe in div __PrivateStripeElement
  const elementHandle = await page.waitForSelector(
    "div.__PrivateStripeElement iframe"
  );
  const frame = await elementHandle.contentFrame();

  await sleepInPuppeteer(2000);

  // input aria-label="Credit or debit card number" with value 4242424242424242
  await frame.waitForSelector(
    "input[aria-label='Credit or debit card number']"
  );
  await frame.click("input[aria-label='Credit or debit card number']");
  // type slow to avoid error
  await frame.type(
    "input[aria-label='Credit or debit card number']",
    "4242424242424242",
    { delay: 100 }
  );

  // input aria-label="Credit or debit card expiration date" with value 12/24
  await frame.waitForSelector(
    "input[aria-label='Credit or debit card expiration date']"
  );
  await frame.click("input[aria-label='Credit or debit card expiration date']");
  await frame.type(
    "input[aria-label='Credit or debit card expiration date']",
    "01/23"
  );

  // input aria-label="Credit or debit card CVC/CVV" with value 123
  await frame.waitForSelector(
    "input[aria-label='Credit or debit card CVC/CVV']"
  );
  await frame.click("input[aria-label='Credit or debit card CVC/CVV']");
  await frame.type("input[aria-label='Credit or debit card CVC/CVV']", "123");

  // input aria-label="ZIP" with value 12345
  await frame.waitForSelector("input[aria-label='ZIP']");
  await frame.click("input[aria-label='ZIP']");
  await frame.type("input[aria-label='ZIP']", "12345");

  // input data-testid="unchecked-password-input" with value Potato@02012020
  await page.waitForSelector("input[data-testid='unchecked-password-input']");
  await page.click("input[data-testid='unchecked-password-input']");
  await page.type("input[data-testid='unchecked-password-input']", password);

  await sleepInPuppeteer(1000);

  // click button data-testid="checkout-button"
  await page.waitForSelector("button[data-testid='checkout-button']");
  await page.click("button[data-testid='checkout-button']");

  await sleepInPuppeteer(30000);
  // wait for selector data-testid="flowButton-63-goToDashboard"
  await page.waitForSelector("div[data-testid='flowButton-63-goToDashboard']");
};

module.exports = createAccount;
