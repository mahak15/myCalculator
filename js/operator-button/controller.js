
    var OperatorButtonController=function(id,value,options)
  {
     var operatorButtonView;
     var operatorButtonModel;

  var init=function()
  {

       this.operatorButtonModel=new operatorButtonModel();
       this.operatorButtonView=new operatorButtonView(operatorButtonModel);

  }

          this.getOperatorButtonElement=function()
        {
           return this.operatorButtonView;

        }
         /*  this.operatorButtonView.onclick=function(event)
     {
       this.onclickHandler(id,value,event);

     }
     this.onclickHandler(id,value,event)
     {

     }*/
         init();

     return this;
  }