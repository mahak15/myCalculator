    var DisplayView=function(model)
 {
 var displayElement;
       var init=function() {
       createDisplayElement();
    }

      var  createDisplayElement=function() {
         displayElement=document.createElement("div");
         displayElement.setAttribute('class','display');
         displayElement.id=model.id;
         displayElement.style.height=model.option.height;
         displayElement.style.width=model.option.width;

   }
    init();
    return displayElement;
 }