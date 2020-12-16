function cal(num){
    console.log(num)
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


let numberList ={
    "(": {
        "class" : "num leftBracket",
        "id" : "leftBracket",
        "value" : "(",
        "name" : "btn("
        
    },
    ")": {
        "class" : "num rightBracket",
        "id" : "rightBracket",
        "value" : ")",
        "name" : "btn)"
        
    },
    "CE": {
        "class" : "num rightBracket",
        "id" : "cancel",
        "value" : "CE",
        "name" : "btn)",
    },
    "9": {
        "class" : "num",
        "id" : "nine",
        "value" : "9",
        "name" : "btn9)"
        
    },
    "8": {
        "class" : "num",
        "id" : "eight",
        "value" : "8",
        "name" : "btn8)"
        
    },
    "7": {
        "class" : "num",
        "id" : "seven",
        "value" : "7",
        "name" : "btn7)"
        
    },
    "6": {
        "class" : "num",
        "id" : "six",
        "value" : "6",
        "name" : "btn6)"
        
    },
    "5": {
        "class" : "num",
        "id" : "five",
        "value" : "5",
        "name" : "btn5)"
        
    },
    "4": {
        "class" : "num",
        "id" : "four",
        "value" : "4",
        "name" : "btn4)"
        
    },
    "3": {
        "class" : "num",
        "id" : "three",
        "value" : "3",
        "name" : "btn3)"
        
    },
    "2": {
        "class" : "num",
        "id" : "two",
        "value" : "2",
        "name" : "btn2)"
        
    },
    "1": {
        "class" : "num",
        "id" : "one",
        "value" : "1",
        "name" : "btn1)"
        
    },
    "0": {
        "class" : "num ",
        "id" : "zero",
        "value" : "0",
        "name" : "btn0)"
        
    },
   
    ".": {
        "class" : "num",
        "id" : "dot",
        "value" : ".",
        "name" : "btnDot)"
        
    },
    "%": {
        "class" : "num",
        "id" : "percent",
        "value" : "%",
        "name" : "btn1)"
        
    }
}

for (key in numberList){

    div = document.createElement("div")
    div.className =  "button"

    inputElement = document.createElement("input")
    inputElement.setAttribute("type","button")
    inputElement.className = numberList[key]["class"]
    inputElement.id = numberList[key]["id"]
    inputElement.setAttribute("value",numberList[key]["value"])
    inputElement.setAttribute("name",numberList[key]["name"])
    inputElement.addEventListener('click',(e)=>{ 
        if ( e.target.id === 'cancel'){
            clearScreen()
        }
        else{
            console.log(e.target.id)
            cal(e.target.value)
        }

    })

    div.appendChild(inputElement)

    mainDiv = document.getElementById("key").appendChild(div)
    
}


let controls = {
    "/": {
        "class" : "num1 divide",
        "id" : "division",
        "value" : "/",
        "name" : "dividBtn"
    },
    "*": {
        "class" : "num1 multiply",
        "id" : "multiplication",
        "value" : "*",
        "name" : "multiplyBtn"
    },
    "+": {
        "class" : "num1 plus",
        "id" : "add",
        "value" : "+",
        "name" : "addBtn"
    },
    "-": {
        "class" : "num1 minus",
        "id" : "sub",
        "value" : "-",
        "name" : "minusBtn"
    },
    "=": {
        "class" : "num1",
        "id" : "sol",
        "value" : "=",
        "name" : "equal"
    },
}


for (key in controls){

    div = document.createElement("div")
    div.className =  "button1"

    inputElement = document.createElement("input")
    inputElement.setAttribute("type","button")
    inputElement.className = controls[key]["class"]
    inputElement.id = controls[key]["id"]
    inputElement.setAttribute("value",controls[key]["value"])
    inputElement.setAttribute("name",controls[key]["name"])
    inputElement.addEventListener('click',(e)=>{ 
            if ( e.target.id === 'sol'){
                equalFunc()
            }
            else{
                console.log(e.target.id)
                cal(e.target.value)
            }

        })
    div.appendChild(inputElement)

    mainDiv = document.getElementById("controls").appendChild(div)
    
}
