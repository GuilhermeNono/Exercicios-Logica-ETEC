var custoFabrica = parseFloat(prompt("Informe o custo de fabrica do veiculo: "))

var custoConsumidor = (custoFabrica * 0.45) + (custoFabrica * 0.25) + custoFabrica

alert(`O valor final do automovel é de ${custoConsumidor}`)