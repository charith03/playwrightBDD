const locators = require ('../locators/ReverseAccordionTitles.locators')
const task9URL = require ('../test-data/urls')


class Reversetitles{
    constructor(page){
        this.page = page
        this.c1 = page.locator(locators.collapse1.val).nth(locators.collapse1.index)
        this.c2 = page.locator(locators.collapse2.val).nth(locators.collapse2.index)
        this.c3 = page.locator(locators.collapse3.val).nth(locators.collapse3.index)
        this.cc1 = page.locator(locators.c1.val).nth(locators.c1.index)
        this.cc2 = page.locator(locators.c2.val).nth(locators.c2.index)
        this.cc3 = page.getByText(locators.c3)

    }
    async GotoSite() {
        await this.page.goto(task9URL["task9URL"])
    }
    async extractTitle() {
        const TilesList = []
        const t1 = await this.c1.innerText()
        const t2 = await this.c2.innerText()
        const t3 = await this.c3.innerText()
        TilesList.push(t1, t2, t3)
        return TilesList
    }
    async revTitle(titles){
        return titles.map(function(t){
            return t.split("").reverse().join("")
        })
    }
    async closeCollapses(){
        await this.cc1.click()
        console.log("closed collapse1")
        await this.cc2.click()
        console.log("closed collapse2")
        await this.cc3.click()
        console.log("closed collapse3")

    }
}
module.exports = {Reversetitles}