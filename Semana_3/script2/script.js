
// Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.


const students = [
  {
    name:"Luiza",
    firstTest: 7,
    secondTest: 7,
  },
  {
    name:"Fernanda",
    firstTest: 8,
    secondTest: 10,
  },
  {
    name:"Carlos",
    firstTest: 3,
    secondTest: 9,
  },
  {
    name:"Fabio",
    firstTest: 5.5,
    secondTest: 7.2,
  },
  {
    name:"Mariana",
    firstTest: 4.5,
    secondTest: 9.4,
  }
]

function mean(student){
  for (let index = 0; index < student.length; index++){
    const result = (student[index].firstTest + student[index].secondTest) / 2;

    if(result >= 7){
      alert(`Parabens ${student[index].name} você foi aprovado(a) com nota ${result.toFixed(2)}`);
    }else{
      alert(`${student[index].name} você precisa estudar um pouco mais sua nota foi ${result.toFixed(2)}`);
    }
  }
}

mean(students);