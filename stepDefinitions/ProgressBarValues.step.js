const {Given, Then, When} = require('@cucumber/cucumber')
const{ProgressBar} = require('../pages/ProgressBarValuesPage')
const {expect} = require('@playwright/test')


let progressbar

Given('I open the demo site progressbar', async function(){
    progressbar = new ProgressBar(this.page)
    await progressbar.GotoSite()

})

When('I start and stop the progress bar at intervals', { timeout: 60000 }, async function(){
    this.barVlaues = await progressbar.extractNumbers()
    console.log('progress bar values: ', this.barVlaues)
})

When("I remove percentage symbols", async function(){
    this.removeSymbol = await progressbar.removingsymbol(this.barVlaues)
    console.log('removes % symbol: ', this.removeSymbol)
    
})

When('I check for duplicate values', async function(){
    this.checkDuplicates = await progressbar.removingDuplicates(this.removeSymbol)
    console.log('no duplicates: ', this.checkDuplicates)
})

When('I filter values greater than or equal to 50', async function(){
    this.filterGreaterthan50 = await progressbar.filterNum(this.checkDuplicates)
    console.log('>=50 values: ', this.filterGreaterthan50)
})

When('I count extratced values', async function(){
    this.originalCount = await progressbar.countBothLists(this.checkDuplicates)
    console.log('original count: ', this.originalCount)
})

When('the filtered and original counts should be validated', async function(){
    this.filetredCount = await progressbar.countBothLists(this.filterGreaterthan50)
    console.log('filtered count: ', this.filetredCount)
    expect(this.filetredCount).toBeLessThanOrEqual(this.originalCount)

})

