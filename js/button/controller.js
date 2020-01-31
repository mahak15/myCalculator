var ButtonController = function (id, value, options) {
    var buttonModel;
    var buttonView, scope = this;

    var init = function() {
        buttonModel = new ButtonModel(id, value, options);
        buttonView = new ButtonView(buttonModel);
        buttonView.onclick = function(event) {
            scope.onClickHandler(event, id, value);
        }
    }
    //create onclick handler event on button.
    this.onClickHandler = function (event, id, value) {

    }

    this.getButtonElement = function() {
        return buttonView;
    }

    init();
    return this;   //return Object.
}
