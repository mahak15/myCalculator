var ButtonController = function (id, value, options) {
    var buttonModel;
    var buttonView, scope = this;

	//create onclick handler event on button.
      this.onClickHandler = function () {
            console.log(buttonModel.id, buttonModel.value);
        }
    var init = function() {
        buttonModel = new ButtonModel(id, value, options);
        buttonView = new ButtonView(buttonModel);

        buttonView.onclick = function(event) {
            scope.onClickHandler(buttonModel.id , buttonModel.value);
        }
    }


    this.getButtonElement = function() {
        return buttonView;
    }

    init();
    return this;   //return Object.
}
