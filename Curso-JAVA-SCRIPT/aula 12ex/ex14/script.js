function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if(hora >= 0 && hora < 12){
        img.src = 'manhã.png'
    }else if(hora >=12 && hora <= 18){
        img.src = 'tarde.png'
    }else{
        img.src = 'noite.png'
    }
}