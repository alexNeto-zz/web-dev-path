var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"


var primeiroPaciente = document.querySelector("#primeiro-paciente");

var peso = primeiroPaciente.querySelector(".info-peso").textContent;
var altura = primeiroPaciente.querySelector(".info-altura").textContent;
var imc = peso / (altura * altura);
var infoImc = primeiroPaciente.querySelector(".info-imc");
infoImc.textContent = imc;