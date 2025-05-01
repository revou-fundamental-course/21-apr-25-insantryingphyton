/// Check
console.log('JavaScript working?')    

console.log(document.getElementById('header-id').innerText);

/// Function (form)
function validateForm() {
    const inputCelcius = document.getElementById('konversi-input');
    const konversi = document.getElementsByClassName('button-1');
    const reset = document.getElementsByClassName('button-2');
    const reverse = document.getElementsByClassName('button-3');

    console.log(konversi)
    console.log(reset)
    console.log(reverse)
    console.log(inputCelcius.value);

    /// If Empty
    if (inputCelcius.value === '') {
        alert('Input tidak boleh kosong');
    }

    /// Convert to fahrenheit
    else {

    }
    }

/// Function (reset)
function reset() {
    document.getElementById('konversi-input').value = '';
    document.getElementById('section-item').value = '';
    document.getElementById('calculate-detail').value = '';
}

    /// Event Listener