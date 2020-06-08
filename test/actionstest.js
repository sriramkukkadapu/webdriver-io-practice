const spicejetPage = require("../pages/spicejet");

describe('page actions features', function(){
    
    it.skip('move to element', function(){
        //browser.setTimeout({ 'pageLoad': 30000 });
        browser.url('https://www.spicejet.com/');
        browser.pause(8000);
        spicejetPage.movetoElement(spicejetPage.parent);
        browser.pause(3000);
        spicejetPage.child1.waitForDisplayed({ timeout: 5000 });
        spicejetPage.movetoElement(spicejetPage.child1);
        browser.pause(5000);
        //spicejetPage.child2.waitForDisplayed();
        spicejetPage.movetoElement(spicejetPage.child2);
        //spicejetPage.child2.waitForDisplayed({ timeout: 10000 });
        browser.pause(3000);
        // spicejetPage.movetoElement(spicejetPage.child2);
        // browser.pause(5000);
        // spicejetPage.movetoElement(spicejetPage.child2);
        spicejetPage.clickElement(spicejetPage.child2);
    })

    it('keys action peform', function(){

        browser.url('https://the-internet.herokuapp.com/key_presses?');
        $('#target').waitForDisplayed();
        $('#target').setValue('Tab');
        console.log($('#result').getText());
        browser.pause(3000);
        assert.equal("You entered: TAB",$('#result').getText());
        $('#target').setValue('Shift');
        console.log($('#result').getText());
        browser.pause(3000);
        $('#target').setValue('F1');
        console.log($('#result').getText());
        browser.pause(3000);

    })
})