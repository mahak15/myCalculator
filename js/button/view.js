var ButtonView = function (model) {
    var buttonElement;
    var init = function() {
        if(model) {
        createButtonElement();
        }
    }
    var createButtonElement = function() {
       buttonElement = document.createElement("button");
       buttonElement.innerHTML = model.value;    //use innerHTML for value to show on html button on screen.
       buttonElement.id=model.id;
       buttonElement.style.height=model.options.height;
       buttonElement.style.width=model.options.width;
    }
    init();
  return buttonElement; //return DOM object in button controller.
}