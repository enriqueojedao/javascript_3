document.querySelector("#calcular").setAttribute("onclick", `
    var sticker1 = parseInt(document.getElementById('sticker1').value);
    var sticker2 = parseInt(document.getElementById('sticker2').value);
    var sticker3 = parseInt(document.getElementById('sticker3').value);

    sticker1 = isNaN(sticker1) || sticker1 < 0 ? 0 : sticker1;
    sticker2 = isNaN(sticker2) || sticker2 < 0 ? 0 : sticker2;
    sticker3 = isNaN(sticker3) || sticker3 < 0 ? 0 : sticker3;

    var total = sticker1 + sticker2 + sticker3;
    var resultado = document.getElementById('resultado');

    if (total <= 10) {
        resultado.innerHTML = 'Tienes ' + total + ' stickers 👍.';
    } else {
        resultado.innerHTML = 'Llevas demasiados stickers 😩.';
    }
`);
