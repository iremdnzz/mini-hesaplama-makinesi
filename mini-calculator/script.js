let result;
let num1;
let num2;

function numbers() {
  num1 = parseFloat(document.querySelector("#number1").value);
  num2 = parseFloat(document.querySelector("#number2").value);
}
function sum() {
  numbers();
  result = num1 + num2;
  let resultInput = document.querySelector("#showResult");
  resultInput.value = result.toString();
}
function subs() {
  numbers();
  result = num1 - num2;
  let resultInput = document.querySelector("#showResult");
  resultInput.value = result.toString();
}
function div() {
  numbers();
  result = num1 / num2;
  let resultInput = document.querySelector("#showResult");
  resultInput.value = result.toString();
}
function mult() {
  numbers();
  result = num1 * num2;
  let resultInput = document.querySelector("#showResult");
  resultInput.value = result.toString();
}
