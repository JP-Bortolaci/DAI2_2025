var nome = "Vagner"; // Javascript é case sensitive, ou seja, diferencia maiúsculas de minúsculas.
var estadoCivil = "casado";
var idade = 45;
var nomeCompleto = "Vagner Afonso Thales";

console.log(nome);
// console.log(Nome);
// console.log(NOME);
console.log(nomeCompleto);

// alert(nomeCompleto); // outra forma de saída de dados.
// document.write(nomeCompleto); // outra forma de saída de dados.
document.getElementById("p1").innerHTML = "Olá " + nome + ", tudo bem?";
// document.getElementById("p2").innerHTML = `Olá ${nome}, tudo bem?`; // template string.
// document.getElementById("p2").innerHTML = "Eu " + nome + ", " + estadoCivil + ", " + idade + " anos de idade"; 
document.getElementById("p2").innerHTML = `Eu ${nome}, ${estadoCivil}, ${idade} anos de idade`; // template string.
