    var DisplayView=function(model)
 {
       this.init=function()
    {
       this.createDisplayElement();
    }

        this.createDisplayElement()
   {
     this.displayElement=document.createDisplayElement("text");
     this.displayElement.id=model.id;
     this.displayElement.style.width=model.width;
     this.displayElement.style.height=model.height;

   }
   init();

   return displayElement;


 }