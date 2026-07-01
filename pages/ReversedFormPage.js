const locators = require('../locators/ReversedForm.locator')
const demoSite = require('../test-data/urls')

class ReversedForm {
    constructor(page) {
        this.page = page
        this.labels = page.locator(locators.AllLables)
    }

    async Site(){
        await this.page.goto(demoSite["demoSiteUrl"])
    }

    async extractLables() {
        const texts = []
        const count = await this.labels.count()
        for (let i = 0; i < count; i++) {
            texts.push(await this.labels.nth(i).innerText())
        }
        return texts
    }

    async ReverseList(labels) {
        return labels.map(text => text.split("").reverse().join(""))
    }

    async SortingLabels(labels) {
        return labels.map(text => text.split("").sort().join(""))
    }
}

module.exports = {ReversedForm}