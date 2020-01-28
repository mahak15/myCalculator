function buttonView(bm)
{
  var dombutton= document.createElement("button");   //creating DOM object for button.

  dombutton.innerHTML=bm.label;    //use innerHTML for labrl to show on html button on screen.

  dombutton.style.color=bm.color; //to set a color in DOM object variable.

  dombutton.style.size=bm.size;
  return dombutton; //return DOM object in button controller.
}