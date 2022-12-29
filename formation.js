const { sleepInPuppeteer } = require("./utils");

const formation = async ({ email, password, ssn, page }) => {
  await page.goto("https://www.dev.zenbusiness.com/d/login");

  // input id="username" with email
  await page.waitForSelector("input[id='username']");
  await page.click("input[id='username']");
  await page.type("input[id='username']", email);

  // input id="password" with password
  await page.waitForSelector("input[id='password']");
  await page.click("input[id='password']");
  await page.type("input[id='password']", password);

  // click button Log In
  await page.waitForSelector("button[type='submit']");
  await page.click("button[type='submit']");

  // click a href="/r/incomplete"
  await page.waitForSelector("a[href='/r/incomplete']");
  await page.click("a[href='/r/incomplete']");

  // click parent of input id="react-select-6-input"
  await page.waitForSelector("input[id='react-select-2-input']");
  // get input id="react-select-6-input"
  const input = await page.$("input[id='react-select-2-input']");
  // get parent of input id="react-select-6-input"
  const parent = await input.$x("..");
  // click parent of input id="react-select-6-input"
  await parent[0].click();

  await page.waitForSelector("div[id='react-select-2-option-0']");
  await page.click("div[id='react-select-2-option-0']");
  // click button id="flow-button-next"
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");

  await page.waitForSelector("textarea");
  await page.click("textarea");
  await page.type("textarea", "test");
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");

  // input address in id="address-5918"
  await page.waitForSelector("input");
  await page.click("input");
  await page.type("input", "112 Ocean Avenue, Amityville, NY, USA");
  // enter
  await sleepInPuppeteer(3000);
  await page.keyboard.press("Enter");
  await sleepInPuppeteer(3000);
  // click button id="flow-button-next"
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");
  await sleepInPuppeteer(3000);

  // input id="address-3966" with address
  await page.waitForSelector("input");
  await page.click("input");
  await page.type("input", "112 Ocean Avenue, Amityville, NY, USA");
  await sleepInPuppeteer(3000);
  await page.keyboard.press("Enter");
  await sleepInPuppeteer(3000);
  // click button id="flow-button-next"
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");

  // input id="memberCount-4818" with value 1
  await sleepInPuppeteer(3000);
  await page.waitForSelector("input");
  await page.click("input");
  await page.type("input", "1");
  // click button id="flow-button-next"
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");

  // check id="defaultName0-item0"
  await sleepInPuppeteer(3000);
  await page.waitForSelector("input[id='defaultName0-item0']");
  await page.click("input[id='defaultName0-item0']");
  // check id="defaultAddress0-item0"
  await page.waitForSelector("input[id='defaultAddress0-item0']");
  await page.click("input[id='defaultAddress0-item0']");
  // click button id="flow-button-next"
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");

  // check radio button id="AllOwners"
  await page.waitForSelector("input[id='AllOwners']");
  await page.click("input[id='AllOwners']");
  // click button id="flow-button-next"
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");

  // click button id="flow-button-next"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");

  // click button id="flow-button-next"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");
  // find button with text "SKIP FOR NOW"0
  await sleepInPuppeteer(2000);
  // query all button
  const buttons = await page.$$("button");
  // click final button
  await buttons[buttons.length - 1].click();

  // click button id="flow-button-next"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");

  // click button id="flow-button-next"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");

  // click button id="flow-button-yes"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-yes']");
  await page.click("button[id='flow-button-yes']");

  // input type="tel" with value 123456789
  await sleepInPuppeteer(1500);
  await page.waitForSelector("input[type='tel']");
  await page.click("input[type='tel']");
  await page.type("input[type='tel']", ssn);
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");

  // click button id="flow-button-yes"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-no']");
  await page.click("button[id='flow-button-no']");

  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");

  // click button id="flow-button-no"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-no']");
  await page.click("button[id='flow-button-no']");

  // click button id="flow-button-no"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-no']");
  await page.click("button[id='flow-button-no']");

  // click button id="flow-button-no"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-no']");
  await page.click("button[id='flow-button-no']");

  // click button id="flow-button-no"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-no']");
  await page.click("button[id='flow-button-no']");

  // click button id="flow-button-no"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-no']");
  await page.click("button[id='flow-button-no']");

  // click parent of input id="id="react-select-9-input"
  await page.waitForSelector("input[id='react-select-9-input']");
  // get input id="react-select-9-input"
  const input9 = await page.$("input[id='react-select-9-input']");
  // get grand-parent input id="react-select-9-input"
  const parent9 = await input9.$x("..");
  await parent9[0].click();
  await page.waitForSelector("div[id='react-select-9-option-0']");
  await page.click("div[id='react-select-9-option-0']");

  await sleepInPuppeteer(1500);

  // click parent of input id="react-select-10-input"

  await page.waitForSelector("input[id='react-select-10-input']");
  // get input id="react-select-12-input"
  const input12 = await page.$("input[id='react-select-10-input']");
  // get grand-parent input id="react-select-10-input"
  const parent12 = await input12.$x("..");
  await parent12[0].click();
  await page.waitForSelector("div[id='react-select-10-option-0']");
  await page.click("div[id='react-select-10-option-0']");

  // click button id="flow-button-next"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");

  // click button id="flow-button-next"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-next']");
  await page.click("button[id='flow-button-next']");

  // click button id="flow-button-no"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-no']");
  await page.click("button[id='flow-button-no']");

  // click button id="flow-button-no"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-no']");
  await page.click("button[id='flow-button-no']");

  // click button id="flow-button-no"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-no']");
  await page.click("button[id='flow-button-no']");

  // click button id="flow-button-no-i-m-not-interested"
  await sleepInPuppeteer(2000);
  await page.waitForSelector("button[id='flow-button-no-i-m-not-interested']");
  await page.click("button[id='flow-button-no-i-m-not-interested']");

  // click button id="flow-button-skip"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-skip']");
  await page.click("button[id='flow-button-skip']");

  // click button id="flow-button-skip"
  await sleepInPuppeteer(1500);
  await page.waitForSelector("button[id='flow-button-skip']");
  await page.click("button[id='flow-button-skip']");
  await sleepInPuppeteer(5000);
};

module.exports = formation;
