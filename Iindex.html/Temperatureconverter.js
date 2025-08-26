function convertCelsius(celsius) {
    const fahrenheit = ( celsius * 9/5) + 32;
    const kelvin =  celsius + 273.15;
    return { fahrenheit: fahrenheit, kelvin: kelvin};
}
function convertFahrenheit(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    const kelvin = ( fahrenheit -32) *5/9 + 273.15;
    return { celsius: celsius, kelvin: kelvin};
}
function convertKelvin(kelvin) {
    const celsius = kelvin - 273.15;
    const fahrenheit = ( kelvin -273.15) * 9/5 + 32;
    return { celsius: celsius, fahrenheit: fahrenheit};
}


