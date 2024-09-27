function cambiarColor(event) {
    event.target.style.backgroundColor = 'black';
}

document.getElementById('div1').addEventListener('click', cambiarColor);
document.getElementById('div2').addEventListener('click', cambiarColor);
document.getElementById('div3').addEventListener('click', cambiarColor);
document.getElementById('div4').addEventListener('click', cambiarColor);
