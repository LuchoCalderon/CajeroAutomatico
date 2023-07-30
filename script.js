var cuentas = [
  { nombre: "Mali", saldo: 200, password: "mali123" },
  { nombre: "Gera", saldo: 290, password: "gera123" },
  { nombre: "Maui", saldo: 67, password: "maui123" }
];

var cuentaSeleccionada = null;
var headerLogin = document.getElementById("selectUsuario")
var selectElement = document.getElementById("usuarios")
var validar = document.getElementById("validar")



function seleccionarCuenta() {
  var usuario = document.getElementById("usuario")

  users.hidden = false
  claveUsuario.hidden = true
  validar.hidden = true
  opciones.hidden = true
  ingresar.hidden = true
  retirar.hidden = true
  
}

function ingresarPassword(cuenta) {
  cuentaSeleccionada = cuentas.find(function(c) {
    return c.nombre === cuenta;
  });
  claveUsuario.hidden = false
  users.hidden= true
  validar.hidden = false
  opciones.hidden = true
 
}

function validarPassword() {
  var password = document.getElementById("password").value;
  
  if (password === cuentaSeleccionada.password) {
    mostrarOpciones();
  } else {
    alert("Password incorrecto. Inténtalo nuevamente.");
    ingresarPassword(cuentaSeleccionada.nombre);
  }
}

function mostrarOpciones() {
  var opciones = document.getElementById("opciones");
  opciones.hidden = false
  claveUsuario.hidden = true
  validar.hidden = true
  ingresar.hidden = true
  retirar.hidden = true

}

function consultarSaldo() {
 alert("Tu saldo actual es de $" + cuentaSeleccionada.saldo);
 mostrarOpciones();
}

function ingresarMonto() {
 var ingresar = document.getElementById("ingresar");
 ingresar.hidden = false
 opciones.hidden = true
 retirar.hidden = true

}

function validarIngresoMonto() {
 let monto = Number(document.getElementById("montoConsignar").value);

 if (isNaN(monto)) {
   alert("Monto inválido. Inténtalo nuevamente.");
   ingresarMonto();
 } else if (cuentaSeleccionada.saldo + monto > 990) {
   alert("No puedes tener más de $990 en tu cuenta.");
   ingresarMonto();
 } else {
   cuentaSeleccionada.saldo += monto;
   alert("Has ingresado $" + monto + ". Tu nuevo saldo es de $" + cuentaSeleccionada.saldo);
   mostrarOpciones();
 }
}

function retirarMonto() {
 var retirar = document.getElementById("retirar")
 retirar.hidden = false
 opciones.hidden = true

}

function validarRetiroMonto() {
 let monto = Number(document.getElementById("montoRetirar").value);

 if (isNaN(monto)) {
   alert("Monto inválido. Inténtalo nuevamente.");
   retirarMonto();
 } else if (Number(cuentaSeleccionada.saldo) - monto < 10) {
   alert("No puedes tener menos de $10 en tu cuenta.");
   retirarMonto();
 } else {
   cuentaSeleccionada.saldo -= monto;
   alert("Has retirado $" + monto + ". Tu nuevo saldo es de $" + cuentaSeleccionada.saldo);
   mostrarOpciones();
 }
}

seleccionarCuenta();