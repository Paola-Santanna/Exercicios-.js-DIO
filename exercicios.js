console.log('\nLista de Exercícios\n');

/*
	1) Faça um algorítmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade,
	calcule e imprima a sua média e a sua classificação, conforme a tabela abaixo.
	
	Média = (nota_1 + nota_2 + nota_3) / 3;
	
		Classificação:
		- Média menor que 5, reprovação;
		- Média entre 5 e 7, recuperação
		- Média acima de 7, passou de semestre;
	
	---------------------------------------------------------------xxxxxxxxxx---------------------------------------------------------------
	2) O IMC - Índice de Massa Corporal, é um critério da Organzação Mundial de Saúde para dar uma indicação sobre a condição de peso 
	de uma pessoa adulta.
	
	Fórmula do IMC:
	IMC = peso / (altura*altura)
	
	Elabore um algorítmo que dado o peso e a altura de um adulto, mostre sua condição, de acordo com a tabela abaixo.
	
	IMC em adultos - Condição:
	- Abaixo de 18.5 - Abixo do peso;
	- Entre 18.5 e 25 - Peso normal;
	- Entre 25 e 30 - Acima do peso;
	- Entre 30 e 40 - Obeso;
	- Acima de 40 - Obesidade Grave;
	
	---------------------------------------------------------------xxxxxxxxxx---------------------------------------------------------------
	3) Elabore um algorítmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição
	de pagamento.
	Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
	
	Código - Condição de pagamento:
	- À vista - Débito, recebe 10% de desconto;
	- À vista no Dinheiro ou PIX, recebe 15% de desconto;
	- Em duas vezes, preço normal de etiqueta sem juros;
	- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

//Começo do Primeiro Exerício
console.log('------------------xxx------------------');
console.log('Média de Notas');
let nota1 = 5;
let nota2 = 5;
let nota3 = 5;

let media = (nota1+nota2+nota3)/3;

if (media<5) {
	console.log('A média final é: ', media);
	console.log('Reprovado!\n');
} else if (media>=5 && media<=7) {
	console.log('A média final é: ', media);
	console.log('Recuperação!\n');
} else {
	console.log('A média final é: ', media);
	console.log('Passou de Semestre!\n');
}
// Fim do primeiro exercício

//Começo do Segundo Exercício
console.log('------------------xxx------------------');
console.log('Calculadora de IMC');
let altura_metros = 1.67;
let peso_kg = 51;

let imc = peso_kg/(altura_metros*altura_metros);

if (imc<18.5){
	console.log('O IMC é de: ',imc.toFixed(2),'Kg/m');
	console.log('Abaixo do Peso!\n');
} else if (imc>=18.5 && imc<25) {
	console.log('O IMC é de: ',imc.toFixed(2),'Kg/m');
	console.log('Peso Normal!\n');
} else if (imc>=25 && imc<30) {
	console.log('O IMC é de: ',imc.toFixed(2),'Kg/m');
	console.log('Acima do Peso!\n');
} else if (imc>=30 && imc<40) {
	console.log('O IMC é de: ',imc.toFixed(2),'Kg/m');
	console.log('Obeso!\n');
} else {
	console.log('O IMC é de: ',imc.toFixed(2),'Kg/m');
	console.log('Obesidade Grave!\n');
}
// Fim do Segundo Exercício

//Começo do Terceiro Exercício
console.log('------------------xxx------------------');
console.log('Pagamento de um produto\n');

let preco_produto = 1730.90;
let forma_de_pagamento = 'Dinheiro';

console.log('\tFormas de Pagamento:');
console.log('\tÀ vista - Débito, recebe 10% de desconto');
console.log('\tÀ vista no Dinheiro ou PIX, recebe 15% de desconto');
console.log('\tEm duas vezes, preço normal de etiqueta sem juros');
console.log('\tAcima de duas vezes, preço normal de etiqueta mais juros de 10%\n');

let debito = preco_produto - (preco_produto*10/100);
let dinheiro_ou_pix = preco_produto - (preco_produto*15/100);
let duas_vezes = preco_produto/2;
let mais_de_duas_vezes = preco_produto + (preco_produto*10/100);

if (forma_de_pagamento === 'Debito') {
	console.log('Forma de Pagamento: ', forma_de_pagamento);
	console.log('Desconto de 10%');
	console.log('Preço inicial: R$', preco_produto);
	console.log('Preço final: R$', debito.toFixed(2));
} else if (forma_de_pagamento === 'Dinheiro' || forma_de_pagamento === 'Pix') {
	console.log('Forma de Pagamento: ', forma_de_pagamento);
	console.log('Desconto de 15%');
	console.log('Preço inicial: R$', preco_produto);
	console.log('Preço final: R$', dinheiro_ou_pix.toFixed(2));
} else if (forma_de_pagamento === 'Duas Vezes') {
	console.log('Forma de Pagamento: ', forma_de_pagamento);
	console.log('Sem Juros');
	console.log('Preço inicial: R$', preco_produto);
	console.log('Preço final: Duas Parcelas de R$', duas_vezes.toFixed(2));
} else if (forma_de_pagamento === 'Mais de duas vezes') {
	console.log('Forma de Pagamento: ', forma_de_pagamento);
	console.log('Juros de 10%');
	console.log('Preço inicial: R$', preco_produto);
	console.log('Preço final: R$', mais_de_duas_vezes.toFixed(2));
}

// Fim do Terceiro Exercício

console.log('\nFim do Programa');
