describe("interaction with web elements", function(){

    it("get header value", function(){
        browser.url("https://www.freshworks.com"); //launch just base url
        const header=$('h1');
        console.log(header);
    }); 

});