//1
let userName='Andrea';
//2
userName ? console.log(`Hello, ${userName}!`) :
console.log(`Hello!`);
//3 question 
let userQuestion ="May I get the job?";
//4 
console.log(`You asked me - ${userQuestion}`);
//5
let randomNumber = Math.floor(Math.random() * 8);
//6
let eightBall='';
//7 control flow with Switch
switch (randomNumber){
  case 0: 
    eightBall = 'It is certain';
    break;
  case 1: 
   eightBall = 'It is decidedly so';
    break;
    case 2: 
    eightBall ='Reply hazy try again';
    break;
    case 3: 
    eightBall = 'Cannot predict now';
    break;
    case 4: 
    eightBall ='Do not count on it';
    break;
    case 5: 
    eightBall = 'My sources say no';
    break;
    case 6: 
    eightBall ='Outlook not so good';
    break;
    eightBall = 'Signs point to yes';
    break;
}

console.log(`Your answer is: ${eightBall}`);

/*if, else if (sample)
//1
let userName= 'Andrea'
//2
userName ? console.log(`Hola, ${userName}`) :
console.log(`Hola!`);
//3
let userQuestion = "devo ir a dormir?";
//4
console.log( `${userName} me preguntas: ${userQuestion}`);
//5
let randomNumber = Math.floor(Math.random() * 8);
//6
let eightBall='';
//7 control flow with if, else
if  (randomNumber === 0){ eightBall = ('definitivamente');}
else if (randomNumber === 1){ eightBall =('esta decidido');}
else if (randomNumber === 2){ eightBall =('Pregunta mas tarde');}
else if (randomNumber === 3){ eightBall =('No puedo predecir en este momento');}
else if (randomNumber === 4){ eightBall =('NO cuentes con ello');}
else if (randomNumber === 5){ eightBall =('Mis contactos dicen que no');}
else if (randomNumber === 6){ eightBall =('No se ve bien');}
else if (randomNumber === 7){ eightBall =('Todo indica que si');}
//8
console.log(`${userName} Esta es tu respuesta: ${eightBall}`)

*/