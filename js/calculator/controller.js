
        var CalculatorController=function(id,options)
 {

        var calView;
        var calModel;
        var generalButton=[];
        var numberButton=[];
        var operatorButton=[];
        var display;
        var disId;


            var init=function()
          {

            designCalculator(id);
          }



               this.designCalculator =function(id)
          {
             calModel=new CalculatorModel(id,options);
             var disId=id;
             display=new DisplayController(disId," ",options).getDisplayElement();
             createNumberButtonElement(calModel,disId);
             createOperatorButtonElement(calModel,disId);
             createGeneralButtonElement(calModel,disId);

             calView=new CalculatorView(calModel,display,numberButton,operatorButton,generalButton);
             calView.design();

          }

             var createNumberButtons = function (model, disId)
          {
             var value, buttonId, buttonCtl;
                 for (var i in model.options.numberButtons)
              {
                 value = model.options.numericButtons[i];
                 buttonId = i;
                 buttonCtl = new NumberButtonController(buttonId, value, options);
                     buttonCtl.onClickHandler = function ( id, value,event)
                 {

                 }
                 numberButtons.push(buttonCtl.getNumberButtonElement());
              }
          }
            createOperatorButtonElement=function(model,disId);
          {
             var value , buttonId,buttonCtl;
                for( var j in model.options.operatorButton)
             {
                value=model.options.operatorButton[j];
                buttonId=j;
                buttonCtl=new OperatorButtonController(buttonCtl,value,options);
                     buttonCtl.onClickHandler=function(id,value,event)
                {

                }
                operatorButton.push(buttonCtl.getOperatorButtonElement());

             }
          }
        var createGeneralButtonElement = function (model, disId)
          {
               var value, buttonId, buttonCtl;
               for (var k in model.options.generalButton)
            {
                   value = model.options.generalButton[i];
                   buttonId = i;
                   buttonCtl = new ButtonController(buttonId, value, options);
                   buttonCtl.onClickHandler = function ( id, value,event)
               {

               }
               generalButton.push(buttonCtl.getButtonElement());
            }
          }




           this.init();
           return this;
 }

