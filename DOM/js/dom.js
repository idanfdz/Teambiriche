var cajas = document.getElementsByTagName('div');
cajas[0].textContent = 'Hola perros';
cajas[1].innerHTML = '<u>Holiii</u>';

var tercera_caja = document.getElementById('tercera_caja');
tercera_caja.textContent = 'Tercera Caja';

//----- Crear nodos
var nueva_caja = document.createElement('div');
var contenido_nombre = document.createTextNode('Holi!!! desde JS');
var contenedor = document.getElementById('contenedor');

nueva_caja.appendChild(contenido_nombre);
nueva_caja.setAttribute('class','caja naranja');
contenedor.appendChild(nueva_caja);


//------- Modificar la clase
nueva_caja.id='nueva_caja';
nueva_caja.className='caja naranja';

//------- Conociendo el elemento padre
var padre = cajas[0].parentNode;
// console.log(padre)
//-------- Inserta la nueva caja antes de la caja #3
// padre.insertBefore(nueva_caja, cajas[2]);
//-------- Inserta la nueva caja antes de la caja con id tercera_caja
// padre.insertBefore(nueva_caja, tercera_caja);

padre.replaceChild(nueva_caja, cajas[2]); //reemplaza la caja 3

padre.removeChild(cajas[4]); //borra el elemento 5
