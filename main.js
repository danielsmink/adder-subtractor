var x = document.getElementById('xInput');
var y = document.getElementById('yInput');
var msg = document.getElementById('msg');
var result = document.getElementById('result');
var result2 = document.getElementById('result2');

function xOut(input){
  var xInput = input.value;
  document.getElementById('sum1X').innerHTML = document.getElementById('sum2X').innerHTML = xInput;

  if(xInput.length <= 0) {
    document.getElementById('sum1X').innerHTML = document.getElementById('sum2X').innerHTML = 'X';
  }
  validate(xInput, x);
}

function yOut(input){
  var yInput = input.value;
  document.getElementById('sum1Y').innerHTML = document.getElementById('sum2Y').innerHTML = yInput;

  if(yInput.length <= 0) {
    document.getElementById('sum1Y').innerHTML = document.getElementById('sum2Y').innerHTML = 'Y';
  }
  validate(yInput, y);
}

function validate(input, element){
  if(input.length >= 0 && isNaN(input) || input % 1 !== 0) {  
    element.setAttribute("class", "error");
    msg.innerHTML = "The value must be an integer.";
    result.innerHTML = result2.innerHTML = 'Z';
  } else {
    element.className = '';
    msg.innerHTML ='';
  }
}

function calc(){
  var xInput = x.value;
  var yInput = y.value;

  if(xInput && yInput){
    result.innerHTML = parseInt(xInput) + parseInt(yInput);
    result2.innerHTML = parseInt(xInput) - parseInt(yInput);
  } else {
    result.innerHTML = result2.innerHTML = 'Z';
  }
}
