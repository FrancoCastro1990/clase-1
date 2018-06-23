//DOM en js

var btn = document.getElementById('btn');
var input = document.getElementById('input');
var btn2 = document.getElementById('btn2');
var p = document.getElementById('dclcik');
var label = document.getElementById('label');
var form = document.getElementById('form');

//evento onBlur, se activa cuando deseleccionamos nuestro elemento, por ejemplo el btn
btn.addEventListener('blur', () => {
    alert("precionaste fuera del boton");
});

//evento onChange, se activa si se produce un cambio.
input.addEventListener('change', function () {
    console.log(this.value);

});

//evento onClick, se activa al precionar el elemento.
btn2.addEventListener('click', function (evento) {
    //solo para etiqueta a se ocupa el pereventDefault. se ocupa para no redireccionar
    evento.preventDefault();
    console.log("clikeaste");
    //limpiamos lo que hay en input
    input.value = '';
});
//evento dblClick, se activa al precionar doble click
p.addEventListener('dblclick', function () {
    alert("precionaste doble click");
});

//se onFocus, se activa al selecionarlo
label.addEventListener('focus', function () {
    //console.log("nose");
    document.body.style.background = "#ec0000";
});

//Keydown, se activa al precionar un boton dentro del evento
form.name.addEventListener('keydown', function () {
    console.log("precionando una tecla");

});

//keypress, se ejecuta al rpecionar un boton, solo una vez
form.texto.addEventListener('keypress', function () {
    console.log("precionaste la tecla");

});

//si la tecla se deja de precionar
form.keyup.addEventListener('keyup', function () {
    console.log("dejaste de precionar teclas");

});

//si carga toda la pagina bien se ejecuta.
document.addEventListener('DOMContentLoaded', function () {
    alert("se cargo correctamente");

});