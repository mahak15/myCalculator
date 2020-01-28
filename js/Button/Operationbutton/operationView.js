function operationView(oc)
{
    
    var obutton=document.createElement("button");
    obutton.innerHTML=oc.label;
    obutton.color=oc.color;
    obutton.size=oc.size;
    

    return obutton;
}