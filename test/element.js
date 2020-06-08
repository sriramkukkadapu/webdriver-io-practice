describe("interaction with web elements", function(){

    it("enter value in a field", function(){
        browser.url("/"); //launch just base url
        const search=$('#twotabsearchtextbox');
        search.setValue("Apple mac book");
        browser.pause(5000);


    }); 

    it("get text of  a field", function(){
            browser.url("/"); //launch just base url
            const label = $('span.a-size-base.a-color-base');
            let text = label.getText();
            console.log(text);

    }); 

    it("click on a field", function(){
        browser.url("/"); //launch just base url
        const icon = $('input.nav-input');
        icon.click();

    });
});