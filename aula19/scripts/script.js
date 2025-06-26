function mOver(id) {
    document.getElementById(id).style.backgroundColor = "#0056b3";
    document.getElementById(id).style.transform = "scale(1.03)";
}

function mLeave(id) {
    document.getElementById(id).style.backgroundColor = "#007bff";
    document.getElementById(id).style.transform = "scale(1)";
}

function addToCart(product) {
    alert(`"${product}" foi adicionado ao carrinho!`);
}
