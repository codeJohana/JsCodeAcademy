//1
let raceNumber = Math.floor(Math.random() * 1000);
//2
let earlyRegistration = true ;
//3
let ageRuner = 18;
//4
if (earlyRegistration && ageRuner >18){
 raceNumber += 1000 
}
//5 adult registration
if ( earlyRegistration && ageRuner >18 ){
console.log(`Your race time is at 9:30 a.m and your race number is: ${raceNumber}`);
}

else if (!earlyRegistration && ageRuner >18 ){
console.log(`Your race time is at 11:00 a.m and your race number is: ${raceNumber}`);
}
//kids registration
else if (earlyRegistration = ageRuner <18 ){
console.log(`Your race time is at 12:30 p.m and your race number is: ${raceNumber-= 100}`);
}
// 18 limbo registation
else if (ageRuner === 18 ){
console.log(`Please aproach the desck for instructions, thank you!}`);
}