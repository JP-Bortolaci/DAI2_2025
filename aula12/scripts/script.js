function pegarDados(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var profession = document.getElementById("profession").value;

    document.getElementById("result").innerText = `Seu nome é ${name}, você tem ${age} anos e sua profissão é ${profession}`;
}