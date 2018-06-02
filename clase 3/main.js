/*********************
***OBJETOS LITERALES**
*********************/
var auto = {
	color: 'rojo',
	marca: 'toyota',
	motor:{
		cc:'1.6',
		combustible:'bencina'
	},
	puertas: 4,
	year: 2018,
	transmicion: 'mecanica',
	permisoCirculacionAlDia: true,
	tipo: 'sedan',
	encendido: false,
	frenar: function () {
		return 'el auto se freno';
	},
	encender: function(val){
		this.encendido = val;
		//el this es igual que auto.encendido
	},

}
console.log(auto);//mostramos todos los datos
console.log(auto.marca);//mostramos uno de sus datos
auto.marca='nissan';//cambiamos el valor marca
console.log(auto.marca);//mostramos nuevamente marca para ver el cambio
console.log(auto.encendido);//verificamos el el auto esta encendido(esta apagado)
auto.encender(true);//encendimos el auto
console.log(auto.encendido);//en consola muestra true
auto.encender(false);
console.log(auto.encendido);


