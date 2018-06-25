function add(nombre, descripcion, imagen, precio) {
    var pro = new Product(nombre, descripcion, imagen, precio);
    pro.save();
    document.getElementById('name').value = '';
    document.getElementById('name').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('img').value = '';
    document.getElementById('price').value = '';
    alert('nuevo producto ' + pro.nombre + ' se a creado con exito');
}

document.addEventListener('DOMContentLoaded', function () {
    var name = document.getElementById('name');
    var desc = document.getElementById('desc');
    var img = document.getElementById('img');
    var price = document.getElementById('price');

    //es lo mismo que var btn = document.getElementById('add');
    // btn.document...
    document.getElementById('add').addEventListener('click', function () {
        add(name.value, desc.value, img.value, price.value);
        console.log("agrego el producto correctamente");
    });
})