class SpiceJet{

    get parent() { return $('#ctl00_HyperLinkLogin'); }
    get child1() { return $('=SpiceClub Members'); }
    get child2() { return $("//a[text()='Member Login']"); }

    movetoElement(element)
    {
        element.moveTo();
    }

    clickElement(element)
    {
        element.click();
    }
}

module.exports = new SpiceJet();