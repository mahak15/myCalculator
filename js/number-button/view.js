
  var  numberButtonView=function(model)
  {
    var init=function()
    {
      this.createNumericButtonElement();
    }
    this.createNumericButtonElement=function()
    {
        this.numberButtonElement=document.createElement("button");
        this.numberButtonElement.innerHTML=model.value;
        this.numberButtonElement.id=model.id;
        this.numberButtonElement.option.numberButtonStyle=model.option.numberButtonStyle;

    }
        numberButtonView.prototype=new ButtonModel();
         numberButtonView.prototype.constructor=numberButtonView();

         init();
    this.numberButtonElement;

  }

