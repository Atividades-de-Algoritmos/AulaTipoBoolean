 //autores:
// Islan Pereira de Oliveira
// Michel Silva

// Data: 03/09/2022

//Comprovando que o true equivale a 1 no Javascript

// "===" comparação complexa
// "==" comparação dinâmica, onde observa somente o valor
// "=" atribuição de variável

// operação condicional
// A diferença entre == e ===

// == converte os valores da variável para o mesmo tipo antes de realizar a comparação. Isso é chamado de coerção de tipo .

// não faz nenhuma conversão de tipo (coerção) e retorna true somente se ambos os valores e tipos forem idênticos para as duas variáveis que estão sendo comparadas.


let num1 = 5;                         //Observe que o tipo da variável é number.
let num2 = '5';                       //Observe que o tipo da variável é string.
let acumulador1 = (num1 == num2);     //Aqui vai ser um boolean, na qual estamos usando o "==" para comparar os valores das variáveis
let acumulador2 = (acumulador1 + 0);    //como o JavaScript é dinâmico, apenas o número 5 será observado, tornando assim acumulador1 true.
                                      //O acumulador2 vai ser a soma do acumulador1 + 0, tornando assim o acumulador2 em number.

console.log(acumulador1);             //Aqui veremos que o acumulador1 é true.
console.log(typeof(acumulador1));      //Aqui veremos o tipo do acumulador1, que no caso é boolean.
console.log(acumulador2);             //Aqui veremos a mágica acontecer, pois um número somado a 0 resulta nele mesmo, comprovando assim que o true é igual a 1.
console.log(typeof(acumulador2));      //Aqui veremos o acumulador2 se tornando number, após a soma com 0.


//Comprovando que o false equivale a 0 no Javascript

let numero1 = 5;                      //Observe que o tipo da variável é number.
let numero2 = '5';                    //Observe que o tipo da variável é string.
let receber1 = (numero1 === numero2); //Aqui vai ser um boolean, na qual estamos usando o "===" para comparar os valores das variáveis, onde retornará false.
let receber2 = receber1 + 0;          //O receber2 vai ser a soma do receber1 + 0, tornando assim o receber2 em number.

console.log(receber1);                //Aqui veremos que o receber1 é true.
console.log(typeof(receber1));         //Aqui veremos o tipo do receber1, que no caso é boolean.
console.log(receber2);                //Aqui veremos a mágica acontecer, pois um número somado a 0 resulta nele mesmo, comprovando assim que o false é igual a 0.  
console.log(typeof(receber2));         //Aqui veremos o receber2 se tornando number, após a soma com 0.