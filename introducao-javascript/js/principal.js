var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"


var paciente = document.querySelectorAll(".paciente");
for (var i = 0; i < paciente.length; i++) {
    var peso = paciente[i].querySelector(".info-peso").textContent;
    var altura = paciente[i].querySelector(".info-altura").textContent;
    var imc = peso / (altura * altura);
    var infoImc = paciente[i].querySelector(".info-imc");

    infoImc.textContent = imc.toFixed(2);
}

