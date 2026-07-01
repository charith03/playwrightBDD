// import locators from "../locators/testCase8.locators.json"
// import task8URL from "../test-data/url.json"

const locators = require('../locators/ValidateAlertText.locators')
const task8URL = require('../test-data/urls')


class AlertText {
    constructor(page) {
        this.page = page;
        this.Abutton = page.locator(locators.alertButton);
    }

    async GotoSite() {
        await this.page.goto(task8URL["task8URL"]);
    }

    async clickAlert() {
        this.page.on('dialog', async (dialog) => {
            const text = dialog.message();
            console.log('actual text:', text);

            await dialog.accept();

            const newText = text.toLowerCase().trim();
            const splitText = newText.split(/\s+/); 
            console.log(splitText);

            const count = splitText.length;
            console.log("Word count:", count);

            if (count >= 3) {
                console.log("valid");
            } else {
                console.log("invalid");
            }

            if (text !== text.toLowerCase()) {
                console.log("contains uppercase");
            } else {
                console.log("no uppercase");
            }
        });

        await this.Abutton.click();
    }
}

module.exports = { AlertText };