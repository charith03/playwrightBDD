const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber')
const { chromium } = require('playwright')

let browser
let context
setDefaultTimeout(60000);
Before(async function () {
    browser = await chromium.launch({ headless: false })
    context = await browser.newContext()
    this.page = await context.newPage()
})

After(async function () {
    console.log("Closing browser...")
    await this.page.close()
    await context.close()
    await browser.close()
})