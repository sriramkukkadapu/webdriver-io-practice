describe('drag and drop feature', function(){
    
    it('perform drag and drop', function(){
        browser.url('http://jqueryui.com/resources/demos/droppable/default.html');

        const sourceElement = $('#draggable');
        const targetElement = $('#droppable');

        //sourceElement.dragAndDrop(targetElement);
        sourceElement.dragAndDrop(targetElement,10);

        browser.pause(5000);

    })

})