var valorDolar = parseFloat(prompt("Informe a quantia em dolar: "));
var cotacaoDolar = parseFloat(prompt("Informe a cotação atual do dolar: "))

var valorReal = valorDolar * cotacaoDolar;

alert(`O valor convertido é de R$${valorReal}`)