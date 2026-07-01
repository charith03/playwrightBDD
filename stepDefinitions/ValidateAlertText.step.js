const{Given, When, Then} = require('@cucumber/cucumber')
const {AlertText} = require('../pages/ValidateAlertTextPage')

let alert

Given('I open the demo site alerts', async function(){

    alert = new AlertText(this.page)
    await alert.GotoSite()

})

Then('I click a random alert button and print the alert message', async function(){
    this.alertText = await alert.clickAlert()
    //console.log('alert text: ', this.alertText)
})