let colorActual = 'white'; // Variable global.

const div1 = document.getElementById('key');
const div2 = document.getElementById('key2');

div1.style.backgroundColor = colorActual;

function cambiarColorDiv1(color) {
    div1.style.backgroundColor = color;
}

function cambiarColorDiv2(color) {
    div2.style.backgroundColor = color;
    div2.style.display = 'block';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorActual = 'pink';
        cambiarColorDiv1(colorActual);
    } else if (event.key === 's') {
        colorActual = 'darkorange';
        cambiarColorDiv1(colorActual);
    } else if (event.key === 'd') {
        colorActual = 'lightblue';
        cambiarColorDiv1(colorActual);
    } else if (event.key === 'q') {
        cambiarColorDiv2('purple');
    } else if (event.key === 'w') {
        cambiarColorDiv2('gray');
    } else if (event.key === 'e') {
        cambiarColorDiv2('saddlebrown');
    }
});

