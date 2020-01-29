
    var NumericButtonController=function(id,value,options)
  {
    this.numericBtnModel=new numericButtonModel();
    this.numericBtnView=new numericButtonView(numericBtnModel);

     this.numericBtnView.onclick=function(event)
     {
       this.onclickHandler(id,value,event);
     }
     this.onclickHandler(id,value,event)
     {

     }
     init();
     return this;
  }