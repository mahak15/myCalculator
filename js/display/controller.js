
    var DisplayController=function(id,value,option)
    {
          var displayModel;
          var displayView;
          var init=function ()
       {
              displayModel=new DisplayModel(id,option);
              displayView=new DisplayView(displayModel);

       }
         this.getDisplay=function()
       {
                return this.displayView;
       }

            this.init();
            return this;
    }

