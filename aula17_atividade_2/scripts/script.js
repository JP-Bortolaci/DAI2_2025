function chooseLight(color) {
    if (color == 1) {
        document.getElementById("redLight").style.backgroundColor = "red";
        document.getElementById("yellowLight").style.backgroundColor = "grey";
        document.getElementById("greenLight").style.backgroundColor = "grey";
    }
    if (color == 2) {
        document.getElementById("redLight").style.backgroundColor = "grey";
        document.getElementById("yellowLight").style.backgroundColor = "yellow";
        document.getElementById("greenLight").style.backgroundColor = "grey";
    }
    if (color == 3) {
        document.getElementById("redLight").style.backgroundColor = "grey";
        document.getElementById("yellowLight").style.backgroundColor = "grey";
        document.getElementById("greenLight").style.backgroundColor = "green";
    }
}

