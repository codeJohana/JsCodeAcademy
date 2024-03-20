//line of value of kelvin
const kelvin = (293);
console.log(kelvin)
// code that trasform kelvin to celsius 
const celsius =  kelvin - 273;
console.log(celsius)
//calculating farenheit
let fahrenheit = celsius * (9 / 5) + 32;
//rounding down
fahrenheit = Math.floor(fahrenheit)
//string interpolation to log the temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
//newton
let newton = celsius * (33/100);
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees Newton`);