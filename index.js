const { createBrowser, sleepInPuppeteer, createEmailAndPassword, appendAccountToFile } = require("./utils");
const createAccount = require("./createAccount");
const formation = require("./formation");

const createAccountWorker = async () => {
  const { browser, page } = await createBrowser();
  const { email, password, ssn } = createEmailAndPassword();
  try {
    await createAccount({ page, email, password });
    await formation({ email, password, ssn, page });
    await sleepInPuppeteer(10000);
    console.log(`${email}|${password}|${ssn}`)
    appendAccountToFile(`${email}|${password}|${ssn}`);
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
  console.log(`number accounts: ${count}`);
  for (let i = 0; i < count; i++) {
    await createAccountWorker();
  }
};

main();
