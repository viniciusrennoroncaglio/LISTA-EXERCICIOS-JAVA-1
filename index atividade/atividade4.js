function calcularMedias() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    var mediaAritmetica = (num1 + num2 + num3) / 3;
    var mediaPonderada = (num1 * 3 + num2 * 2 + num3 * 5) / (3 + 2 + 5);
    var somaMedias = mediaAritmetica + mediaPonderada;
    var mediaDasMedias = (mediaAritmetica + mediaPonderada) / 2;

    var resultados = document.getElementById("resultados");
    resultados.innerHTML = "<h2>Resultados:</h2>" +
        "<p>Média Aritmética: " + mediaAritmetica.toFixed(2) + "</p>" +
        "<p>Média Ponderada: " + mediaPonderada.toFixed(2) + "</p>" +
        "<p>Soma das Médias: " + somaMedias.toFixed(2) + "</p>" +
        "<p>Média das Médias: " + mediaDasMedias.toFixed(2) + "</p>";
}