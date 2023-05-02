const celsiusInput = document.getElementById('celsius-input');
const fahrenheitInput = document.getElementById('fahrenheit-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function showResult(temp) {
  result.innerHTML = `Result: ${temp} °C = ${convertCelsiusToFahrenheit(temp)} °F`;
}

convertBtn.addEventListener('click', () => {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = parseFloat(fahrenheitInput.value);
  
  if (!isNaN(celsius)) {
    showResult(celsius);
  } else if (!isNaN(fahrenheit)) {
    result.innerHTML = `Result: ${fahrenheit} °F = ${convertFahrenheitToCelsius(fahrenheit)} °C`;
  } else {
    result.innerHTML = "Please enter a valid temperature.";
  }
});