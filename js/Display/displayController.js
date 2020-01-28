function displayControl(cc)
{

  var dm= new Display();
  dm.height=cc.height;
  dm.length=cc.length;
  
  dmelement= displayView(dm);
  return dmelement;

}