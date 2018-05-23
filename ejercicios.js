var num1=0;
num1=prompt("ingresa un numero");
if(num1%2==0){
  console.log("el numero ",num1," es par");
}else{
  console.log("el numero ",num1," es impar");
}
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
