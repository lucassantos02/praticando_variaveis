// Atividade 1 //
// let nomeCliente = prompt("Digite o nome do cliente");
// let valorLitro = 6.80;
// alert(`Valor do litro de gasolina R$06,80`)
// 
// let valorDaCompra = parseFloat(prompt("Qual a quantidade em dinheiro de gasolina deseja abastecer ?"));
// 
// let ltsGasolina = parseFloat(valorDaCompra / valorLitro);
// 
// alert(`O Cliente ${nomeCliente} abasteceu ${ltsGasolina}`);
// 
// let data = Date.now();
// let hoje = new Date(data).toUTCString();
// 
// alert(
// `${nomeCliente} - Valor da compra: ${valorDaCompra} - Quantidade: ${ltsGasolina}l - Data: ${hoje} `);

// Atividade 2 //
// let grausCelsius = parseInt(prompt("Qual valor em GRAUS CELSIUS ?"));
// let grausFahrenheit = parseFloat( (9 * grausCelsius + 160) / 5 );
// 
// alert(`O valor ${grausCelsius}ºc em Fahrenheit é ${grausFahrenheit}.`);

// Atividade 3 //
// let grausFahrenheit = parseFloat(prompt("Qual o valor em GRAUS FAHRENHEIT?"));
//let grausCelsius = parseFloat(((grausFahrenheit - 32) * 5) / 9);
//
// alert(`O valor ${grausFahrenheit}ºf em Celsius é ${grausCelsius}`);

//Atividade 4//
// let comprimento = parseInt(prompt("Qual o comprimento em cm da caixa?"));
// let altura = parseInt(prompt("Qual a altura da caixa em cm?"));
// let largura = parseInt(prompt("Qual a largura da caixa em cm?"));
// 
// let volume = parseInt(comprimento * largura * altura);
// 
// alert(`O volume da caixa é de: ${volume}cm3`);

// Atividade 5 //
// let numeroBase = parseInt(prompt("Qual o valor deseja elevar ao quadrado?"));
// let elevadoQuadrado = parseInt(numeroBase * numeroBase);
// 
// alert(`O valor ${numeroBase} ao quadrado é ${elevadoQuadrado}.`);

// Atividade 6 //
// let n1 = parseInt(prompt("Digite o primeiro número que deseja aqui..."));
// let n2 = parseInt(prompt("Digite o segundo número que deseja aqui..."));
// let n3 = parseInt(prompt("Digite o terceiro número que deseja aqui..."));
// let n4 = parseInt(prompt("Digite o quarto número que deseja aqui..."));
// let n5 = parseInt(prompt("Digite o quinto número que deseja aqui..."));
// 
// let somaTodosNumeros = parseInt(n1 + n2 + n3 + n4 + n5);
// 
// let media = parseInt((n1 + n2 + n3 + n4 + n5) / 5);
// 
// alert(`A soma dos números escolhidos foi ${somaTodosNumeros} e a média foi ${media}.`);

// Atividade 7 //
// let valor1 = parseInt(prompt("Digite o número a ser dividido..."));
// let valor2 = parseInt(prompt("Digite o valor que irá dividir o primeiro número..."));
// 
// let valorDivisao = parseFloat(valor1 / valor2);
// 
// alert(`O valor da divisão de ${valor1} por ${valor2} é: ${valorDivisao}.`);
// 
// let resto = parseInt(valor1 % valor2);
// 
// alert(`O resto da divisão de ${valor1} por ${valor2} é: ${resto}.`);

// Atividade 8 //
// let texto = (prompt("Escreva aqui o texto desejado..."));
// let quantidade = texto.length;
//
// alert(`O texto inserido tem ${quantidade} carateres.`);

// Atividade 9 //
// let text = (prompt("Insira aqui o texto desejado..."));
// 
//let primeiraLetra = text[0];
//let ultimaLetra = text.slice(-1);
// 
// alert(`A primeira letra de ${text} é ${primeiraLetra} e a última letra é ${ultimaLetra}.`);

// Atividade //
// let nome = (prompt("Digite aqui seu nome..."));
// let sobrenome = (prompt("Digite aqui seu sobrenome..."));
// let idade = parseInt(prompt("Digite aqui sua idade..."));
// let setor = (prompt("Digite aqui seu setor..."));
// let cracha = (`nome: ${nome} ${sobrenome} - idade: ${idade} - setor: ${setor}`);
//
// alert(`${cracha}`);