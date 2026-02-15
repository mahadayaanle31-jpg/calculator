let result = document.getElementById('result');

// In lambarka lagu daro shaashadda
function appendValue(value) {
    result.value += value;
}

// In la tirtiro wax kasta (AC)
function clearScreen() {
    result.value = '';
}

// In la tirtiro xarafkii u dambeeyey (DEL)
function deleteLast() {
    result.value = result.value.slice(0, -1);
}

// In la xisaabiyo natiijada (=)
function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Khalad!";
    }
}