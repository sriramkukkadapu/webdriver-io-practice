describe('Locate Iframe Using SwitchToFrame Command in WebDriverIO',() => {
    it('should Locate Iframe and Enter Text in Text Field Present in Iframe',() => {
        browser.url('http://omayo.blogspot.com')
        browser.pause(3000);
        $('#iframe2').isDisplayed()  
        const iframe = $("#iframe2") /* const variable named as iframe is created and
                                         iframe id is assigned to iframe
                                      */
        iframe.scrollIntoView(); 
        browser.switchToFrame(iframe)
        $('#q').isDisplayed()  
        $('#q').click()
        $('#q').keys("Text has been Entered in iframe2 text box")
        browser.pause(3000);  
        });
    });