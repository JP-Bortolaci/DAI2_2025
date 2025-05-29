function gerarAtestado(){
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var cpf = document.getElementById("cpf").value;
    var school = document.getElementById("school").value;

    document.getElementById("atestado").innerHTML = `Atesto para os devidos fins que o(a) Sr(a) ${name}, residente e domiciliado(a) na ${address}, portador(a) do CPF nº${cpf} esteve participando de atividade na escola ${school} no dia de ontem.`;

    atestado.style.display = "block";
}

function reiniciar() {
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("school").value = "";

    const atestado = document.getElementById("atestado");
    atestado.style.display = "none";
}