import promptSync from 'prompt-sync';

let resultados = [];
const prompt = promptSync();

const limite = parseInt(prompt("¿Hasta qué numero te muestro?: "));

if(limite<=105){
  for (let i = 1; i <= limite; i++) {
      if(i%3==0 && i%5==0 && i%7==0){
        resultados.push("FizzBuzzWoof");

      }else if(i%3==0 && i%7==0){
        resultados.push("FizzWoof");

      }else if(i%5==0 && i%7==0){
        resultados.push("BuzzWoof");

      }else if(i%3==0 && i%5==0){
        resultados.push("FizzBuzz"); 

      }else if(i%3==0){
        resultados.push("Fizz");

      }else if(i%5==0){
        resultados.push("Buzz");

      }else if(i%7==0){
        resultados.push("Woof");

      }else{ 
        resultados.push(i);
      }
    }
}else{
  console.log("No puedes ingresar números mayores a 105!!");
}
for (let j = 0; j < resultados.length; j++) {
  console.log(resultados[j]);
}
console.log("Total de elementos en lista:",resultados.length);