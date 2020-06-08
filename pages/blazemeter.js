class BlazaPage{

    get mainHeader(){
        return $('h2.home_title');
    }

    get productLink()
    {
        return $('ul.list-nav-links li:nth-child(1) > a')
    }

    clickOnProductLink()
    {
        if(this.productLink.isDisplayed() === true)
            this.productLink.click();
    }

    get jmeterLink(){
        return $("//a[@href='/jmeter-load-testing']");
    }

    get parent(){
        return $('ul.list-nav-links');
    }

    get childElements(){
        return this.parent.$$('li');
    }

    get getTextForLi()
    {
        //here we will get collection of all lis
        return this.childElements.filter(element=> {
            console.log(element.getText());
        })
    }

    get useCasesElements(){
        return $$('ul.list-nav-links>li');
    }

    get useCasesElementsText(){
        return this.useCasesElements.filter(element =>{
            console.log(element.getText());
        })   
    }

    get footerLinksText(){
        return $$('div#main_b_footer_second_block>ul>li>a').filter(element=>{
            console.log(element.getText());
        })
    }

    specificChildElement(index){
        return this.parent.$(`li:nth-child(${index})`)
    }

    getSpecificChildElementText(index)
    {
        return this.specificChildElement(index).getText();
    }
}

module.exports = new BlazaPage();