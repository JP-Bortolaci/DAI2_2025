// function withdrawMoney() {
//     document.getElementById("result").innerHTML = "";
//     let notas = [200, 100, 50, 20, 10, 5, 2, 1];
//     let money = parseInt(document.getElementById("withdraw").value);
//     if (!isNaN(money)) {
//         let notasUsadas = [];
//         while (money != 0) {
//             for (let i = 0; i < notas.length; i++) {
//                 if(notas[i] <= money) {
//                     money -= notas[i];
//                     notasUsadas.push(notas[i]);
//                     break;
//                 }
//             }
            
//         }
    
//         for (let i = 0; i < notas.length; i++) {
//             let contagem = 0;
//             while(notasUsadas.includes(notas[i])){
//                 notasUsadas.splice(notasUsadas.indexOf(notas[i]), 1);
//                 contagem++;
//             }
            
//             if (contagem > 0) {
//                 let item = document.createElement("li");
//                 item.textContent = `${contagem} notas de R$${notas[i]}`;
//                 let lista = document.getElementById('result');
//                 lista.appendChild(item);
//             }
//         }
//     } else {
//         alert("Valor inserido não é um número");
//     }
// }


function withdrawMoney() {
    document.getElementById("result").innerHTML = "";
    let notas = [200, 100, 50, 20, 10, 5, 2, 1];
    let money = parseInt(document.getElementById("withdraw").value);
    if (!isNaN(money)) {
        while(money > 0){
            for (let i = 0; i < notas.length; i++) {
                let contagem = 0;
                if (notas[i] <= money) {
                    contagem = parseInt(money / notas[i]);
                    console.log(contagem);
                    money -= (contagem * notas[i]);
                    let item = document.createElement("li");
                    item.textContent = `${contagem} notas de R$${notas[i]}`;
                    let lista = document.getElementById('result');
                    lista.appendChild(item);     
                }  
                         
            }
        }
    } else {
        alert("Valor inserido não é um número");
    }
}