describe('waituntil examples', function(){

    it('test wait until', function(){
        browser.url("https://app.hubspot.com/login");
        const username=$("#username");
        const password=$("#password");
        const loginBtn=$("#loginBtn");

        browser.waitUntil(function(){
            return username.isDisplayed()===true
        },  6000, 'username not displayed yet')
        
        username.setValue("sriramkukkadapu@gmail.com");
        password.setValue("Sriram123!");
        loginBtn.click();

        browser.pause(3000);

        const demoBtn=$("//a[@type='button' and @href='https://app.hubspot.com/demo-tour/7633910/reports-dashboard/leader-new-underperform?flowId=new-leader&tourId=leader-underperform-reports']")
        demoBtn.waitForDisplayed();
        demoBtn.click();

        const header=$("h1.private-page__title");
        browser.waitUntil(function(){
            return header.getText() === "Sales Dashboard"
        },  6000, 'header not displayed yet')

        console.log("HEader ==========> "+header.getText());
        assert.equal("Sales Dashboard", header.getText());

        browser.waitUntil(function(){
            return header.getTitle() === "Demo Tour"
        },  6000, 'page title not displayed yet')

        console.log("browser title: "+browser.getTitle())
        assert.equal('Demo Tour', browser.getTitle());
        

    })

})