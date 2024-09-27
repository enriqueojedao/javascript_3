let colorDiv1 = 'white';
let colorDiv2 = 'white';

const div1 = document.getElementById('key');
const div2 = document.getElementById('key2');

function cambiarColorDiv1(color) {
    div1.style.backgroundColor = color;
}

function cambiarColorDiv2(color) {
    div2.style.backgroundColor = color;
    div2.style.display = 'block';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorDiv1 = 'pink';
        cambiarColorDiv1(colorDiv1);
    } else if (event.key === 's') {
        colorDiv1 = 'darkorange';
        cambiarColorDiv1(colorDiv1);
    } else if (event.key === 'd') {
        colorDiv1 = 'lightblue';
        cambiarColorDiv1(colorDiv1);
    }
    else if (event.key === 'q') {
        colorDiv2 = 'purple';
        cambiarColorDiv2(colorDiv2);
    } else if (event.key === 'w') {
        colorDiv2 = 'gray';
        cambiarColorDiv2(colorDiv2);
    } else if (event.key === 'e') {
        colorDiv2 = 'saddlebrown';
        cambiarColorDiv2(colorDiv2);
    }
});

