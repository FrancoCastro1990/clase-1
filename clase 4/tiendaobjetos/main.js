//agregamos los datos creando un objeto
function add(nombre, descripcion, imagen, precio){
    var p = new Product(nombre, descripcion, imagen, precio);
    p.save();
}

//llamar a los input(asignados por la ID)

var btn = document.getElementById('add');
var nombre = document.getElementById('name');
var desc = document.getElementById('desc');
var img = document.getElementById('img');
var price = document.getElementById('price');
//creamos el evento click del boton

btn.addEventListener('click', function () {
    add(nombre.value, desc.value, img.value, price.value);
    alert('nuevo producto ' + nombre.value + ' se a creado con exito');
    nombre.value = '';
    desc.value = '';
    img.value = '';
    price.value = '';
});