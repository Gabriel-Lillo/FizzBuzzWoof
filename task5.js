import PromptSync from "prompt-sync";
const prompt = PromptSync()
const limite = parseInt(prompt("¿Hasta qué numero te muestro? "))
for (let i = 0; i <= limite; i++) {
    if(i%3==0 && i%5==0 && i%7==0){
      console.log("FizzBuzzWoof")
    }else if(i%3==0 && i%7==0){
      console.log("FizzWoof")
    }else if(i%5==0 && i%7==0){
      console.log("BuzzWoof")
    }else if(i%3==0 && i%5==0){  
      console.log("FizzBuzz"); 
    }else if(i%3==0){
      console.log("Fizz")
    }else if(i%5==0){
      console.log("Buzz")
    }else if(i%7==0){
      console.log("Woof")  
    }else{ 
      console.log(i);  
    }

  };
