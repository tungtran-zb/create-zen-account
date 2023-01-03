const {
  createBrowser,
  sleepInPuppeteer,
  createEmailAndPassword,
  appendAccountToFile,
} = require("./utils");
const createAccount = require("./createAccount");
const formation = require("./formation");

const createAccountWorker = async (ssnDefault) => {
  const { browser, page } = await createBrowser();
  const { email, password, ssn } = createEmailAndPassword();

  const SSN = ssnDefault ?? ssn;
  try {
    console.log(`${email}|${password}|${SSN} => START`);
    await createAccount({ page, email, password });
    await formation({ email, password, ssn: SSN, page });
    await sleepInPuppeteer(10000);
    console.log(`${email}|${password}|${SSN} => DONE`);
    appendAccountToFile(`${email}|${password}|${SSN}`);
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
  const ssn = args[1];

  if (ssn && ssn.length !== 9) {
    console.log("ssn is not valid");
    return;
  }

  console.log(`number accounts: ${count}`);
  for (let i = 0; i < count; i++) {
    await createAccountWorker(ssn);
  }
};

main();
