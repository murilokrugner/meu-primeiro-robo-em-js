const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
  const moedaFinal =  readlineSync.question('Informe uma moeda desejada: ') || 'real';
  const url = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome.0.0i512l10.2646j1j7&sourceid=chrome&ie=UTF-8`;
  await page.goto(url);
  
  const resultado = await page.evaluate(() => {
    return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;    
  });

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é: ${resultado}`);
 await browser.close();
}

robo();