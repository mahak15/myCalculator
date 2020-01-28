function OperationButton()
{
    var _type;
    Object.defineProperties(this,{
        "type":{
            get:function()
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

OperationButton.prototype=new Button();
OperationButton.prototype.constructor=OperationButton;
