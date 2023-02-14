const {
  createBrowser,
  sleepInPuppeteer,
  createEmailAndPassword,
  appendAccountToFile,
} = require("./utils");
const createAccount = require("./createAccount");
const formation = require("./formation");
const mapEinOptions = require("./constants").mapEinOptions;

const createAccountWorker = async (byOrder) => {
  const { browser, page } = await createBrowser();
  const { email, password, einOption } = createEmailAndPassword(byOrder);
  const einOptionText = mapEinOptions[einOption];

  if (byOrder) {
    await page.setDefaultNavigationTimeout(60000);
    await page.setDefaultTimeout(60000);
  } else {
    await page.setDefaultNavigationTimeout(30000);
    await page.setDefaultTimeout(30000);
  }

  try {
    console.log(`${email}|${password}|${einOption + 1}) ${einOptionText} => START`);
    await createAccount({ page, email, password, einOption });
    await formation({ email, password, page });
    await sleepInPuppeteer(10000);
    console.log(`${email}|${password}|${einOption + 1}) ${einOptionText} => FINISH`);
    appendAccountToFile(`${email}|${password}|${einOption + 1}) ${einOptionText}`);
  } catch (e) {
    // console.log(e);
    await browser.close();
  } finally {
    await browser.close();
  }
};

const main = async () => {
  const args = process.argv.slice(2);

  const count = parseInt(args[0]) ?? 5;
  const byOrder = args[1] === "byOrder";
  console.log(`number accounts: ${count}`);
  for (let i = 0; i < count; i++) {
    await createAccountWorker(byOrder);
  }
};

main();
