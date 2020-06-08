class HomePage{
    get pageHeader(){ return $('h1'); }
    get subHeader(){ return $('div.banner-text-content > p.sub-text'); }
    get supportLink() { return $("//li/span[text()='Support']"); }
    get supportSubLink() { return $("//a[@href='https://www.freshworks.com/support/']/span"); }

}

module.exports = new HomePage();