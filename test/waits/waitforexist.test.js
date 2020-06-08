describe('waitforexists examples', function(){

    it('waitforexist example', function(){

        browser.url('https://the-internet.herokuapp.com/add_remove_elements/');
        const addElement=$("//button[text()='Add Element']");
        const deleteElement=$("//button[text()='Delete']");

        addElement.waitForDisplayed();
        addElement.click();

        deleteElement.waitForExist(4000);
        assert.equal(true, deleteElement.isExisting());

        deleteElement.click();
        assert.equal(false, deleteElement.isExisting());

        browser.pause(3000);
    })

    it('hubspot example', function(){

        browser.url("https://app.hubspot.com/login");
        const username=$("#username");
        const password=$("#password");
        const loginBtn=$("#loginBtn");

        username.setValue("sriramkukkadapu@gmail.com");
        password.setValue("Sriram123!");
        loginBtn.click();

        $("#nav-primary-contacts-branch").waitForDisplayed();
        $("#nav-primary-contacts-branch").click();
        $("#nav-secondary-contacts").waitForDisplayed();
        $("#nav-secondary-contacts").click();

        //xpath for preview button = //span[text()='test']/../../..//div/../../div/span/button
        //xpath another method for same => //span[text()='test']//ancestor::a//following-sibling::span/button

        const previewBtn = $("//span[text()='test']//ancestor::a//following-sibling::span/button");
         
        previewBtn.moveTo();
        previewBtn.waitForExist(3000);
        previewBtn.waitForDisplayed();
        previewBtn.click();

        browser.pause(3000);

    })
})