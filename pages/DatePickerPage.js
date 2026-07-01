const locators = require('../locators/DatePicker.locators')
const demosite = require('../test-data/urls')


class DateField{
    constructor(page){
        this.page = page
        this.field = page.locator(locators.DOBfeild)
        this.year = page.locator(locators.years)
        this.month = page.locator(locators.months)
        this.day = page.locator(locators.day.val).nth(locators.day.index)
    }
    async GotoSite(){
        await this.page.goto(demosite["demoSiteUrl"])
    }
    async yearExtractor() {
    await this.field.click();
    const y = await this.year.textContent(); // it gives 190019011902109310941905.... it gives us a string otput
    const yearsR = [];
    for (let i = 0; i < y.length; i += 4) { // here we extract 4 digits using slice i=4,8,12,16....
        yearsR.push(y.slice(i, i + 4));
    }
    return yearsR;
    }
    async verifications(yearsRange){
        const sortedYears = yearsRange.sort()
        return sortedYears
    }
    async checkingduplicates(years) {
        const no_duplicate = [];
        for (let i = 0; i < years.length; i++) {
        if (!no_duplicate.includes(years[i])) {
            no_duplicate.push(years[i]);
        }
    }
    return no_duplicate;
    }
    async finalsteps(){
        await this.year.selectOption({ value: '1994' })
        await this.day.click()
        const entereddate = await this.field.inputValue()
        const [day, month, year] = entereddate.split(' ')        
        return year

    }
 
    /*async monthsExt(years){
        const months = await this.month.innerText()
        const randome_month = months(Math.random())
        const randome_years = years(Math.random())
        const randome_date = Math.floor(Math.random())
        return {
            randome_month,
            randome_years,
            randome_date
        }
    }*/
}
module.exports = {DateField}