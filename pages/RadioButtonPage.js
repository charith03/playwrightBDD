const locators = require('../locators/RadioButton.locators')
const demosite = require('../test-data/urls')

class Radiobutton {
    constructor(page) {
        this.page = page;
        this.button1 = page.locator(locators.Male.val).nth(locators.Male.index)
        this.button2 = page.locator(locators.Female.val).nth(locators.Female.index)
        this.button3 = page.locator(locators.Others.val).nth(locators.Others.index)
    }
    async GotoSite() {
        await this.page.goto(demosite["demoSiteUrl"])
    }
    async extractLabels() {
        const buttonLables = []
        const b1 = await this.button1.innerText()
        const b2 = await this.button2.innerText()
        const b3 = await this.button3.innerText()
        buttonLables.push(b1, b2, b3)
        console.log("Count:", buttonLables.length)
        return buttonLables
    }
    async ProcessedList(Bnames) {
        const PList = []
        for (let i = 0; i < Bnames.length; i++) {
            const result = Bnames[i].toUpperCase().replace(" ", "")
            PList.push(result)
        }
        for (let i = 0; i < Bnames.length; i++) {
        if (Bnames[i].length >= 4 && PList[i].toUpperCase() === PList[i]) {
            console.log("valid");
        } else {
        console.log("invalid");
        }
    }
    console.log("Processed Count:", PList.length)
    return PList
    }
}

module.exports = { Radiobutton }