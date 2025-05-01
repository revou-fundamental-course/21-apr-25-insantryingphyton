console.log('JavaScript working?');

console.log(document.getElementById('header-id').innerText);

function validateForm() {
    const inputCelcius = document.getElementById('konversi-input');
    console.log(inputCelcius.value);

    if (inputCelcius.value === '') {
        alert('Input tidak boleh kosong');
    }

    else {
        /// Convert to fahrenheit
    }
}