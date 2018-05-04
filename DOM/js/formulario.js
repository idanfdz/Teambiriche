// var formulario = document.getElementsByName('formulario')[0];
var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;
var sexo = formulario.sexo;
var terminos = formulario.terminos;

function validar(e){
  // validando nombre
  if (nombre.value > 10) {
    alert('Solo se aceptan 10 caracteres');
  }else if (nombre.value == '') {
    alert('Ingresa un nombre');
  }

  // validando sexo
  if(sexo[0].checked == false && sexo[1].checked == false){
    alert('No mames elige un sexo');
  }

  // validando terminos
  if (!terminos.checked) {
    alert('Acepta los terminos y condiciones!!!');
  }
  // evitamos que se envie el formulario
  e.preventDefault();
}
formulario.addEventListener('submit',validar);
