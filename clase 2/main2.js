//se llama al input 
var input = document.getElementById('box');
//se llama a la lista
var lista = document.getElementById('lista');
//se llama al boton
var button = document.getElementById('add');
//se crea eñ array tareas
var tareas= [];//new Array();

//se crea la funcion que agrega tareas a la lista
function addTarea(tarea) {
    tareas.push(tarea);
    //llamamos al renderList();
    renderList();
}


function renderList(params) {
    //seteamos (la dejamos en blanco '') la lista del html
    lista.innerHTML = '';
    //recorremos el array
    //forearch toma como parametro una function anonima con 2 parametros.
    //el primer parametro obtiene el valor(item) donde se encuentre el iterador(i)
    tareas.forEach(function(item,i){
       // console.log(item);
       // console.log(i);

       //creamos la itiqueta <li></li> por cada elemento del array
        let li = document.createElement('li');
        //le asignamos un valor(lo mimo que hacer <li>"lo que va aca"</li>)
        li.innerHTML=item;
        //insertamos la etiqueta dentro del DOM (mostramos los datos en pantallas)
        lista.appendChild(li);
    });
}
//evento que toma los elementos al hacer click
button.addEventListener('click',function(){
    //llamamos a addTarea y le damos como parametro el input(input.value obtiene el valor ingresado)
    addTarea(input.value);
})
