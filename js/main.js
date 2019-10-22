

var valueTlr = document.querySelector('#Tlr');
var valueTrr = document.querySelector('#Trr');
var valueBlr = document.querySelector('#Blr');
var valueBrr = document.querySelector('#Brr');

var resultTlr = document.querySelector('.result-Tlr');
var resultTrr = document.querySelector('.result-Trr');
var resultBlr = document.querySelector('.result-Blr');
var resultBrr = document.querySelector('.result-Brr');

var inputs = document.querySelectorAll('.input');
var cube = document.querySelector('.cube');

function changeRadius() {
    resultTlr.innerHTML = valueTlr.value;
    resultTrr.innerHTML = valueTrr.value;
    resultBlr.innerHTML = valueBlr.value;
    resultBrr.innerHTML = valueBrr.value;
    
    cube.style.borderRadius = valueTlr.value + 'px ' + valueTrr.value + 'px ' + valueBrr.value + 'px ' + valueBlr.value + 'px ';
    
}

for(input of inputs) {
    input.addEventListener('input', changeRadius);
}

var btn = document.querySelector('#btn');
var endResult = document.querySelector('.show-result');

function showBorder() {
    endResult.innerHTML = valueTlr.value + 'px ' + valueTrr.value + 'px ' + valueBrr.value + 'px ' + valueBlr.value + 'px ';
}

btn.addEventListener('click', showBorder );