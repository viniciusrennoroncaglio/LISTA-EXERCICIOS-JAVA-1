function encontrarMenorValor() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var valor3 = parseFloat(document.getElementById("valor3").value);
    var valor4 = parseFloat(document.getElementById("valor4").value);

    var menorValor = Math.min(valor1, valor2, valor3, valor4);

    document.getElementById("resultado").innerText = "O menor valor é: " + menorValor;
}