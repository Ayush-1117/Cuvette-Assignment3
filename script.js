
    function addToDisplay(value) {
        document.getElementById('display').value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function deleteLastCharacter() {
        var currentValue = document.getElementById('display').value;
        document.getElementById('display').value = currentValue.slice(0, -1);
    }
    function calculate() {
        try {
            var expression = document.getElementById('display').value;
            var result = eval(expression);
            if (isNaN(result) || !isFinite(result)) {
                document.getElementById('display').value = 'Error';
            } else {
                document.getElementById('display').value = parseFloat(result.toFixed(3));
            }
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
