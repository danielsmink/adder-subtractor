//Initialize some default variables
var x = document.getElementById('xInput'),
    y = document.getElementById('yInput'),
    msg = document.getElementById('msg'),
    result1 = document.getElementById('result1'),
    result2 = document.getElementById('result2');

function xOut(input){
    xInput = input.value;
    
    //Set value of X in the sum to input X
    document.getElementById('sum1X').innerHTML = document.getElementById('sum2X').innerHTML = xInput;
    
    //If length of the input is less than 0 e.g. nothing set the value back to X
    if(xInput.length <= 0) {
        document.getElementById('sum1X').innerHTML = document.getElementById('sum2X').innerHTML = 'X';
    }
    
    //Validate input
    validate(xInput, x);
}

function yOut(input){
    yInput = input.value;
    
    //Set value of Y in the sum to input Y
    document.getElementById('sum1Y').innerHTML = document.getElementById('sum2Y').innerHTML = yInput;
    
    //If length of the input is less than 0 e.g. nothing set the value back to Y
    if(yInput.length <= 0) {
        document.getElementById('sum1Y').innerHTML = document.getElementById('sum2Y').innerHTML = 'Y';
    }
    
    //Validate input
    validate(yInput, y);
}

//Validate function takes input value and the element the input came from
function validate(input, element){
    var element1 = element,
        input1 = input,
        element2,
        input2;
  
    if(element1.id == 'xInput') {
        element2 = y;
        input2 = y.value;
    } else {
    element2 = x;
        input2 = x.value;
    }
    
    if(input1.length >= 0 && isNaN(input1) || input1 % 1 !== 0 || isNaN(input2) || input2 % 1 !== 0) {  
        element1.setAttribute("class", "error");
        msg.innerHTML = "The value must be an integer.";
    
        result1.innerHTML = result2.innerHTML = 'Z';
    } else {
        element1.className = element2.className = '';
        msg.innerHTML ='';
    }
}

//Calculations and results
function calc(){
    
    //Initially set the input values to false
    var xInput = false,
        yInput = false;
        
    if(x.className != 'error') {
        xInput = x.value;
    }
    if(y.className != 'error') {
        yInput = y.value;
    }
    
    if(xInput && yInput){
        result1.innerHTML = parseInt(xInput) + parseInt(yInput);
        result2.innerHTML = parseInt(xInput) - parseInt(yInput);
    } else {
        result1.innerHTML = result2.innerHTML = 'Z';
    }
}
