const alertPage= require("../pages/alertpage");

describe('alerts testing', function(){
   
    it('testing alerts - accept', function(){
        browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        alertPage.clickOnAlertButton(1);
        const alertText=browser.getAlertText();
        console.log(alertText);
        assert.equal('I am a JS Alert',alertText);
        browser.acceptAlert();
        console.log(alertPage.getResultText());
        assert.equal('You successfuly clicked an alert',alertPage.getResultText());
        browser.pause(3000);

    })

 
    it('testing alerts - dismiss', function(){
        browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        alertPage.clickOnAlertButton(2);
        browser.dismissAlert();
        console.log(alertPage.getResultText());
        assert.equal('You clicked: Cancel',alertPage.getResultText());
        browser.pause(3000);

    })  

    it('testing alerts - enter text', function(){
        browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        alertPage.clickOnAlertButton(3);
        browser.sendAlertText("Testing Alert Text")
        browser.acceptAlert();
        console.log(alertPage.getResultText());
        assert.equal('You entered: Testing Alert Text',alertPage.getResultText());
        browser.pause(3000);

    })  

    it('Alert on rediff', function(){
        browser.url('https://mail.rediff.com/cgi-bin/login.cgi');
        $("//input[@name='proceed']").waitForDisplayed();
        $("//input[@name='proceed']").click();
        const text=browser.getAlertText();
        console.log("Rediff Alert Text: "+text);
        assert.equal("Please enter a valid user name",text);
        browser.acceptAlert();

        browser.pause(3000);

    })
})