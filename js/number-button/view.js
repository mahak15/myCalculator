var NumberButtonView = function(model) {
 ButtonView.call (this, model);
}
NumberButtonView.prototype = Object.create(new ButtonView());
NumberButtonView.prototype.constructor = NumberButtonView;