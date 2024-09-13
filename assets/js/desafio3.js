document.querySelector("#verificar").setAttribute("onclick", `
    var digit1 = document.getElementById('digit1').value;
    var digit2 = document.getElementById('digit2').value;
    var digit3 = document.getElementById('digit3').value;
    var password = digit1 + digit2 + digit3;
    var resultado = document.getElementById('resultado');

    if (password === '911') {
        resultado.innerHTML = 'Password 1 correcto ✔️';
    } else if (password === '714') {
        resultado.innerHTML = 'Password 2 correcto ✔️';
    } else {
        resultado.innerHTML = 'Password incorrecto 🚫';
    }
`);
