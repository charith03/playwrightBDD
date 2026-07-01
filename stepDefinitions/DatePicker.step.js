const { Given, When, Then } = require('@cucumber/cucumber')
const { DateField } = require('../pages/DatePickerPage')
const {expect} = require('@playwright/test')


let dateLabel

Given('I open the demo site url', async function() {
    dateLabel = new DateField(this.page) 
    await dateLabel.GotoSite()
})

When('I extract all years from the datepicker', async function() {
    this.yearsData = await dateLabel.yearExtractor() 
    console.log('Extracted years:', this.yearsData)
})

When('I sort them in ascending order', async function() {
    this.sortedyears = await dateLabel.verifications(this.yearsData) 
    console.log("sorted years: ", this.sortedyears)
})

When('I check for the duplicates', async function() {
    this.checkForDuplicates = await dateLabel.checkingduplicates(this.sortedyears) 
    console.log("filtered years: ", this.checkForDuplicates)
})

Then('a random year should be selected successfully', async function() {
    console.log('final filtered years: ', this.checkForDuplicates)
    this.matchyear = await dateLabel.finalsteps() 
    await expect(this.matchyear).toBe('1994')
    console.log("entered year: ", this.matchyear)
})


