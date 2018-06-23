document.addEventListener('DOMContentLoaded', function () {
    var tags = document.getElementsByTagName('input');
    //console.log(tags);
    //console.log("tag 2 ->",tags[2]);
    //con queryselector traemos el elemento completo
    var tag = document.querySelector("h1");
    var clase = document.querySelector(".miBoton");
    var id = document.querySelector("#btn2");
    var anidado = document.querySelector("form input");
    var anidado2 = document.querySelector("form [name='texto']");

    /*console.log(tag);
    console.log(clase);
    console.log(id);
    console.log(anidado);
    console.log(anidado2);
    tag.innerText="CAMBIO";
    console.log('dataset ->',tag.dataset.name);*/
    //var inputs = document.querySelectorAll("form input");
    //console.log(inputs);

    /*console.log(clase.classList);
    clase.classList.add('segundaClase');
    console.log(clase.classList);*/

    //guardamos en clase1 
    var clase1 = document.querySelector(".clase1");
    //var btn3 =document.querySelector("#btn3");
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');
    var btn5 = document.getElementById('btn5');
    var btn6 = document.getElementById('btn6');
    var btn7 = document.getElementById('btn7');
    var btn8 = document.getElementById('btn8');

    btn3.addEventListener('click', function () {
        //add agrega una clase
        clase1.classList.add('clase2');
    })

    btn4.addEventListener('click', function () {
        //si la clase existe la elimina, si no existe la agrega
        clase1.classList.toggle('clase2');
    })

    btn5.addEventListener('click', function () {
        //elimina una clase
        clase1.classList.remove('clase2');
    })

    btn6.addEventListener('click', function () {
        //devuelve true si existe
        if (clase1.classList.contains('clase2')) {
            alert("existe la clase")
        } else {
            alert("no existe la clase");
        }
    })

    btn7.addEventListener('click', function () {
        //remplasa una clase
        clase1.classList.replace('clase1', 'clase2');
    })


    btn8.addEventListener('click', function () {
        btn8.innerText = "cambiamos";
        document.body.innerHTML += `
            <header>
                <p class="clase1">agregamos una linea</p>
            </header>
        `;
        
    })
    //btn8.innerText = "cambiamos";

})
