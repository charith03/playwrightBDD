// import locators from "../locators/testCase7.locators.json"
// import task7URL from "../test-data/url.json"

const locators = require('../locators/TruncateModalText.locator')
const task7URL = require('../test-data/urls')


class ParagraphExtraction {
    constructor(page) {
        this.page = page
        this.button = page.locator(locators.largeButton)
        this.textBody = page.locator(locators.textBody)
        this.close = page.locator(locators.closeB)
    }

    async GotoSite() {
        await this.page.goto(task7URL["task7URL"])
    }
    // here i extracted the paragraph text
    async extractPara() {
        await this.button.click()
        // 'text' contains the extracted text
        const text = await this.textBody.innerText()
        // it splits the text into words
        const words = text.split(' ')
        // here used slice to select the first 10 words here silice is used to create a new array from existing array
        // as it selects from 0-10 words 
        const first10 = words.slice(0, 10)
        // here the selected range is get joined into a single string
        const shortText = first10.join(' ')
        // here validating the joined text includes in acutal text or not 
        const textIncludes = text.includes(shortText)
        return {
            fullText: text, // it returns full text-> paragraph
            words: words.length, // it returns the length of the words
            textIncludes
        }
    }
    async closepopup(){
        await this.close.click()
    }
}

module.exports = { ParagraphExtraction }
