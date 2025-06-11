function gerarTabuada() {
    let number = parseInt(document.getElementById("inputNumber").value);
    let string = "";
    for (let i = 1; i <= 10; i++) {
        string = string + `${number} x ${i} = ${number * i}<br>`;
    }
    document.getElementById("result").innerHTML = string;
}