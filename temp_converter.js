// Set this variable to a starting Fahrenheit temperature...
var whichTemp = "f";
var fahrenheit = 100;
var celsius = 0;
var kelvin = 273.15;
var fahrenheitTemps = [];
var celsiusTemps = [];
var kelvinTemps = [];
if(whichTemp = "f"){
// Enter conversion code below...
fahrenheitTemps.push(fahrenheit);
fahrenheitTemps.push((fahrenheit - 32) / 1.8);
fahrenheitTemps.push((fahrenheit + 459.67) / 1.8);
for(var x = 0; x < fahrenheitTemps.length; x++) {
  console.log(fahrenheitTemps[x]);
}
// Repeat the above for Celsius and Kelvin...
}
else if(whichTemp = "c") {

celsiusTemps.push(celsius);
celsiusTemps.push((celsius * 1.8 + 32))
celsiusTemps.push(celsius + 273.15);

console.log(celsiusTemps);
}
else {
kelvinTemps.push(kelvin);
kelvinTemps.push(kelvin * 1.8 - 459.67);
kelvinTemps.push(kelvin - 273.15);
console.log(kelvinTemps);
}
