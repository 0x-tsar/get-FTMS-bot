const express = require("express");
const app = express();
const PORT = 5005;

const puppeteer = require("puppeteer");

const my_address = "0x6599cA2767Fa78bE271ef85557E755C6687Ee3Ca";

setInterval(() => {
  console.log("calling from server");
  (async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 1700 });
    await page.goto("https://faucet.fantom.network/");

    // await page.waitForNavigation();
    await page.waitForTimeout(5000);
    await page.type("input", my_address);
    await page.waitForTimeout(1000);
    await page.click('button[class="App-request-btn"]');
    // await page.waitForTimeout(8000);
    await page.waitForNavigation();
    // await page.waitForNavigation();
    // await page.waitForTimeout(1000 * 600);

    await browser.close();
  })();
  // }, 1000 * 10);
}, 1100 * 60 * 10);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
