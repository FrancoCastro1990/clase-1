//objeto render
function Render(element){
    this.storage = this.validStorageRender();
    this.contenedor = element;
    this.renderview(this.contenedor);
}

Render.prototype.getStorage = function() {
    return JSON.parse(window.localStorage.getItem('productos'));
}

Render.prototype.setStorage = function (arr) {
    window.localStorage.setItem('productos',JSON.stringify(arr));
}

Render.prototype.validStorageRender = function () {
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


Render.prototype.renderview = function(contenedor) {
    this.storage.forEach(function(item,index) {
        //creamos un contenedor li
        var li = document.createElement('li');
        //creamos una nueva variable llamada template con un valor de comillas dnde ira nuestro temprate de html
        //dentro de ${} van los item que queremos agregar
        var template = `
            <span>
                <img src="${item.imagen}" />
            </span>
            <span>
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <strong>$ ${item.precio}<strong>
            </span>`;
            //guardamos todo el codigo de html de template dentro de li
            li.innerHTML=template;
            //agregamos los elementos de li al DOM (id)
            contenedor.appendChild(li);
        
    });


}
