const blazePage = require('../pages/blazemeter');

describe("blaze page elements handle", function(){

    it.skip('get texts of all main links', function(){
        browser.url('https://www.blazemeter.com/');
        // blazePage.getTextForLi;
        // blazePage.useCasesElementsText;
        // blazePage.footerLinksText;

        console.log('third string is: '+blazePage.specificChildElement(3).getText());
        console.log('fourth string is: '+blazePage.getSpecificChildElementText(4));
    })

    it('main heading displayed? ',function(){
        browser.url('https://www.blazemeter.com/');
        console.log("main header displayed? : ",blazePage.mainHeader.isDisplayed());
    })

    it('main heading enabled? ',function(){
        //browser.url('https://www.blazemeter.com/');
        console.log("main header enabled? : ",blazePage.mainHeader.isEnabled());
    })

    it('main heading exists? ',function(){
        //browser.url('https://www.blazemeter.com/');
        console.log("main header exists? : ",blazePage.mainHeader.isExisting());
    })

    it('main heading displayed in viewPort? ',function(){
        //browser.url('https://www.blazemeter.com/');
        console.log("main header displayed in viewport? : ",blazePage.mainHeader.isDisplayedInViewport());
    })

    it('jmeter link displayed in viewPort? ',function(){
        //browser.url('https://www.blazemeter.com/');
        console.log("jmeter link displayed in viewport? : ",blazePage.jmeterLink.isDisplayedInViewport());
    })

    it('click on produc link',function(){
        blazePage.clickOnProductLink();
        browser.pause(5000);
    })
});