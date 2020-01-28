function Numericbutton() // to create numeric button constructor is define here.
{
    var _type;
    Object.defineProperties(this,{     //add new property name type in main button class.

        "type":
       {
        get: function()
        {
            return _type;
        },
        set:function(value)
        {
            _type=value;
        }
       }
    });


};

Numericbutton.prototype=new Button();  //To inherit all the property of button class.
Numericbutton.prototype.constructor=Numericbutton;//to call the numericbutton constructor using Button object.