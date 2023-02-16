const puppeteer = require("puppeteer");

(async () => {
  console.log("Iniciando scrapping...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://es.wikipedia.org/wiki/Node.js");

  var titulo = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    return h1.innerHTML;
  });
  console.log("🚀 ~ file: index.js:13 ~ titulo ~ titulo", titulo);

  await page.screenshot({ path: "example.png" });
  console.log("Scrapping finalizado");
  await browser.close();
  console.log("Browser cerrado");
})();
