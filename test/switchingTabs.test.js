describe('Switching to tabs in WebDriverIO',() => {
    it('should Switch tabs using switchWindow Command ',() => {        
       browser.url('https://omayo.blogspot.com')
       $("//*[@id='selenium143']").click()  //xpath of the hyperlink on webpage 
       browser.pause(3000);
       browser.switchWindow('http://selenium143.blogspot.com/')
    });
});