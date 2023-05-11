const convertBtn = document.getElementById("convert-btn");
const tempInput = document.getElementById("temp-input");
const tempType = document.getElementById("temp-type");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  if (tempInput.value === "" || isNaN(tempInput.value)) {
    result.textContent = "Please enter a valid temperature";
    return;
  }

  const temp = parseFloat(tempInput.value);
  const selectedTempType = tempType.value;

  switch (selectedTempType) {
    case "fahrenheit":
      result.textContent = `${temp.toFixed(2)}°F = ${((temp - 32) * (5 / 9)).toFixed(2)}°C`;
      break;
    case "celsius":
      result.textContent = `${temp.toFixed(2)}°C = ${(temp * (9 / 5) + 32).toFixed(2)}°F`;
      break;
    case "kelvin":
      result.textContent = `${temp.toFixed(2)}K = ${(temp - 273.15).toFixed(2)}°C = ${((temp * (9 / 5)) - 459.67).toFixed(2)}°F`;
      break;
  }
});