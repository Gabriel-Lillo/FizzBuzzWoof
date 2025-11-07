import PromptSync from "prompt-sync";

const prompt = PromptSync();

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
  ];

  let contador = 0;
  let resultados = []

  const numero = prompt("Ingrese el número que desea verificar: ");

  for (let i = 2; i <= numero; i++) {
    for(let j=2; j<=i; j++){
      if(i>1 && i%j==0){
        contador++;
      }
    }
    if(contador<2){
      resultados.push(buzzWords[5]);
      console.log(i);
    }
    contador = 0;
  };

  console.log(resultados.length);
  console.log(resultados)