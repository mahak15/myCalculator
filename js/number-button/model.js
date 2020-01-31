var NumberButtonModel=function(id, value, options) {
    ButtonModel.call(this, id, value, options);
}

NumberButtonModel.prototype = Object.create(new ButtonModel());
NumberButtonModel.prototype.constructor = NumberButtonModel;