//tienda pero con programacion orientada a prototipos

function Product(nombre, desc, img, price) {
    this.nombre = nombre;
    this.desc = desc;
    this.img = img;
    this.price = price;
    this.storage = this.validStorage();
}

Product.prototype.getStorage = function () {
    return JSON.parse(window.localStorage.getItem('productos'));
}

Product.prototype.setStorage = function (arr) {
    window.localStorage.setItem('productos', JSON.stringify(arr));
}

Product.prototype.validStorage = function () {
    if (this.getStorage() == null) {
        //creamos un arreglo vacio y se lo pasamos al storage
        var nuevoArr = [];
        this.setStorage(nuevoArr);
        //devolvemos el localStorage
        return this.getStorage();
    } else {
        //si no es null devolvemos el localStorage
        return this.getStorage();
    }
}
//guardamos los datos
Product.prototype.save = function () {
    //var nuevoArrayProductos = getStorage();
    //insertamos el nuebo objeto en el array
    //nuevoArrayProductos.push(obj);
    var producto = {
        nombre: this.nombre,
        descripcion: this.desc,
        imagen: this.img,
        precio: this.price
    };
    this.storage.push(producto);
    //guardamos nuevamente el localStorage
    this.setStorage(this.storage);
}

