

     var ButtonController = function (id, value, options) {
        var init = function() {
            this.btnModel = new ButtonModel(id, value, options);
            this.btnView = new ButtonView(this.btnModel);

            this.btnView.onclick = function(event) {
                this.onClickHandler(event, id, value);
            }
        }
        this.onClickHandler = function (event, id, value) {


        }
        init();
        return this;//return Object.
     }
