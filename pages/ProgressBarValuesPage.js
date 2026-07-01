// import { expect } from "@playwright/test"
// import locators from "../locators/testCase10.locators.json"
// import task10URL from "../test-data/url.json"

const locators = require('../locators/ProgressBarValues.locators')
const task10URL = require('../test-data/urls')


class ProgressBar{
    constructor(page){
        this.page = page
        this.numbers = page.locator(locators.values)
        this.button = page.locator(locators["startandstop"])
        this.endpoint = page.locator(locators.endpoint)
    }
    async GotoSite() {
        await this.page.goto(task10URL["task10URL"])
    }
    // the percentages of the progressbar were getting extracted 
    async extractNumbers() {
        const percentageValues = []
        for (let i = 0; i < 90; i += 5) { // the loop run from 0 to 90 and i=0,2,4,6,8,10....
            await this.button.click();
            //await expect(this.numbers).toBeVisible() // added an assertion when stopping the bar the number is visible or not
            await this.page.waitForTimeout(1000); // here used time out as the loop runs fast in the cucumber
            const elements = await this.numbers.textContent()
            //console.log(elements)
            percentageValues.push(elements)
            //console.log(percentageValues)
        }
        return percentageValues
    }
    // the extracted numbers are like 2%, 3%, 4%, 5%........ so removing the "%" symbol
    async removingsymbol(rawtext){
        return rawtext.map(function(numbers){
            return Number(numbers.replace('%', ''))
        })
    }
    // when extracted few duplicate numbers were present thats why pushed all the numbers into set
    async removingDuplicates(numbers){
        const uniqueSet = new Set(numbers)
        return Array.from(uniqueSet)
    }
    //filtering the numbers greater than 50 
    async filterNum(numbers){
            return numbers.filter(function(num){
            return num >= 50
        })
        //return filteredcount
    }
    //counting the filtered and the original sets
    async countBothLists(lists){
        const Totalcount = lists.length
        //const Ocount = original.length
        return Totalcount /*{
            Filteres_cout: Fcount, 
            //Original_count: Ocount
        }*/
    }
    /*async countONum(original){
        //const Fcount = filtered.length
        const Ocount = original.length
        return Ocount { 
            //Original_count: Ocount
        }*/
}
module.exports = {ProgressBar}