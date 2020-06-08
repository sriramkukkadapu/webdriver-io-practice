class Loginpage{

    get username(){ return $('#username'); }
    get password(){ return $('#password'); }
    get loginBtn(){ return $('button'); }

    enterUsername(text){
        this.username.waitForDisplayed();
        this.username.setValue(text);
    }

    enterPassword(text){
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }

    clickLoginBtn(){
        this.loginBtn.waitForDisplayed();
        this.loginBtn.click();
    }

}

module.exports = new Loginpage();