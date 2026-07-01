const { Given, When, Then } = require('@cucumber/cucumber')
const { FilterSubjects } = require('../pages/FilterSubjectsPage')
const {expect} = require('@playwright/test')

let subjectPage

Given('I open the demo site for subjects.', async function () {
    subjectPage = new FilterSubjects(this.page)
    await subjectPage.GotoSite();
})

When('I fill the subjects input box with multiple characters.', async function () {
    await subjectPage.fillTheBox()
})

When('I extract all subject names.', async function () {
    this.subjects = await subjectPage.extractSubjects()
    console.log("Extracted Subjects:", this.subjects)
    const countOfSub = await this.subjects.length
    console.log(countOfSub)
})

When('I filter subjects with multiple words.', async function () {
    this.filtered2Subjects = await subjectPage.partioning(this.subjects)
    console.log("2 word Subjects:", this.filtered2Subjects)
    const countOfFiltered = await this.filtered2Subjects.length
    console.log(countOfFiltered)

})

When('I split all subject names into words.', async function () {
    this.splitSubjects = await subjectPage.splitingSubjects(this.subjects)
    console.log("Split Subjects:", this.splitSubjects)
})
Then('the length of subjects list will compare with length of 2 word subject list.', async function () {
    expect(this.filtered2Subjects.length).toBeLessThanOrEqual(this.subjects.length)
    
})
