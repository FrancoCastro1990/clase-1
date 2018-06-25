/*********************************************************************************************
**programacion orientada a prototipo**********************************************************
**es similar a la orientada a objetos pero aca todo es una funcion****************************
**se recomienda este tipo de programacion para que sea compatible con todos los navegadores***
**********************************************************************************************/

//para crear un prototipo va primero function el nombre y entre parentesis los parametros
//vendria siendo como el constructor
/*
function Comida( nombre, tipo, costo, procedencia) {
    //con this. le decimos que son los atributos del objeto(prototipo).
    this.nombre = nombre;//this.nombre le pasamos el parametro nombre.
    this.tipo = tipo;
    this.costo = costo;
    this.procedencia = procedencia;
}

// las funciones o metodos van fuera de la funcion para que sean publicas.
//se coloca el nombre del objeto mas .prototype."el nombre de la funcion"
Comida.prototype.getNombre = function(){
    return this.nombre + " || " + this.procedencia;
}

Comida.prototype.Descuento = function (desc) {
    var dsco = this.costo * desc / 100;
    return this.costo - dsco;
}

//constructor
var porotos = new Comida("porotos con rienda","legumbre",2000,"Chilena");

//ocupamos los metodos
console.log(porotos.getNombre());

console.log(porotos.Descuento(20));

*/
