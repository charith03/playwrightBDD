const locators = require('../locators/FilterSubjects.locator')
const demoSite = require('../test-data/urls')

class FilterSubjects{
    constructor(page){
        this.page = page
        this.searchBox = page.locator(locators.SubjectFilledBox)
        this.SubLabels = page.locator(locators.SubjectLabel)

    }
    // it opens the URL
    async GotoSite(){
        await this.page.goto(demoSite["demoSiteUrl"])
    }
    // it fills the field with each and every character present in array and it runs a loop
    async fillTheBox() {
    await this.searchBox.click();
    const charactersList = ['a','b','c','d','e','h','i','l','m','n','o','r','s','v']
    for (let i = 0; i < charactersList.length; i++) {
        await this.searchBox.fill(charactersList[i])
        await this.searchBox.press('Enter')
        }
    }
    // here we extract the subject names using it's class as the locator and push them in to SubNames list
    async extractSubjects(){
        const SubNames = [];
        const count = await this.SubLabels.count();
        for (let i = 0; i < count; i++) {
            const Sname = await this.SubLabels.nth(i).innerText();
            SubNames.push(
                Sname
            );
        }
        console.log(count)
        return SubNames;
    }
    // here we partition the i.e the two word subjects like 'computer science' will get pushed into separate list called twoWordSubject
    async partioning(Subjects) {
        const twoWordSubject = [];
        for (let subject of Subjects) {
            const wordCount = subject.split(" ").length;
            if (wordCount !== 1) {
                twoWordSubject.push(subject);
            }
        }
        return twoWordSubject
    }
    // here the original list i.e the SubNames will get splited as it will make 'computer Science' into 2 words as 'conputer', 'Science'
    async splitingSubjects(Subjects) {
    const splitwords = Subjects.map(function(sub) {
        return sub.split(" ");
    });
    return splitwords;
    }

}


module.exports = {FilterSubjects}