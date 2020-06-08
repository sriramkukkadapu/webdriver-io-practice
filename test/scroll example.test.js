const crmPage = require("../pages/crm.page");

describe('Scroll example', function(){

    it('Perform scroll', function(){

        browser.url('https://www.crmpro.com/');
        console.log("Is the link present in view port? : ",crmPage.forgotPwdLink.isDisplayedInViewport());
        //crmPage.forgotPwdLink.click();
        crmPage.forgotPwdLink.scrollIntoView();
        console.log('scrolled');
        console.log("Is the link present in view port? : ",crmPage.forgotPwdLink.isDisplayedInViewport());
        crmPage.forgotPwdLink.moveTo();
        crmPage.forgotPwdLink.click();
        browser.pause(3000);
    })

})