    //create view of calculator to combine the display and buttons View.

        var CalculatorView=function(model,display,numberButton,operatorButton,generalButton)
     {
             var calView;
             var init = function ()
           {
                 createCalElement();
           }
             var createCalElement = function ()
           {
                 calView = document.createElement("div");
                 calView.id = model.id;
              var displayView = document.createElement("div");
                 displayView.appendChild(display);
                 calView.appendChild(displayView);

              var numberButtonGroup = document.createElement("div");
                 for (var i = 0; i < numericButtons.length; i++) {
                     numberButtonGroup.appendChild(numericButtons[i]);
                 }
                 calView.appendChild(numberButtonGroup);

                 var operatorButtonGroup = document.createElement("div");
                 for (var i = 0; i < operatorButtons.length; i++) {
                     operatorButtonGroup.appendChild(operatorButtons[i]);
                 }
                 calView.appendChild(operatorButtonGroup);
                 var break1 = document.createElement("br");
                 calView.appendChild(break1);


                 this.design();
             }
             this.design = function () {
                 document.body.appendChild(calView);
                 var break1 = document.createElement("br");
                 document.body.appendChild(break1);
             }
             this.init();
             return this;
         }





     }