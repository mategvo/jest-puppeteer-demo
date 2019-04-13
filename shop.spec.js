const puppeteer = require('puppeteer')

test('first link should lead to angel.co profile', async () => {

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 1,
    })
    const page = await browser.newPage()
    await page.goto('https://google.com')

    await page.click('input.gLFyf.gsfi')
    await page.type('input.gLFyf.gsfi', 'Mate Gwozdz')
    await page.type('input.gLFyf.gsfi', String.fromCharCode(13));

    await page.waitFor(1000);

    const element = await page.$("a cite");
    const text = await page.evaluate(element => element.textContent, element);

    expect(text).toBe('https://angel.co/mategwozdz')

    browser.close()

}, 100000)

