var NumberButtonController=function(id, value, options) {
   ButtonController.call(this, id, value, options);
}
NumberButtonController.prototype = Object.create(new ButtonController());
NumberButtonController.prototype.constructor = NumberButtonController;
