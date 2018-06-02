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
	encender: function(){
		this.encendido = true;
		//el this es igual que auto.encendido
	},
	apagar: function(){
		this.encendido = false;
	},
}
console.log(auto);
console.log(auto.marca);
console.log(auto.encendido);//verificamos el el auto esta encendido
auto.encender();//encendimos el auto
console.log(auto.encendido);
auto.apagar();
console.log(auto.encendido);


