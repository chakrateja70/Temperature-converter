function convert() {
    let inputTempEl = document.getElementById("input-temp").value;
    let conversionEl = document.getElementById("conversion").value;
    let resultEl = document.getElementById("result");

    let result;
    let temperature = parseFloat(inputTempEl);

    if (inputTempEl === "") {
        alert("Enter Temperature");
        return;
    }

    if (conversionEl === 'celsiusToFahrenheit') {
        result = (temperature * 9 / 5) + 32;
        resultEl.innerHTML = `${temperature}°C is equal to ${result}°F`;
    } else if (conversionEl === 'fahrenheitToCelsius') {
        result = (temperature - 32) * 5 / 9;
        resultEl.innerHTML = `${temperature}°F is equal to ${result}°C`;
    }
}