function Temp() {
    const cel = document.getElementById("celsius");
    const fahr = document.getElementById("fahrenheit");
    const kel = document.getElementById("kelvin");

    const celsius = parseFloat(cel.value);

    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    fahr.value = fahrenheit.toFixed(2);
    kel.value = kelvin.toFixed(2);
}