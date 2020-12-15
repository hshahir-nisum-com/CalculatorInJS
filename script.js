
function cal(num){
    Calculator.displayScreen.value = Calculator.displayScreen.value +num;
}
function equalFunc(){
 var exp = Calculator.displayScreen.value;
 if(exp)
        Calculator.screen.value = eval(exp) 
}
function clearScreen(){
    Calculator.displayScreen.value = null;
}


var numberList = {
    "12" : ["button","num leftBracket","leftBracket","(","btn("],
    "11" : ["button","num rightBracket","rightBracket",")" , "btn)"],
    "10" : ["button","num rightBracket","cancel","CE" , "btn)"],
    "9" : ["button","num","nine","9" , "btn9"],
    "8" : ["button","num","eight","8" , "btn8"],
    "7" : ["button","num","seven","7" , "btn7"],
    "6" : ["button","num","six","6" , "btn6"],
    "5" : ["button","num","five","5" , "btn5"],
    "4" : ["button","num","four","4" , "btn4"],
    "3" : ["button","num","three","3" , "btn3"],
    "2" : ["button","num","two","2" , "btn2"],
    "1" : ["button","num","one","1" , "btn1"],
    "0" : ["button","num","zero","0" , "btn0"],

}
count = 0
 for (key in numberList){
     count = count + 1
 }
console.log(count)
 for (i=0; i<count ; i++){
    div = document.createElement("div").className = "button"
    inputElement = document.createElement("input")
    
    
 }














var array = document.getElementsByClassName("button");
for( i=0; i< array.length; i++){
  //  console.log(array[i].childNodes[1].setAttribute("type", "button"))
} 

