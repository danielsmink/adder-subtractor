var x = document.getElementById('xInput');
var y = document.getElementById('yInput');
var msg = document.getElementById('msg');
var plusMinus = document.getElementById('plusMinus');
var answer = document.getElementById('result');
var answer2 = document.getElementById('result2');

function xOut(input){
  var xInput = input.value;
  document.getElementById('xOutSpan').innerHTML = document.getElementById('xOutSpan2').innerHTML = xInput;

  if(xInput.length <= 0) {
    document.getElementById('xOutSpan').innerHTML = document.getElementById('xOutSpan2').innerHTML = 'X';
  }
  validate(xInput, x);
}

function yOut(input){
  var yInput = input.value;
  document.getElementById('yOutSpan').innerHTML = document.getElementById('yOutSpan2').innerHTML = yInput;

  if(yInput.length <= 0) {
    document.getElementById('yOutSpan').innerHTML = document.getElementById('yOutSpan2').innerHTML = 'Y';
  }
  validate(yInput, y);
}

function validate(input, element){
  if(input.length >= 0 && isNaN(input) || input % 1 !== 0) {  
    element.setAttribute("class", "error");
    msg.innerHTML = "The value must be an integer.";
    answer.innerHTML = answer2.innerHTML = 'Z';
  } else {
    element.className = '';
    msg.innerHTML ='';
  }
}

function calc(){
  var xInput = x.value;
  var yInput = y.value;

  if(xInput && yInput){
    answer.innerHTML = parseInt(xInput) + parseInt(yInput);
    answer2.innerHTML = parseInt(xInput) - parseInt(yInput);
  } else {
    answer.innerHTML = answer2.innerHTML = 'Z';
  }
}
