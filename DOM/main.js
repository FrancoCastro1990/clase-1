console.log("te amo");

var lista = document.getElementById("lista");

for(let i=0;i<10;i++){
    lista.innerHTML+=`
    <li>
        <p>hola ${i}</p>
    </li>`;
}