let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(display.value);
    if (result === Infinity || result === -Infinity) {
      display.value = 'Error';
    } else {
      display.value = result;
    }
  } catch (e) {
    display.value = 'Error';
  }
}

// Optional: Support keyboard input
document.addEventListener('keydown', function(event) {
  const allowedKeys = '0123456789+-*/.=EnterBackspace';
  if (allowedKeys.includes(event.key)) {
    if (event.key === 'Enter') {
      calculateResult();
    } else if (event.key === 'Backspace') {
      deleteLast();
    } else if (event.key === '=') {
      calculateResult();
    } else {
      appendValue(event.key);
    }
  }
});
