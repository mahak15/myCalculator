var DisplayController=function(id, value, option){
    var displayModel;
    var displayView;

    var init = function () {
        displayModel = new DisplayModel(id, option);
        displayView = new DisplayView(displayModel);
    }
    this.getDisplayElement = function() {
        return displayView;
    }

   this.getExpression = function(){
     return displayModel.expression;
   }

   this.setExpression = function(value){
        displayModel.expression = value;
        console.log (displayView);
        displayView.innerHTML = displayModel.expression;
   }

   this.addToExpression = function(value){
        displayModel.expression = displayModel.expression+value;
        console.log (displayView);
        displayView.innerHTML = displayModel.expression;
    }
    init();
    return this;
}

