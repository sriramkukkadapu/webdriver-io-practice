const loginPage = require('../pages/loginpage');
const logoutPage = require('../pages/logoutpage');
const loginData = require('../testdata/logindata');

describe('handle application login', function(){
    
    it('perform login', function(){
        browser.url('https://the-internet.herokuapp.com/login');
        loginPage.username.click();
        loginPage.username.clearValue();
        loginPage.enterUsername(loginData.username);
        loginPage.password.click();
        loginPage.password.clearValue();
        loginPage.enterPassword(loginData.password);
        loginPage.clickLoginBtn();
        browser.pause(2000);
    })

    it('perform logout', function(){
        logoutPage.clickLogOutBtn();
    })
})