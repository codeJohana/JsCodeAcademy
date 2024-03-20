/*The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.*/
// humman variable age
const myAge= 20;
//variable satar with 2
let earlyYears = 2;
earlyYears *=  10.5;
//substracting 2 from myAge and creatin a new var
laterYears = myAge - 2;
// 4 to calculate the number of dog years accounted for by your later years.
laterYears *=  4;
//check piont
console.log(earlyYears, laterYears)
// finding my years in dog addition
let myAgeInDogYears = earlyYears + laterYears;
myName ='Johana'.toLowerCase();
//console to final result
console.log(` My name is ${myName}. I am a human ${myAge} years old in human years witch is ${myAgeInDogYears} years old in dog years`)

//Bolean with switch and break (if ..else modification)


let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case 'first place': 
  console.log('You get the gold medal!');
  break;
   case 'second place': 
  console.log('You get the silver medal!');
  break;
  case 'third place':
  console.log('You get the bronze medal!');
  break;
  default:
   console.log('No medal awarded.');
   break;
}



