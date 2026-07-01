const {Given, When, Then} = require('@cucumber/cucumber')
const {Reversetitles} = require('../pages/ReverseAccordionTitlesPage')
const {expect} = require('@playwright/test')

let accordionTitle

Given('I open the demo site accordion titles', async function(){
    accordionTitle = new Reversetitles(this.page)
    await accordionTitle.GotoSite()

})

When('I extract accordion titles', async function(){
    this.titles = await accordionTitle.extractTitle()
    console.log('titles: ', this.titles)
})

When('I reverse the titles', async function(){
    this.ReverseTiles = await accordionTitle.revTitle(this.titles)
    console.log('reversed titles: ', this.ReverseTiles)
})

When('I re-extract and reverse the titles again', async function(){
    this.ReverseTiles2 = await accordionTitle.revTitle(this.titles)
    console.log('again reversed titles: ', this.ReverseTiles2)
})

Then('all accordions should be collapsed', async function(){
    await accordionTitle.closeCollapses()
    expect(this.ReverseTiles).toEqual(this.ReverseTiles2)
    console.log('matched')

})