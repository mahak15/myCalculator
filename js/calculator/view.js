    //create view of calculator to combine the display and buttons View.

     var CalculatorView=function(model)
     {
          var init=function()
       {
            this.renderCalculator();
       }
        this.renderCalculator=function(){
        this.calView=document.createElement("div");
        this.calView.id=calculatorId;

        this.calView.displayView=document.createElement("div");
        this.calView.appendChiled(this.calView.displayview);

        this.calView.numericButtonGroup=document.createElement("div");
        this.calView.appendChiled(this.calView.numericButtonGroup);

        this.calculatorId.operationButtonGroup=document.createElement("div");
        this.calView.appendChiled(this.calView.operationButtonGroup);
     }
         init();

            return this.calView;

     }