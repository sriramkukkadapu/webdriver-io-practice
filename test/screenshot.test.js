describe('save screenshot command takes screenshot in WebDriverIO',() => {
    it('should take screenshot of page view of webpage',() => {        
           browser.url('http://omayo.blogspot.com/')
           $('.footer-cap-top').scrollIntoView()
           browser.pause(3000)
           browser.saveScreenshot('./test/screenshot.png')
    });
});