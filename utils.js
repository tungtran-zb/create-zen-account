require('dotenv-extended').load();
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const {executablePath} = require('puppeteer');
const fs = require("fs");
const dayjs = require("dayjs");

puppeteer.use(StealthPlugin());

const createEmailAndPassword = () => {
  const name = process.env.NAME || 'quynh';
  const today = dayjs().format('YYYYMMDD')
  //get time in format HHMMSS in local time use dayjs
  const time = dayjs().format("HHmmss");

  const email = `${name}+zbtest.${today}.${time}@zenbusiness.com`;
  const password = "Potato@02012020";

  // random ein option from 0 to 3
  const einOption = Math.floor(Math.random() * 4);


  return { email, password, einOption };
};

const sleepInPuppeteer = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createBrowser = async () => {
  const browser = await puppeteer.launch({
    handleSIGINT: false,
    headless: false,
    // chrome executable path on linux
    executablePath: process.env.PUPPETEER_EXEC_PATH || process.env.BROWSER_PATH || executablePath(),
    args: [
      "--incognito",
      "--disable-notifications",
      "--no-sandbox",
      "--disable-web-security",
      "--disable-features=IsolateOrigins,site-per-process",
      "--disable-infobars",
      "--ignore-certifcate-errors",
      "--ignore-certifcate-errors-spki-list",
      "--allow-running-insecure-content",
      "--disable-blink-features=AutomationControlled",
      "--no-zygote",
      "--no-xshm",
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--enable-webgl",
      "--ignore-certificate-errors",
      "--lang=en-US,en;q=0.9",
      "--password-store=basic",
      "--disable-software-rasterizer",
      "--disable-background-timer-throttling",
      "--disable-backgrounding-occluded-windows",
      "--disable-renderer-backgrounding",
      "--disable-breakpad",
      "--disable-canvas-aa",
      "--disable-2d-canvas-clip-aa",
      "--disable-gl-drawing-for-tests",
      "--enable-low-end-device-mode",
      // start position for browser
      "--window-position=150,250",
      "--window-size=1500,1080",
      // '--user-agent="Mozilla/5.0 (X11; CrOS x86_64 15183.59.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.75 Safari/537.36"',
    ],
    ignoreDefaultArgs: ["--disable-extensions", "--enable-automation"],
    // userDataDir: "./tmp",
    // ignoreHTTPSErrors: true,
    waitUntil: "networkidle2",
  });

  const page = (await browser.pages())[0];

  const timeout = 3 * 60 * 1000;

  await page.setDefaultNavigationTimeout(timeout);
  await page.setDefaultTimeout(timeout);

  try {
    const cookies = JSON.parse(await fs.readFileSync("./cookies.json"));
    await page.setCookie(...cookies);
  } catch (e) {
    // do nothing
  }

  return { browser, page };
};

// append account to file that name of file is today
const appendAccountToFile = (account) => {
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const fileName = `./accounts/${today}.txt`;
  fs.appendFileSync(fileName, account + "\n");
};

module.exports = {
  createEmailAndPassword,
  sleepInPuppeteer,
  createBrowser,
  appendAccountToFile,
};
