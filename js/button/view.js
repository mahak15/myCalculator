
    var ButtonView = function (model) {
            var init = function() {
                this.createButtonElement();
            }
            this.createButtonElement = function()
            {
                this.btnElement = document.createElement("button");   //creating DOM object for button.
                this.btnElement.innerHTML = model.value;    //use innerHTML for labrl to show on html button on screen.
                this.btnElement.style.width = model.options.width; //to set a color in DOM object variable.
                this.btnElement.style.height = model.options.height;
            }
          init();
          return this.btnElement; //return DOM object in button controller.
}