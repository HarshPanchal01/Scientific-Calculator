const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('[data-button]');

buttons.forEach(button => {
    button.addEventListener('click', (x) => {
        buttonText = x.target.innerText;
        if (buttonText === '×') {
            buttonText = '*';
        }
        if (buttonText === '÷') {
            buttonText = '/';
        }
        screen.value += buttonText;
    });
});

screen.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        screen.value = eval(screen.value);
    }
});

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = Math.PI;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}


