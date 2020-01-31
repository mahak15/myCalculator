//create view of calculator to combine the display and buttons View.

var CalculatorView=function(model, display, numberButtons, operatorButtons, generalButtons) {
    var calculatorElement;


    var init=function()  {
    createCalculatorElement();
    }

    var createCalculatorElement = function() {
        calculatorElement = document.createElement('div');
        calculatorElement.id = model.id;
        calculatorElement.style.height = model.options.height;
        calculatorElement.style.width = model.options.width;
        calculatorElement.appendChild(display);
        calculatorElement.appendChild(renderButtons('number', numberButtons));
        calculatorElement.appendChild(renderButtons('operator', operatorButtons));
        calculatorElement.appendChild(renderButtons('general', generalButtons));
    }

    var renderButtons = function(type, buttons) {
        var btnGroup = document.createElement('div');
        btnGroup.className = 'btn-grp-'+type;
        for(var i = 0; i < buttons.length ; i++) {
            btnGroup.appendChild(buttons[i]);
        }
        return btnGroup;
    }
    this.render = function () {
        document.body.appendChild(calculatorElement);
    }

    init();
    return this;
}





