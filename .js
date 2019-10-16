//Todays forecast in Kelvin
const kelvin = 0;

//Converts Kelvin to Celsius
const celsius = kelvin - 273;

//Equation to calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Rounding down Fahrenheit
fahrenheit = Math.floor(fahrenheit);

//Print temp in Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Convert and print in Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`);
