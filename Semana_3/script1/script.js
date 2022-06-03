// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

// - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.


const firstNumber = Number(prompt("Digite seu primeiro número"));
const secondNumber = Number(prompt("Digite seu segundo número"));

let sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = (firstNumber / secondNumber).toFixed(2);
const rest = firstNumber % secondNumber;

alert(`A soma dos números foi de: ${sum}`);
alert(`A subtração dos números foi de: ${sub}`);
alert(`A multiplicação dos números foi de: ${mult}`);
alert(`A divisão dos números foi de: ${div}`);
alert(`O resto da divisão dos números foi de: ${rest}`);



function isPair(numberOne, numberTwo){
  const value = (numberOne + numberTwo);

  if(value % 2 == 0){
    alert(`A soma dos numeros é par: ${value}`);
    
  }
  else{
    alert(`Soma dos numeros é impar: ${value}`);
  }
  
}

function isEquals(numberOne, numberTwo){
  if(numberOne == numberTwo){
    alert("Os numeros são iguais");
  }
  else{
    alert("Os numeros não são iguais");
  }
}

isPair(firstNumber,secondNumber);
isEquals(firstNumber,secondNumber);