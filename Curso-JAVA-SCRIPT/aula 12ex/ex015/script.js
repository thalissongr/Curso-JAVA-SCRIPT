    function verificar(){
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res')
        if(fano.value.length == 0 || fano.value > ano){
            window.alert('[ERRO]Verifique os Dados novamente!!!')
        }else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero =''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if(fsex[0].checked){
                gênero ='homem'
                    if(idade>= 0 && idade<10){
                        //criança
                        img.setAttribute('src','criançahomem.png' )
                    }else if(idade < 21){
                        //jovem
                        img.setAttribute('src', 'homenjovem.png')
                    }else if(idade < 50){
                        //adulto
                        img.setAttribute('src', 'homem.png')
                    }else{
                        //idoso
                        img.setAttribute('src', 'homemvelho.png')
                    }
            }else if (fsex[1].checked){
                gênero ='Mulher'
                            if(idade>= 0 && idade<10){
                                //criança
                                img.setAttribute('src', 'criançamulher.png')
                            }else if(idade < 21){
                                //jovem
                                img.setAttribute('src', 'mulherjovem.png')
                            }else if(idade < 50){
                                //adulto
                                img.setAttribute('src', 'mulher.png')
                            }else{
                                //idoso
                                img.setAttribute('src', 'mulherevelha.png')
                            }
            }
        }
        res.innerHTML= `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }