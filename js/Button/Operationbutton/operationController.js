function operationContol(cc)
{
  
  var oc=new OperationButton();
  oc.color=cc.color;
  oc.size=cc.size;
  oc.label=cc.label;

  var obutton=operationView(oc);
  return obutton;


}