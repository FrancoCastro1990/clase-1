document.addEventListener('DOMContentLoaded',function () {
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
    var clase1 =document.querySelector(".clase1");
    //var btn3 =document.querySelector("#btn3");
    var btn3 =document.getElementById('btn3');

    btn3.addEventListener('click',function(){
        clase1.classList.add('clase2');
    })
})
