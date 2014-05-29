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
  if(xInput.length >= 0 && isNaN(xInput) || isNaN(y.value) || xInput % 1 !== 0 || y.value % 1 !== 0){
    x.setAttribute("class", "error");
    msg.innerHTML = "Must be integer";
    answer.innerHTML = answer2.innerHTML = 'Z';
  } else {
    x.className = '';
    msg.innerHTML ='';
  }
}

function yOut(input){
  var yInput = input.value;
  document.getElementById('yOutSpan').innerHTML = document.getElementById('yOutSpan2').innerHTML = yInput;

  if(yInput.length <= 0) {
    document.getElementById('yOutSpan').innerHTML = document.getElementById('yOutSpan2').innerHTML = 'Y';
  }
  if(yInput.length >= 0 && isNaN(yInput) || isNaN(x.value) || yInput % 1 !== 0 || x.value % 1 !== 0) {
    y.setAttribute("class", "error");
    msg.innerHTML = "Must be integer";
    answer.innerHTML = answer2.innerHTML = 'Z';
  } else {
    y.className = '';
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
