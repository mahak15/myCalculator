function buttonControl(cc)
{
    var bm=new Button(); //create a new object of button model.
    bm.color=cc.color;
    bm.size=cc.size;
    bm.label=cc.label;

    bmElement=buttonView(bm);//sending object in buttonview constructor.
    return bmElement;//return Object.
}
