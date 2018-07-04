console.log("te amo");

var lista = document.getElementById("lista");

for(let i=0;i<5;i++){
    lista.innerHTML+=`
    <li>
        <p>hola ${i}</p>
        <p>hola ${i+1}</p>
        <p>hola ${i+2}</p>
        <p>hola ${i+3}</p>
    </li>`;
}