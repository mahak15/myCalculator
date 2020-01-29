
      var OperationButtonView=function(model)
   {
     this.init=function()
     {
        this.createNumericButtonElement();

     }

     this.createNumericButtonElement=function()
     {
       this.operationbtnElement=document.createElement("button");
       this.operationbtnElement.innerHTML=model.value;
       this.operationbtnElement.id=model.id;
       this.operationbtnElement.style.heigth=model.heigth;
       this.operationbtnElement.style.width=model.width;
     }
     operationButtonView.prototype=new ButtonModel();
     operationButtonView.prototype.constructor=operationButtonView();

     this.init();

     return operationbtnElement;

   }