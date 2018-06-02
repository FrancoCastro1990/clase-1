/****************
 **LocalStorage**guarda los datos en el navegador sin fecha de expiracion
 ****************/
window.localStorage.setItem("titulo","Curso de Javascript - Luis Vilches");//guardamos datos en el local
window.localStorage.setItem("persona",JSON.stringify)//guardamos datos en JSON


window.localStorage.getItem("titulo");//obtener datos de "titulo"

window.localStorage.removeItem("titulo");//elimina el dato escogido
window.localStorage.clear();//elimina todo los datos



/******************
**SessionStorage***guarda los datos con tiempos de expiracion(mieentras el navegador esta abierto o cierres la pagina)
*******************/

window.sessionStorage.setItem("sesion","se borrara c:");

window.sessionStorage.getItem("titulo");