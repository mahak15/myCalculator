
  var numericButtonView=function(model)
  {
    var init=function()
    {
      this.createNumericButtonElement();
    }
    this.createNumericButtonElement=function()
    {
        this.numericbtnElement=document.createElement("button");
        this.numericbtnElement.innerHTML=model.value;
        this.numericbtnElement.id=model.id;
        this.numericbtnElement.style.width=model.width;
        this.numericbtnElement.style.heigth=model.heigth;

    }
    this.numericButtonView.prototype=new ButtonMOdel();
    this.numericButtonView.prototype.constructor=numericButtonView();

    this.init();
    this.numericbtnElement;

  }

