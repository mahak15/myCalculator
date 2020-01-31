var OperatorButtonModel=function(id, value, options) {
    ButtonModel.call(this, id, value, options);
}

OperatorButtonModel.prototype = Object.create(new ButtonModel());
OperatorButtonModel.prototype.constructor = OperatorButtonModel;