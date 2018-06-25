var numJugadores=0;
var nombre=" ";
var contador=0;
var terminar=false;
var seleccion1=0, seleccion2=0;
var puntos1=0;

numJugadores=prompt("Ingrese cantidad de jugadores: ");
var jugador=new Array(numJugadores);
console.log(numJugadores);

for (let i = 0; i < numJugadores; i++) {
	jugador[i]=new Array(4);
}
//0 nombre, 1 ID, 2 Npartidas,3 Puntos

do{
	nombre=prompt("ingrese el nombre del jugador:");
	jugador[contador][0]=nombre;//nombre
	jugador[contador][1]=contador+1;//ID
	jugador[contador][2]=numJugadores-1;//CANTIDAD DE PARTIDAS POR JUGAR
	jugador[contador][3]=0;//PUNTOS
	contador++;
}while(contador<numJugadores);

while(!terminar){
	for (let j = 0; j < numJugadores; j++) {
			console.log("ID:",jugador[j][1],"Nombre;",jugador[j][0],",P. POR JUGAR:",jugador[j][2],",PUNTOS:",jugador[j][3]);
	}
	for (let x = 0; x < 2; x++) {
		seleccion1=seleccion2;
		seleccion2=prompt("ingrese la ID del jugador.");
	}

	for(let z = 0; z < numJugadores; z++){
		if(jugador[z][1]==seleccion1 && jugador[z][2]!=0){
			puntos1=prompt("ingrese los puntos del jugador 1");
			jugador[z][3]=+puntos1;
			jugador[z][2]--;		
		}
		if(jugador[z][1]==seleccion2 && jugador[z][2]!=0){
			puntos1=prompt("ingrese los puntos del jugador 2");
			jugador[z][3]=+puntos1;
			jugador[z][2]--;
		}	
	}
}