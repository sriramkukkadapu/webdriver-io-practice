class CRMPage{

    get forgotPwdLink(){
        return $("=Forgot Password?"); //get by link text
    }

    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    }
}

module.exports=new CRMPage();