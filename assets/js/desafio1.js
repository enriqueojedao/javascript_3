document.querySelector("#imagen").setAttribute("onclick", `
    var bordeimagen = document.getElementById('imagen');
    if (bordeimagen.classList.contains('borde-rojo')) {
        bordeimagen.classList.remove('borde-rojo');
    } else {
        bordeimagen.classList.add('borde-rojo');
    }
`);

