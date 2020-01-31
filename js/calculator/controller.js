var CalculatorController = function(id, options) {

    var calView, calModel, generalButtons=[], numberButtons=[], operatorButtons=[], display, disId, calDom;

    var init = function() {
        designCalculator(id);
    }

    var designCalculator = function(id) {
        calModel = new CalculatorModel(id,options);
        disId = id;
        display = new DisplayController(disId," ", options).getDisplayElement();
        createNumberButtonElement();
        createOperatorButtonElement();
        createGeneralButtonElement();
        calView = new CalculatorView(calModel, display, numberButtons, operatorButtons, generalButtons);
        calView.render();
    }

    var createNumberButtonElement = function () {
        var  buttonCtl;
        for (var i = 0; i < calModel.options.numberButtons.length; i++) {
            buttonCtl = new NumberButtonController('no-btn-'+i, calModel.options.numberButtons[i]);
            buttonCtl.onClickHandler = function ( id, value,event) {

            }
            numberButtons.push(buttonCtl.getButtonElement());
        }
    }


    var createOperatorButtonElement = function () {
        var  buttonCtl;
        for (var i = 0; i < calModel.options.operatorButtons.length; i++) {
            buttonCtl = new OperatorButtonController('no-btn-'+i, calModel.options.operatorButtons[i]);
            buttonCtl.onClickHandler = function ( id, value,event) {

            }
            operatorButtons.push(buttonCtl.getButtonElement());
        }
    }



    var createGeneralButtonElement = function () {
        var  buttonCtl;
        for (var i = 0; i < calModel.options.generalButtons.length; i++) {
            buttonCtl = new NumberButtonController('no-btn-'+i, calModel.options.numberButtons[i]);
            buttonCtl.onClickHandler = function ( id, value,event) {

            }
            generalButtons.push(buttonCtl.getButtonElement());
        }
    }




    this.getCalculatorElement  = function() {
    return calDom;
    }

    init();
    return this;
}

