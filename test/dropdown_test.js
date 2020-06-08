describe('drop down test', function(){

    it.skip('select drop down value by text', function(){

        browser.url("https://www.facebook.com/");
        $('#day').selectByVisibleText("10");
        $('#month').selectByVisibleText('Apr');
        $('#year').selectByVisibleText('1990');
        browser.pause(5000);
    })

    it.skip('select drop down value by index', function(){

        browser.url("https://www.facebook.com/");
        $('#day').selectByIndex(3);
        $('#month').selectByIndex(9);
        $('#year').selectByIndex(13);
        browser.pause(5000);
    })

    it.skip('select drop down value by attribute', function(){

        browser.url("https://www.facebook.com/");
        $('#day').selectByAttribute('value',"18");
        $('#month').selectByAttribute('value',"12");
        $('#year').selectByAttribute('value',"1989");
        browser.pause(5000);
    })

    //print all drop down options
    it('print all options of select', function(){

        browser.url("https://www.facebook.com/");
        // let list=$$('#day > option');
        // console.log('length is : '+list.length);
        // console.log('Options...');
        // for(i=0;i<list.length;i++)
        // {
        //     const element=list[i];
        //     console.log(element.getText());
        // }

        
        let list=$$('#month > option');
        for(i=0;i<list.length;i++)
        {
            const element=list[i];
            console.log(element.getText());
            if(element.getText()==='Mar'){
                element.click();
            }
        }

        browser.pause(3000);

    })
})