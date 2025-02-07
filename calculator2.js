document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");

    
    function displayNumber(value) {
        display.value += value;
    }


    function deleteDisplay() {
        display.value = "";
    }

    function makeNegative() {
        if (display.value) {
            const lastChar = display.value[display.value.length - 1];
            if (!isNaN(lastChar)) {
                const numbers = display.value.split(/([+\-*/])/);
                const lastNumber = numbers.pop();
                const newNumber = lastNumber.startsWith('-') ? lastNumber.slice(1) : '-' + lastNumber;
                display.value = numbers.join('');
                if (display.value[display.value.length - 1] == '+') {
                    display.value = display.value.slice(0, display.value.length - 1) + '-' + newNumber.slice(1);
                } else if (display.value[display.value.length - 1] != '-') {
                    display.value = display.value + '(' + newNumber + ')';
                } else if (display.value[display.value.length - 1] == '-') {
                    display.value = display.value.slice(0, display.value.length - 1) + '+' + newNumber.slice(1);
                }              
            }
        }
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = "Error";
        }
    }

    function percentage() {
        if (display.value) {
            const lastChar = display.value[display.value.length - 1];
            if (!isNaN(lastChar)) {
                const numbers = display.value.split(/([+\-*/])/);
                const lastNumber = numbers.pop();
                const newNumber = lastNumber / 100;
                display.value = numbers.join('');
                display.value = display.value + newNumber;
            }
        }
    }

    function backspace() {
        display.value = display.value.slice(0, -1);
    }

    window.displayNumber = displayNumber;
    window.deleteDisplay = deleteDisplay;
    window.makeNegative = makeNegative;
    window.calculate = calculate;
    window.backspace = backspace;
    window.percentage = percentage;
});
