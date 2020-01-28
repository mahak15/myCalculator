function displayView(dm)
{
    Object.defineProperties(this,{

        "height":
        {
            get:function()
            {
                return _height;
            },
            set:function(value)
            {
                _height=value;
            }
   
        },
       
   
        "lenght":
        {
              get:function()
               {
                     return _lenght;
   
               },
               srt:function(value)
               {
   
                   _length=value;
               }
   
        }
   
   
     });
     
   
   var domdisplay=document.createElement("display");

   domdisplay.style.height=dm.height;
   domdisplay.style.length=dm.length;

   return domdisplay;

}