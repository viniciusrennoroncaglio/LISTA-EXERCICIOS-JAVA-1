function verificarImpar() {
    var numero = document.getElementById("numero").value;
    
    if (numero % 2 !== 0) {
      document.getElementById("resultado").innerHTML = "O número " + numero + " é ímpar.";
    } else {
      document.getElementById("resultado").innerHTML = "O número " + numero + " não é ímpar.";
    }
  }