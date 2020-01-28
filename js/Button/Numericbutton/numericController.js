function numericControl (cc)
{
    var nc = new Numericbutton();
    nc.color=cc.color;
    nc.size=cc.size;
    nc.label=cc.label;
    var nbutton=numericView(nc);
    return nbutton;

};