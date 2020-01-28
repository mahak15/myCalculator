//Button module to set button variables.
function Button(){

var _color;
var _size;
var _label;

//to achive abstraction for system variable getter and setter are define here.

Object.defineProperties(this,{

    "color":{
        get:function()
        {
            return _color;
        },
        set:function(value)
        {
            _color=value;
        }
    },
    "size":{
          get:function()
        {
            return _size;
        },
        set: function(value)
        {
            _size=value;
        }
    },
    "label":{
        get:function()
        {
            return _label;
        },
        set: function(value)
        {
            _label=value;
        }

    }
           
});

}
