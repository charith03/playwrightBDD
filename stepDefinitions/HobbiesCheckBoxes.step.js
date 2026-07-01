const {Given, When, Then} = require('@cucumber/cucumber')
const {HObbiebutton} = require('../pages/HobbiesCheckBoxesPage')


let hobbieButton

Given('I open the hobbies page', async function(){
    hobbieButton = new HObbiebutton(this.page)
    await hobbieButton.GotoSite()

})

When('I extract all hobby labels', async function(){
    this.extractedHobbies = await hobbieButton.extractHobbies()
    console.log('all bobbies: ', this.extractedHobbies)
    console.log('hobbies count: ', this.extractedHobbies.length)

})

When('I select the first 2 hobbies', async function(){
    this.extract2labels = await hobbieButton.First2labels(this.extractedHobbies)
    console.log('first 2 labels: ', this.extract2labels)

})

When('I combine the selected hobbies', async function(){
    this.combinedHObbies = await hobbieButton.getCombined(this.extract2labels)
    console.log('combined hobbies: ', this.combinedHObbies)

})

When('I fill the form with required details', async function(){
    await hobbieButton.fillDetails()

})

Then('the submitted hobbies should match the selected hobbies', async function(){
    await hobbieButton.validation(this.combinedHObbies)


})

