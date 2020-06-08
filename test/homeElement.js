const homePage=require("../pages/homepage");

describe("Home page elements handle",function(){

    it('verify home page elements', function(){
        browser.url("https://www.freshworks.com"); //launch just base url
        let text = homePage.pageHeader.getText();
        console.log(text);

        console.log(homePage.subHeader.getText());
        homePage.supportLink.click();
        homePage.supportSubLink.click();
        
        browser.pause(5000);
        
    });
});
