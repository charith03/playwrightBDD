const locators = require('../locators/HobbiesCheckBoxes.locators')
const demosite = require('../test-data/urls')
const {expect} = require('@playwright/test')

class HObbiebutton {
    constructor(page) {
        this.page = page;
        this.Fname = page.locator(locators.fistname)
        this.Lname = page.locator(locators.lastname)
        this.mobile = page.locator(locators.mobile)
        this.gender = page.locator(locators.gender)
        this.hob1 = page.locator(locators.check1)
        this.hob2 = page.locator(locators.check2)
        this.submit = page.locator(locators.submit)
        this.address = page.locator(locators.address)
        this.table = page.locator(locators.table)
        this.hobbie1 = page.locator(locators.Sports.val).nth(locators.Sports.index)
        this.hobbie2 = page.locator(locators.Reading.val).nth(locators.Reading.index)
        this.hobbie3 = page.locator(locators.Music.val).nth(locators.Music.index)
    }
    async GotoSite() {
        await this.page.goto(demosite["demoSiteUrl"])
    }
    async extractHobbies() {
        const hobbiesLables = []
        const h1 = await this.hobbie1.innerText()
        const h2 = await this.hobbie2.innerText()
        const h3 = await this.hobbie3.innerText()
        hobbiesLables.push(h1, h2, h3)
        console.log("Count:", hobbiesLables.length)
        return hobbiesLables
    }
    async First2labels(){
        const TwoLabels = []
        const l1 = await this.hobbie1.innerText()
        const l2 = await this.hobbie2.innerText()
        TwoLabels.push(l1, l2)
        return TwoLabels
    }
    async getCombined() {
    const labels = await this.First2labels()
    return labels.join(", ")
    }
    async fillDetails(){
        await this.Fname.fill('ram')
        await this.Lname.fill('charan')
        await this.mobile.fill('9191919191')
        await this.gender.click()
        await this.hob1.click()
        await this.hob2.click()
        await this.address.fill('assam')
        await this.submit.click()
    }
    // here i used scoprt contrainer 'table' where i used an locator where it selects entire table in that table i used
    // getByText and validated the combiedLables & expected text from that pop-up table 
    // here i am passing the parameter from spec.js is combined so here th expectedText = 'Sports, Reading'
    async validation(expectedText) {
    const tableContent = this.table.getByText(expectedText)
    await expect(tableContent).toBeVisible()
    console.log("Both are matched")
    }
}
module.exports = {HObbiebutton}