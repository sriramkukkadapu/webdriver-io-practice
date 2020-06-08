const internetPage=require('../pages/internetpage');

describe('To Test checkboxes', function(){

    it('check page url', function(){
        browser.url('/');
        expect(browser.getUrl()).equals("https://www.amazon.com/");
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}`+"/");
    })

    it('validate checkbox page header', function(){
        browser.url("https://the-internet.herokuapp.com/");
        internetPage.clickOnLink(6);
        let header=internetPage.header.getText();
        expect(header).equals("Checkboxes");

    })

    it('should click checkboxes', function(){
        browser.url("https://the-internet.herokuapp.com/");
        internetPage.clickOnLink(6);

        internetPage.header.waitForDisplayed();
        internetPage.clickOnCheckBox(1);

        expect(internetPage.getCheckBoxElement(1).isSelected()).equals(true);

        browser.pause(2000);
    })

    it('validate checkboxes page url', function(){
        browser.url("https://the-internet.herokuapp.com/");
        internetPage.clickOnLink(6);
        expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/checkboxes")
    })

})