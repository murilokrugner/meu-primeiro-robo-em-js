const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");
const ObjectsToCsv = require("objects-to-csv");
//const neatCsv = require("neat-csv");
const fs = require("fs");

export async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const moedaBase = "bitcoin";
  // readlineSync.question("Informe uma moeda base: ") || "dolar";
  const moedaFinal = "real";
  // readlineSync.question("Informe uma moeda desejada: ") || "real";
  const url = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome.0.0i512l10.2646j1j7&sourceid=chrome&ie=UTF-8`;
  await page.goto(url);

  const resultado = await page.evaluate(() => {
    return document.querySelector(".cilsF.a61j6").value;
  });

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é: ${resultado}`);

  const currentDate = new Date();
  const day = currentDate.getDay();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const dateCompleted = day + "-" + month + "-" + year;

  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const completeDay =
    day + "/" + month + "/" + year + " " + hour + ":" + minutes;

  const result = [
    {
      currentValue: completeDay + " " + resultado,
    },
  ];

  const csv = new ObjectsToCsv(result);
  await csv.toDisk(`${dateCompleted}.csv`, { append: true });
  await browser.close();
}

async function readValue() {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const dateCompleted = day + "-" + month + "-" + year;

  /*fs.readFile(`${dateCompleted}.csv`, async (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(await neatCsv(data));
  });*/
}

setInterval(() => {
  robo();
}, 10000);

//readValue();
