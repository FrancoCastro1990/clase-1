class Product {
    constructor(nombre, desc, img, price) {
        this.nombre=nombre;
        this.descripcion=desc;
        this.imagen=img;
        this.precio=price;
        this.storage = this.validStorage();
    }

    getStorage() {
        return JSON.parse(window.localStorage.getItem('productos'));
    }
    setStorage(arr) {
        window.localStorage.setItem('productos',JSON.stringify(arr));
    }
    validStorage() {
        if (this.getStorage() == null) {
            //creamos un arreglo vacio y se lo pasamos al storage
            this.setStorage([]);
            //devolvemos el localStorage
            return this.getStorage();
        } else {
            //si no es null devolvemos el localStorage
            return this.getStorage();
        }
    }

    //guardamos los datos
    save(){
       //mandamos como parametros un objeto literal
        this.storage.push({
            nombre:this.nombre,
            descripcion:this.descripcion,
            imagen:this.imagen,
            precio:this.precio
        });
        //guardamos nuevamente el localStorage
        this.setStorage(this.storage);
    }
}