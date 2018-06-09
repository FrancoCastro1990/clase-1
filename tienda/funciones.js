function nuevoProducto(nombre, desc, img, price) {
    //creamos un nuevo objeto producto
    var producto = {
        nombre: nombre,
        descripcion: desc,
        imagen: img,
        precio: price
    }
    //enviamos el objeto producto al addProduct que se encarga de guardar el producto
    addProduct(producto);
}

function getStorage() {
    //JSON.parce() construye un objeto a partir de un string 
    return JSON.parse(window.localStorage.getItem('productos'));//traer datos como string
}

function setStorage(arr) {
    //seteamos los valores y los guardamos en el local storage
    //JSON.stringify(valor) devuelve una string con los datos del objeto JSON
    window.localStorage.setItem('productos', JSON.stringify(arr));
}


function addProduct(obj) {
    //traemos el array con los datos almacenados en el localStorage
    var nuevoArrayProductos = getStorage();
    //insertamos el nuebo objeto en el array
    nuevoArrayProductos.push(obj);
    //guardamos nuevamente el localStorage
    setStorage(nuevoArrayProductos);
}

function validStorage() {
    //validamos si el localStorage esta vacio(nullo)
    if (getStorage() == null) {
        //insertamos un array vacio(literal)
        setStorage([]);
        //devolvemos el localStorage
        return getStorage();
    } else {
        //sino devolvemos el localStorage
        return getStorage();
    }
}

function renderView(arr) {
    //llamamos al contenedor producList
    var ul = document.getElementById('productosList');
    //seteamos su HTML en blanco
    ul.innerHTML = '';
    //iteramos el array de productos
    arr.forEach(function (item, index) {

        //creamos los elementos del html
        var li = document.createElement('li');//li es un elemento dentro de una lista(ul=productosList)
        var col1 = document.createElement('span');//span es una colunma de texto
        var col2 = document.createElement('span');
        var img = document.createElement('img');
        var titulo = document.createElement('h3');//h3 es para darle formato de "titulo"
        var desc = document.createElement('p');//p es parrafo
        var price = document.createElement('strong');//strong es negrita

        //seteamos los atrubutos de los documentos
        titulo.innerText = item.nombre;
        desc.innerText = item.descripcion;
        price.innerText = '$ ' + item.precio;
        img.src = item.imagen;

        //insertamos los elementos en el DOM
        col1.appendChild(img);//en columna 1 insertamos la imagen
        col2.appendChild(titulo);//en columna 2 insertamos los demas datos
        col2.appendChild(desc);
        col2.appendChild(price);
        li.appendChild(col1);//insertamos la columna 1 al li
        li.appendChild(col2);//insertamos la columna 2 al li
        ul.appendChild(li);//insertamos los li en ul(productosList)

    });
}