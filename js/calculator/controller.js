var CalculatorController = function(id, options) {

    var calView, calModel, generalButtons=[], numberButtons=[], operatorButtons=[], disId, calDom;
	this.displayCtl;
	var scope = this;
    var init = function() {
        designCalculator(id);
    }

    var designCalculator = function(id) {
        calModel = new CalculatorModel(id,options);
        disId = id;
        scope.displayCtl = new DisplayController(disId," ", options);
        createGeneralButtonElement();
        createOperatorButtonElement();
        createNumberButtonElement();


        calView = new CalculatorView(calModel, scope.displayCtl.getDisplayElement(), numberButtons, operatorButtons, generalButtons);
        calView.render();
    }

    var createNumberButtonElement = function () {
        var  buttonCtl;
        for (var i = 0; i < calModel.options.numberButtons.length; i++) {
            buttonCtl = new NumberButtonController('no-btn-'+i, calModel.options.numberButtons[i]);
            buttonCtl.onClickHandler = function ( id, value) {
                scope.displayCtl.addToExpression(value);
           }
            numberButtons.push(buttonCtl.getButtonElement());
        }
    }


    var createOperatorButtonElement = function () {
        var  buttonCtl;

        for (var i = 0; i < calModel.options.operatorButtons.length; i++) {
            buttonCtl = new OperatorButtonController('op-btn-'+i, calModel.options.operatorButtons[i]);
            buttonCtl.onClickHandler = function ( id, value,event) {
				 scope.displayCtl.addToExpression(value);
			}
            operatorButtons.push(buttonCtl.getButtonElement());
        }
    }



    var createGeneralButtonElement = function () {
        var  buttonCtl;
        for (var i = 0; i < calModel.options.generalButtons.length; i++) {
            buttonCtl = new NumberButtonController('no-btn-'+i, calModel.options.generalButtons[i]);
            buttonCtl.onClickHandler = function ( id, value,event) {

                    if(value == '='){
                        scope.displayCtl.setExpression(eval(scope.displayCtl.getExpression()));
                    }
                    else if(value == 'C'){
                        value = " ";
                        scope.displayCtl.setExpression(value);
                        scope.displayCtl.getExpression();
					}
					else if(value == '.'){
						 scope.displayCtl.addToExpression(value);
					}
					else{

					}
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

