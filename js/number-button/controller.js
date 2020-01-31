
    var numberButtonController=function(button)
  {
     var numberBtnView;
     var numberBtnModel;

        var init=function()
      {

           this.numberBtnModel=new numberButtonModel();
           this.numberBtnView=new numberButtonView(numberBtnModel);

      }
          this.getNumberButtonElement=function()
      {
            return this.numberBtnView;
      }

          this.numberBtnView.onclick=function(event)
      {
           this.onclickHandler(id,value,event);

      }

          this.onclickHandler=function(id,value,event)
      {

      }
         init();

     return this;
  }