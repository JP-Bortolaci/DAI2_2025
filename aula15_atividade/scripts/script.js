function sum(){
    let n1 = parseInt(document.getElementById("firstNum").value);
    let n2 = parseInt(document.getElementById("secondNum").value);

    result = n1 + n2;

    if (result > 10){
        document.getElementById("result").textContent = `O resultado ${result} é MAIOR do que 10`;
    } else if (result == 10){
        document.getElementById("result").textContent = `O resultado ${result} é IGUAL a que 10`;
    } else {
        document.getElementById("result").textContent = `O resultado ${result} é MENOR do que 10`;
    }
}

function subtraction(){
    let n1 = parseInt(document.getElementById("firstNum").value);
    let n2 = parseInt(document.getElementById("secondNum").value);

    result = n1 - n2;

    if (result > 10){
        document.getElementById("result").textContent = `O resultado ${result} é MAIOR do que 10`;
    } else if (result == 10){
        document.getElementById("result").textContent = `O resultado ${result} é IGUAL a que 10`;
    } else {
        document.getElementById("result").textContent = `O resultado ${result} é MENOR do que 10`;
    }
}

function division(){
    let n1 = parseInt(document.getElementById("firstNum").value);
    let n2 = parseInt(document.getElementById("secondNum").value);

    result = n1 / n2;

    if (result > 10){
        document.getElementById("result").textContent = `O resultado ${result} é MAIOR do que 10`;
    } else if (result == 10){
        document.getElementById("result").textContent = `O resultado ${result} é IGUAL a que 10`;
    } else {
        document.getElementById("result").textContent = `O resultado ${result} é MENOR do que 10`;
    }
}

function multiplication(){
    let n1 = parseInt(document.getElementById("firstNum").value);
    let n2 = parseInt(document.getElementById("secondNum").value);

    result = n1 * n2;

    if (result > 10){
        document.getElementById("result").textContent = `O resultado ${result} é MAIOR do que 10`;
    } else if (result == 10){
        document.getElementById("result").textContent = `O resultado ${result} é IGUAL a que 10`;
    } else {
        document.getElementById("result").textContent = `O resultado ${result} é MENOR do que 10`;
    }
}