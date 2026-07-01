const {Given, When, Then} = require('@cucumber/cucumber')
const{ParagraphExtraction} = require('../pages/TruncateModalTextPage')

let truncateText

Given('I open the demo site Truncate', async function(){
    truncateText = new ParagraphExtraction(this.page)
    await truncateText.GotoSite()
})

When('I click a button and capture modal text', async function(){
    this.extractedPARA = await truncateText.extractPara()
    console.log('extracted paragraph: ', this.extractedPARA)
    //console.log('words count: ', this.extractedPARA.length)
})

When('I close the modal and extract the first 10 words', async function(){
    await truncateText.closepopup()
})

Then('the truncated text should match the UI text', async function(){
    await truncateText.extractPara()
})