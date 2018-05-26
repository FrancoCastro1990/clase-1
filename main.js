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
function prueba(numero1) {
	return numero1;
}
console.log(prueba(1));

function saludar(nombre) {
	return("hola "+nombre+"!");
}
console.log(saludar("franco"));

var valor = "global";
function funcionLocal() {
	var valor = "local";
	return valor;
}
console.log(valor);
console.log(funcionLocal());
console.log(valor);
console.log("funcion en clase 2");




