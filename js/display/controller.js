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

    init();
    return this;
}

