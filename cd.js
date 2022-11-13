const puppeteer = require("puppeteer-core");

const url = "https://fr.indeed.com/";

//require executablePath from puppeteer
const { executablePath } = require("puppeteer");
(async () => {
  // headless lui dire si notre navigateur est ouveret ou non
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: executablePath()
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  //   clique autoriser cookies
  await page.click("button#onetrust-accept-btn-handler");

  //   remplir l'input recherche
  await page.type("[name=q]", "developpeur web junior", { delay: 100 });

  //   clique recherche
  await page.click(".yosegi-InlineWhatWhere-primaryButton");

  //   await browser.close();
})();
