
    var ButtonView = function (model) {
            var init = function() {
                this.createButtonElement();
            }
            this.createButtonElement = function()
            {
                this.buttonElement = document.createElement("button");   //creating DOM object for button.
                this.buttonElement.innerHTML = model.value;    //use innerHTML for labrl to show on html button on screen.
                this.buttonElement.id=model.id;
                this.buttonElement.option.buttonStyle=model.option.buttonStyle;
            }
          init();
          return this.buttonElement; //return DOM object in button controller.
}