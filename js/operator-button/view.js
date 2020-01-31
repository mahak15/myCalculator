
      var OperatorButtonView=function(model)
   {
     this.init=function()
     {
        this.createNumberButtonElement();

     }

     this.createNumberButtonElement=function()
     {
       this.operatorButtonElement=document.createElement("button");
       this.operatorButtonElement.innerHTML=model.value;
       this.operatorButtonElement.id=model.id;
       this.operatorButtonElement.style.height=model.height;
       this.operatorButtonElement.style.width=model.width;
     }
         OperatorButtonView.prototype=new ButtonModel();
         OperatorButtonView.prototype.constructor =OperatorButtonView;

         init();

     return operatorButtonElement;

   }