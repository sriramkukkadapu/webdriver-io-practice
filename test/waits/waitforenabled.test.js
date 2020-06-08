describe('wait for enabled demo', function(){

    it('wait for enabled test', function(){
        browser.url('https://classic.crmpro.com/register/');
        $("//input[@name='agreeTerms']").waitForDisplayed();
        $("//input[@name='agreeTerms']").click();
        const submitBtn= $('#submitButton');

        browser.pause(3000);
        submitBtn.waitForEnabled(4000);
        assert.equal(true, submitBtn.isEnabled())

        //console.log("Submit button enabled ? : "+$("#submitButton").isEnabled());

        $("//input[@name='agreeTerms']").click();
        submitBtn.waitForEnabled({timeout:3000, reverse:true}); //wait for element disabled
        assert.equal(false, submitBtn.isEnabled())
        //console.log("Submit button Enabled ? : "+$("#submitButton").isEnabled());

    })
})