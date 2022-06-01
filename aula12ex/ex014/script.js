function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22, para testes
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'manhar.png'
        document.body.style.background = '#AE87AA'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarder.png'
        document.body.style.background = '#DC630C'
    } else {
        img.src = 'noiter.png'
        document.body.style.background = '#B11D2D'
    }
}

