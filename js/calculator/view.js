//create view of calculator to combine the display and buttons View.

var CalculatorView=function(model, display, numberButtons, operatorButtons, generalButtons) {
    var calculatorElement;


    var init=function()  {
    createCalculatorElement();
    }

    var createCalculatorElement = function() {
        calculatorElement = document.createElement('div');
        calculatorElement.setAttribute('class','calculatorView');
        calculatorElement.id = model.id;
        calculatorElement.style.height = model.options.height;
        calculatorElement.style.width = model.options.width;
        calculatorElement.appendChild(display);
        var mainButton = document.createElement('div');
        mainButton.setAttribute('class','mainButton');
        calculatorElement.appendChild(mainButton);
         var button = document.createElement('div');
             button.setAttribute('class','button-grp');
             button.appendChild(renderButtons('general', generalButtons));
             button.appendChild(renderButtons('number', numberButtons));
             mainButton.appendChild(button);
			 mainButton.appendChild(renderButtons('operator', operatorButtons));

	}

    var renderButtons = function(type, buttons) {

        var btnGroup = document.createElement('div');
        btnGroup.setAttribute('class', 'btn-grp'+type);
        btnGroup.className = 'btn-grp-'+type;
        for(var i = 0; i < buttons.length ; i++) {
            buttons[i].setAttribute('class', 'btn-grp'+type);
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





