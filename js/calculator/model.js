var CalculatorModel=function(id,options) {

    this.options = {
        height:"100",
        width:"100",
        operatorButtons:["+","-","*","/","="],
        numberButtons: ['7','8','9','4','5','6','1','2','3','.','0','+/-'],
        generalButtons:["%","CE","C"]
    }
    this.id=id;
}