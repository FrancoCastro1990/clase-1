
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




