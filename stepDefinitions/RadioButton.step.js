const {Given, When, Then} = require('@cucumber/cucumber')
const {Radiobutton} = require('../pages/RadioButtonPage')
const {expect} = require('@playwright/test')

let radioButton

Given('I open the demosite of radio buttons', async function(){
    radioButton = new Radiobutton(this.page)
    await radioButton.GotoSite()
})

Given('I extract gender labels into a list', async function(){
    this.extractedtext = await radioButton.extractLabels()
    console.log('extracted text: ', this.extractedtext)
    console.log('original count: ', this.extractedtext.length)

})

Given('I convert them to uppercase', async function(){
    this.UpperCaseList = await radioButton.ProcessedList(this.extractedtext)
    console.log('uppercase list: ', this.UpperCaseList)
    console.log('Upper count: ', this.UpperCaseList.length)

})

Given('both lists should have the same count', async function(){
    expect(this.extractedtext.length).toBe(this.UpperCaseList.length)
    console.log("Both counts matched")

})
