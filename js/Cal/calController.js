/*var d={height:"100em",length:"200em"};
var display=displayControl(d);

document.body.appendChild(display);
*/



//creating object to get button of specific typeand add button on screen,using call by refrence method.
var b={color:"red",size:'50' ,label:"C"};     
var bt = buttonControl(b);  

//add specific button model on Html page.   
document.body.appendChild(bt);  



var b={color:"red",size:'50' ,label:"AC"};
var bt = buttonControl(b);
document.body.appendChild(bt);

var b={color:"red",size:50  ,label:"ON/OFF"};
var bt = buttonControl(b);
document.body.appendChild(bt);


//for creating 9 similar button using loop.

for (var i = 1; i <10; i++) {                   
    var n={color:'blue',size:30,label:i,type:'numeric'};
    var nbt=numericControl (n);              
    document.body.appendChild(nbt);
    }

    //using array literal creating 4 similar button .

var op=['+','-','*','/'];
for(var j=0;j<4;j++)
{
var o={color:'green',size:100,label:op[j],type:'operational'};
var obt= operationContol(o);
document.body.appendChild(obt);
}
  
    

 


