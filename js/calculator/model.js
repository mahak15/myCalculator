var CalculatorModel=function(id,options) {

    this.options = {
        height:"80",
        width:"80",
        operatorButtons:['+','-','*','/','%'],
        numberButtons: ['1','2','3','4','5','6','7','8','9','0'],
        generalButtons:['C','ON/OFF','=','.']
    }
    this.id=id;
}