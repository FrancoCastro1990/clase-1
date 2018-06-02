/**********************
*** OBJETOS LITERALES**
***********************/
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
console.log(auto);
console.log(auto.marca);
console.log(auto.encendido);//verificamos el el auto esta encendido
auto.encender(true);//encendimos el auto
console.log(auto.encendido);
auto.encender(false);
console.log(auto.encendido);


