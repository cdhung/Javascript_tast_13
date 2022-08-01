var wellcome = 'Hello Molly, please check your order:';
var sign = 'Montague House';
var signLength = sign.length;
var subTotal = signLength * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var elWellcome = document.getElementById('greeting');
elWellcome.textContent = wellcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elSignLength = document.getElementById('tiles');
elSignLength.textContent = signLength;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
