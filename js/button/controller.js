

     var ButtonController = function (id, value, options)
     {
            var buttonModel;
            var buttonView;

             var init = function()
         {
            this.buttonModel = new ButtonModel(id, value, options);
            this.buttonView = new ButtonView(this.buttonModel);
         }
         //create onclick handler event on button.
        /*    this.buttonView.onclick = function(event)
             {
                this.onClickHandler(event, id, value);
            }
        }
             this.onClickHandler = function (event, id, value)
         {

         }*/
             this.getButtonElement=function(model)
         {
             return this.buttonView;
         }
            init();
            return this;   //return Object.
     }
