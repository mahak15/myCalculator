    var DisplayView=function(model)
 {
       this.init=function()
    {
       this.createDisplayElement();
    }

        this.createDisplayElement()
   {
     this.displayElement=document.createDisplayElement("input");
     this.displayElement.setAttribute("type",'text');
     this.displayElement.id=model.id;
     this.displayElement.style.height=model.option.height;
     this.displayElement.style.width=model.option.width;

   }
        this.init();
        return displayElement;


 }