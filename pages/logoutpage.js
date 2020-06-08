class LogOutPage{

    get logOutBtn()
    {
        return $("//a[@href='/logout']");
    }

    clickLogOutBtn(){
        this.logOutBtn.click();
    }
}

module.exports = new LogOutPage();