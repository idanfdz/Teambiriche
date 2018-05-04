// function saludo(){
//   alert('Hola putitos!!');
// };
// function saludo2(){
//   alert('Hola putines!!');
// }
//
// var btn_saludar = document.getElementById('btn_saludar');
// btn_saludar.addEventListener('click', saludo);
// btn_saludar.addEventListener('click', saludo2);
//
// btn_saludar.removeEventListener('click', saludo);
function crear_caja(){
  var contenedor = document.getElementById('contenedor');
  var caja = document.createElement('div');
  caja.className = 'caja';
  contenedor.appendChild(caja);
}
var btn_caja = document.getElementById('btn_caja');
btn_caja.addEventListener('click', crear_caja);
