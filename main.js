//console.log("HOLA MUNDO");
/*
var miEntero = 10;
var miDecimal = 1.2;

var si = true;
var no = false;
*/

/*
var nombre = "esto es una string";
var und;
console.log("numero entero=",miEntero);
console.log("numero decimal=",miDecimal);
console.log("boolean si=",si);
console.log("boolean no=",no);
console.log("string=",nombre);
console.log("valor undefined=",und);
*/
/*
var num1 = 10;
var num2 = 5;

console.log("suma de", num1,"y",num2,"es=",num1+num2);
console.log("resta de", num1,"y",num2,"es=",num1-num2);
console.log("multiplicacion de", num1,"y",num2,"es=",num1*num2);
console.log("division de", num1,"y",num2,"es=",num1/num2);

var num= 1;
var total=0;
console.log(num);
console.log(total=num++);//incremento despues de asignar es x++, total es 1
					
console.log(total=++num);//incremento antes de asignar es ++x, total es 3
*/

/*typeof sirve para conocer el tipo de la variable.*/
/*
console.log(typeof(miEntero));
console.log(typeof(miDecimal));
console.log(typeof(si));
console.log(typeof(no));
console.log(typeof(fnombre));
console.log(typeof(und));

console.log(si===no);
console.log(si!==no);
console.log(no!==no);
console.log(si===si);
*/
/*
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log("a"<"b");
*/
/*
console.log(num1 < num2 && num2 > num1);
console.log(num1 > num2 && num1 > num2);
console.log(num1 <= num2 && num2 >= num1);
console.log(num1 >= num2 && num1 >= num2);

console.log(num1 < num2 || num2 > num1);
console.log(num1 > num2 || num1 > num2);
console.log(num1 < num2 || num2 <= num1);
console.log(num1 >= num2 || num1 >= num2);
*/
/*
console.log(num1>=num2 ? "verdadero" : "falso"); 

console.log(num1<=num2 ? "verdadero" : "falso"); 

if(num1>=num2){
	console.log("verdadero");
}else {
	console.log("falso");
}
if(num1<=num2){
	console.log("verdadero");
}else {
	console.log("falso");
}
*/
/*
switch(num1){
	
	case 1:
		console.log("es 1"); 
		break;
	case 2:
		console.log("es 2");
		break;
	case 5:
		console.log("es 5");
		break;
	case 10:
		console.log("es 10");
		break;
	default:
		console.log("no se encuentra el valor");

}*/

//funciones se crean con function, se puede crear una variable que contenga la funcion
/*
function nombre(param){
	//bloque de codigo
	
}
// esta funcion no esta soportada por todos los navegadores
var nombre = (params) => {
	//bloque de codigo
}
*/
/*
function edad(anioNac){
	
	return 2018-anioNac;
	
}

function validadEdad(num0){

	if(edad(num0)>=18){
		console.log("eres mayor de edad");
	}else{
		console.log("eres menor de edad");
	}
}
var nombre1;
var anioedad;
nombre1=prompt("hola!, ingrese nu nombre por favor","karina",);
anioedad=prompt("ingrese su año de nacimiento","1990");
console.log("hola "+nombre1+", tienes", edad(anioedad),"años");
validadEdad(anioedad);

var x=1;
  var suma=0;
  var valor;
  while (x<=5)
  {
    valor=prompt('Ingrese valor:','');
    valor=parseInt(valor);
    suma=suma+valor;
    x=x+1;
  }
  document.write('La suma de los valores es '+suma+'<br>');
  */
 /*
 class Poligono {
	constructor(height, width) {
	  this.height = height;
	  this.width = width;
	}
	
	get area() {
	  return this.calcArea();
	}
  
	calcArea() {
	  return this.height * this.width;
	}
  }
  
  var cuadrado = new Poligono(10, 10);
  
  console.log(cuadrado.area);
  console.log(cuadrado.height);
  console.log(cuadrado.width);
  */
 
var numJugadores=0;
var nombre=" ";
var contador=0;
var terminar=false;
var seleccion1=0, seleccion2=0;
var puntos1=0;

numJugadores=prompt("Ingrese cantidad de jugadores: ");
var jugador=new Array(numJugadores);
console.log(numJugadores);

for (let i = 0; i < numJugadores; i++) {
	jugador[i]=new Array(4);
}
//0 nombre, 1 ID, 2 Npartidas,3 Puntos

do{
	nombre=prompt("ingrese el nombre del jugador:");
	jugador[contador][0]=nombre;//nombre
	jugador[contador][1]=contador+1;//ID
	jugador[contador][2]=numJugadores-1;//CANTIDAD DE PARTIDAS POR JUGAR
	jugador[contador][3]=0;//PUNTOS
	contador++;
}while(contador<numJugadores);

while(!terminar){
	for (let j = 0; j < numJugadores; j++) {
			console.log("ID:",jugador[j][1],"Nombre;",jugador[j][0],",P. POR JUGAR:",jugador[j][2],",PUNTOS:",jugador[j][3]);
	}
	for (let x = 0; x < 2; x++) {
		seleccion1=seleccion2;
		seleccion2=prompt("ingrese la ID del jugador.");
	}

	for(let z = 0; z < numJugadores; z++){
		if(jugador[z][1]==seleccion1 && jugador[z][2]!=0){
			puntos1=prompt("ingrese los puntos del jugador 1");
			jugador[z][3]=+puntos1;
			jugador[z][2]--;		
		}
		if(jugador[z][1]==seleccion2 && jugador[z][2]!=0){
			puntos1=prompt("ingrese los puntos del jugador 2");
			jugador[z][3]=+puntos1;
			jugador[z][2]--;
		}
		
	}


	

}
