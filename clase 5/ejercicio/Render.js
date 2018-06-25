class Render {
    constructor(element) {
        this.storage = this.validStorageRender();
        this.contenedor = element;
        this.renderview(this.contenedor);
    }

    getStorage() {
        return JSON.parse(window.localStorage.getItem('productos'));
    }

    setStorage(arr) {
        window.localStorage.setItem('productos', JSON.stringify(arr));
    }

    validStorageRender() {
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

    renderview(contenedor) {
        // item => {} es igual que function(item){}
        this.storage.forEach( item => {
            //creamos un contenedor li
            let li = document.createElement('li');
            //creamos una nueva variable llamada template con un valor de comillas dnde ira nuestro temprate de html
            //dentro de ${} van los item que queremos agregar
            let template = `
                <span>
                    <img src="${item.imagen}" />
                </span>
                <span class="span_interior">
                    <h3>${item.nombre}</h3>
                    <p>${item.descripcion}</p>
                    <strong>$ ${item.precio}<strong>
                </span>`;
            //guardamos todo el codigo de html de template dentro de li
            li.innerHTML = template;
            //agregamos los elementos de li al DOM (id)
            contenedor.appendChild(li);
        });
    }
}