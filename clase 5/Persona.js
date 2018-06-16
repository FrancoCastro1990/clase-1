/*******************
 *** clases en JS***
 *******************/

/*
crear un objeto persona, propiedades nombre, apellido, correo, y fecha de nacimiento.
crear funciones que entregen el nombre completo(nombre+apellido), fecha de cumpleaños,

*/
/*
function Persona(nombre, apellido, fechaNacimiento, correo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = 2018 - this.fechaNacimiento;
    this.correo = correo;
    this.mayorEdad = false;
}

Persona.prototype.MostrarNombre = function () {
    console.log("hola ", this.nombre, this.apellido);

}

Persona.prototype.MostrarCorreo = function () {
    console.log("su correo es: ", this.correo);

}
Persona.prototype.MostrarEdad = function () {
    console.log("tienes ", this.edad, "años");
}

Persona.prototype.ValidarEdad = function () {
    if (this.edad >= 18) {
        console.log("eres mayor de edad");
        this.mayorEdad = true;
    } else {
        console.log("eres menor de edad");
        this.mayorEdad = false;
    }
}
Persona.prototype.MostrarDatos = function () {
    this.MostrarNombre();
    this.MostrarEdad();
    this.MostrarCorreo();
}
*/
class Persona {
    constructor(nombre, apellido, fechaNacimiento, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = 2018 - this.fechaNacimiento;
        this.correo = correo;
        this.mayorEdad = false;
    }
    MostrarNombre() {
        console.log("hola ", this.nombre, this.apellido);

    }
    MostrarCorreo() {
        console.log("su correo es: ", this.correo);

    }
    MostrarEdad() {
        console.log("tienes ", this.edad, "años");
    }
    ValidarEdad() {
        if (this.edad >= 18) {
            console.log("eres mayor de edad");
            this.mayorEdad = true;
        } else {
            console.log("eres menor de edad");
            this.mayorEdad = false;
        }
    }
    MostrarDatos() {
        this.MostrarNombre();
        this.MostrarEdad();
        this.MostrarCorreo();
    }



}
/*metodos estaticos
son metodos que se pueden llmar sin ser instanciados.
*/