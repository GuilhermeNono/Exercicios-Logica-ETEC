var nomeVendedor = prompt("Informe o nome do vendedor: ")
var salarioFixo = parseFloat(prompt("Informe seu salario fixo: "))
var totalVendas = parseInt(prompt("Informe o total de vendas em dinheiro: "))

var comissaoFinal = (totalVendas * 0.15) + salarioFixo;

alert(`A comissão final do vendedor ${nomeVendedor}, é de ${comissaoFinal}`);
