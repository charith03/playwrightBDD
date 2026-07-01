const { Given, When, Then } = require('@cucumber/cucumber')
const { ReversedForm } = require('../pages/ReversedFormPage')
const {expect} = require('@playwright/test')

let formPage

Given('I open the demo form', async function () {
    formPage = new ReversedForm(this.page)
    await formPage.Site()
})

When('I extract all labels', async function () {
    this.labels = await formPage.extractLables()
    console.log("Extracted Labels:", this.labels)
})

When('I reverse the labels', async function () {
    this.reversedLabels = await formPage.ReverseList(this.labels)
    console.log("Reversed Labels:", this.reversedLabels)
})

When('I sort the labels', async function () {
    this.sortedLabels = await formPage.SortingLabels(this.reversedLabels)
    console.log("Sorted Labels:", this.sortedLabels)
})

When('I re-extract, reverse, and sort the labels again', async function () {
    this.sortedLabels2 = await formPage.SortingLabels(this.reversedLabels)
    console.log("Sorted Labels:", this.sortedLabels2)
})


Then('both label lists should match', async function () {
    console.log("Final Output:", this.sortedLabels)
    await expect(this.SortedLabels).toEqual(this.SortedLabels2)
})


