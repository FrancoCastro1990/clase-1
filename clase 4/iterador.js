/****************************
*Creacion de nuestro Foreach*
*****************************/

//vamos a crear un foreach
var arr = [1,2,3,4];

//creamos un nuevo metodo llamado iterar y como parametro le damos una funcion cb(callback)
Array.prototype.iterar = function (cb) {
    //console.log(this)
    //recorremos todos los elementos del array
    for (let i = 0; i < this.length; i++) {
        //pasamos como parametros el el this[i] que devuelve el valor(item) y i devuelve el indice(index)
        cb(this[i],i);
        
    }
}

//ejecutamos nuestro foreach(iterar)
arr.iterar(function(item,index){

    //mostramos los valores arr[index]=item
    console.log('(nuestro foreach) item -> [',index,'] = ',item);

})
//ejecutamos el foreach
arr.forEach(function(item,index) {

    console.log('item -> [',index,'] = ',item);
    
})