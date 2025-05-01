/// Check
console.log('JavaScript working?')    

console.log(document.getElementById('header-id').innerText);

/// Function (form)
function validateForm() {
    const inputCelcius = document.getElementById('konversi-input');
    const inputFahrenheit = document.getElementById('section-item');
    const inputCalculation = document.getElementById('calculate-detail');

    console.log(inputCelcius.value);
    console.log(inputFahrenheit.value);
    console.log(inputCalculation.value);

    /// If Empty
    if (inputCelcius.value === '') {
        alert('Input tidak boleh kosong');
    }

    /// Convert to fahrenheit and vice versa
    if (inputCelcius.value !== '') {
            const celcius = parseFloat(inputCelcius.value);
            const fahrenheit = (celcius * 9) / 5 + 32;
            inputFahrenheit.value = fahrenheit.toFixed(2);
            inputCalculation.value = `${celcius}°C * (9/5) + 32 = ${fahrenheit.toFixed(
                2
            )}°F`;
    
    }

    if (inputFahrenheit.value !== '') {
        const fahrenheit = parseFloat(inputFahrenheit.value);
            const celcius = ((fahrenheit - 32) * 5) / 9;
            inputCelcius.value = celcius.toFixed(2);
            inputCalculation.value = `(${fahrenheit}°F - 32) * 5/9 = ${celcius.toFixed(
                2
            )}°C`;
    }
}

/// Function (clear)
function clear() {
    document.getElementById('konversi-input').value = '';
    document.getElementById('section-item').value = '';
    document.getElementById('calculate-detail').value = '';
}

/// Function (reversing)
function reversing() {
    convert(true);
}

/// Function (working buttons)
function working_buttons() {
    const konversi = document.getElementsByClassName('button-1');
    const reset = document.getElementsByClassName('button-2');
    const reverse = document.getElementsByClassName('button-3');

    console.log(konversi)
    console.log(reset)
    console.log(reverse)

    addEventListener('click', konversi);
    addEventListener('click', reset);
    addEventListener('click', reverse);
}