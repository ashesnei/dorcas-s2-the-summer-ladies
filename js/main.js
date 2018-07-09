"use strict";

var selectorDisena = document.querySelector(".title__disena");
var formularioDisena = document.querySelector(".form__disena--fontsColors");
var selectorRellena = document.querySelector(".titulo__rellena");
var formularioRellena = document.querySelector(".form__rellena");
var selectorComparte = document.querySelector(".container__comparte--icon");
var formularioComparte = document.querySelector(".form__comparte");
var tarjetaCreada = document.querySelector(".container--comparte-created");
var botonCrearTarjeta = document.querySelector(
  ".container__comparte--buttonstyle"
);
var botonrotado1 = document.querySelector(".move1");
var botonrotado2 = document.querySelector(".move2");
var botonrotado3 = document.querySelector(".move3");

function desplegarDisena() {
  if (formularioDisena.classList.contains("form__oculto")) {
    formularioDisena.classList.remove("form__oculto");
    formularioRellena.classList.add("form__oculto");
    formularioComparte.classList.add("form__oculto");
    botonrotado1.classList.add("rotate");
  } else {
    formularioDisena.classList.add("form__oculto");
    botonrotado1.classList.remove("rotate");
  }
}

function desplegarRellena() {
  if (formularioRellena.classList.contains("form__oculto")) {
    formularioRellena.classList.remove("form__oculto");
    formularioDisena.classList.add("form__oculto");
    formularioComparte.classList.add("form__oculto");
    botonrotado2.classList.add("rotate");
  } else {
    formularioRellena.classList.add("form__oculto");
    botonrotado2.classList.remove("rotate");
  }
}

function desplegarComparte() {
  if (formularioComparte.classList.contains("form__oculto")) {
    formularioComparte.classList.remove("form__oculto");
    formularioDisena.classList.add("form__oculto");
    formularioRellena.classList.add("form__oculto");
    botonrotado3.classList.add("rotate");
  } else {
    formularioComparte.classList.add("form__oculto");
    botonrotado3.classList.remove("rotate");
  }
}

function crearTarjeta() {
  if (tarjetaCreada.classList.contains("form__oculto")) {
    tarjetaCreada.classList.remove("form__oculto");
  } else {
    tarjetaCreada.classList.add("form__oculto");
  }
}
selectorDisena.addEventListener("click", desplegarDisena);
selectorRellena.addEventListener("click", desplegarRellena);
selectorComparte.addEventListener("click", desplegarComparte);
botonCrearTarjeta.addEventListener("click", crearTarjeta);

///foto editor//

var fr = new FileReader();

var uploadBtn = document.querySelector(".form__rellena--button");

var fileField = document.querySelector("#imagen");
var profileImage = document.querySelector(".visor__image-foto");
var formImage = document.querySelector(".form__rellena--reload ");

function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.src = fr.result;
  formImage.style.backgroundImage = "url(" + fr.result + ")";
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener("change", getImage);
uploadBtn.addEventListener("click", fakeFileClick);

//iconos Aylen//
var iconMail = document.querySelector(".fa-envelope.href");
var searchMail = document.querySelector(".rellena_mail");
var linkEmail = document.querySelector(".linkEmail")


function callMail() {
  var userMail = event.target.value;
  callMail.innerHTML;
 
}
iconMail.addEventListener("keyup", callMail);

En los _addEventListener_ de los _input_ yo he usado ‘keyup’ .
Y luego ejecuta una función que genera un variable con el value una variable con el value de ese input. Por ejemplo:
 `var email = event.target.value;` 
Luego es solo llevar esta variable para el href del icono.
Por ejemplo:
 `emailLink.href = 'mailto:' + email;`

Donde emailLink, en mi caso, seria el _querySelector_ del <a> del icono del e-mail.

`<a href="" class="emailLink"><i class="iconsocial far fa-envelope"></i></a>`.