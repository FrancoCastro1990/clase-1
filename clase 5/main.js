var persona1 = new Persona("Franco", "Castro", 1990, "lala@lala.cl");

persona1.MostrarNombre();
persona1.MostrarEdad();
persona1.ValidarEdad();
persona1.MostrarCorreo();

var nombre = prompt("ingrese su nombre", "pepe");
var apellido = prompt("ingrese su apellido", "perez");
var anio = prompt("ingrese su año de nacimiento", "1990");
var correo = prompt("ingrese su correo", "lalalala@lalala.com");

persona2 = new Persona(nombre, apellido, anio, correo);

persona2.MostrarDatos();
persona2.ValidarEdad();